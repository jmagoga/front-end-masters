//pop up modal dialog

//pops on your screen -- are you sure you wanna do this?
  
//editar para esse div do modal ficar por cima da tela, e escurecer o background, assim como fez o Brian

import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

//we're not trapping focus. google how to trap focus on a modal. necessary

const Modal = ({ children }) => {
    //always refer to the same element
    //to destroy the modal, clean up own garbage
    //you have to refer to the same dom elements across renders
    const elRef = useRef(null)
    if (!elRef.current) {
        //using this hook, I'm always going to have the correct div
        const div = document.createElement('div')
        div.className = 'modalDiv'
        //.current will be always pointing at this div
        elRef.current = div
    }

    //when this renders for the first time
    //if you return a function from useEffect that's the return function (compoenentWillUnmount)
    useEffect(() => {
        const modalRoot = document.getElementById('modal');
        modalRoot.appendChild(elRef.current)

        //runs when the modal gets closed
        return () => modalRoot.removeChild(elRef.current)
    }, [])

    //just wrapping it with a div because that's how it's been styled
    return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal
                        
                        
                        

               
                        
                        
                        //AI NO OUTRO COMPONENTE
                        
                        
import Modal from './Modal'
const [showModal, setShowModal] = useState(false)
<button onClick={() => toggleModal()}>Pop up Modal</button>
              {                                                                             //talvez tirar a chamada de toggle
                showModal ?
                  <Modal> 
                    <div> 
                      <h1>Texto de dentro do Modal</h1>
                      <button onClick={() => toggleModal()}> Fechar Modal </button> 
                    </div> 
                  </Modal> 
                : null
              }
  
  
  
  
  
  
  
  
  
  
  
  
  //aqui fazer ela ficar por cima da outra div, mostrando um pop up
.modalDiv {
  background-color: yellow;
}
