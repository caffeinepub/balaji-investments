import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Lock, Mail, User } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

interface LoginPageProps {
  onBack: () => void;
}

export function LoginPage({ onBack }: LoginPageProps) {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirm) {
      toast.error("Passwords do not match");
      return;
    }
    toast.success(
      "Account created successfully! Welcome to Balaji Investments.",
    );
    setSignupData({ name: "", email: "", password: "", confirm: "" });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Logged in successfully! Welcome back.");
    setLoginData({ email: "", password: "" });
  };

  return (
    <div
      className="min-h-screen bg-navy-deep flex flex-col"
      data-ocid="auth.page"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <button
          type="button"
          data-ocid="auth.link"
          onClick={onBack}
          className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
        <img
          src="/assets/uploads/newlogobalaji-1.png"
          alt="Balaji Finmart LLP"
          className="h-10 w-auto bg-white rounded-md px-1 py-0.5"
        />
      </div>

      <div className="flex-1 flex flex-col items-center px-4 py-10 gap-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
            Join <span className="text-gold">Balaji Investments</span>
          </h1>
          <p className="text-white/60 text-sm">
            Your trusted partner for financial growth
          </p>
        </motion.div>

        {/* Sign Up Card — TOP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-md"
        >
          <Card
            className="bg-navy-card border-gold/20 shadow-2xl"
            data-ocid="auth.panel"
          >
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-gold" />
                </div>
                <CardTitle className="text-white text-xl font-display">
                  Create Account
                </CardTitle>
              </div>
              <p className="text-white/50 text-sm">
                Start your investment journey today
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="flex flex-col gap-4">
                <div className="space-y-1">
                  <Label
                    htmlFor="signup-name"
                    className="text-white/70 text-sm"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="signup-name"
                    data-ocid="auth.input"
                    type="text"
                    placeholder="e.g. Rajesh Kumar"
                    required
                    value={signupData.name}
                    onChange={(e) =>
                      setSignupData((p) => ({ ...p, name: e.target.value }))
                    }
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-gold focus:ring-gold/30"
                  />
                </div>
                <div className="space-y-1">
                  <Label
                    htmlFor="signup-email"
                    className="text-white/70 text-sm"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="signup-email"
                    data-ocid="auth.input"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={signupData.email}
                    onChange={(e) =>
                      setSignupData((p) => ({ ...p, email: e.target.value }))
                    }
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-gold focus:ring-gold/30"
                  />
                </div>
                <div className="space-y-1">
                  <Label
                    htmlFor="signup-password"
                    className="text-white/70 text-sm"
                  >
                    Password
                  </Label>
                  <Input
                    id="signup-password"
                    data-ocid="auth.input"
                    type="password"
                    placeholder="Min. 8 characters"
                    required
                    value={signupData.password}
                    onChange={(e) =>
                      setSignupData((p) => ({ ...p, password: e.target.value }))
                    }
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-gold focus:ring-gold/30"
                  />
                </div>
                <div className="space-y-1">
                  <Label
                    htmlFor="signup-confirm"
                    className="text-white/70 text-sm"
                  >
                    Confirm Password
                  </Label>
                  <Input
                    id="signup-confirm"
                    data-ocid="auth.input"
                    type="password"
                    placeholder="Re-enter password"
                    required
                    value={signupData.confirm}
                    onChange={(e) =>
                      setSignupData((p) => ({ ...p, confirm: e.target.value }))
                    }
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-gold focus:ring-gold/30"
                  />
                </div>
                <Button
                  type="submit"
                  data-ocid="auth.submit_button"
                  className="w-full bg-gold text-navy-deep font-semibold hover:bg-gold-light transition-all hover:scale-[1.02] mt-1"
                >
                  Create Account
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full max-w-md">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/40 text-xs uppercase tracking-widest">
            Already a member?
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Login Card — BELOW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <Card
            className="bg-navy-card border-white/10 shadow-2xl"
            data-ocid="auth.panel"
          >
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-white/60" />
                </div>
                <CardTitle className="text-white text-xl font-display">
                  Sign In
                </CardTitle>
              </div>
              <p className="text-white/50 text-sm">
                Welcome back — log in to your account
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <div className="space-y-1">
                  <Label
                    htmlFor="login-email"
                    className="text-white/70 text-sm"
                  >
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <Input
                      id="login-email"
                      data-ocid="auth.input"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={loginData.email}
                      onChange={(e) =>
                        setLoginData((p) => ({ ...p, email: e.target.value }))
                      }
                      className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-gold focus:ring-gold/30"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label
                    htmlFor="login-password"
                    className="text-white/70 text-sm"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <Input
                      id="login-password"
                      data-ocid="auth.input"
                      type="password"
                      placeholder="Your password"
                      required
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData((p) => ({
                          ...p,
                          password: e.target.value,
                        }))
                      }
                      className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-gold focus:ring-gold/30"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  data-ocid="auth.submit_button"
                  variant="outline"
                  className="w-full border-gold/40 text-gold hover:bg-gold hover:text-navy-deep font-semibold transition-all hover:scale-[1.02] mt-1"
                >
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <p className="text-white/30 text-xs pb-6">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            className="hover:text-gold transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </div>
  );
}
