import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(); // Initialize tab content with a placeholder message
  // Add event listener for tab button click event and log the selected button to the console

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic)
  }
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {
            CORE_CONCEPTS.map((concept, index) => (
              <li key={index}>
                <CoreConcept {...concept} />
              </li>
            ))
          }
          
          
          /* <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]} />

          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul> */}
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <li>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </li>
        </menu>
        
          {!selectedTopic ? <p>please select a topic</p> :<div id="tab-content"> <h3>{ EXAMPLES[selectedTopic].title}</h3>
          <p> { EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>  </div> }
          

      
      </section>
      </main>
    </div>
  );
}

export default App;
