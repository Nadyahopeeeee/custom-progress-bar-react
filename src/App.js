import './App.css';
import './components//ProgressBar';
import ProgressBarReact from './components/ProgressBarReact';

export default function App() {
  return (
    <div className="App">
      <h1>Прогресс бар</h1>
      <h2>Версия 1</h2>
      <progress-bar></progress-bar>
      <h2>Версия 2</h2>
      <ProgressBarReact />
    </div>
  );
}
