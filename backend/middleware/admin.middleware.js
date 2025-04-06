export const admin = async (req, res, next) => {
  try {
    if (req.user && req.user.role === "admin") {
      return next();
    } else {
      return res
        .status(403)
        .json({ message: "You are not authorized as an admin" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
