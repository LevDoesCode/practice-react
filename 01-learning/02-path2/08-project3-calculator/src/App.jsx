import Header from "./components/Header";
import UserInput from "./components/UserInput";

const title = "Investment Calculator";

function App() {
    return (
        <>
            <Header title={title} />
            <UserInput />
        </>
    );
}

export default App;
