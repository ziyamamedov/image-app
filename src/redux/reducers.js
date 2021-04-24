import { combineReducers } from "redux";

const modal = {
  modalImages: [],
  isOpen: false,
  isLoading: true,
  currentImgIndex: null,
};
const imagesState = { images: [], isLoading: false };

function imagesReducer(state = imagesState, action) {
  switch (action.type) {
    case "SET_IMAGES":
      return { ...state, images: action.payload };
    case "TOGGLE_IMAGES_LOADING":
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
}

function modalReducer(state = modal, { type, payload }) {
  switch (type) {
    case "OPEN_MODAL_FROM_SERVER":
      return {
        ...state,
        modalImages: [...state.modalImages, payload.image],
        isOpen: true,
        isLoading: true,
        currentImgIndex: payload.index,
      };
    case "OPEN_MODAL_FROM_CACHE":
      return {
        ...state,
        isOpen: true,
        isLoading: true,
        currentImgIndex: payload,
      };
    case "CLOSE_MODAL":
      return { ...state, isOpen: false };
    case "TOGGLE_MODAL_LOADING":
      return { ...state, isLoading: !state.isLoading };
    case "ADD_COMMENT":
      let newState = { ...state };
      newState.modalImages[state.currentImgIndex].comments.push(payload);
      return newState;
    default:
      return state;
  }
}

function bigImageReducer(state = false, action) {
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
