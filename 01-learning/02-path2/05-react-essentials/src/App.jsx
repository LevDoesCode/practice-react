import { useState } from "react";
import { CORE_CONCEPTS as coreData } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import CoreConceptv2 from "./components/CoreConceptv2";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";

function App() {
    const [selectedTopic, setSelectTopic] = useState();

    function handleTabClick(selectedTab) {
        setSelectTopic(selectedTab);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

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
                <section id="examples">
                    <h2>Example</h2>
                    <menu>
                        <TabButton
                            isSelected={selectedTopic === "components"}
                            onClick={() => handleTabClick("components")}
                        >
                            Components
                        </TabButton>
                        <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleTabClick("jsx")}>
                            JSX
                        </TabButton>
                        <TabButton isSelected={selectedTopic === "props"} onClick={() => handleTabClick("props")}>
                            Props
                        </TabButton>
                        <TabButton isSelected={selectedTopic === "state"} onClick={() => handleTabClick("state")}>
                            State
                        </TabButton>
                    </menu>
                    {!selectedTopic ? (
                        <p>Please select a topic.</p>
                    ) : (
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    )}
                    {!selectedTopic && <p>Please select a topic.</p>}
                    {selectedTopic && (
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    )}
                    {tabContent}
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
