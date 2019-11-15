export const CREATE_CHANGE_TITLE = "CREATE_CHANGE_TITLE";
export const CREATE_CHANGE_DESCRIPTION = "CREATE_CHANGE_DESCRIPTION";
export const CREATE_CHANGE_INGREDIENTS = "CREATE_CHANGE_INGREDIENTS";
export const CREATE_CHANGE_PREPARATION = "CREATE_CHANGE_PREPARATION";
export const CREATE_CHANGE_DURATION = "CREATE_CHANGE_DURATION";
export const CREATE_CHANGE_DATE = "CREATE_CHANGE_DATE";



export const setTitle = title => ({
    type: "CREATE_CHANGE_TITLE",
    payload: title
})
export const setDescription = description => ({
    type: "CREATE_CHANGE_DESCRIPTION",
    payload: description
})
export const setIngredients = ingredients => ({
    type: "CREATE_CHANGE_INGREDIENTS",
    payload: ingredients
})
export const setPreparation = preparation => ({
    type: "CREATE_CHANGE_PREPARATION",
    payload: preparation
})
export const setDuration = duration => ({
    type: "CREATE_CHANGE_DURATION",
    payload: duration
})
export const setDate = date => ({
    type: "CREATE_CHANGE_DATE",
    payload: date

})
