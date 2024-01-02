import React from 'react'

const Postpopup = ({closeModal}) => {
  return (
    <>
    <div className='modal-wrapper' onClick={closeModal}></div>
        <div className='modal-container'>
            <div className='close'>
            <button onClick={closeModal}>X</button>
            </div>
        
            <div className="modal-form">
            <input type='textarea' placeholder='tell us about u'></input>
            <span>choose an image to upload</span>
                <input type='file'></input>
            <span>choose an video to upload</span>
                <input type='file'></input>
            </div>
            <div className='upload'>
                <button type='submit' onClick={closeModal} >Submit</button>
            </div>
        </div>
    </>
  )
}

export default Postpopup