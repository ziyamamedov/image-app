//This action wil set initial images from server
export function setImages(images) {
  return { type: "SET_IMAGES", payload: images };
}
export function openModalAction(image) {
  return { type: "OPEN_MODAL", payload: image };
}
export function closeModalAction() {
  return { type: "CLOSE_MODAL" };
}
export function toggleImagesLoadingAction() {
  return { type: "TOGGLE_IMAGES_LOADING" };
}
export function toggleModalLoadingAction() {
  return { type: "TOGGLE_MODAL_LOADING" };
}
export function bigImgLoaded() {
  return { type: "BIG_IMG_LOADED" };
}
export function bigImgNotLoaded() {
  return { type: "BIG_IMG_NOT_LOADED" };
}
