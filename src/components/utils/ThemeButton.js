import React from 'react'

export default function ThemeButton(props) {
  const theme = props.theme ? `btn-${props.theme}` : props.theme
  const classes = ['btn', theme, props.className].filter(n => n).join(' ')

  const handleClick = evt => {
    if (props.onClick) {
      props.onClick(evt)
    }
  }

  return (
    <button
      className={classes}
      disabled={props.disabled}
      onClick={handleClick}
    >
      {props.children}
    </button>
  )
}
