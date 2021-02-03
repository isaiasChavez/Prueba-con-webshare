import logo from './logo.svg';
import './App.css';

function App() {

  const shareData = {
  title: 'Holaaa',
  text: 'Compartemeeee!',
}


  const compartir = async () =>{

    var image = document.createElement("img");
    image.src = "/logo192.png";
    shareData.files = [image]

    let mensaje = navigator.canShare ? 'si' :'no'
    alert("Can share?",mensaje)

    try {
      await navigator.share(shareData)
      
    } catch (error) {
      alert("Error",error.message)
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
