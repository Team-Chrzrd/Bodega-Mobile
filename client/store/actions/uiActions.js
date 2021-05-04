//Action creator to toggle between shopping & pantry tabs
export const TOGGLE_TABS = "TOGGLE_TABS";
export const toggleTabs = (displayShopping, displayPantry) => ({
  type: TOGGLE_TABS,
  payload: { displayShopping, displayPantry },
});

//Action creator to display modals
export const DISPLAY_EDITOR = "DISPLAY_EDITOR";
export const displayEditor = (displayModal, isEdit) => ({
  type: DISPLAY_EDITOR,
  payload: { displayModal, isEdit },
});
