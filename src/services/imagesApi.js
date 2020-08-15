import axios from "axios";

const fetchArticleWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=16992764-8af42002c4860ee5a456b1bc1&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};
export default { fetchArticleWithQuery };
