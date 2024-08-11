import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';

const reactDescriptions=['Fundamental','Core','Crucial'];
function getRandomInt(max){
  return Math.floor( Math.random() * (max + 1));
}


function CoreConcept({image,title,description}){
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function Header(){
  const description =reactDescriptions[getRandomInt(2)] ;
  return(
  <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
  </header> 
  );
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept
          {...CORE_CONCEPTS[1]}
          />
          <CoreConcept
          {...CORE_CONCEPTS[2]}
          />
          <CoreConcept
            {...CORE_CONCEPTS[3]}
          /> 

          

        </ul>
      </section>
    </div>
  );
}

export default App;
