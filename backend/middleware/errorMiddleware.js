const errorMiddleware = (err, req, res, next) => {
  console.error(err);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Something went wrong",
    data: null,
  });
};

module.exports = errorMiddleware;