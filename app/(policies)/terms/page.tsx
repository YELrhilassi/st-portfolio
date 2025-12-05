import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for ST portfolio",
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground">
              Last updated: December 5, 2025
            </p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                1. Introduction and Acceptance of Terms
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                Welcome to the professional portfolio of Sophia (referred to
                herein as "I," "Me," or "My"), a Visual Designer dedicated to
                impactful visual storytelling. By accessing, viewing, or
                interacting with this website and its content ("Portfolio"), you
                ("User," "Viewer," or "You") agree to be bound by these Terms of
                Service ("TOS"), as well as any other policies, guidelines, or
                rules posted on this Portfolio. If you do not agree with these
                TOS, please do not use this Portfolio.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                2. Intellectual Property and Copyright
              </h2>
              <p className="leading-relaxed">
                All content displayed on this Portfolio, including but not
                limited to, design work, illustrations, images, text, visual
                concepts, and the overall look and feel of the site, are the
                sole and exclusive intellectual property of Sophia. This work is
                protected by copyright laws.
              </p>
              <ul className="space-y-2 pl-6">
                <li className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    A. Ownership of Portfolio Content
                  </h3>
                  <p>
                    All content displayed on this Portfolio, including but not
                    limited to, design work, illustrations, images, text, visual
                    concepts, and the overall look and feel of the site, are the
                    sole and exclusive intellectual property of Sophia. This
                    work is protected by copyright laws.
                  </p>
                </li>
                <li className="space-y-2">
                  <h3 className=" text-xl font-semibold">B. Prohibited Use</h3>
                  <p>
                    The work displayed is for portfolio viewing purposes only.
                    You are not permitted to:
                  </p>
                  <ul className="list-inside list-[circle] pl-6">
                    <li>
                      <strong>Reproduce,</strong> duplicate, copy, sell, resell,
                      or exploit any portion of the Portfolio content for any
                      commercial purpose without express written permission.
                    </li>
                    <li>
                      <strong>Alter,</strong> modify, or create derivative works
                      based on My designs.
                    </li>
                    <li>
                      <strong> Share,</strong> transmit, or distribute My
                      designs on any platform (social media, print, web) without
                      proper, visible attribution and a link back to this
                      Portfolio.
                    </li>
                  </ul>
                </li>
                <li className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    C. Client Work Display
                  </h3>
                  <p>
                    Work displayed in the "Client Projects" or similar sections
                    represents projects created for specific clients. While I
                    retain the copyright to the visual design and creative
                    execution unless otherwise specified in the original client
                    contract, the respective clients often own the rights to the
                    brand, logo, and resulting assets. These projects are
                    displayed for professional demonstration purposes only.
                  </p>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                3. Communication and Storytelling Partnership
              </h2>
              <p className="leading-relaxed">
                My practice emphasizes teamwork and partnership to create
                powerful and cohesive stories.
              </p>
              <ul className="list-inside list-[circle] pl-6">
                <li>
                  <strong>Inquiry:</strong> Any contact made through this
                  Portfolio (e.g., via a contact form or email) constitutes an
                  inquiry regarding a potential partnership. It does not
                  automatically establish a designer-client relationship.
                </li>
                <li>
                  <strong>Quotation:</strong> Any rates, timelines, or project
                  estimates provided following an inquiry are non-binding until
                  a formal written agreement (a separate contract or statement
                  of work) is executed by both parties.
                </li>
                <li>
                  <strong>Confidentiality:</strong> I respect the confidential
                  nature of your projects. Any sensitive information shared
                  during the proposal or initial discussion phase will be
                  treated with professional discretion.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                4. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                Sophia shall not be liable for any direct, indirect, incidental,
                special, consequential, or exemplary damages, including but not
                limited to, damages for loss of profits, goodwill, use, data, or
                other intangible losses, resulting from:
              </p>
              <ul className="list-inside list-[circle] pl-6">
                <li>The content of the Portfolio.</li>
                <li>
                  Any reliance placed by you on any information obtained from
                  the Portfolio.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold ">5. Third-Party Links</h2>
              <p className="leading-relaxed">
                This Portfolio may contain links to third-party websites (e.g.,
                client sites, articles, social media). These links are provided
                for convenience and informational purposes. I do not endorse or
                control the content or policies of these external sites and am
                not responsible for their content or privacy practices.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold ">6. Governing Law</h2>
              <p className=" leading-relaxed">
                These Terms of Service and any separate agreements whereby I
                provide you services shall be governed by and construed in
                accordance with the laws of British Columbia (B.C.), Canada ,
                without regard to its conflict of law principles.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                7. Changes to Terms of Service
              </h2>
              <p className="leading-relaxed">
                I reserve the right to update, change, or replace any part of
                these Terms of Service by posting updates and changes to my
                Portfolio. It is your responsibility to check this page
                periodically for changes. Your continued use of or access to the
                Portfolio following the posting of any changes constitutes
                acceptance of those changes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
