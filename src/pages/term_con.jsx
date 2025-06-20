// TermsOfService.jsx
import React from 'react';
import '../assets/css/term_con.css';

const TermsOfService = () => {
  return (
    <div className="terms-page-container">
      <div className="terms-content-wrapper">
        <h1 className="terms-title">
          Terms of Service
        </h1>

        <div className="terms-sections-container">
          <section className="terms-section">
            <h2 className="terms-heading">1. Introduction</h2>
            <p className="terms-paragraph">
              Welcome to Health Care. These Terms of Service ("Terms") govern your access to and use of our website, services, applications, and content (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Services.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">2. Acceptance of Terms</h2>
            <p className="terms-paragraph">
              By creating an account, accessing, or using the Services, you confirm that you are at least 18 years old and that you agree to be bound by these Terms. If you are using the Services on behalf of an organization, you are agreeing to these Terms for that organization and warrant that you have the authority to bind that organization to these Terms.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">3. Services Provided</h2>
            <p className="terms-paragraph">
              Our Services include, but are not limited to, providing information about healthcare services, allowing users to book appointments, accessing health-related articles and blogs, and facilitating communication with healthcare professionals. Please note that the information provided on this website is for general informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare professional for diagnosis and treatment.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">4. User Responsibilities</h2>
            <ul className="terms-list">
              <li>You agree to provide accurate, current, and complete information when using our Services.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
              <li>You agree not to use the Services for any unlawful or prohibited purpose.</li>
              <li>You must not transmit any worms or viruses or any code of a destructive nature.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">5. Privacy Policy</h2>
            <p className="terms-paragraph">
              Your privacy is very important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our Services, you agree to the collection and use of information in accordance with our Privacy Policy. Please review our Privacy Policy [Link to Privacy Policy Page, if applicable] to understand our practices.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">6. Disclaimers</h2>
            <p className="terms-paragraph">
              The Services are provided on an "as-is" and "as available" basis without any warranties of any kind, either express or implied. Health Care does not warrant that the Services will be uninterrupted, error-free, or secure. We are not responsible for any adverse effects that may result from your reliance on any information contained on our website.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">7. Limitation of Liability</h2>
            <p className="terms-paragraph">
              To the fullest extent permitted by law, Health Care shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the Services; (b) any conduct or content of any third party on the Services; or (c) unauthorized access, use, or alteration of your transmissions or content.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">8. Indemnification</h2>
            <p className="terms-paragraph">
              You agree to indemnify and hold harmless Health Care and its affiliates, officers, agents, employees, and partners from and against any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your breach of these Terms or your violation of any law or the rights of a third party.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">9. Governing Law</h2>
            <p className="terms-paragraph">
              These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in [Your City/County, Your Country/State].
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">10. Changes to Terms</h2>
            <p className="terms-paragraph">
              We reserve the right to modify these Terms at any time. If we make material changes to these Terms, we will notify you by posting the updated Terms on our website or through other appropriate communication channels. Your continued use of the Services after such modifications will constitute your acknowledgment of the modified Terms and agreement to abide and be bound by the modified Terms.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">11. Contact Us</h2>
            <p className="terms-paragraph">
              If you have any questions about these Terms, please contact us at:
              <br />
              Email: <a href="mailto:nazmuss024@gmail.com" className="terms-contact-link">nazmuss024@gmail.com</a>
              <br />
              Phone: +880 1313-186576
              <br />
              Address: Taltola, Near Hazi-Camp, Dhaka-1230
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
