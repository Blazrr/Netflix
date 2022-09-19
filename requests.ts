const API_KEY = process.env.NEXT_PUBLIC_API_KEY


const requests = {
    fetchMovieDiscover:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchTvDiscover:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    fetchTodayAll:`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    fetchBestRate:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
}

export default requests