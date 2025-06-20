import React, { useState } from 'react';
import '../assets/css/blog.css'; // Make sure this path is correct

const App = () => {
  const [activeTab, setActiveTab] = useState('blog');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: '5 Signs You Should See a Cardiologist',
      excerpt: 'Learn about the warning signs of heart problems...',
      content: 'Early detection is key when it comes to heart health. If you experience persistent chest pain, shortness of breath, dizziness, fatigue, or swelling in your legs, it\'s crucial to consult a cardiologist. These symptoms could indicate underlying cardiovascular issues that require professional attention. Regular check-ups and a healthy lifestyle can significantly reduce your risk of heart disease. Don\'t ignore what your body is telling you!',
      date: 'May 15, 2023',
      author: 'Dr. Ayesha Rahman'
    },
    {
      id: 2,
      title: 'Childhood Vaccinations: What Parents Need to Know',
      excerpt: 'A complete guide to vaccination schedules and importance...',
      content: 'Vaccinations are a cornerstone of public health, protecting children from serious and potentially life-threatening diseases. Understanding the recommended vaccination schedule, common misconceptions, and the importance of herd immunity can empower parents to make informed decisions. Consult your pediatrician for personalized advice and to ensure your child receives the necessary immunizations for a healthy future. It\'s an essential step in safeguarding your child\'s well-being and the community\'s health.',
      date: 'April 28, 2023',
      author: 'Dr. Shaila Hossain'
    },
    {
      id: 3,
      title: 'Summer Skin Care Tips',
      excerpt: 'Protect your skin during the hot summer months with these tips...',
      content: 'Summer brings sunshine, but also challenges for your skin. Protecting your skin from harmful UV rays is paramount to prevent sunburn, premature aging, and skin cancer. Remember to apply broad-spectrum sunscreen with at least SPF 30 daily, even on cloudy days. Reapply every two hours, or more often if swimming or sweating. Stay hydrated, wear protective clothing, and seek shade during peak sun hours. A consistent skincare routine will keep your skin healthy and glowing all summer long!',
      date: 'June 2, 2023',
      author: 'Dr. Ruma Akter'
    }
  ];

  const handleLearnMoreClick = (post) => {
    setSelectedPost(post);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedPost(null);
  };

  // Note: The formData and handleSubmit are not directly used in this blog display,
  // but I'm keeping them as they were in your original code.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment request submitted!\nWe'll contact you soon to confirm.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      reason: ''
    });
  };

  return (
    <div className="app">
      <nav className="tabs">
        <p className='blog-heading'>Our Health Blog</p>
      </nav>

      <main className="main-content">
        {activeTab === 'blog' && (
          <div className="blog-posts-container">
            {blogPosts.map(post => (
              <article key={post.id} className="post-card">
                <h3>{post.title}</h3>
                <p className="post-meta">By {post.author} | {post.date}</p>
                <p>{post.excerpt}</p>
                <button className="read-more-btn" onClick={() => handleLearnMoreClick(post)}>Learn More</button>
              </article>
            ))}
          </div>
        )}
      </main>

      {showPopup && selectedPost && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="close-popup-btn" onClick={handleClosePopup}>&times;</button>
            <h2>{selectedPost.title}</h2>
            <p className="post-meta">By {selectedPost.author} | {selectedPost.date}</p>
            <p>{selectedPost.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;