import axios from "../../utils/axios";

export const getVideos = async (tags, search) => {
  let queryString = "";
  // filtering by tags and search
  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`; // here q is a search query parameter
  }
  console.log(queryString);
   const response = await axios.get(`/videos?${queryString}`);

  return response.data;
};
