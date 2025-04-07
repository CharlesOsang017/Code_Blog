import express from "express";
import {
  subscribe,
  allSubscriptions,
  deleteSubscription,
} from "../controllers/subscribe.controller.js";
import { admin } from "../middleware/admin.middleware.js";
import { protectRoute } from "../middleware/protect.middleware.js";

const router = express.Router();

router.post("/subscribe", subscribe);
router.get("/all", protectRoute, admin, allSubscriptions);
router.delete("/:id", protectRoute, admin, deleteSubscription);

export default router;
