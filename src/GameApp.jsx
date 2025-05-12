// React Hooks: useState for state, useEffect for side effects, useRef for DOM access
import { useState, useRef, useEffect } from 'react';

// Styling
import './GamePage.css';

// Modular Component: Importing Die component
import Die from "./Die.jsx";

// Random ID generator for unique dice
import { nanoid } from "nanoid";

// Confetti animation for win effect
import Confetti from "react-confetti";

function GameApp() {
    // Array: State holds an array of 10 dice objects
    const [dice, setDice] = useState(() => generateAllNewDice());

    // React Hook: Tracks number of rolls
    const [rollCount, setRollCount] = useState(0);

    // Ref to focus the roll button after game win
    const buttonRef = useRef(null);

    // Win Condition: All dice held AND have the same value
    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value);

    // React Hook: useEffect triggers when game is won
    // API or Storage Access: Save best score to localStorage
    useEffect(() => {
        if (gameWon) {
            buttonRef.current.focus();

            const bestScore = localStorage.getItem("bestScore");
            if (!bestScore || rollCount < Number(bestScore)) {
                localStorage.setItem("bestScore", rollCount);
            }
        }
    }, [gameWon]);

    // Debugging: Log win in console
    if (gameWon) {
        console.log("Game won!");
    }

    // Utility Function: Create new dice array
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid() // Unique ID
            }));
    }

    // Event Handler: Roll unheld dice or reset game
    function rollDice() {
        if (!gameWon) {
            setDice(oldDice => oldDice.map(die =>
                die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
            ));
            setRollCount(prev => prev + 1); // Increment roll count
        } else {
            setDice(generateAllNewDice()); // Reset dice
            setRollCount(0);               // Reset counter
        }
    }

    // Event Handler: Toggle hold status for a die
    function hold(id) {
        setDice(oldDice =>
            oldDice.map(die =>
                die.id === id
                    ? { ...die, isHeld: !die.isHeld }
                    : die
            )
        );
    }

    // JSX: Render dice components from array
    const diceElements = dice.map(dieObj =>
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={hold}
            id={dieObj.id}
        />
    );

    return (
        <main>
            {/* Visual Feedback on Win */}
            {gameWon && <Confetti />}

            {/* Screen Reader Alert for Win */}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
            </div>

            {/* JSX Syntax */}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>

            {/* React Component: Rendered from array of dice */}
            <div className="dice-container">
                {diceElements}
            </div>

            {/* Roll/New Game Button */}
            <button
                ref={buttonRef}
                className="roll-dice"
                onClick={rollDice}
            >
                {gameWon ? "New Game" : "Roll"}
            </button>

            {/* Feedback: Show number of rolls */}
            <p>Current Rolls: {rollCount}</p>
        </main>
    );
}

export default GameApp;
