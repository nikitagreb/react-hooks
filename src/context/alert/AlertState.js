import React, {useReducer} from 'react'
import {AlertContext} from './AlertContext'
import {alertReducer} from './alertReducer'
import {ALERT_HIDE, ALERT_SHOW} from '../types'

export const AlertState = ({children}) => {
  const [state, dispatch] = useReducer(alertReducer, null)

  const hide = () => dispatch({type: ALERT_HIDE})

  const show = (text, type ='secondary') => {
    dispatch({
      type: ALERT_SHOW,
      payload: {type, text}
    })
  }

  return (
    <AlertContext.Provider value={{
      hide, show, alert: state
    }}>
      {children}
    </AlertContext.Provider>
  )
}