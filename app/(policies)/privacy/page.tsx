import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for ST portfolio.",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Last updated: December 5, 2025
            </p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                1. Introduction
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                This Privacy Policy explains how Sophia (referred to herein as
                "I," "Me," or "My") collects, uses, and protects any information
                you provide when you use and interact with this professional
                portfolio ("Portfolio").
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                2. Information I Collect
              </h2>
              <p className="leading-relaxed">
                As a professional graphical designer, My primary goal is connection and
                communication. I collect two main types of information:
              </p>
              <ul className="space-y-2 pl-6">
                <li className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    A. Information You Voluntarily Provide (Contact Data)
                  </h3>
                  <p>
                    This is information you willingly share when you reach out to
                    me. This may include:
                  </p>
                  <ul className="list-inside list-[circle] pl-6">
                    <li>
                      <strong>Name:</strong> To address you professionally.
                    </li>
                    <li>
                      <strong>Email Address:</strong> To respond to your inquiry
                      and discuss potential collaborations.
                    </li>
                    <li>
                      <strong>Project Details:</strong> Information about your
                      brand, story, or project needs shared via an inquiry form
                      or direct email.
                    </li>
                  </ul>
                </li>
                <li className="space-y-2">
                  <h3 className=" text-xl font-semibold">
                    B. Non-Personal Data (Usage Data)
                  </h3>
                  <p>
                    This information is collected automatically as you browse the
                    Portfolio through tools like Google Analytics or the website
                    hosting service. This data helps Me understand how the site
                    is used, but it does not personally identify you. This may
                    include:
                  </p>
                  <ul className="list-inside list-[circle] pl-6">
                    <li>IP Address (anonymized)</li>
                    <li>Browser Type and Operating System</li>
                    <li>Referring URLs</li>
                    <li>Pages Viewed and Time Spent on the Site</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                3. How I Use Your Information
              </h2>
              <p className="leading-relaxed">
                I use the information collected for the following purposes:
              </p>
              <ul className="list-inside list-[circle] pl-6">
                <li>
                  <strong>To Respond to Inquiries:</strong> The primary use of
                  Contact Data is to communicate with you regarding your request
                  for connection or potential design partnership.
                </li>
                <li>
                  <strong>To Improve My Portfolio:</strong> Usage Data is
                  analyzed to understand viewer behavior, diagnose technical
                  issues, and improve the content, accessibility, and user
                  experience of the Portfolio.
                </li>
                <li>
                  <strong>For Professional Records:</strong> To maintain records
                  of professional communications and project history.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                4. Sharing and Disclosure of Information
              </h2>
              <p className="leading-relaxed">
                **I do not sell, trade, or rent your personal identification
                information to others.**
              </p>
              <p className="leading-relaxed">
                Your information is only shared in the following limited
                circumstances:
              </p>
              <ul className="list-inside list-[circle] pl-6">
                <li>
                  <strong>Service Providers:</strong> I may use third-party
                  services (e.g., website hosting, email service providers,
                  analytics platforms) to operate My business. These third
                  parties are contractually obligated to keep your information
                  confidential and use it only for the purposes for which I
                  disclose it to them.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> I may disclose information
                  when legally required to do so, to cooperate with law
                  enforcement, or to enforce My Terms of Service or protect My
                  rights.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold ">5. Cookies</h2>
              <p className="leading-relaxed">
                My Portfolio may use "cookies" to enhance the User experience.
                Cookies are small files placed on your hard drive for
                record-keeping purposes and sometimes to track non-personal
                information about your usage.
              </p>
              <p className="leading-relaxed">
                You may choose to set your web browser to refuse cookies or to
                alert you when cookies are being sent. If you do this, note that
                some parts of the Portfolio may not function properly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold ">6. Security</h2>
              <p className="leading-relaxed">
                I adopt appropriate data collection, storage, and processing
                practices and security measures to protect against unauthorized
                access, alteration, disclosure, or destruction of your personal
                data stored on My Portfolio or associated services. However, no
                method of transmission over the internet or method of electronic
                storage is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold ">
                7. Links to Other Websites
              </h2>
              <p className="leading-relaxed">
                My Portfolio may contain links to client websites or other
                external sites. I am not responsible for the privacy practices or
                the content of these third-party websites. I encourage you to
                read the privacy statements of every website that collects
                personally identifiable information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                8. Your Acceptance of These Terms
              </h2>
              <p className="leading-relaxed">
                By using this Portfolio, you signify your acceptance of this
                Policy. If you do not agree to this Policy, please do not use My
                Portfolio. Your continued use of the Portfolio following the
                posting of changes to this Policy will be deemed your acceptance
                of those changes.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                9. Contacting Me
              </h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, the
                practices of this site, or your dealings with this site, please
                contact me through the contact information provided on My
                Portfolio.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}