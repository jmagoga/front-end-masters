//pop up modal dialog

//pops on your screen -- are you sure you wanna do this?
  
//editar para esse div do modal ficar por cima da tela, e escurecer o background, assim como fez o Brian
//https://reactjs.org/docs/portals.html

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

  
  
  
  
  
//exemplo de modal massa https://codeburst.io/reacts-portals-in-3-minutes-9b2efb74e9a9
  Pug Stylus BabelResult
EDIT ON
const { React, ReactDOM } = window
const { useState, Fragment } = React
const { createPortal, render } = ReactDOM
const Outsider = () => createPortal(<h1>Hello</h1>, document.body)


const Modal = ({ children, onClose, open }) =>
  open ?
    createPortal(
      <div className='modal'>
        <button onClick={onClose} className='modal__close'>&times;</button>
        {children}
      </div>,
    document.body)
    : null

const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <Fragment>
    <button onClick={() => setOpen(!open)}>Show Modal?</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        Test Modal
      </Modal>
    </Fragment>
  )
}
  

render(<App/>, document.getElementById('app'))
View Compiled

Resources1×0.5×0.25×Rerun
  
  
  
  
  Pug Stylus BabelResult
EDIT ON
#app
  min-height 100vh
  background #663399
  display flex
  align-items center
  justify-content center
  
button
  padding 8px 16px
  border-radius 4px
  
  
.modal
  position fixed
  top 50%
  left 50%
  transform translate(-50%, -50%) scale(0)
  animation show .25s ease forwards
  z-index 2
  background #fafafa
  padding 1rem
  min-height 200px
  min-width 200px
  display flex
  align-items center
  justify-content center
  
  
  &__close
    position absolute
    top 4px
    right 4px
    font-size 1.25rem
    font-weight bold
  
@keyframes show
  to
    transform translate(-50%, -50%) scale(1)
View Compiled

Resources1×0.5×0.25×Rerun
