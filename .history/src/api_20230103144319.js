import axios from "axios"

const apiKey = process.env.API_KEY
const baseUrl = process.env.BASEURL

export const getMovieList  = async () => {
    const movie = await axios.get(
        `${baseUrl}/movie/popular?api_key${apiKey =2107b7d0948e066a0e9f235504568e28}`       
    )
    console.log({ movieList: movie })
}

export const searchMovie = async (q) => {
    const search = await axios.get(q)
    return
}
