import React from 'react'

const ContactForm = () => {
  return (
                    <form action="" className="contact__page--form">
                    <label htmlFor="" className="contact__page--label">Name</label>
                    <input type="text" placeholder="" className="contact__page--input" />
                    <label htmlFor="" className="contact__page--label">Email</label>
                    <input type="email" placeholder="" className="contact__page--input" />
                    <label htmlFor="" className="contact__page--label">Message</label>
                    <textarea name="" id="" className="contact__page--text-area"></textarea>
                    <button className="contact__btn">Submit</button>
                </form>

  )
}

export default ContactForm