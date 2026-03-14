import { createShortUrlWithoutUserService } from "../service/short_url.service.js"
import { getShortUrl } from "../dao/short_url.js"
import { wrapAsync } from "../utils/tryCatchWrapper.js"

export const createShortUrl = wrapAsync(async (req, res) => {
    const { url } = req.body
    const shortUrl = await createShortUrlWithoutUserService(url)
    res.status(201).json({ shortUrl: `${process.env.APP_URL}${shortUrl}` })
})

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
    const { id } = req.params
    const url = await getShortUrl(id)
    if (!url) {
        return res.status(404).json({ message: "URL not found" });
    }
    res.redirect(url.full_url)
})