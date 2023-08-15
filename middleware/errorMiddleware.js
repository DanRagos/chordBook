const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const status = err.status ? err.status : 500;
    switch (status) {
        case constants.VALIDATION_ERROR:
            res.status(status).json({
                title: "Validation Field",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.status(status).json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.UNAUTHORIZED:
            res.status(status).json({
                title: "UNAUTHORIZED",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.FORBIDDEN:
            res.status(status).json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.SERVER_ERROR:
            res.status(status).json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        default:
            res.status(status).json({
                title: "Unknown Error",
                message: "An unknown error occurred",
                stackTrace: err.stack
            });
            break;
    }
};

module.exports = errorHandler;
