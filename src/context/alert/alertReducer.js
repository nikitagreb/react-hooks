import {ALERT_HIDE, ALERT_SHOW} from '../types'

const handlers = {
  [ALERT_SHOW]: (state, action) => action.payload,
  [ALERT_HIDE]: () => null,
  DEFAULT: state => state
}


export const alertReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}