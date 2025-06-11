// app/terms/page.tsx
import React from "react";

const TermsPage = () => {
  return (
    <main className="max-w-3xl py-28 mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4">Last updated: June 11, 2025</p>
      <p className="mb-4">Please read these terms and conditions carefully before using Our Service.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Interpretation and Definitions</h2>

      <h3 className="text-xl font-medium mt-6 mb-1">Interpretation</h3>
      <p className="mb-4">
        The words with capitalized initials have meanings defined below. These definitions apply whether singular or plural.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-1">Definitions</h3>
      <p className="mb-2">For the purposes of these Terms and Conditions:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Affiliate</strong>: An entity that controls, is controlled by, or is under common control with a party.</li>
        <li><strong>Country</strong>: Refers to Pakistan.</li>
        <li><strong>Company</strong>: Refers to Sumzy-PDF (&quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;).</li>
        <li><strong>Device</strong>: Any device that can access the Service (e.g., computer, phone, tablet).</li>
        <li><strong>Service</strong>: Refers to the Website.</li>
        <li><strong>Terms and Conditions</strong>: These Terms forming the agreement between You and the Company.</li>
        <li><strong>Third-party Social Media Service</strong>: Services or content provided by third-parties and available through the Service.</li>
        <li><strong>Website</strong>: Sumzy-PDF, accessible at <a href="https://pdfsummaryhub.site" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://pdfsummaryhub.site</a>.</li>
        <li><strong>You</strong>: The individual or entity accessing or using the Service.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Acknowledgment</h2>
      <p className="mb-4">
        These Terms govern the use of the Service and form a binding agreement between You and the Company.
        By using the Service, You agree to these Terms and confirm you are over 18 years old.
        You also agree to our <a href="/privacy" className="text-blue-500 underline">Privacy Policy</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Links to Other Websites</h2>
      <p className="mb-4">
        We are not responsible for third-party websites or services. Please review their terms and policies before use.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Termination</h2>
      <p className="mb-4">
        We may suspend or terminate access for violations of these Terms without notice. Upon termination, access to the Service ceases.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        The Company’s liability is limited to the amount You paid through the Service or 100 USD. We are not liable for indirect or incidental damages.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h2>
      <p className="mb-4">
        The Service is provided “AS IS” without warranties of any kind. We do not guarantee uninterrupted or error-free use.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of Pakistan.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Disputes Resolution</h2>
      <p className="mb-4">
        Please contact us first to resolve any disputes informally.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">For European Union (EU) Users</h2>
      <p className="mb-4">
        EU consumers retain the mandatory rights of their country of residence.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">United States Legal Compliance</h2>
      <p className="mb-4">
        You represent that you are not subject to U.S. sanctions and are not on any U.S. government prohibited list.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Severability and Waiver</h2>
      <p className="mb-4">
        If a part of these Terms is invalid, the rest remain in effect. Waiving a right does not mean waiving it in the future.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Translation Interpretation</h2>
      <p className="mb-4">
        If we provide a translation of these Terms, the English version controls if any dispute arises.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Changes to These Terms and Conditions</h2>
      <p className="mb-4">
        We may update these Terms at any time. Continued use means you accept the changes.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us.</p>
    </main>
  );
};

export default TermsPage;
