import './App.css';
import './components/ProgressBar';

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       'progress-bar': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//     }
//   }
// }

export default function App() {
  return (
    <div className="App">
      <progress-bar></progress-bar>
    </div>
  );
}
