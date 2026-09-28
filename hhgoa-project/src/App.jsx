import { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  function improvePrompt() {
    if (!prompt.trim()) {
      setResult("Please enter an idea first.");
      return;
    }

    const idea = prompt.trim();

    setResult(`ROLE
Act as an expert product designer and software developer.

GOAL
Turn this idea into a practical, user-friendly product:

"${idea}"

USER
Identify the primary users who would benefit from this product.

CORE REQUIREMENTS
• Define the main problem being solved
• Suggest the most important features
• Keep the experience simple and intuitive
• Consider scalability and reliability
• Prioritize a useful MVP over unnecessary features

PRODUCT OUTPUT
Provide:
1. Problem definition
2. Target users
3. Core features
4. Recommended technology
5. User flow
6. MVP development plan

CONSTRAINT
Focus on building a realistic solution rather than a generic chatbot.`);
  }

  async function copyResult() {
    await navigator.clipboard.writeText(result);
  }

  return (
    <div className="app">
      <nav>
        <div className="logo">
          Promptly<span>AI</span>
        </div>
        <div className="badge">PROMPT ENGINEERING</div>
      </nav>

      <section className="hero">
        <p className="eyebrow">IDEA → STRUCTURED PROMPT</p>

        <h1>
          Turn rough ideas
          <br />
          <span>into better prompts.</span>
        </h1>

        <p className="subtitle">
          Describe what you want to build. Promptly structures your idea
          into a detailed prompt ready for an AI assistant.
        </p>
      </section>

      <section className="workspace">
        <div className="panel">
          <div className="panelHeader">
            <span>01 / YOUR IDEA</span>
            <span>{prompt.length} characters</span>
          </div>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: I want to build a website that helps college students find internships..."
          />

          <button onClick={improvePrompt}>
            Improve Prompt →
          </button>
        </div>

        <div className="panel">
          <div className="panelHeader">
            <span>02 / STRUCTURED PROMPT</span>

            {result && (
              <button className="copy" onClick={copyResult}>
                Copy
              </button>
            )}
          </div>

          <div className="result">
            {result ? (
              <pre>{result}</pre>
            ) : (
              <div className="empty">
                <div className="orb">✦</div>
                <p>Your improved prompt will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer>
        <span>Promptly AI · Prototype</span>
        <span>2026</span>
      </footer>
    </div>
  );
}

export default App;