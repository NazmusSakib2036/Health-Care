import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/cookies.css'; 


const CookiesPolicy = () => {
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
      className="cookies-policy-page"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="cp-header">
        <h1 className="cp-title">Cookies Policy</h1>
        {/* <p className="cp-last-updated">Last Updated: June 18, 2024</p> */}
      </div>

      <div className="cp-content">
        <motion.section className="cp-section" variants={sectionVariants}>
          <h2 className="section-heading">1. What Are Cookies?</h2>
          <p className="section-paragraph">
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site. Cookies enable a website to remember your actions and preferences (such as login, language, font size, and other display preferences) over a period, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.
          </p>
        </motion.section>

        <motion.section className="cp-section" variants={sectionVariants}>
          <h2 className="section-heading">2. How We Use Cookies</h2>
          <p className="section-paragraph">
            We use cookies for various purposes:
          </p>
          <ul className="cp-list">
            <li>
              <strong>Essential Cookies:</strong> These cookies are strictly necessary for the operation of our website. They enable you to navigate around the site and use its features, such as accessing secure areas. Without these cookies, services like secure login or shopping carts cannot be provided.
            </li>
            <li>
              <strong>Performance and Analytics Cookies:</strong> These cookies collect information about how you use our website, such as which pages you visit most often and if you encounter any error messages. This data helps us improve how the website works and understand what our users are interested in. All information these cookies collect is aggregated and therefore anonymous.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features. They can also be used to remember changes you have made to text size, fonts, and other parts of web pages that you can customize.
            </li>
            <li>
              <strong>Targeting or Advertising Cookies:</strong> These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of the advertising campaigns. They are usually placed by advertising networks with the website operator’s permission.
            </li>
          </ul>
        </motion.section>

        <motion.section className="cp-section" variants={sectionVariants}>
          <h2 className="section-heading">3. Third-Party Cookies</h2>
          <p className="section-paragraph">
            In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on. These third parties may include analytics providers, advertising networks, social media platforms, and other service providers. We do not control these third-party cookies, and they are not covered by this Cookies Policy.
          </p>
        </motion.section>

        <motion.section className="cp-section" variants={sectionVariants}>
          <h2 className="section-heading">4. Your Choices Regarding Cookies</h2>
          <p className="section-paragraph">
            You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of our website services.
          </p>
          <ul className="cp-list">
            <li>
              <strong>Browser Settings:</strong> You can typically find these settings in the "options" or "preferences" menu of your browser. Use the "Help" option in your browser for more details.
            </li>
            <li>
              <strong>Opt-out Tools:</strong> For some third-party advertising cookies, you can opt out through industry-specific opt-out pages such as the Network Advertising Initiative (NAI) opt-out page or the Digital Advertising Alliance (DAA) opt-out page.
            </li>
          </ul>
        </motion.section>

        <motion.section className="cp-section" variants={sectionVariants}>
          <h2 className="section-heading">5. Changes to This Cookies Policy</h2>
          <p className="section-paragraph">
            We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Last Updated" date at the top. You are advised to review this Cookies Policy periodically for any changes.
          </p>
        </motion.section>

        <motion.section className="cp-section" variants={sectionVariants}>
        <section className="terms-section">
            <h2 className="terms-heading">11. Contact Us</h2>
            <p className="terms-paragraph">
            If you have any questions about this Cookies Policy, please contact us at:
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

export default CookiesPolicy;