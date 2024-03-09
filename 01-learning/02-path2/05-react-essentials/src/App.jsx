import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS as coreData } from "./data";

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

function CoreConcept(props) {
    return (
        <li>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
}

function CoreConceptv2({ image, title: title_xl, description }) {
    return (
        <li>
            <img src={image} alt={title_xl} />
            <h3>{title_xl}</h3>
            <p>{description}</p>
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
                            title={coreData[0].title}
                            description={coreData[0].description}
                            image={coreData[0].image}
                        />
                        <CoreConcept
                            title={coreData[1].title}
                            description={coreData[1].description}
                            image={coreData[1].image}
                        />
                        <CoreConcept
                            title={coreData[2].title}
                            description={coreData[2].description}
                            image={coreData[2].image}
                        />
                        <CoreConcept
                            title={coreData[3].title}
                            description={coreData[3].description}
                            image={coreData[3].image}
                        />
                    </ul>
                    <h2>Using the Spread Operator</h2>
                    <ul>
                        <CoreConcept {...coreData[0]} />
                        <CoreConcept {...coreData[1]} />
                        <CoreConcept {...coreData[2]} />
                        <CoreConceptv2 {...coreData[3]} />
                    </ul>
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
