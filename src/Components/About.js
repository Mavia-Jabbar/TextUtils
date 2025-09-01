import React from "react";
import "./../css Files/About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        I’m Mavia Jabbar, an aspiring developer currently learning React.js and
        building projects to strengthen my skills. One of my practice projects
        is TextUtils, a simple yet powerful text manipulation tool designed to
        make working with text easier and faster. TextUtils provides features
        like converting text to uppercase or lowercase, clearing entire text
        with a single click, copying text to the clipboard, and analyzing word
        and character counts instantly. It also includes a dark mode toggle for
        a better user experience and displays real-time alerts after every
        action. This project has helped me understand the core concepts of React
        such as state, props, hooks, and routing, while also allowing me to
        practice writing clean and reusable components. Through TextUtils, I aim
        to showcase not only my progress as a learner but also my interest in
        building practical tools that solve everyday problems.
      </p>
    </div>
  );
}
