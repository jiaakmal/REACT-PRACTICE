

import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

const reactDescriptions=['Fundamental','Core','Crucial'];
function getRandomInt(max){
  return Math.floor( Math.random() * (max + 1));
}


function CoreConcept(){
  return(
    <li>
      <img src="..." alt="..." />
      <h3>title</h3>
      <p>description</p>
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
          title="Components"
          description="A reusable piece of code that encapsulates UI logic"
          img={componentsImg}
          />
          <CoreConcept/>
          <CoreConcept/>
          <CoreConcept/>

        </ul>
      </section>
    </div>
  );
}

export default App;
