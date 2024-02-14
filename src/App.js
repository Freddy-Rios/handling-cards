import React, { useState, useEffect } from "react";
import NavBar from "./navbar";
import Quotes from "./Quotes";
import "./App.css";

const App = () => {
  // Sample data for quotes
  const quotesData = {
    Inspiration: {
      Motivation: [
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. - Steve Jobs",
        "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
        "It does not matter how slowly you go as long as you do not stop. - Confucius",
      ],
      Positivity: [
        "In the middle of every difficulty lies opportunity. - Albert Einstein",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
        "Positive thinking will let you do everything better than negative thinking will. - Zig Ziglar",
      ],
    },
    Wisdom: {
      Philosophy: [
        "The only true wisdom is in knowing you know nothing. - Socrates",
        "Wisdom begins in wonder. - Socrates",
        "The only thing that I know is that I know nothing. - Socrates",
        "The unexamined life is not worth living. - Socrates",
      ],
      "Life Lessons": [
        "Life is what happens when you're busy making other plans. - John Lennon",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Life is really simple, but we insist on making it complicated. - Confucius",
        "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
      ],
    },
    Love: {
      Romance: [
        "The best thing to hold onto in life is each other. - Audrey Hepburn",
        "Love is composed of a single soul inhabiting two bodies. - Aristotle",
        "Where there is love there is life. - Mahatma Gandhi",
        "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves. - Victor Hugo",
      ],
      Friendship: [
        "A real friend is one who walks in when the rest of the world walks out. - Walter Winchell",
        "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one. - C.S. Lewis",
        "Friendship is the hardest thing in the world to explain. It's not something you learn in school. But if you haven't learned the meaning of friendship, you really haven't learned anything. - Muhammad Ali",
        "Friendship is the only cement that will ever hold the world together. - Woodrow Wilson",
      ],
    },
    Success: {
      Achievement: [
        "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
        "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
        "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
        "Success is not in what you have, but who you are. - Bo Bennett",
      ],
      "Hard Work": [
        "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
        "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
        "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit. - Conrad Hilton",
        "Success is not just about making money. It's about making a difference. - Unknown",
      ],
    },
    Courage: {
      Bravery: [
        "Courage is resistance to fear, mastery of fear, not absence of fear. - Mark Twain",
        "It takes courage to grow up and become who you really are. - E.E. Cummings",
        "Courage doesn't mean you don't get afraid. Courage means you don't let fear stop you. - Unknown",
        "Courage is not the absence of fear, but the triumph over it. - Nelson Mandela",
      ],
      Determination: [
        "I learned that courage was not the absence of fear, but the triumph over it. - Nelson Mandela",
        "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen. - Winston Churchill",
        "The brave man is not he who does not feel afraid, but he who conquers that fear. - Nelson Mandela",
        "You are more powerful than you know; you are beautiful just as you are. - Melissa Etheridge",
      ],
    },
    Creativity: {
      Imagination: [
        "Imagination is more important than knowledge. - Albert Einstein",
        "Creativity is intelligence having fun. - Albert Einstein",
        "Logic will get you from A to B. Imagination will take you everywhere. - Albert Einstein",
        "Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will. - George Bernard Shaw",
      ],
      Innovation: [
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "The way to get started is to quit talking and begin doing. - Walt Disney",
        "Innovation is the specific instrument of entrepreneurship. The act that endows resources with a new capacity to create wealth. - Peter Drucker",
        "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
      ],
    },
  };

  const categories = quotesData;

  const [filteredQuotes, setFilteredQuotes] = useState([]);

  // Set filteredQuotes to all quotes when component mounts
  useEffect(() => {
    const allQuotes = Object.values(quotesData).flatMap((category) =>
      Object.values(category).flatMap((subcategory) => subcategory)
    );
    setFilteredQuotes(allQuotes);
  }, []); // Empty dependency array to run only once when component mounts

  const onSelectCategory = (category, subcategory) => {
    if (subcategory) {
      setFilteredQuotes(quotesData[category][subcategory]);
    } else {
      const subcategories = Object.keys(quotesData[category]);
      const allQuotes = subcategories.flatMap(
        (sub) => quotesData[category][sub]
      );
      setFilteredQuotes(allQuotes);
    }
  };

  return (
    <div className="app-container">
      <NavBar categories={categories} onSelectCategory={onSelectCategory} />
      <Quotes filteredQuotes={filteredQuotes} />
    </div>
  );
};

export default App;
