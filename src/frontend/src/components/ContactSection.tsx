import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitInquiry } from "@/hooks/useQueries";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const serviceOptions = [
  { value: "stock-trading", label: "Stock Trading" },
  { value: "sip", label: "SIP Investment" },
  { value: "insurance", label: "Insurance" },
  { value: "mutual-funds", label: "Mutual Funds" },
  { value: "fixed-deposits", label: "Fixed Deposits" },
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "27 Ambapeth, Amravati, Maharashtra",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98400 12345",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mgg@2110@gmail.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sat, 9:00 AM – 7:00 PM",
  },
];

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const {
    mutate: submitInquiry,
    isPending,
    isError,
    reset,
  } = useSubmitInquiry();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceChange = (value: string) => {
    setForm((prev) => ({ ...prev, serviceInterest: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    reset();
    submitInquiry(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        serviceInterest: form.serviceInterest,
        message: form.message,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm({
            name: "",
            email: "",
            phone: "",
            serviceInterest: "",
            message: "",
          });
        },
      },
    );
  };

  const handleNewInquiry = () => {
    setSubmitted(false);
    reset();
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold mb-3">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Start Your Investment Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Drop us an inquiry and our advisors will get back to you within 24
            hours with a personalized plan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div
              className="rounded-2xl p-7 text-white relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.42 0.18 40) 0%, oklch(0.52 0.2 48) 40%, oklch(0.46 0.19 35) 70%, oklch(0.38 0.17 42) 100%)",
              }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gold/8 -translate-y-10 translate-x-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-10 -translate-x-10" />
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold mb-2">
                  Contact Information
                </h3>
                <p className="text-white/70 text-sm mb-7">
                  Reach out to us — we're always happy to help.
                </p>
                <div className="space-y-5">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div key={info.label} className="flex gap-4">
                        <div className="w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-gold" />
                        </div>
                        <div>
                          <p className="text-white/50 text-xs font-medium mb-0.5">
                            {info.label}
                          </p>
                          <p className="text-white text-sm">{info.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 bg-card rounded-2xl p-7 shadow-card border border-border"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  data-ocid="contact.success_state"
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Inquiry Submitted!
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-sm">
                    Thank you for reaching out. Our advisor will contact you
                    within 24 hours to discuss your investment goals.
                  </p>
                  <Button
                    variant="outline"
                    data-ocid="contact.secondary_button"
                    onClick={handleNewInquiry}
                  >
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        data-ocid="contact.input"
                        placeholder="Rajesh Kumar"
                        value={form.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        data-ocid="contact.input"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        data-ocid="contact.input"
                        placeholder="+91 98XXX XXXXX"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="serviceInterest">
                        Service Interest *
                      </Label>
                      <Select
                        value={form.serviceInterest}
                        onValueChange={handleServiceChange}
                        required
                      >
                        <SelectTrigger
                          id="serviceInterest"
                          data-ocid="contact.select"
                          className="h-11"
                        >
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      data-ocid="contact.textarea"
                      placeholder="Tell us about your financial goals, investment horizon, or any specific questions..."
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  {/* Error state */}
                  {isError && (
                    <div
                      data-ocid="contact.error_state"
                      className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 rounded-lg px-4 py-3"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please try again or contact us
                      directly.
                    </div>
                  )}

                  <Button
                    type="submit"
                    data-ocid="contact.submit_button"
                    disabled={
                      isPending ||
                      !form.name ||
                      !form.email ||
                      !form.phone ||
                      !form.serviceInterest
                    }
                    className="w-full h-12 text-white font-semibold gap-2 text-base border-0"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.42 0.18 40) 0%, oklch(0.52 0.2 48) 100%)",
                    }}
                  >
                    {isPending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Inquiry
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to be contacted by our advisors. We
                    never share your data with third parties.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
