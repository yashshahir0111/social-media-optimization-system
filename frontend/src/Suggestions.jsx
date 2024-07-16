import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";


const Suggestions = () => {
  const [suggestion, setSuggestion] = useState('');

  useEffect(() => {
    fetchSuggestion();
  }, []);

  const fetchSuggestion = async () => {
    try {
      const response = await axios.get('http://localhost:3001/get-suggestion');
      setSuggestion(response.data.suggestion);
    } catch (error) {
      console.error('Failed to fetch suggestion:', error);
    }
  };

  const parseSuggestion = () => {
    return suggestion.split('\n\n').map((section, index) => (
      <div key={index}>
        {section.split('\n').map((line, index) => {
          // Remove asterisks from the main heading
          if (line.startsWith('**') && line.endsWith('**')) {
            return <h2 key={index}>{line.substring(2, line.length - 2)}</h2>;
          } 
          // Remove asterisks from the subheading
          else if (line.startsWith('- **') && line.endsWith('**')) {
            return <h3 key={index}>{line.substring(4, line.length - 2)}</h3>;
          } 
          // Remove asterisks from other lines
          else {
            return <p key={index}>{line.replace(/\*+/g, '')}</p>;
          }
        })}
      </div>
    ));
  };

  return (
    <div>
      <h1>Suggestions</h1>
      <div style={{ marginTop: '15%' }}>{parseSuggestion()}</div>
    </div>
  );
};

export default Suggestions;
