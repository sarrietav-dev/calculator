import "./App.css";
import { CalcProvider } from "./components/context/CalcContext";
import NumPad from "./components/NumPad";
import Screen from "./components/Screen";

function App() {
    return (
        <CalcProvider>
            <div className="App">
                <div className="calculator">
                    <Screen />
                    <NumPad />
                </div>
            </div>
        </CalcProvider>
    );
}

export default App;
