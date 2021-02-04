import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App () {
  const initiaState = {
    imagenes: null
  }
  const [stateFormBazar, setStateFormBazar] = useState(initiaState)
  const { imagenes } = stateFormBazar
  const compartir = async () => {
    console.log(imagenes[0], typeof imagenes[0])
    const shareData = {
      files: imagenes,
      title: 'Pictures',
      text: 'Our Pictures.'
    }
    try {
      await navigator.share(shareData)
    } catch (error) {
      alert('Error', error.message)
      console.log(error)
    }
  }

  const onInputFormChange = e => {
    if (e.target.name === 'imagenes') {
      setStateFormBazar({
        ...stateFormBazar,
        [e.target.name]: e.target.files
      })
      return
    }
    setStateFormBazar({ ...stateFormBazar, [e.target.name]: e.target.value })
  }

  return (
    <div className='App'>
      <div>
        <h1>Comparte esta foto</h1>
        <img src='/logo192.png' alt='asdf' />
      </div>

      <div className='input-group my-5 '>
        <div className='custom-file'>
          <input
            type='file'
            accept='image/gif, image/png, image/jpeg'
            className='custom-file-input'
            id='inputGroupFile01'
            aria-describedby='inputGroupFileAddon01'
            name='imagenes'
            onChange={onInputFormChange}
            multiple
          />
          <label className='custom-file-label' htmlFor='inputGroupFile01'>
            {stateFormBazar.imagenes ? (
              <div className=''>
                {stateFormBazar.imagenes.length > 3 ? (
                  <p className='text-danger'>
                    No puedes seleccionar mas de 3 imagenes
                  </p>
                ) : (
                  <p>
                    {stateFormBazar.imagenes.length} de 3 imagenes seleccionadas
                  </p>
                )}
              </div>
            ) : (
              'seleccione 3 imagenes'
            )}
          </label>
        </div>
      </div>
      <button onClick={compartir} className='btn btn-primary btn-lg'>
        Compartir
      </button>
    </div>
  )
}

export default App
