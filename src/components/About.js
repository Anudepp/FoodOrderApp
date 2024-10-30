import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#2c3e50', textAlign: 'center', marginBottom: '20px' }}>About Us</h1>
      <p style={{ fontSize: '1.2rem', color: '#34495e', lineHeight: '1.6', textAlign: 'center' }}>
        We are a company that values excellence and innovation. Our food delivery app is designed to bring delicious meals from your favorite restaurants right to your doorstep. We strive to provide a seamless and enjoyable experience for our users, ensuring that every order is delivered promptly and accurately. Whether you're craving a quick snack or a gourmet meal, our app offers a wide variety of options to satisfy your hunger. Join us on this culinary journey and discover the convenience of having great food delivered to you with just a few taps on your phone.
      </p>
    </div>
  );
};

export default About;