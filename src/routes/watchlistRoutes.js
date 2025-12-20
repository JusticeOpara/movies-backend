// import express from "express"
// import { addToWatchlist , deleteFromWatchlist, updateWatchlistItem } from "../controller/watchlistController.js"
// import { authMiddleware } from "../middleware/authMiddleware.js"
// import {vaildateRequest} from "../middleware/vaildateRequest.js"


// const router = express.Router()

// router.use(authMiddleware)

// router.post("/", vaildateRequest(addToWatchlist), addToWatchlist)
// router.put("/:id", vaildateRequest(updateWatchlistItem), updateWatchlistItem)
// router.delete("/:id", deleteFromWatchlist)

// export default router

import express from "express";
import {
  addToWatchlist,
  deleteFromWatchlist,
  updateWatchlistItem,
} from "../controller/watchlistController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { vaildateRequest } from "../middleware/vaildateRequest.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Watchlist
 *   description: User watchlist management
 */

// 🔐 All watchlist routes are protected
router.use(authMiddleware);

/**
 * @swagger
 * /watchlist:
 *   post:
 *     summary: Add a movie to the watchlist
 *     tags: [Watchlist]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WatchlistInput'
 *     responses:
 *       201:
 *         description: Movie added to watchlist
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 */
router.post("/", vaildateRequest(addToWatchlist), addToWatchlist);

/**
 * @swagger
 * /watchlist/{id}:
 *   put:
 *     summary: Update a watchlist item
 *     tags: [Watchlist]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WatchlistUpdateInput'
 *     responses:
 *       200:
 *         description: Watchlist item updated
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Watchlist item not found
 */
router.put("/:id", vaildateRequest(updateWatchlistItem), updateWatchlistItem);

/**
 * @swagger
 * /watchlist/{id}:
 *   delete:
 *     summary: Remove a movie from the watchlist
 *     tags: [Watchlist]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie removed from watchlist
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Watchlist item not found
 */
router.delete("/:id", deleteFromWatchlist);

export default router;
