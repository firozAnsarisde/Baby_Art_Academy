import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.academyName}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl text-charcoal">Privacy Policy</h1>
      <p className="mt-3 font-body text-[13.5px] text-charcoal-light/70">Last updated: January 2026</p>

      <div className="mt-10 flex flex-col gap-8 font-body text-[15px] leading-relaxed text-charcoal-light">
        <p>
          {siteConfig.academyName} ("we", "us", "our") respects your privacy.
          This policy explains what information we collect, how we use it,
          and the choices you have. This is placeholder content — replace it
          with policy language reviewed for your specific business and
          location.
        </p>

        <div>
          <h2 className="font-display text-xl text-charcoal">Information We Collect</h2>
          <p className="mt-3">
            When you enroll in the course, contact us, or subscribe to
            updates, we may collect your name, email address, phone number,
            and any details you choose to share in a message or form.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-charcoal">How We Use Your Information</h2>
          <ul className="mt-3 list-disc pl-5">
            <li>To process enrollments and provide course access</li>
            <li>To respond to inquiries sent via our contact form or WhatsApp</li>
            <li>To send course updates and occasional relevant offers</li>
            <li>To improve our website and course content</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl text-charcoal">Sharing Your Information</h2>
          <p className="mt-3">
            We do not sell your personal information. We may share data with
            trusted service providers (such as payment processors or email
            tools) strictly to operate the course and this website.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-charcoal">Cookies</h2>
          <p className="mt-3">
            This site may use cookies or similar technologies to remember
            preferences and understand how visitors use the site.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-charcoal">Your Choices</h2>
          <p className="mt-3">
            You can request access to, correction of, or deletion of your
            personal information at any time by contacting us at{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-mehndi-700 underline">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-charcoal">Contact Us</h2>
          <p className="mt-3">
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-mehndi-700 underline">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
