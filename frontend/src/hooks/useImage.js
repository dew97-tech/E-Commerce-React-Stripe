const useImage = (url) => {
   const imageUrl = import.meta.env.VITE_STRAPI_UPLOADS_URL + url;
   return imageUrl;
};
export default useImage;
