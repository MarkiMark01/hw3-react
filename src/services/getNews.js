const BASE_URL = 'https://pixabay.com/api/?';
const API_KEY = '28032736-ad36f6ce87d03da58a29c5b67';

export const getNews = (searchText, page) => {
    return fetch(`${BASE_URL}key=${API_KEY}&q=${searchText}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    )
}