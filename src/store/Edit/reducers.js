import { EDIT_CHANGE_TITLE, EDIT_CHANGE_DESCRIPTION, EDIT_CHANGE_INGREDIENTS, EDIT_CHANGE_PREPARATION, EDIT_CHANGE_DURATION, EDIT_CHANGE_DATE } from './actions'

const defaultState = {
  title: '', 
  description: '', 
  ingredients: [], 
  preparation: '', 
  duration: 0, 
  date: new Date(), 
}

export const editReducer = (state = defaultState, {type, payload }) => {

      switch (type) {
        case EDIT_CHANGE_TITLE:
          return {
            ...state,
              title: payload.title, 
          }
        case EDIT_CHANGE_DESCRIPTION:
          return {
            ...state,
              description: payload.description, 
          }
        case EDIT_CHANGE_INGREDIENTS:
          return {
            ...state,
              ingredients: payload.ingredients, 
          }
        case EDIT_CHANGE_PREPARATION:
          return {
            ...state,
              preparation: payload.preparation, 
          }
        case EDIT_CHANGE_DURATION:
          return {
            ...state,
              duration: payload.duration, 
          }
        case EDIT_CHANGE_DATE:
          return {
            ...state,
              date: payload.date, 
          }
        default:
          return state
      }
  }
  