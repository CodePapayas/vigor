import axios from 'axios';

const API_BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = import.meta.env.VUE_APP_GGLB_API_KEY;

export default {
	  async searchBooks(query) {
		  try {
			  const response = await axios.get(API_BASE_URL, {
				  params: {
					  q: querry,
					  key: API_KEY,
					  maxResults:5
				  }
			  });
		
			  return response.data.items.map(book => ({
				  title: book.volumeInfo.title,
				  coverUrl: book.volumeInfo.imageLinks?.thumbnail || '',
				  authors: book.volumeInfo.authors?.join(', ') || 'Unkown Auther'
			  }));
		  } catch (error) {
			  console.error('Error fetching books:', error);
                          return [];
		}
	}
}
