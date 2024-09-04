const key = "aqd";

export const requests = {
  Latest: `https://api.themoviedb.org/3/movie/latest`,

  UpComing: `https://api.themoviedb.org/3/movie/upcoming`,
  Now_playing: `https://api.themoviedb.org/3/movie/now_playing`,
  Popular: `https://api.themoviedb.org/3/movie/popular`,
  TopRated: `https://api.themoviedb.org/3/movie/top_rated`,
  TrendingDay: `https://api.themoviedb.org/3/trending/movie/day`,
  TrendingWeek: `https://api.themoviedb.org/3/trending/movie/week`,
  Discover_Movies: `https://api.themoviedb.org/3/discover/movie`,
  
  GetVideo: `https://api.themoviedb.org/3/movie/`, // Add movie ID after the slash to get details
  Search_Movie: `https://api.themoviedb.org/3/search/movie&query=`, // Add query string for search
  Movie_Genres: `https://api.themoviedb.org/3/genre/movie/list`,
  Get_Movie_Credits: `https://api.themoviedb.org/3/movie/`, // Add movie ID after the slash, then `/credits` to get credits

  // New requests
  Popular_TV_Shows: `https://api.themoviedb.org/3/tv/popular`,
  TopRated_TV_Shows: `https://api.themoviedb.org/3/tv/top_rated`,
  Trending_TV_Shows: `https://api.themoviedb.org/3/trending/tv/day`,
  TV_Airing_Today: `https://api.themoviedb.org/3/tv/airing_today`,
  TV_On_The_Air: `https://api.themoviedb.org/3/tv/on_the_air`,
  TV_Genres: `https://api.themoviedb.org/3/genre/tv/list`,
  Discover_TV: `https://api.themoviedb.org/3/discover/tv`,
  Search_TV: `https://api.themoviedb.org/3/search/tv&query=`, // Add query string for search
  Get_TV_Credits: `https://api.themoviedb.org/3/tv/`, // Add TV show ID after the slash, then `/credits` to get credits
};
