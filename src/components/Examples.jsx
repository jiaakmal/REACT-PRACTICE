import React from "react";
import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data.js";

export default function Examples(){

    const [selectedTopic, setSelectedTopic] = useState(); // Initialize tab content with a placeholder message
    // Add event listener for tab button click event and log the selected button to the console
  
    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
      console.log(selectedTopic)
    }

    return(
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
          

      
      </section>);
}