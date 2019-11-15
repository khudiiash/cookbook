import { CREATE_CHANGE_TITLE, CREATE_CHANGE_DESCRIPTION, CREATE_CHANGE_INGREDIENTS, CREATE_CHANGE_PREPARATION, CREATE_CHANGE_DURATION, CREATE_CHANGE_DATE} from './actions'

const defaultState = {
  title: '', 
  description: '', 
  ingredients: [], 
  preparation: '', 
  duration: 0, 
  date: new Date(), 
}

export const createReducer = (state = defaultState, {type, payload }) => {
    switch (type) {
      case CREATE_CHANGE_TITLE:
        return {
          ...state,
            title: payload.title, 
        }
      case CREATE_CHANGE_DESCRIPTION:
        return {
          ...state,
            description: payload.description, 
        }
      case CREATE_CHANGE_INGREDIENTS:
        return {
          ...state,
            ingredients: payload.ingredients, 
        }
      case CREATE_CHANGE_PREPARATION:
        return {
          ...state,
            preparation: payload.preparation, 
        }
      case CREATE_CHANGE_DURATION:
        return {
          ...state,
            duration: payload.duration, 
        }
      case CREATE_CHANGE_DATE:
        return {
          ...state,
            date: payload.date, 
        }
      
      default:
        return state
    }
  }
  