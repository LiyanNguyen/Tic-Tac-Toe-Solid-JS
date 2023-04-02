import type { Component } from 'solid-js';
import styles from './App.module.css';
import GameBoard from './components/GameBoard';
import BoardHeader from './components/BoardHeader';
import BoardFooter from './components/BoardFooter';

const App: Component = () => {
  return (
    <div class={styles.container}>
      <BoardHeader/>
      <GameBoard />
      <BoardFooter/>
    </div>
  );
};

export default App;
