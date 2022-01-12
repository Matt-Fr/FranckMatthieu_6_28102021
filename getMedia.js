import { api } from "./api.js";

//obtenir les médias à partir de l'api et de l'ID du photographe
export const getMedia = async () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlSearchParams.get("id"));
  const data = await api();
  const media = data.media;

  const selectedMedia = media.filter((media) => media.photographerId === id);

  return selectedMedia;
};
