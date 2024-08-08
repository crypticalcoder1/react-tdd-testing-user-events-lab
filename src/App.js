
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest1, setInterest1] = useState(false);
  const [interest2, setInterest2] = useState(false);
  const [interest3, setInterest3] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleInterest1Change = (e) => setInterest1(e.target.checked);
  const handleInterest2Change = (e) => setInterest2(e.target.checked);
  const handleInterest3Change = (e) => setInterest3(e.target.checked);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Hi, I'm [Your Name]</h1>

      {/* Portfolio Section */}
      <section>
        <img
          src="https://via.placeholder.com/350"
          alt="My profile pic"
        />
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="https://github.com/[your-username]" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/[your-profile]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </section>

      {/* Newsletter Form Section */}
      <section>
        <h2>Newsletter Signup</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              aria-label="name"
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              aria-label="email address"
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={interest1}
                onChange={handleInterest1Change}
                aria-label="interest 1"
              />
              Interest 1
            </label>
            <label>
              <input
                type="checkbox"
                checked={interest2}
                onChange={handleInterest2Change}
                aria-label="interest 2"
              />
              Interest 2
            </label>
            <label>
              <input
                type="checkbox"
                checked={interest3}
                onChange={handleInterest3Change}
                aria-label="interest 3"
              />
              Interest 3
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
        {submitted && <p>Submission successful!</p>}
      </section>
    </div>
  );
}

export default App;
