import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    profileImg: {
      type: String,
      trim: true,
      required: true,
    },
    role: {
      type: String,
      enum: ["reader", "admin"],
      default: "admin",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
export default User;
