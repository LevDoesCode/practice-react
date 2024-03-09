import reactImg from "./assets/react-core-concepts.png";
import componetsImg from "./assets/components.png";
import stateImg from "./assets/state-mgmt.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Header() {
    const randomIndex = genRandomInt(reactDescriptions.length);
    const word = reactDescriptions[randomIndex];
    console.log(randomIndex, word);

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>{word} React concepts you will need for almost any app you are going to build!</p>
        </header>
    );
}

function CoreConcept(props) {
    return (
        <li>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept
                            title="Components"
                            description="The Core UI building block."
                            image={componetsImg}
                        />
                        <CoreConcept
                            title="Components"
                            description="The Core UI building block."
                            image={componetsImg}
                        />
                        <CoreConcept
                            title="Components"
                            description="The Core UI building block."
                            image={componetsImg}
                        />
                        <CoreConcept
                            title="Components"
                            description="The Core UI building block."
                            image={componetsImg}
                        />
                    </ul>
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
