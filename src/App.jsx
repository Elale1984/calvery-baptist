import './App.css';
import { useTheme } from "./contexts/Theme/Theme.context";

const App = () => {
  const { theme } = useTheme();
  console.log(theme);
  return (
      <div className="App">

      </div>
  );
};

export default App;