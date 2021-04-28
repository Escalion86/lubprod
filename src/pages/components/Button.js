import React from 'react'

import './Button.css'

const Button = ({
  style = {},
  href = '#',
  name = '',
  fontSize = 36,
  fontWeight = 700,
  imgSrc = null,
  imgW = 0,
  imgH = 0,
  imgAlt = '',
  className = null,
  download = false,
}) => {
  return (
    <a
      href={href}
      className={
        'button flex flex-row justify-center items-center' +
        (className ? ' ' + className : '')
      }
      style={{ ...style }}
      download={download}
    >
      {imgSrc ? (
        <img
          className="object-fill mx-1"
          style={{ height: imgH, width: imgW, minWidth: imgW }}
          src={imgSrc}
          alt={imgAlt}
        />
      ) : null}
      <div
        style={{ fontWeight: fontWeight, fontSize: fontSize, color: '#000' }}
      >
        {name}
      </div>
    </a>
  )
}

export default Button
