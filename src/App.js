import "./App.css";
import NumPad from "./components/NumPad";
import Screen from "./components/Screen";

function App() {
    return (
        <div className="App">
            <div className="calculator">
                <Screen />
                <NumPad />
            </div>
        </div>
    );
}

export default App;
