import { createShortUrlWithoutUserService } from "../service/short_url.service.js"
import { getShortUrl } from "../dao/short_url.js"

export const  createShortUrl = async (req, res) => {
    const { url } = req.body
    const shortUrl = await createShortUrlWithoutUserService(url)
    res.json(process.env.APP_URL + shortUrl)
}

export const redirectFromShortUrl = async (req, res) => {
    const { id } = req.params
    const url = await getShortUrl(id)
    res.redirect(url.full_url)
}   