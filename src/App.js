import React from "react";
import { Helmet } from "react-helmet";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  return (
    <>
      <Helmet>
        <title>Akshay N | Portfolio</title>
        <meta
          name="description"
          content="Akshay N A's portfolio: projects, experience, and contact info."
        />
        <meta
          name="keywords"
          content="Akshay N A, Portfolio, Projects, Developer, Experience, Contact"
        />
        <meta name="author" content="Akshay N A" />
        {/* Open Graph */}
        <meta property="og:title" content="Akshay N A | Portfolio" />
        <meta
          property="og:description"
          content="Check out my projects and experience!"
        />
        <meta property="og:image" content="https://akshay-na.in/preview.png" />
        <meta property="og:url" content="https://akshay-na.in" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Akshay N A | Portfolio" />
        <meta
          name="twitter:description"
          content="Check out my projects and experience!"
        />
        <meta name="twitter:image" content="https://akshay-na.in/preview.png" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://akshay-na.in/" />
        {/* Structured Data: Person */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Akshay N A",
            "url": "https://akshay-na.in",
            "sameAs": [
              "https://github.com/akshay-na",
              "https://linkedin.com/in/akshay-na"
            ]
          }
        `}</script>
      </Helmet>
      <div>
        <Main />
      </div>
    </>
  );
}

export default App;
