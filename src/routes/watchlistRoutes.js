import express from "express"
import { addToWatchlist , deleteFromWatchlist, updateWatchlistItem } from "../controller/watchlistController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"
import {vaildateRequest} from "../middleware/vaildateRequest.js"

const router = express.Router()

router.use(authMiddleware)

router.post("/", vaildateRequest(addToWatchlist), addToWatchlist)
router.put("/:id", vaildateRequest(updateWatchlistItem), updateWatchlistItem)
router.delete("/:id", deleteFromWatchlist)

export default router