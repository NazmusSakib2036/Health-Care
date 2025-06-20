import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/priv_po.css';

const PrivacyPolicy = () => {
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      className="privacy-policy-page"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="policy-header">
        <h1 className="policy-title">Privacy Policy</h1>
        {/* <p className="policy-last-updated">Last Updated: June 18, 2024</p> */}
      </div>

      <div className="policy-content">
        <motion.section className="policy-section" variants={sectionVariants}>
          <h2 className="section-heading">1. Introduction</h2>
          <p className="section-paragraph">
            Welcome to Health Care. We are committed to protecting your privacy and ensuring you have a positive experience when using our website and services. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website (the "Site") and use our doctor-finding and booking services.
          </p>
          <p className="section-paragraph">
            Please read this policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site or use our services.
          </p>
        </motion.section>

        <motion.section className="policy-section" variants={sectionVariants}>
          <h2 className="section-heading">2. Information We Collect</h2>
          <p className="section-paragraph">
            We may collect personal information that you voluntarily provide to us when you register on the Site, express an interest in obtaining information about us or our products and services, when you participate in activities on the Site (such as booking appointments), or otherwise when you contact us.
          </p>
          <ul className="policy-list">
            <li>
              <strong>Personal Identifiable Information:</strong> This may include your name, email address, phone number, physical address, date of birth, medical history (only with your explicit consent for specific services), and payment information.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.
            </li>
            <li>
              <strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.
            </li>
          </ul>
        </motion.section>

        <motion.section className="policy-section" variants={sectionVariants}>
          <h2 className="section-heading">3. How We Use Your Information</h2>
          <p className="section-paragraph">
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="policy-list">
            <li>Create and manage your account.</li>
            <li>Enable user-to-user communications.</li>
            <li>Process your transactions and send related information.</li>
            <li>Send you email notifications regarding your appointments and services.</li>
            <li>Request feedback and contact you about your use of the Site.</li>
            <li>Resolve disputes and troubleshoot problems.</li>
            <li>Respond to product and customer service requests.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
          </ul>
        </motion.section>

        <motion.section className="policy-section" variants={sectionVariants}>
          <h2 className="section-heading">4. Data Security</h2>
          <p className="section-paragraph">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>
        </motion.section>

        <motion.section className="policy-section" variants={sectionVariants}>
          <h2 className="section-heading">5. Your Choices</h2>
          <p className="section-paragraph">
            You may at any time review or change the information in your account or terminate your account by:
          </p>
          <ul className="policy-list">
            <li>Logging into your account settings and updating your profile.</li>
            <li>Contacting us using the contact information provided below.</li>
          </ul>
          <p className="section-paragraph">
            Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use, and/or comply with legal requirements.
          </p>
        </motion.section>

        <motion.section className="policy-section" variants={sectionVariants}>
          <h2 className="section-heading">6. Third-Party Websites</h2>
          <p className="section-paragraph">
            The Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information.
          </p>
        </motion.section>

        <motion.section className="policy-section" variants={sectionVariants}>
          <h2 className="section-heading">7. Children's Privacy</h2>
          <p className="section-paragraph">
            Our services are not intended for children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and become aware that your child has provided us with personal information without your consent, please contact us. If we become aware that we have collected personal information from a child under 13 without verification of parental consent, we take steps to remove that information from our servers.
          </p>
        </motion.section>

        <motion.section className="policy-section" variants={sectionVariants}>
          <h2 className="section-heading">8. Changes to This Privacy Policy</h2>
          <p className="section-paragraph">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </motion.section>

        <motion.section className="policy-section" variants={sectionVariants}>
        <section className="terms-section">
            <h2 className="terms-heading">9. Contact Us</h2>
            <p className="terms-paragraph">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
              <br />
              Email: <a href="mailto:nazmuss024@gmail.com" className="terms-contact-link">nazmuss024@gmail.com</a>
              <br />
              Phone: +880 1313-186576
              <br />
              Address: Taltola, Near Hazi-Camp, Dhaka-1230
            </p>
          </section>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;