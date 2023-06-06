import React from 'react'

function Contact() {
  return (
    <div className='contact' id='contact'>
      <main>
        <h1>Contact</h1>
        <form>
          <div>
            <label>Name</label>
            <input type='text' placeholder='name' />
          </div>
          <div>
            <label>Email</label>
            <input type='email' placeholder='email' />
          </div>
          <div>
            <label>Message</label>
            <input type='text' placeholder='Tell us about your query....' />
          </div>
          <button type='submit'>Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact