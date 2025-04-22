import React from "react";
import Link from "next/link";

const pythonProjects = {
  cli: [
    {
      name: "BMI Calculator",
      url: "https://colab.research.google.com/drive/11veKl7H4oDHDFQ_QrPSNdFbrEaK52_u_?usp=sharing",
      description: "CLI Version (Google Colab) of the BMI Calculator."
    },
    {
      name: "Computer Guess The Number Game",
      url: "https://colab.research.google.com/drive/1nX9ZQ9IGj71KANwpS_GnZrn-pUkhEAKC?usp=sharing",
      description: "CLI Version (Google Colab) of the Computer Guess The Number Game."
    },
    {
      name: "Countdown Timer",
      url: "https://colab.research.google.com/drive/1d19CczYylPNQ5842-F39ypYDTAAAQn2_?usp=sharing",
      description: "CLI Version (Google Colab) of the Countdown Timer."
    },
    {
      name: "Hangman Game",
      url: "https://colab.research.google.com/drive/1n4J3EDBTZryhxqrVub8a6-T03bK_JSyj?usp=sharing",
      description: "CLI Version (Google Colab) of the Hangman Game."
    },
    {
      name: "Personalized Mad Libs Game",
      url: "https://colab.research.google.com/drive/1irCKsE1QN-407eXUZmRptsku82Anp8qb?usp=sharing",
      description: "CLI Version (Google Colab) of the Personalized Mad Libs Game."
    },
    {
      name: "Rock, Paper, Scissors Game",
      url: "https://colab.research.google.com/drive/1wICVfOmqKaQvAfrGz8nRshkkzyx2zGmD?usp=sharing",
      description: "CLI Version (Google Colab) of the Rock, Paper, Scissors Game."
    },
    {
      name: "User Guess The Number Game",
      url: "https://colab.research.google.com/drive/1WOEg2dD-ZvgwLr5f5q95kHQnIl0PKPPM?usp=sharing",
      description: "CLI Version (Google Colab) of the User Guess The Number Game."
    },
    {
      name: "Random Password Generator",
      url: "https://colab.research.google.com/drive/1YzuaCz0pjARDDvVozxEEFba-Hox8LMBO?usp=sharing",
      description: "CLI Version (Google Colab) of the Random Password Generator."
    }
  ],
  streamlit: [
    {
      name: "BMI Calculator",
      url: "https://appprojects-u7z8mlbejrmy5tmw2zotu9.streamlit.app/",
      description: "Streamlit Version of the BMI Calculator."
    },
    {
      name: "Computer Guess The Number Game",
      url: "https://appprojects-cuqst3aosagjhe6gadtbnv.streamlit.app/",
      description: "Streamlit Version of the Computer Guess The Number Game."
    },
    {
      name: "Countdown Timer",
      url: "https://appprojects-ckbeokd74k4yfvxlyblwpk.streamlit.app/",
      description: "Streamlit Version of the Countdown Timer."
    },
    {
      name: "Hangman Game",
      url: "https://appprojects-fkxe9xzw3yhfwkwv7r4ggw.streamlit.app/",
      description: "Streamlit Version of the Hangman Game."
    },
    {
      name: "Personalized Mad Libs Game",
      url: "https://appprojects-owgnxscsrw27zyhtbmt5iv.streamlit.app/",
      description: "Streamlit Version of the Personalized Mad Libs Game."
    },
    {
      name: "Portfolio Website",
      url: "https://appprojects-8qtkrrnh6rpp6tvm6oq45a.streamlit.app/",
      description: "Streamlit Version of the Portfolio Website."
    },
    {
      name: "Rock, Paper, Scissors Game",
      url: "https://appprojects-vpphhbd3qjbnsxzuku3yzv.streamlit.app/",
      description: "Streamlit Version of the Rock, Paper, Scissors Game."
    },
    {
      name: "User Guess The Number Game",
      url: "https://appprojects-vdkulzp9wfghdtbsdcrahc.streamlit.app/",
      description: "Streamlit Version of the User Guess The Number Game."
    },
    {
      name: "Random Password Generator",
      url: "https://appprojects-hgervcdhsrzrvxn3jdcfal.streamlit.app/",
      description: "Streamlit Version of the Random Password Generator."
    }
  ]
};

const PythonProjects = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Python Projects</h1>

      <div className="space-y-8">
        {/* CLI Projects Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">CLI-based Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pythonProjects.cli.map((project, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <Link href={project.url} passHref>
                  <button className="text-blue-400 hover:underline">
                    View Project
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Streamlit Projects Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Streamlit Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pythonProjects.streamlit.map((project, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <Link href={project.url} passHref>
                  <button className="text-blue-400 hover:underline">
                    View Project
                  </button>
                </Link>
              </div>
            ))}
            <div className="col-span-3 text-center mt-6">
          <Link href="/project" className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-500">Go Back</Link>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonProjects;
