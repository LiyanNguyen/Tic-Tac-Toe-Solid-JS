import type { Component } from 'solid-js';
import { For, createSignal, Show } from 'solid-js';
import styles from './App.module.css';
import tileStyles from './components/tile.module.css';
import BoardHeader from './components/BoardHeader';
import BoardFooter from './components/BoardFooter';
import Tile from './components/Tile';
import Modal from './components/Modal';

const App: Component = () => {
  // 0 is blank, 1 is taken by X, 2 is taken by O
  const [boardArray, setBoardArray] = createSignal([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [xTurn, setXTurn] = createSignal(true)
  const [XScore, setXScore] = createSignal(0)
  const [YScore, setYScore] = createSignal(0)
  const [TieScore, setTieScore] = createSignal(0)
  const [openModal, setOpenModal] = createSignal(false)
  // 0 if tie, 1 if X wins, 2 if O wins, 3 if restarting game
  const [modalCondition, setModalCondition] = createSignal(3)
  const [amountOfTilesTaken, setAmountOfTilesTaken] = createSignal(0)

  const showTieModal = () => {
    setTieScore(prev => prev + 1)
    setModalCondition(0)
    setOpenModal(true)
  }

  const showXWonModal = () => {
    setXScore(prev => prev + 1)
    setAmountOfTilesTaken(0)
    setModalCondition(1)
    setOpenModal(true)
  }

  const showOWonModal = () => {
    setYScore(prev => prev + 1)
    setAmountOfTilesTaken(0)
    setModalCondition(2)
    setOpenModal(true)
  }

  const showRestartModal = () => {
    setModalCondition(3)
    setOpenModal(true)
  }

  const resetScores = () => {
    setXScore(0)
    setYScore(0)
    setTieScore(0)
  }

  const playNextRound = () => {
    setBoardArray([])
    setBoardArray([0, 0, 0, 0, 0, 0, 0, 0, 0])
    setAmountOfTilesTaken(0)
    setOpenModal(false)
    setXTurn(true)
  }

  // 
  const winningCombinations = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    setAmountOfTilesTaken(prev => prev + 1)
    // Iterate through all winning combinations and check if any of them have the same value
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (boardArray()[a] !== 0 && boardArray()[a] === boardArray()[b] && boardArray()[b] === boardArray()[c]) {
        // We have a winner
        if (boardArray()[a] === 1) showXWonModal()
        else if (boardArray()[a] === 2) showOWonModal()
      }
    }
    // Check for a tie
    if (amountOfTilesTaken() === 9) showTieModal()
  }
  
  return (
    <div class={styles.container}>
      <BoardHeader xTurn={xTurn()} showRestartModal={showRestartModal} />
      <Show when={openModal()}>
        <Modal
          setOpenModal={setOpenModal}
          resetScores={resetScores}
          playNextRound={playNextRound}
          modalCondition={modalCondition()}
        />
      </Show>
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
