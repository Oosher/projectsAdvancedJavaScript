
import React from 'react'
import GameContainer from './gameinfo/GameContainer';

export default function GameGenerator() {
    const gamesArray = [{
            img: "assets/images/vs.jpg",
            details: {
                nameTeam1: "Team C",
                nameTeam2: "Team D",
                goalTeam1: 2,
                goalTeam2: 2,
                goalScorers1: [
                { name: "Player 5", minute: 15 },
                { name: "Player 6", minute: 37 },
                ],
                goalScorers2: [
                { name: "Player 7", minute: 42 },
                { name: "Player 8", minute: 90 },
                ],
            },
            },
        {
            img: "assets/images/game1.jpg",
            details: {
                nameTeam1: "Team A",
                nameTeam2: "Team B",
                goalTeam1: 3,
                goalTeam2: 1,
                goalScorers1: [
                { name: "Player 1", minute: 23 },
                { name: "Player 2", minute: 45 },
                { name: "Player 3", minute: 68 },
                ],
                goalScorers2: [{ name: "Player 4", minute: 77 }],
            },
            },
            {
            img: "assets/images/game2.jpg",
            details: {
                nameTeam1: "Team C",
                nameTeam2: "Team D",
                goalTeam1: 2,
                goalTeam2: 2,
                goalScorers1: [
                { name: "Player 5", minute: 15 },
                { name: "Player 6", minute: 37 },
                ],
                goalScorers2: [
                { name: "Player 7", minute: 42 },
                { name: "Player 8", minute: 90 },
                ],
            },
            },{
            img: "assets/images/game3.jpg",
            details: {
                nameTeam1: "Team C",
                nameTeam2: "Team D",
                goalTeam1: 2,
                goalTeam2: 2,
                goalScorers1: [
                { name: "Player 5", minute: 15 },
                { name: "Player 6", minute: 37 },
                ],
            },
            }];

    return (
        <div> { gamesArray.map((game ,i)=>{
            return <GameContainer details={game.details} img={game.img} key={i}/>
        })}</div>
    )
}


