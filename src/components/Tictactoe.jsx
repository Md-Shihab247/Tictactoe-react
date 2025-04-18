import { useState } from "react"

const Tictactoe = () => {

    const [board,setBoard] = useState(Array(9).fill(null))
    let [isNext,setIsNext] = useState(true)   
    let winner = calculateWinner(board)
    let status =  `${winner === "Match Draw" ? winner : `${winner ? `winner is ${winner}` : `It's ${isNext ? `X` : `O`} turn`}`}`
    // let draw = ''


    let handleClick = (index)=> {
       if(board[index] || winner) return

       let newBoard = [...board]
       newBoard[index] = `${isNext ? `X` : `O`}`
       setBoard(newBoard)
       setIsNext(!isNext)    
    }

    function calculateWinner(items){
        let combinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
       
        for(let i = 0; i < combinations.length ; i++){
            let [a,b,c] = combinations[i]
            if (items[a] && items[a] === items[b] && items[a] === items[c]) {
                return items[a]     
            }
        }

        return board.includes(null) ? null : "Match Draw"
    
    }

  return (
    <section className="game-container">
        <h1 className="tittle">Tic Tac Toe Game</h1>
        <h3 className="game-status">{status}</h3>
        <div className="game-board">
            {board.map((item,index)=>(

                <button key={index} onClick={()=> handleClick(index)}>{item}</button>

            ))}
        </div>

    </section>
  )
}

export default Tictactoe