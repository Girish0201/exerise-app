export const exerciseOptions = {
	method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a43eb6eaa6msh44dc4c24dbc0c16p194a36jsnd245cd047d5d',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'a43eb6eaa6msh44dc4c24dbc0c16p194a36jsnd245cd047d5d',
  },
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data)
  
    return data;
  };