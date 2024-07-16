import { useState } from "react";
import "./App.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";




function AddForm() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take upto 10 seconds");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCLnk9llWeVUD1C5gudQBd-mGp-zuQ3mM4",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <>
      <div className="bg-black h-screen p-3 ">
        <form
          onSubmit={generateAnswer}
          className="w-full md:w-2/3 m-auto text-center rounded bg-gray-50 py-2"
        >
          <h2>I can help you write a caption and tags</h2>
          <textarea
            required
            style={{
              border: '1px solid black', // border
              borderRadius: '0.25rem', // rounded corners
              
              color: 'black' // text color
            }}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"
          ></textarea>
          <button
            type="submit"
           
            className="bg-blue-300 p-3 rounded-md hover:bg-blue-400 transition-all duration-300 color: white;"
            disabled={generatingAnswer}
          >
            Generate answer
          </button>
        </form>
        <div className="response">
          <ReactMarkdown className="p-3 text-white">{answer}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default AddForm;