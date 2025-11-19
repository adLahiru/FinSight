"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  Users,
  Globe,
  BarChart3,
  Shield,
  Cloud,
  Smartphone,
  TrendingUp,
  Split,
  FolderKanban,
  Clock,
  ArrowRight,
  Check,
  Mail,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import LeadButton from "@/components/buttons/lead-button";
import { Reveal } from "@/components/ui/reveal";
import { StaggerChildren, StaggerItem } from "@/components/ui/stagger-children";

export default function ExpenseManagementLanding() {
  const [email, setEmail] = useState("");

  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-Currency Support",
      description: "Track expenses in multiple currencies with real-time exchange rates and automatic conversions.",
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Personal Finance Management",
      description: "Take control of your personal finances with intuitive budgeting and expense tracking tools.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Group Expense Management",
      description: "Manage shared expenses with friends, family, or roommates. See who owes who and settle up easily.",
    },
    {
      icon: <Split className="h-6 w-6" />,
      title: "Smart Expense Splitting",
      description: "Split bills fairly among group members with flexible splitting options and transparent tracking.",
    },
    {
      icon: <FolderKanban className="h-6 w-6" />,
      title: "Project-Based Tracking",
      description: "Organize expenses by projects for better visibility and control over specific budgets.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Spending Insights",
      description: "Visualize your spending patterns with interactive dashboards and detailed analytics.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Cash Flow Forecast",
      description: "Predict future cash flow based on your spending habits and upcoming expenses.",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Secure Cloud Sync",
      description: "Your data is securely synced across all devices with bank-level encryption.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Offline Mode",
      description: "View and track expenses even without internet connection. Syncs when you're back online.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile & Web Access",
      description: "Access your finances anywhere with native mobile apps and responsive web interface.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Bank-Level Security",
      description: "Your financial data is protected with industry-leading security standards and encryption.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Optimized performance ensures quick loading times and smooth user experience.",
    },
  ];

  const useCases = [
    {
      title: "Personal Finance",
      description: "Track your daily expenses, set budgets, and achieve your financial goals.",
      features: ["Budget planning", "Expense categorization", "Financial reports", "Savings goals"],
    },
    {
      title: "Group Expenses",
      description: "Perfect for roommates, trips, or shared living expenses.",
      features: ["Transparent tracking", "Automatic split calculation", "Settlement reminders", "Group insights"],
    },
    {
      title: "Business Projects",
      description: "Manage project budgets and track expenses for business ventures.",
      features: ["Project-wise tracking", "Team collaboration", "Budget forecasting", "Export reports"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center py-20 md:py-32 lg:py-40 relative overflow-hidden">
        {/* Background gradient effects */}
        <motion.div
          className="absolute top-0 left-0 h-96 w-96 rounded-full bg-primary/10 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
                <Zap className="h-4 w-4" />
                <span className="font-medium">Coming Soon</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
                Master Your Money with{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Smart Expense Management
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Track personal expenses, manage group bills, and gain insights into your spending. Available on mobile
                and web with secure cloud sync and offline mode.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="w-full max-w-md flex flex-col sm:flex-row gap-3 mt-8">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <LeadButton
                  email={email}
                  successMessage="Thanks for your interest! We'll notify you when we launch."
                  className="whitespace-nowrap"
                >
                  Get Early Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </LeadButton>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mt-6">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Free to join</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Launch exclusive perks</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="w-full flex flex-col items-center py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <Reveal>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Powerful Features
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                Everything You Need to Manage Expenses
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground md:text-lg max-w-2xl">
                From personal budgeting to group expense splitting, our comprehensive suite of features has you covered.
              </p>
            </Reveal>
          </div>

          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="flex flex-col rounded-xl border bg-background p-6 shadow-sm hover:shadow-md transition-all h-full"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-full flex flex-col items-center py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <Reveal>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Use Cases</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">Built for Every Scenario</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground md:text-lg max-w-2xl">
                Whether you're managing personal finances, splitting group expenses, or tracking business projects,
                we've got you covered.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <motion.div
                  className="flex flex-col rounded-xl border bg-background p-8 shadow-sm h-full"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6">{useCase.description}</p>
                  <ul className="space-y-3 flex-1">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Group Expense Transparency Section */}
      <section className="w-full flex flex-col items-center py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Group Management
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  Crystal Clear Group Expense Tracking
                </h2>
                <p className="text-muted-foreground text-lg">
                  No more confusion about who owes what. Our transparent group expense management shows exactly who owes
                  who and how much, making settlements simple and fair.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block">Real-time Balance Updates</strong>
                      <span className="text-sm text-muted-foreground">
                        See who owes who instantly as expenses are added
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block">Flexible Split Options</strong>
                      <span className="text-sm text-muted-foreground">
                        Split equally, by percentage, or custom amounts
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block">Simplified Settlements</strong>
                      <span className="text-sm text-muted-foreground">
                        Optimize payments to minimize the number of transactions
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block">Complete Transparency</strong>
                      <span className="text-sm text-muted-foreground">
                        Everyone in the group sees all expenses and balances
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <motion.div
                className="relative rounded-xl border bg-background p-8 shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="space-y-4">
                  <div className="text-sm font-medium text-muted-foreground">Group Balance Overview</div>
                  <div className="space-y-3">
                    {[
                      { name: "John", owes: "+$45.00", color: "text-green-600" },
                      { name: "Sarah", owes: "-$20.00", color: "text-red-600" },
                      { name: "Mike", owes: "-$25.00", color: "text-red-600" },
                    ].map((member, idx) => (
                      <motion.div
                        key={idx}
                        className="flex justify-between items-center p-3 rounded-lg bg-muted/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                            {member.name[0]}
                          </div>
                          <span className="font-medium">{member.name}</span>
                        </div>
                        <span className={`font-bold ${member.color}`}>{member.owes}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-sm text-muted-foreground mb-2">Suggested Settlement</div>
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="text-sm">
                        <strong>Sarah</strong> pays <strong>John</strong>{" "}
                        <span className="font-bold text-primary">$20.00</span>
                      </div>
                      <div className="text-sm mt-2">
                        <strong>Mike</strong> pays <strong>John</strong>{" "}
                        <span className="font-bold text-primary">$25.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="w-full flex flex-col items-center py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <Reveal>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Smart Analytics
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                Insights That Help You Save
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground md:text-lg max-w-2xl">
                Visualize your spending patterns, identify trends, and make informed financial decisions with our
                intelligent dashboard and forecasting tools.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                className="rounded-xl border bg-background p-6 shadow-sm"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Spending Patterns</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Interactive charts and graphs show where your money goes, helping you identify areas to optimize.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Category-wise breakdown
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Monthly comparison trends
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Budget vs actual analysis
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="rounded-xl border bg-background p-6 shadow-sm"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Cash Flow Forecast</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Predict your future financial position based on historical data and upcoming expenses.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    AI-powered predictions
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Recurring expense tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Budget alerts and warnings
                  </li>
                </ul>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Platform Availability Section */}
      <section className="w-full flex flex-col items-center py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <Reveal>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Multi-Platform</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">Access Anywhere, Anytime</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground md:text-lg max-w-2xl">
                Native mobile apps and responsive web interface ensure you can manage your expenses wherever you are,
                online or offline.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Reveal delay={0.1}>
              <motion.div
                className="flex flex-col items-center text-center p-8 rounded-xl border bg-background shadow-sm"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Mobile Apps</h3>
                <p className="text-muted-foreground mb-6">Native iOS and Android apps for the best mobile experience</p>
                <ul className="space-y-2 text-sm text-left w-full">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Quick expense entry
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Push notifications
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Offline mode support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Camera receipt scanning
                  </li>
                </ul>
              </motion.div>
            </Reveal>

            <Reveal delay={0.2}>
              <motion.div
                className="flex flex-col items-center text-center p-8 rounded-xl border bg-background shadow-sm"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Web Platform</h3>
                <p className="text-muted-foreground mb-6">Full-featured web app accessible from any browser</p>
                <ul className="space-y-2 text-sm text-left w-full">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Advanced reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Bulk operations
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Data export options
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Keyboard shortcuts
                  </li>
                </ul>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex flex-col items-center py-20 md:py-32 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="container px-4 md:px-6 relative z-10">
          <Reveal>
            <motion.div
              className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                Be Among the First to Experience Smart Expense Management
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                Join our early access list and get exclusive launch benefits, including premium features at no cost for
                the first 3 months.
              </p>

              <div className="w-full max-w-md flex flex-col sm:flex-row gap-3 mt-8">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-base"
                />
                <LeadButton
                  email={email}
                  successMessage="Welcome aboard! We'll keep you updated on our launch."
                  className="h-12 px-6 text-base whitespace-nowrap"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Notify Me
                </LeadButton>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mt-6">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Early bird pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>3 months premium free</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Priority support</span>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
