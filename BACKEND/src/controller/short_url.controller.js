import { createShortUrlService } from "../service/short_url.service.js"

export const  createShortUrl = async (req, res) => {
    const { url } = req.body
    const shortUrl = await createShortUrlService(url)
    res.json(process.env.APP_URL + shortUrl)
}
