export const EDIT_CHANGE_TITLE = "EDIT_CHANGE_TITLE";
export const EDIT_CHANGE_DESCRIPTION = "EDIT_CHANGE_DESCRIPTION";
export const EDIT_CHANGE_INGREDIENTS = "EDIT_CHANGE_INGREDIENTS";
export const EDIT_CHANGE_PREPARATION = "EDIT_CHANGE_PREPARATION";
export const EDIT_CHANGE_DURATION = "EDIT_CHANGE_DURATION";
export const EDIT_CHANGE_DATE = "EDIT_CHANGE_DATE";


export const setTitle = title => ({
    type: "EDIT_CHANGE_TITLE",
    payload: title
})
export const setDescription = description => ({
    type: "EDIT_CHANGE_DESCRIPTION",
    payload: description
})
export const setIngredients = ingredients => ({
    type: "EDIT_CHANGE_INGREDIENTS",
    payload: ingredients
})
export const setPreparation = preparation => ({
    type: "EDIT_CHANGE_PREPARATION",
    payload: preparation
})
export const setDuration = duration => ({
    type: "EDIT_CHANGE_DURATION",
    payload: duration
})
export const setDate = date => ({
    type: "EDIT_CHANGE_DATE",
    payload: date
})
