import React from 'react'
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl flex justify-start text-white pl-8 sm:pl-16 md:pl-28">
          <b><i>Projects</i></b>
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Command-Line Interface (CLI) Projects
          <br />
          Below are some of the CLI-based projects I&apos;ve developed, 
          <br />showcasing my skills.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto px-4 sm:px-8">
        {/* Calculator */}
        <div className="flex items-center">
          <Image src="/calculator.jpeg" alt="BMI Calculator" width={64} height={64} className="mr-4 rounded-lg" />
          <a
            href="https://www.npmjs.com/package/calc_bmi-calculator"
            className="text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/calc_bmi-calculator
          </a>
        </div>
        {/* Number Guessing Game */}
        <div className="flex items-center">
          <Image src="/numguess.png" alt="Guess Number Game" width={64} height={64} className="mr-4 rounded-lg" />
          <a
            href="https://www.npmjs.com/package/play_num_guess_game"
            className="text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/play_num_guess_game
          </a>
        </div>
        {/* ATM */}
        <div className="flex items-center">
          <Image src="/ATM.jpg" alt="ATM Machine" width={64} height={64} className="mr-4 rounded-lg" />
          <a
            href="https://www.npmjs.com/package/cash-amount-atm_machine"
            className="text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/cash-amount-atm_machine
          </a>
        </div>
        {/* Todo List */}
        <div className="flex items-center">
          <Image src="/Todo.jpeg" alt="To-Do List" width={64} height={64} className="mr-4 rounded-lg" />
          <a
            href="https://www.npmjs.com/package/your_own_todo_list"
            className="text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/your_own_todo_list
          </a>
        </div>
        {/* Word Counter */}
        <div className="flex items-center">
          <Image src="/Wordcounter.jpeg" alt="Word Counter" width={64} height={64} className="mr-4 rounded-lg" />
          <a
            href="https://www.npmjs.com/package/fta_word_counter"
            className="text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/fta_word_counter
          </a>
        </div>
        {/* Countdown Timer */}
        <div className="flex items-center">
          <Image src="/countdowntimer.png" alt="Countdown Timer" width={64} height={64} className="mr-4 rounded-lg" />
          <a
            href="https://www.npmjs.com/package/nr_countdown_timer"
            className="text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/nr_countdown_timer
          </a>
        </div>
        {/* Adventure Game */}
        <div className="flex items-center">
          <Image src="/advntr.jpeg" alt="Adventure Game" width={64} height={64} className="mr-4 rounded-lg" />
          <a
            href="https://www.npmjs.com/package/tf_adventure_game"
            className="text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/tf_adventure_game
          </a>
        </div>
        {/* OOP Bank */}
        <div className="flex items-center">
          <Image src="/oopbank.jpeg" alt="OOP Bank" width={64} height={64} className="mr-4 rounded-lg" />
          <a
            href="https://www.npmjs.com/package/ra_oop_bank"
            className="text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/ra_oop_bank
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
