"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, Crown, Layers, MessageSquare, Rocket, Sparkles, TrendingUp, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="medium"
      background="floatingGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="AIFlow"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Unlock AI Power for Your Business"
          description="Transform your workflows with cutting-edge AI technology. Automate tasks, gain insights, and scale faster than ever before."
          tag="AI-Powered Platform"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063505907-0q9xdp7f.jpg"
          imageAlt="AI technology visualization"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            { text: "Start Free Trial", href: "contact" },
            { text: "View Demo", href: "https://example.com/demo" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutMetric
          title="Built for Modern Teams"
          description={[
            "AIFlow is the industry-leading AI platform designed to help teams work smarter, not harder. We combine advanced machine learning with intuitive design to bring artificial intelligence to everyone."
          ]}
          metrics={[
            { label: "Enterprise Customers", value: "5,000+" },
            { label: "Time Saved Daily", value: "12M hrs" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFour
          title="Powerful Features"
          description="Everything you need to leverage AI for business growth"
          tag="Core Features"
          tagIcon={Zap}
          features={[
            {
              title: "Intelligent Automation",
              description: "Automate repetitive tasks and workflows with AI-powered workflows that learn from your data",
              icon: Zap
            },
            {
              title: "Predictive Analytics",
              description: "Get actionable insights and predictions powered by advanced machine learning models",
              icon: TrendingUp
            },
            {
              title: "Natural Language Processing",
              description: "Understand and process text data with state-of-the-art NLP capabilities",
              icon: MessageSquare
            },
            {
              title: "Custom Integration",
              description: "Connect with your favorite tools and platforms seamlessly through our API",
              icon: Layers
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Proven Results"
          description="See the impact AIFlow has on businesses worldwide"
          metrics={[
            {
              id: "1",
              icon: Zap,
              title: "Efficiency Gain",
              value: "87%"
            },
            {
              id: "2",
              icon: TrendingUp,
              title: "Revenue Growth",
              value: "45%"
            },
            {
              id: "3",
              icon: Users,
              title: "Active Users",
              value: "50K+"
            },
            {
              id: "4",
              icon: Award,
              title: "Customer Rating",
              value: "4.9/5"
            }
          ]}
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="four-items-2x2-equal-grid"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your needs. Upgrade or downgrade anytime."
          plans={[
            {
              id: "starter",
              badge: "Starter",
              badgeIcon: Rocket,
              price: "$99/mo",
              subtitle: "Perfect for getting started",
              buttons: [
                { text: "Start Free", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Up to 10,000 API calls/month",
                "Basic AI models",
                "Email support",
                "1 team member"
              ]
            },
            {
              id: "professional",
              badge: "Professional",
              badgeIcon: Sparkles,
              price: "$499/mo",
              subtitle: "For growing teams",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Chat Sales", href: "#" }
              ],
              features: [
                "Unlimited API calls",
                "Advanced AI models",
                "Priority support",
                "Up to 10 team members",
                "Custom integrations"
              ]
            },
            {
              id: "enterprise",
              badge: "Enterprise",
              badgeIcon: Crown,
              price: "Custom",
              subtitle: "For large organizations",
              buttons: [
                { text: "Contact Sales", href: "contact" },
                { text: "Schedule Demo", href: "#" }
              ],
              features: [
                "Unlimited everything",
                "Custom AI solutions",
                "Dedicated support",
                "Unlimited team members",
                "SLA guarantee",
                "On-premises option"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="opacity"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Loved by Industry Leaders"
          description="See what our customers say about AIFlow"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              handle: "@sarahtech",
              testimonial: "AIFlow has completely transformed how our team works. We've cut down manual processes by 70% and can focus on what really matters.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063508905-viyp2dc6.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              handle: "@mrodriguez",
              testimonial: "The analytics insights have been game-changing. We're making data-driven decisions faster than ever before.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063509844-5z1fo16e.jpg",
              imageAlt: "Michael Rodriguez"
            },
            {
              id: "3",
              name: "Emma Williams",
              handle: "@emmawill",
              testimonial: "Best investment we made this year. The ROI was immediate and the support team is fantastic.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063511077-jyhe3ok4.jpg",
              imageAlt: "Emma Williams"
            },
            {
              id: "4",
              name: "David Park",
              handle: "@davidpark",
              testimonial: "Integrating AIFlow into our pipeline was seamless. It just works, and keeps working better every day.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063511598-9nm53nrl.jpg",
              imageAlt: "David Park"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Trusted by Leading Companies"
          description="Join thousands of organizations using AIFlow to drive innovation"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063513279-j3bhiqyg.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063513751-nf1k9fk9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063514316-ta73o43x.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063514800-2f5tk2rm.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063515277-f4juhch2.jpg"
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Common Questions"
          description="Everything you need to know about AIFlow"
          faqs={[
            {
              id: "1",
              title: "How does AIFlow pricing work?",
              content: "We offer flexible pricing based on your usage. Start with our free tier or choose a plan that fits your needs. You can upgrade or downgrade anytime with no penalties."
            },
            {
              id: "2",
              title: "Is my data secure with AIFlow?",
              content: "Yes. We use enterprise-grade encryption and comply with GDPR, CCPA, and SOC 2 Type II standards. Your data is always protected and never used to train models without your permission."
            },
            {
              id: "3",
              title: "Can I integrate AIFlow with my existing tools?",
              content: "Absolutely. We have native integrations with 100+ popular tools and a powerful API for custom integrations. Our technical team can help with complex setups."
            },
            {
              id: "4",
              title: "What kind of support do you offer?",
              content: "We provide email support for all plans, priority support for Professional users, and dedicated support for Enterprise customers. We also have comprehensive documentation and community forums."
            },
            {
              id: "5",
              title: "How long does implementation take?",
              content: "Most teams are up and running within 24 hours. Simple integrations take minutes, while complex enterprise implementations are typically completed within 2-4 weeks with our help."
            },
            {
              id: "6",
              title: "Do you offer a free trial?",
              content: "Yes, we offer a 14-day free trial with full access to all Pro features. No credit card required to start."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get Started with AIFlow Today"
          description="Join thousands of teams already using AI to transform their business. Sign up for our free trial or schedule a demo."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your needs",
            rows: 4,
            required: false
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063512356-yqeknykk.jpg"
          imageAlt="Modern workspace"
          mediaPosition="right"
          buttonText="Start Free Trial"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Security", href: "#" },
                { label: "Roadmap", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 AIFlow. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}