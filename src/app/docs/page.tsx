import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | Monk Podcast Studio",
  description:
    "User guide and developer documentation for the Monk Podcast Studio website.",
};

const mont = { fontFamily: "'Montserrat', sans-serif" };

function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="shrink-0 w-8 h-8 rounded-full bg-[#0d141a] text-white flex items-center justify-center text-sm font-bold">
        {number}
      </div>
      <div className="space-y-2">
        <h4 className="text-lg font-bold text-[#0d141a]">{title}</h4>
        <div className="text-[#56585e] text-sm md:text-base leading-relaxed space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
}

function Shot({
  src,
  alt,
  caption,
  width = 1440,
  height = 2200,
}: {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="my-4">
      <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm max-h-[560px]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto max-h-[560px] object-cover object-top"
        />
      </div>
      <figcaption className="text-center text-xs text-[#727586] mt-2">
        {caption}
      </figcaption>
    </figure>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b border-gray-200 last:border-0">
      <td className="py-2.5 pr-4 font-semibold text-[#0d141a] whitespace-nowrap align-top">
        {label}
      </td>
      <td className="py-2.5 text-[#56585e]">{value}</td>
    </tr>
  );
}

export default function DocsPage() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen" style={mont}>
      {/* Header */}
      <section className="bg-[#0d141a] text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
          Documentation
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Everything about the Monk Podcast Studio website — a guide for
          everyday users, and a technical reference for developers.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <a
            href="#user-guide"
            className="bg-white text-[#0d141a] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
          >
            User Guide
          </a>
          <a
            href="#developer-guide"
            className="border border-gray-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            Developer Guide
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-20">
        {/* ══════════ USER GUIDE (Non-Technical) ══════════ */}
        <section id="user-guide" className="scroll-mt-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d141a] mb-2">
            User Guide
          </h2>
          <p className="text-[#727586] mb-10">
            For anyone managing enquiries — no technical knowledge needed.
          </p>

          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 space-y-10">
            {/* Website overview */}
            <div>
              <h3 className="text-xl font-bold text-[#0d141a] mb-4">
                1. Website Overview
              </h3>
              <p className="text-[#56585e] text-sm md:text-base leading-relaxed mb-4">
                The website has four main pages in the top menu:
              </p>
              <ul className="list-disc list-inside text-[#56585e] text-sm md:text-base space-y-1.5 mb-4">
                <li><strong>Home</strong> — hero intro, about, services, brand logos, social media videos, enquiry form, and client feedback.</li>
                <li><strong>Our Gallery</strong> — photos of our studio work.</li>
                <li><strong>Services</strong> — what we offer, FAQs, and an enquiry form.</li>
                <li><strong>Contact</strong> — contact form, studio address, opening hours, and a map.</li>
              </ul>
              <Shot
                src="/docs/home.png"
                alt="Homepage of Monk Podcast Studio"
                caption="Homepage — the Enquire Now button takes visitors to the Contact page."
              />
            </div>

            {/* Where leads enter details */}
            <div>
              <h3 className="text-xl font-bold text-[#0d141a] mb-4">
                2. Where Visitors Enter Their Details
              </h3>
              <p className="text-[#56585e] text-sm md:text-base leading-relaxed mb-6">
                A <strong>lead</strong> is anyone who fills in a form. The
                website collects leads in four places — all of them reach the
                same place automatically:
              </p>
              <div className="space-y-6">
                <Step number={1} title="Contact page form (/contact)">
                  <p>
                    Visitors fill in their name, contact number, email, the
                    service they need (dropdown), and a message, then press
                    <strong> Send Your Message</strong>.
                  </p>
                  <Shot
                    src="/docs/contact.png"
                    alt="Contact page enquiry form"
                    caption="Contact page — the main enquiry form."
                  />
                </Step>
                <Step number={2} title="Book a Session form (/booking)">
                  <p>
                    Visitors who want to book enter name, contact number,
                    email, service required, and notes, then press
                    <strong> Confirm Booking Session</strong>.
                  </p>
                  <Shot
                    src="/docs/booking.png"
                    alt="Book a session form"
                    caption="Book a Session page."
                  />
                </Step>
                <Step number={3} title="Services page enquiry form">
                  <p>
                    At the bottom of the Services page, visitors can send an
                    enquiry with name, contact number, email, and notes via
                    <strong> Submit the Enquiry</strong>.
                  </p>
                  <Shot
                    src="/docs/services.png"
                    alt="Services page enquiry form"
                    caption="Services page — enquiry form at the bottom."
                  />
                </Step>
                <Step number={4} title="Homepage enquiry box & WhatsApp">
                  <p>
                    The homepage <strong>Reserve Your Spot</strong> form takes
                    name, contact number, email, and notes. The green WhatsApp
                    button (bottom-right of every page) opens a chat to the
                    studio's number directly — no form needed.
                  </p>
                </Step>
              </div>
            </div>

            {/* How to check leads */}
            <div>
              <h3 className="text-xl font-bold text-[#0d141a] mb-4">
                3. How to Check the Leads
              </h3>
              <div className="space-y-6">
                <Step number={1} title="Open the admin page">
                  <p>
                    Go to <strong>your-website.com/admin</strong> in a browser.
                    You will see an <strong>Admin Login</strong> screen.
                  </p>
                  <Shot
                    src="/docs/admin.png"
                    alt="Admin login screen"
                    caption="Admin login — enter your admin password to continue."
                    height={1400}
                  />
                </Step>
                <Step number={2} title="Log in">
                  <p>
                    Enter the admin password provided to you and press
                    <strong> Enter</strong>. (For security, the password is not
                    written in this guide — ask the site owner if you don't
                    have it.)
                  </p>
                </Step>
                <Step number={3} title="View the leads">
                  <p>
                    Inside the dashboard you will find tables of everyone who
                    submitted a form — <strong>Contacts</strong> (name, contact
                    number, email, message, date) and
                    <strong> Newsletter / Enquiry signups</strong> (email,
                    status, date). Booking requests are stored separately in
                    the same system.
                  </p>
                </Step>
                <Step number={4} title="Download the leads (optional)">
                  <p>
                    Use the <strong>Export / Download</strong> button in the
                    admin panel to save the lead list as an Excel file for
                    follow-up calls or WhatsApp messages.
                  </p>
                </Step>
              </div>
              <div className="mt-8 bg-[#f4f4f6] border border-gray-200 rounded-xl p-5">
                <p className="text-sm text-[#56585e] leading-relaxed">
                  <strong className="text-[#0d141a]">Tip:</strong> Every enquiry
                  also reaches the studio's CRM automatically, so leads appear
                  in both places — the website admin panel and the CRM.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ DEVELOPER GUIDE (Technical) ══════════ */}
        <section id="developer-guide" className="scroll-mt-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d141a] mb-2">
            Developer Guide
          </h2>
          <p className="text-[#727586] mb-10">
            Technical reference for engineers maintaining this codebase.
          </p>

          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 space-y-10">
            {/* Tech stack */}
            <div>
              <h3 className="text-xl font-bold text-[#0d141a] mb-4">
                1. Technology Stack
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  <Row label="Frontend" value="Next.js 16.3.3 — React 19 + TypeScript (App Router, Turbopack), Tailwind CSS" />
                  <Row label="API" value="Next.js route handlers in src/app/api/ (TypeScript, Node.js runtime)" />
                  <Row label="Forms" value="React Hook Form + Zod validation" />
                  <Row label="Database" value="MongoDB Atlas via Mongoose" />
                  <Row label="CRM" value="PickMyAI universal inbound webhook" />
                  <Row label="Icons" value="lucide-react + custom SVGs" />
                  <Row label="Hosting" value="Vercel (auto-deploy on push to main)" />
                </tbody>
              </table>
              <p className="text-xs text-[#727586] mt-3">
                The frontend and API are the same Next.js app — pages under{" "}
                <code className="bg-gray-100 px-1 rounded">src/app/</code> render
                the UI, while <code className="bg-gray-100 px-1 rounded">route.ts</code>{" "}
                files under <code className="bg-gray-100 px-1 rounded">src/app/api/</code>{" "}
                serve as the backend endpoints.
              </p>
            </div>

            {/* Data flow */}
            <div>
              <h3 className="text-xl font-bold text-[#0d141a] mb-4">
                2. How Lead Data Flows
              </h3>
              <ol className="list-decimal list-inside text-[#56585e] text-sm md:text-base space-y-2">
                <li>
                  A public form (contact / booking / services enquiry /
                  homepage enquiry) validates input client-side with Zod +
                  React Hook Form.
                </li>
                <li>
                  It POSTs JSON to a Next.js route handler under{" "}
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">src/app/api/</code>.
                </li>
                <li>
                  The route re-validates server-side, writes the document to
                  MongoDB Atlas, then POSTs the lead — with field aliases like{" "}
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">firstName</code>,{" "}
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">phoneNumber</code>,{" "}
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">notes</code>,{" "}
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">leadSource</code>{" "}
                  — to the PickMyAI CRM webhook.
                </li>
                <li>
                  The CRM response is checked (HTTP status + failure payloads);
                  failures return a 502 so the UI never shows a false success.
                </li>
              </ol>
            </div>

            {/* Forms → API map */}
            <div>
              <h3 className="text-xl font-bold text-[#0d141a] mb-4">
                3. Forms → API → Storage Map
              </h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-left">
                    <th className="py-2 pr-4 font-semibold text-[#0d141a]">Form</th>
                    <th className="py-2 pr-4 font-semibold text-[#0d141a]">API Route</th>
                    <th className="py-2 font-semibold text-[#0d141a]">MongoDB Collection</th>
                  </tr>
                </thead>
                <tbody>
                  <Row label="/contact + /services form" value="POST /api/contact → contacts" />
                  <Row label="/booking form" value="POST /api/booking → bookings" />
                  <Row label="/ homepage enquiry" value="POST /api/newsletter → newsletterSubscribers" />
                </tbody>
              </table>
            </div>

            {/* Key files */}
            <div>
              <h3 className="text-xl font-bold text-[#0d141a] mb-4">
                4. Key Files
              </h3>
              <ul className="text-sm text-[#56585e] space-y-2">
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">src/app/api/contact/route.ts</code> — contact/services enquiry endpoint</li>
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">src/app/api/booking/route.ts</code> — booking endpoint</li>
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">src/app/api/newsletter/route.ts</code> — enquiry/subscriber endpoint</li>
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">src/models/</code> — Contact, Booking, NewsletterSubscriber, Portfolio, User schemas</li>
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">src/lib/mongodb.ts</code> — cached Mongoose connection</li>
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">src/app/admin/page.tsx</code> — leads dashboard + Excel export</li>
              </ul>
            </div>

            {/* Env vars */}
            <div>
              <h3 className="text-xl font-bold text-[#0d141a] mb-4">
                5. Environment Variables
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  <Row label="MONGODB_URI" value="MongoDB Atlas connection string" />
                  <Row label="PICKMYAI_WEBHOOK_URL" value="Server-side CRM webhook (never expose as NEXT_PUBLIC_)" />
                  <Row label="ADMIN_PASSWORD" value="Admin dashboard password — kept server-side only" />
                </tbody>
              </table>
              <p className="text-xs text-[#727586] mt-3">
                Set these in <code className="bg-gray-100 px-1 rounded">.env.local</code> for
                development and in Vercel → Project Settings → Environment
                Variables for production. Values are intentionally not listed
                here.
              </p>
            </div>

            {/* Admin auth */}
            <div>
              <h3 className="text-xl font-bold text-[#0d141a] mb-4">
                6. Admin Access
              </h3>
              <p className="text-[#56585e] text-sm md:text-base leading-relaxed">
                The <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">/admin</code> page
                authenticates with a password. Admin GET endpoints verify an{" "}
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">x-admin-key</code>{" "}
                request header. Login/registration routes (
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">/api/login</code>,{" "}
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">/api/register</code>)
                are separate from lead capture and never send credentials to
                the CRM.
              </p>
            </div>

            {/* Commands */}
            <div>
              <h3 className="text-xl font-bold text-[#0d141a] mb-4">
                7. Common Commands
              </h3>
              <div className="bg-[#0d141a] rounded-xl p-5 font-mono text-sm text-gray-200 space-y-2">
                <p><span className="text-gray-500"># develop</span><br />npm run dev</p>
                <p><span className="text-gray-500"># production build</span><br />npm run build</p>
                <p><span className="text-gray-500"># deploy (push → auto-deploy)</span><br />git push origin main</p>
              </div>
              <p className="text-xs text-[#727586] mt-3">
                Note: monkpodcaststudio.in is served by an nginx VPS — update
                that server separately (pull, build, restart) after pushing,
                or point DNS at Vercel.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
