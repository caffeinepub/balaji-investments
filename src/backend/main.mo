import Map "mo:core/Map";
import List "mo:core/List";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Type
  public type UserProfile = {
    name : Text;
  };

  // Inquiry Types
  type Inquiry = {
    name : Text;
    email : Text;
    phone : Text;
    serviceInterest : Text;
    message : Text;
  };

  // Investment Service Types
  type InvestmentService = {
    title : Text;
    description : Text;
    iconName : Text;
    category : Text;
  };

  // Testimonial Types
  type Testimonial = {
    name : Text;
    message : Text;
    rating : Nat;
  };

  // Storage
  let userProfiles = Map.empty<Principal, UserProfile>();
  let inquiries = Map.empty<Principal, Inquiry>();
  let investmentServices = Map.empty<Text, InvestmentService>();
  let testimonials = Map.empty<Text, Testimonial>();
  let inquiryIds = Map.empty<Principal, Nat>();

  // User Profile Management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Inquiry Management
  public shared ({ caller }) func submitInquiry(name : Text, email : Text, phone : Text, serviceInterest : Text, message : Text) : async () {
    let inquiry : Inquiry = {
      name;
      email;
      phone;
      serviceInterest;
      message;
    };

    let id = inquiries.size();
    inquiries.add(caller, inquiry);
    inquiryIds.add(caller, id);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    inquiries.values().toArray();
  };

  // Investment Services Management
  public shared ({ caller }) func addInvestmentService(title : Text, description : Text, iconName : Text, category : Text) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    let service : InvestmentService = {
      title;
      description;
      iconName;
      category;
    };
    investmentServices.add(title, service);
  };

  public shared ({ caller }) func removeInvestmentService(title : Text) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    investmentServices.remove(title);
  };

  public query ({ caller }) func getAllInvestmentServices() : async [InvestmentService] {
    investmentServices.values().toArray();
  };

  // Testimonial Management
  public shared ({ caller }) func addTestimonial(name : Text, message : Text, rating : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can add testimonials");
    };
    let testimonial : Testimonial = {
      name;
      message;
      rating;
    };
    testimonials.add(name, testimonial);
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    testimonials.values().toArray();
  };

  public shared ({ caller }) func deleteTestimonial(name : Text) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    testimonials.remove(name);
  };
};
