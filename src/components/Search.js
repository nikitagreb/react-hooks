import React, {useContext, useState} from 'react'
import {AlertContext} from '../context/alert/AlertContext'

export const Search = () => {
  const [value, setValue] = useState()
  const {show, hide} = useContext(AlertContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return
    }

    if (event.target.value.trim()) {
      console.log('Make request with: ', value)
      hide()
    } else {
      show('Введите данные пользователя', 'warning')
    }
  }

  return (
    <div className="form-group pb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя"
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
}

