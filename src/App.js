import Account from "./components/Account";
import './App.css'

export default function App() {
  return (
    <div className="App">
      <Account title="Checking" account="checking" />
      <Account title="Savings" account="savings" />
    </div>
  );
}

