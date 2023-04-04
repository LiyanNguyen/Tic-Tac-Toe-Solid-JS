import type { Component } from 'solid-js';
import { For, createSignal } from 'solid-js';
import styles from './App.module.css';
import tileStyles from './components/tile.module.css';
import BoardHeader from './components/BoardHeader';
import BoardFooter from './components/BoardFooter';
import Tile from './components/Tile';
import Modal from './components/Modal';

const App: Component = () => {
  const [boardArray, setBoardArray] = createSignal([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [xTurn, setXTurn] = createSignal(true)
  const [XScore, setXScore] = createSignal(0)
  const [YScore, setYScore] = createSignal(0)
  const [TieScore, setTieScore] = createSignal(0)

  const resetBoard = () => {
    setBoardArray([])
    setBoardArray([0, 0, 0, 0, 0, 0, 0, 0, 0])
    console.log("reset:",boardArray())
  }

  const checkWinner = () => {
    // WIP
    if (boardArray()[0] === boardArray()[1] && boardArray()[2]) {
      setXScore(prev => prev + 1)
      // END THE GAME
      // PUT THE MODAL IN FRONT
    }
  }
  
  return (
    <div class={styles.container}>
      <BoardHeader xTurn={xTurn()} resetBoard={resetBoard} />
      <Modal/>
      <div class={tileStyles.gameBoard}>
        <For each={boardArray()}>
          {(value, index) => <Tile
            xTurn={xTurn()}
            setXTurn={setXTurn}
            boardArray={boardArray()}
            tileValue={value}
            tileIndex={index()}
            checkWinner={checkWinner}
          />}
        </For>
      </div>
      <BoardFooter XScore={XScore()} YScore={YScore()} TieScore={TieScore()} />
    </div>
  );
};

export default App;
