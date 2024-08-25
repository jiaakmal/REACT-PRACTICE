
import { CORE_CONCEPTS } from "../data.js";
import CoreConcept  from "CoreConcept/CoreConcept.jsx";

export default function CoreConcepts(){
return(
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
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul> */
      </section>);
}