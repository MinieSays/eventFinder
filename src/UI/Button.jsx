import React from 'react'

const Button = ({name, href}) => {
  return (
    <>
    <a href={href} target="_blank" rel='noreferrer'>
    <button className="general__btn">{name}</button>
    </a>
    </>
  )
}

export default Button