import React, { useState } from 'react';
// import circle from './circle.png';
// import cross from './cross.png'




function Tictactoe() {

    const [data, setdata] = useState(Array(9).fill(''));
    const [current, setcurrent] = useState('x');
 

    const Draw = (num) => {
        if (data[num] === "") {
            const board = data;
            board[num] = current;
            setdata(board)
            if (current === "x") {
                setcurrent("o")
            } else {
                setcurrent("x")
            }
            if(checkwin(board)){
                if(current === "x"){
                    alert("player x is winner")
                }else{
                    alert("player o is winner")
                }
            }
            if(checkdraw(board))(
                alert("Match Is Draw")
            )
        }
    }

    const checkdraw = (board) => {
        let count = 0;
        board.forEach(Element =>{
            if(Element !== ""){
                count++;
            }
        })
        if(count >= 9){
            return true;
        }else{
            return false;
        }
    }

    const checkwin = (board) => {
        const conditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 8]
        ];
        let flag = false;
        conditions.forEach(Element => {
            if (board[Element[0]] !== ""
                && board[Element[1]] !== "" &&
                board[Element[2]]) {
                if (board[Element[0]] === board[Element[1]] &&
                    board[Element[1]] === board[Element[2]]) {
                        flag = true;
                    }
                
            }
        })
        return flag;
    }

    const handlereset = () => {
        setdata(Array(9).fill(''));
        setcurrent('x');
    }

    return (
        <div className='container'>
            <h1 className='title'> Tic Tac Toe Game In <span>Reactjs</span></h1>

            <div className='board'>
                <div className="column1">
                    <div className="box" onClick={() => Draw(0)}>{data[0]}</div>
                    <div className="box" onClick={() => Draw(3)}>{data[3]}</div>
                    <div className="box" onClick={() => Draw(6)}>{data[6]}</div>
                </div>
                <div className="column2">
                    <div className="box" onClick={() => Draw(1)}>{data[1]}</div>
                    <div className="box" onClick={() => Draw(4)}>{data[4]}</div>
                    <div className="box" onClick={() => Draw(7)}>{data[7]}</div>
                </div>
                <div className="column3">
                    <div className="box" onClick={() => Draw(2)}>{data[2]}</div>
                    <div className="box" onClick={() => Draw(5)}>{data[5]}</div>
                    <div className="box" onClick={() => Draw(8)}>{data[8]}</div>
                </div>
            </div>
            <button className='reset' onClick={handlereset}>Reset</button>
        </div>



    )
}

export default Tictactoe
