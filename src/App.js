import logo from './logo.svg';
import './App.css';

function App() {

  const shareData = {
  title: 'MDN',
  text: 'Learn web development on MDN!',
  url: 'https://developer.mozilla.org',
}


  const compartir = async () =>{
    try {
      await navigator.share(shareData)
      
    } catch (error) {
      alert("Error")
      console.log(error);
    }
  }


  return (
    <div className="App">

      <div>
        <h1>Comparte esta foto</h1>    
        <img src="/logo192.png" alt="asdf"/>
      </div>
      <button onClick={compartir} class="btn btn-primary btn-lg">Compartir</button>
    
    </div>
  );
}

export default App;
