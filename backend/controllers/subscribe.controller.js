import Subscription from "../models/subscription.model.js";

export const subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Provide an email to subscribe" });
    }
    // Check if the email had previously subscribed
    const ifSubscribed = await Subscription.findOne({ email });
    if (ifSubscribed) {
      return res
        .status(400)
        .json({ message: "This email has already been subscribed" });
    }
    const newSubscription = new Subscription({ email });
    await newSubscription.save();
    return res
      .status(200)
      .json({ message: "You have successfully subscribed" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const allSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find({});
    return res.status(200).json(subscriptions);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteSubscription = async (req, res) => {
  try {
    const subscribedEmail = await Subscription.findById(req.params.id);
    if (!subscribedEmail) {
      return res.status(404).json({ message: "No such email found" });
    }
    await Subscription.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ message: "The email was successfully deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
