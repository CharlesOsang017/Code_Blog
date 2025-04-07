import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Subscription = mongoose.model("subscription", subscriptionSchema);
export default Subscription;
