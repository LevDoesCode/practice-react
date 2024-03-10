//import reactImg from "../src/assets/reac
import reactImg from "../assets/react-core-concepts.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Header() {
    const randomIndex = genRandomInt(reactDescriptions.length);
    const word = reactDescriptions[randomIndex];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>{word} React concepts you will need for almost any app you are going to build!</p>
        </header>
    );
}

export default Header;
