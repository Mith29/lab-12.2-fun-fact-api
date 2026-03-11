import axios from 'axios'


// /api/v2/facts/random?language=en
const apiClient = axios.create({
baseURL: 'https://uselessfacts.jsph.pl'
})

apiClient.interceptors.request.use(request => {
console.log(`${request.baseURL}${request.url}`)
console.log(`Requesting: ${request.method} ${request.url}`)
return request
})

apiClient.interceptors.response.use(response => {
console.log('View you fun fact!');
return response;
}, error => {
console.error('Could not fetch fun fact.');
return Promise.reject(error);
});


export default apiClient;