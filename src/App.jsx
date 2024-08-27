import CoreConcepts from "./components/coreConcepts";
import Header from "./components/Header/Header"
import Examples from "./components/Examples"


function App() {
  
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
