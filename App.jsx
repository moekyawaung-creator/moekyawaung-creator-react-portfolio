import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Moekyaw Aung</h1>
        <p>Senior Android Developer | Kotlin & Compose</p>
      </header>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li><a href="#">MoekyawTranslator</a></li>
          <li><a href="#">SecureChat App</a></li>
        </ul>
      </section>

      <footer>
        <p>Email: moekyawaung@email.com</p>
        <p>GitHub: <a href="https://github.com/moekyawaung">github.com/moekyawaung</a></p>
      </footer>
    </div>
  );
}

export default App;
