import "./App.css";
import { useState } from "react";
import { GrRefresh, GrTrophy } from "react-icons/gr";

function App() {
  // Declarations
  const [numbers, setNumbers] = useState([]);
  const [moves, setMoves] = useState(0);
  const [bestscore, setBestscore] = useState(0);

  // Initialize function
  const fillArray = () => {
    while (numbers.length <= 15) {
      let a = Math.floor(Math.random() * 16);
      if (!numbers.includes(a)) {
        numbers.push(a);
      }
    }
  };

  // Mouvements function

  const Mouvements = (index) => {
    // Checking where to move
    if (numbers[index + 1] === 0) {
      numbers[index + 1] = numbers[index];
      numbers[index] = 0;
      setMoves(moves + 1);
    } else if (numbers[index - 1] === 0) {
      numbers[index - 1] = numbers[index];
      numbers[index] = 0;
      setMoves(moves + 1);
    } else if (numbers[index + 4] === 0) {
      numbers[index + 4] = numbers[index];
      numbers[index] = 0;
      setMoves(moves + 1);
    } else if (numbers[index - 4] === 0) {
      numbers[index - 4] = numbers[index];
      numbers[index] = 0;
      setMoves(moves + 1);
    }

    // Check if win function

    if (
      JSON.stringify(numbers) ===
      JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0])
    ) {
      onsuccess();
    }
  };

  // refresh
  const refresh = () => {
    setNumbers([]);
    setMoves(0);
  };

  // Initialize the data
  fillArray();

  // Onsuccess function
  const onsuccess = () => {
    alert("🎉 Congratulation, you won.");

    setBestscore(moves);
    setNumbers([]);
    setMoves(0);
  };

  return (
    <div className="App">
      <section className="hero-section">
        <header className="header">
          <div className="logo">
            <h1>SlideNumbers</h1>
          </div>
          <div className="bestplayerParent">
            <GrTrophy className="gricons" />
            <div className="bestplayer">
              <p>
                Best score :
                <span>
                  <strong> {bestscore}</strong>
                </span>
              </p>
            </div>
          </div>
        </header>
        <div>
          <div className="headline">
            <div
              onClick={() => {
                refresh();
              }}
              className="refresh"
            >
              <GrRefresh className="gricons" />
              <span>Refresh</span>
            </div>

            <p>
              Mouvements : <span>{moves}</span>
            </p>
          </div>
          <div className="container">
            {numbers.map((item, index) => {
              return (
                <span
                  className={item === 0 ? "empty" : ""}
                  onClick={() => {
                    Mouvements(index);
                  }}
                  key={index}
                >
                  {item === 0 ? "" : item}
                </span>
              );
            })}
          </div>
        </div>
        <div className="footer">
          <p>Copyright © 2022 SlideNumbers. All rights reserved.</p>
          <p>
            Created By
            <a
              href="https://www.linkedin.com/in/abdelmadjidlablack/"
              target="_blank"
              rel="noreferrer"
            >
              Abdelmadjid Lablack
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
