import CoreConcept from "./CoreConcept/CoreConcept"
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";


export default function CoreConcepts(){
return(
<Section title="Core Concepts" id="core-concepts">
  
        <ul>
          {
            CORE_CONCEPTS.map((concept, index) => (
              <li key={index}>
                <CoreConcept {...concept} />
              </li>
            ))
          }
          
          
           {/* <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} /> */}
        </ul> 
      </Section>);
}