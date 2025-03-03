import Youtube from "./Youtube";

function App() {
  const useNmae = "Monika"
  return (
    <>
      <h1>Vite react app {2+2}</h1>
      <h1>Vite react app</h1>
      <h1>Vite react app {useNmae}</h1>
      {/* Whatever we write inside the {} it should be evaluated expresion */}
      <Youtube />
    </>
  );
}

export default App;
