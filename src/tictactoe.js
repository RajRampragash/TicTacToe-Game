import { useState } from 'react'
import Confetti from 'react-confetti'
import useWindowSize from "react-use/lib/useWindowSize";

function TicTacToe() {
    const { width, height } = useWindowSize();
    // first create a state for the board to updated 
    const [board, setBoard] = useState([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        // the null is repsentating in total length 
    ])
    const [isXturn, setisXturn] = useState(true)
    const decidedwinner = (board) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            console.log(board[a], board[b], board[c]);
            if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
                console.log(board[a])
                return board[a]

            }

        }
        return null;
    }


    const winner = decidedwinner(board)
    console.log("winner", winner);

    const handleClick = (index) => {
        if (winner === null && !board[index]) {
            const boardCopy = [...board];
            boardCopy[index] = isXturn ? "X" : "O"
            setBoard(boardCopy)
            console.log(boardCopy)
            setisXturn(!isXturn)

        }

    }

    return (
        <div className='full-name'>
            <h3>TicTacToe</h3>
            {winner ? <Confetti height={height} width={width} /> : ""}
            <div className='board'>
                {board.map((value, index) => (
                    <Gamebox value={value} onplayerClcik={() => handleClick(index)} />
                ))}
            </div>


        </div>
    )
}

function Gamebox({ value, onplayerClcik }) {
    const styles = {
        color: value === "X" ? "green" : "red",
    };
    return (
        <div styles={styles} className='game-box' onClick={onplayerClcik}>{value}

        </div>
    )
}

export default TicTacToe;