export const SET_IMAGES = "SET_IMAGES";
export const TOGGLE_IMAGES_LOADING = "TOGGLE_IMAGES_LOADING";
export const OPEN_MODAL_FROM_SERVER = "OPEN_MODAL_FROM_SERVER";
export const OPEN_MODAL_FROM_CACHE = "OPEN_MODAL_FROM_CACHE";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const TOGGLE_MODAL_LOADING = "TOGGLE_MODAL_LOADING";
export const BIG_IMG_LOADED = "BIG_IMG_LOADED";
export const BIG_IMG_NOT_LOADED = "BIG_IMG_NOT_LOADED";
export const ADD_COMMENT = "ADD_COMMENT";
export const TOGGLE_RESPONSIVE = "TOGGLE_RESPONSIVE";

//Responsive toggling acton
export function toggleResponsive() {
  return { type: TOGGLE_RESPONSIVE };
}

//This action wil set initial images from server
export function setImages(images) {
  return { type: SET_IMAGES, payload: images };
}
//This will toggle loading animation on the image list
export function toggleImagesLoadingAction() {
  return { type: TOGGLE_IMAGES_LOADING };
}

/////////Modal actions///////
//This action opens a modal with image downloaded from server
export function openModalFromServerAction(image, index) {
  return { type: OPEN_MODAL_FROM_SERVER, payload: { image, index } };
}
//This will open modal with an image that had been previously opened
export function openModalFromCacheAction(index) {
  return { type: OPEN_MODAL_FROM_CACHE, payload: index };
}
//Closing Modal
export function closeModalAction() {
  return { type: CLOSE_MODAL };
}
//Enables and disables loading anim in modal
export function toggleModalLoadingAction() {
  return { type: TOGGLE_MODAL_LOADING };
}
//Disables loading anim on a big image
export function bigImgLoaded() {
  return { type: BIG_IMG_LOADED };
}
//Enables loading anim on a big image
export function bigImgNotLoaded() {
  return { type: BIG_IMG_NOT_LOADED };
}
//Adding a comment to the image
export function addCommentAction(comment) {
  return { type: ADD_COMMENT, payload: comment };
}

///ThunkCreators
export function getImagesFromServerThunk() {
  return function (dispatch) {
    dispatch(toggleImagesLoadingAction());

    fetch("https://boiling-refuge-66454.herokuapp.com/images")
      .then((response) => response.json())
      .then((images) => {
        dispatch(setImages(images));
        dispatch(toggleImagesLoadingAction());
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export const getBigImageDataThunk = (id, modalImages) => (dispatch) => {
  fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
    .then((response) => response.json())
    .then((image) => {
      dispatch(openModalFromServerAction(image, modalImages.length));
      dispatch(bigImgNotLoaded());
      dispatch(toggleModalLoadingAction());
    });
};
