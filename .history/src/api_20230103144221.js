import axios from "axios"

const apiKey = process.env.API_KEY
const baseUrl = process.env.BASEURL

export const getMovieList  = async () => {
    const movie = await axios.get(
        `${process.env.REACT_APP_BASEURL}/movie/popular?api_key${proces.env.REACT_APP_APIKEY =2107b7d0948e066a0e9f235504568e28}`       
    )
    console.log({ movieList: movie })
}

export const searchMovie = async (q) => {
    const search = await axios.get(q)
    return
}
