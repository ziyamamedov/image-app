//This action wil set initial images from server
export function setImages(images) {
  return { type: "SET_IMAGES", payload: images };
}
//This will toggle loading animation on the image list
export function toggleImagesLoadingAction() {
  return { type: "TOGGLE_IMAGES_LOADING" };
}

/////////Modal actions///////
//This action opens a modal with image downloaded from server
export function openModalFromServerAction(image, index) {
  return { type: "OPEN_MODAL_FROM_SERVER", payload: { image, index } };
}
//This will open modal with an image that had been previously opened
export function openModalFromCacheAction(index) {
  return { type: "OPEN_MODAL_FROM_CACHE", payload: index };
}
//Closing Modal
export function closeModalAction() {
  return { type: "CLOSE_MODAL" };
}
//Enables and disables loading anim in modal
export function toggleModalLoadingAction() {
  return { type: "TOGGLE_MODAL_LOADING" };
}
//Disables loading anim on a big image
export function bigImgLoaded() {
  return { type: "BIG_IMG_LOADED" };
}
//Enables loading anim on a big image
export function bigImgNotLoaded() {
  return { type: "BIG_IMG_NOT_LOADED" };
}
//Adding a comment to the image
export function addCommentAction(comment) {
  return { type: "ADD_COMMENT", payload: comment };
}
