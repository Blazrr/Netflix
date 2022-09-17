const API_KEY:string='12ec2944a7306a60bae13ff4ed939caa'

const requests = {
    fetchTvDiscover:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
}

export default requests