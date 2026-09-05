import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for ${siteConfig.academyName}.`,
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl text-charcoal">Terms &amp; Conditions</h1>
      <p className="mt-3 font-body text-[13.5px] text-charcoal-light/70">Last updated: January 2026</p>

      <div className="mt-10 flex flex-col gap-8 font-body text-[15px] leading-relaxed text-charcoal-light">
        <p>
          These Terms & Conditions govern your use of {siteConfig.academyName}{" "}
          and enrollment in the {siteConfig.course.name}. This is placeholder
          content — replace it with terms reviewed for your business and
          location before publishing.
        </p>

        <div>
          <h2 className="font-display text-xl text-charcoal">Course Enrollment</h2>
          <p className="mt-3">
            Enrollment grants you personal, non-transferable access to the
            course content described on the Course page. Access is for
            individual use only and may not be shared, resold, or
            redistributed.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-charcoal">Payments</h2>
          <p className="mt-3">
            All prices are listed in the currency shown at checkout. Payment
            is due in full at the time of enrollment unless otherwise stated.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-charcoal">Refunds</h2>
          <p className="mt-3">
            Refund eligibility, if any, will be stated at checkout. Contact
            us at{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-mehndi-700 underline">
              {siteConfig.contact.email}
            </a>{" "}
            with any refund requests.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-charcoal">Intellectual Property</h2>
          <p className="mt-3">
            All course videos, images, and materials are the property of{" "}
            {siteConfig.academyName} and may not be copied, distributed, or
            used commercially without written permission.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-charcoal">Certificate</h2>
          <p className="mt-3">
            A certificate of completion is issued once all course modules are
            finished, where applicable, and does not represent a
            government-recognized qualification unless stated otherwise.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-charcoal">Changes to These Terms</h2>
          <p className="mt-3">
            We may update these terms from time to time. Continued use of the
            course or website after changes means you accept the updated
            terms.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-charcoal">Contact Us</h2>
          <p className="mt-3">
            Questions about these terms can be sent to{" "}
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
