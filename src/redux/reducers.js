import { combineReducers } from "redux";
import {
  ADD_COMMENT,
  BIG_IMG_LOADED,
  BIG_IMG_NOT_LOADED,
  CLOSE_MODAL,
  OPEN_MODAL_FROM_CACHE,
  OPEN_MODAL_FROM_SERVER,
  SET_IMAGES,
  TOGGLE_IMAGES_LOADING,
  TOGGLE_MODAL_LOADING,
  TOGGLE_RESPONSIVE,
} from "./actions";

const modal = {
  modalImages: [],
  isOpen: false,
  isLoading: true,
  currentImgIndex: null,
};
const imagesState = { images: [], isLoading: false };

const responsiveState = {
  phones: window.matchMedia("(max-width: 480px)").matches,
  tablets: window.matchMedia("(max-width: 767px) and (min-width: 481px)")
    .matches,
  desktop: window.matchMedia("(min-width: 768px)").matches,
};

function imagesReducer(state = imagesState, action) {
  switch (action.type) {
    case SET_IMAGES:
      return { ...state, images: action.payload };
    case TOGGLE_IMAGES_LOADING:
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
}

function modalReducer(state = modal, { type, payload }) {
  switch (type) {
    case OPEN_MODAL_FROM_SERVER:
      return {
        ...state,
        modalImages: [...state.modalImages, payload.image],
        isOpen: true,
        isLoading: true,
        currentImgIndex: payload.index,
      };
    case OPEN_MODAL_FROM_CACHE:
      return {
        ...state,
        isOpen: true,
        isLoading: true,
        currentImgIndex: payload,
      };
    case CLOSE_MODAL:
      return { ...state, isOpen: false };
    case TOGGLE_MODAL_LOADING:
      return { ...state, isLoading: !state.isLoading };
    case ADD_COMMENT:
      let newState = { ...state };
      newState.modalImages[state.currentImgIndex].comments.push(payload);
      return newState;
    default:
      return state;
  }
}

function bigImageReducer(state = false, action) {
  switch (action.type) {
    case BIG_IMG_LOADED:
      return true;
    case BIG_IMG_NOT_LOADED:
      return false;
    default:
      return state;
  }
}

function responsiveReducer(state = responsiveState, action) {
  switch (action.type) {
    case TOGGLE_RESPONSIVE:
      return {
        phones: window.matchMedia("(max-width: 480px)").matches,
        tablets: window.matchMedia("(max-width: 767px) and (min-width: 481px)")
          .matches,
        desktop: window.matchMedia("(min-width: 768px)").matches,
      };
    default:
      return state;
  }
}

export const allReducers = combineReducers({
  imagesState: imagesReducer,
  modal: modalReducer,
  bigImage: bigImageReducer,
  responsive: responsiveReducer,
});
