import { useState } from "react";
import "./Profile.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const [followers, setFollowers] = useState("");
  const [accountType, setAccountType] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [postCount, setPostCount] = useState("");

  let formqQuestion = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    formqQuestion = `This is all the details of my Instagram account:
    \H Number of followers: ${followers}
    \h Account type: ${accountType}
    \h Username: ${username}
    \h Bio: ${bio}
    \h Number of posts: ${postCount}
    
    Based on this information, please provide suggestions for improving my account reach, engaging my followers, and making my account more viral. Additionally, suggest the best time and frequency for posting to reach the maximum audience. Please also suggest improvements for my bio and give me a whole new bio to use based on the improvements and provide 20 keywords related to my account. Finally, advise on the best time to go live on Instagram Stories according to my account in Indian Standard Time.
    
    \H Suggestions:
    \c - Suggestion 1
    \c - Suggestion 2
    \c - Suggestion 3
    \c - Suggestion 4
    
    \H Best Time to Post:
    \c - Best time: [Time]
    \c - Frequency: [Frequency]
    
    \H Bio Improvements:
    \c - Improvement 1
    \c - Improvement 2
    \c - Improvement 3
    \c - Improvement 4
    
    \H Keywords:
    \c - Keyword 1
    \c - Keyword 2
    
    \H Best Time for Instagram Story:
    \c - Best time: [Time]
    `;
    console.log(formqQuestion);
    generateAnswer(formqQuestion);
  };

  async function generateAnswer(question) {
    setGeneratingAnswer(true);
    setAnswer("Loading your answer... \n It might take up to 10 seconds");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDCl5FQumofFuhyZYhra-K9TcZcs3SRcmc",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);

      // Save the response to the database
      saveResponse(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      setAnswer("Sorry - Something went wrong. Please try again!");
    }
    setGeneratingAnswer(false);
  }

  async function saveResponse(response) {
    try {
      await axios.post("http://localhost:3001/save-response", {
        response,
        username: username, // Pass the username here
      });
      console.log("Response saved successfully");
    } catch (error) {
      console.error("Failed to save response:", error);
    }
  }

  return (
    <>
      <div className="bg-white h-screen p-3">
       
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="followers">Number of Followers:</label>
              <input
                type="number"
                id="followers"
                value={followers}
                onChange={(e) => setFollowers(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="accountType">Type of Account:</label>
              <input
                type="text"
                id="accountType"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Bio:</label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="postCount">Number of Posts:</label>
              <input
                type="number"
                id="postCount"
                value={postCount}
                onChange={(e) => setPostCount(e.target.value)}
              />
            </div>
            <div className="button-container">
              <button type="submit"  onClick={handleSubmit} disabled={generatingAnswer}>
                Submit
              </button>
            </div>
          </div>
        

        <div className="w-full md:w-2/3 m-auto text-center rounded bg-gray-50 my-1">
          <ReactMarkdown className="p-3">{answer}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default App;
