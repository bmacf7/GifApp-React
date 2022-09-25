export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=VrNQZ2KCgjvNIo3rx3n2bsNlQ2DSSs4r&q=${category}&limit=10`;
  try {
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    console.log(gifs);
    return gifs;
  } catch (e) {
    console.log(e);
  }
};
