import logo from './logo.svg'
import './App.css'

function App () {
  const files = ['https://expobebe.fra1.digitaloceanspaces.com/macrotextura_1280.png']

  const shareData = {
    files,
    title: 'Esta es una prueba de compartir',
    text: 'Compartemeeeee'
  }

  const compartir = async () => {
    try
    {
      alert(navigator.canShare)

      if( navigator.canShare )
      {
        alert("HOla")
        navigator
          .share(shareData)
          .then(() => console.log('Share was successful.'))
          .catch(error => console.log('Sharing failed', error))
      } else {
        alert(`Your system doesn't support sharing files.`)
      }
    } catch (error) {
      alert('Error',error.message)
      console.log(error)
    }
  }

  return (
    <div className='App'>
      <div>
        <h1>Comparte esta foto</h1>
        <img src='/logo192.png' alt='asdf' />
      </div>
      <button onClick={compartir} class='btn btn-primary btn-lg'>
        Compartir
      </button>
    </div>
  )
}

export default App
