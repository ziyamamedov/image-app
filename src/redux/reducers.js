import { combineReducers } from "redux";

const modal = { id: 0, url: "", comments: [], isOpen: false, isLoading: true };
const imagesState = { images: [], isLoading: false };

export function imagesReducer(state = imagesState, action) {
  switch (action.type) {
    case "SET_IMAGES":
      return { ...state, images: action.payload };
    case "TOGGLE_IMAGES_LOADING":
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
}

export function modalReducer(state = modal, { type, payload }) {
  switch (type) {
    case "OPEN_MODAL":
      return { ...payload, isOpen: true, isLoading: true };
    case "CLOSE_MODAL":
      return { ...state, isOpen: false };
    case "TOGGLE_MODAL_LOADING":
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
}

export function bigImageReducer(state = false, action) {
  switch (action.type) {
    case "BIG_IMG_LOADED":
      return true;
    case "BIG_IMG_NOT_LOADED":
      return false;
    default:
      return state;
  }
}

export const allReducers = combineReducers({
  imagesState: imagesReducer,
  modal: modalReducer,
  bigImage: bigImageReducer,
});
