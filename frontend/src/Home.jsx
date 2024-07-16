
import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from "axios";


function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch the username from the server or local storage
    fetchUsername();
  }, []);

  const fetchUsername = async () => {
    try {
      // Make a request to the server to fetch the username
      const response = await axios.get('http://localhost:3001/get-username');
      // Set the username in the state
      setUsername(response.data.username);
    } catch (error) {
      console.error('Failed to fetch username:', error);
    }
  };

return (
  <>
    
    <div>
      
      
        
      
      

    { /*<section style={{ marginTop: '0%' }} >*/}
       <img  style={{ marginTop: '0%' }} src="https://t3.ftcdn.net/jpg/02/09/95/42/360_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.webp" width="120"   height="120"  /><h2>{username}</h2>
        
        {/* Optionally, you can add additional personalized content here */}
      {/* </section> */}
      <section style={{ marginTop: '15%' }}>
        <h2 >About Us</h2>
        <p>About Us: Your Social Media Optimization Partner
Welcome to OptiGram, your trusted partner for social media optimization (SMO) services. With a dedicated team of experts and a passion for driving results, we're here to help you unlock the full potential of your social media presence.
</p>
<p>Our Mission
At OptiGram, our mission is simple: to empower businesses of all sizes to maximize their impact and reach on social media platforms. We believe that effective social media optimization is not just about increasing followers or likes, but about creating meaningful connections, driving engagement, and ultimately achieving your business goals.
</p>

<p>What We Do
We specialize in providing comprehensive social media optimization services tailored to meet the unique needs of each client. From strategy development to content creation, community management, and performance tracking, we offer a full suite of services designed to elevate your brand's presence across popular social media channels.</p>
      </section>

     

      {/* Additional sections showcasing important aspects of your application */}
      {/* You can add more sections as needed */}

      <footer>
        <h3>Welcome to OptiGram.</h3>
      </footer>
    </div>


  </>
);
}





export default App;