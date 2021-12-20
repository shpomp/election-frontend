export default () => {
  const root = document.querySelector(".root");

  fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=z7JV6Nh4HDwegGaxm3Zn65dthkpODSvy&q=election&limit=50&offset=0&rating=g&lang=en"
  )
    .then((response) => response.json())
    .then((giphyData) => {
      const giphyArray = giphyData.data;
      const random = Math.floor(Math.random() * 49) + 1;
      const image = document.createElement("img");
      root.appendChild(image);
      image.style.width = "60vw";
      image.setAttribute("src", giphyArray[random].images.original.url);
    });
};
