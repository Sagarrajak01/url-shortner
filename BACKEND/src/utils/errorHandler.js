export class AppError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
        this.success = false
        this.isOperational = true
        Error.captureStackTrace(this, this.constructor)
    }
}

export const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500
    let message = err.message || "Internal Server Error"

    console.error(err)

    res.status(statusCode).json({
        success: false,
        message
    })
}