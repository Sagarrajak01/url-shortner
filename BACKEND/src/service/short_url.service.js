import { saveShortUrl } from "../dao/short_url.js"
import { generateNanoId } from "../utils/helper.js"

export const createShortUrlWithoutUserService = async (url) => {
    const shortUrl = generateNanoId(7)
    await saveShortUrl(shortUrl, url)
    return shortUrl
}

export const createShortUrlWithUserService = async (url, userId) => {
    const shortUrl = generateNanoId(7)
    await saveShortUrl(shortUrl, url, userId)
    return shortUrl
}