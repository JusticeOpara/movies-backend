import express from "express";
import {
  getUserWatchlist,
  addToWatchlist,
  deleteFromWatchlist,
  updateWatchlistItem,
} from "../controller/watchlistController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { vaildateRequest } from "../middleware/vaildateRequest.js";
import { addToWatchlistSchema } from "../validators/watchlistValidator.js"

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
 *   get:
 *     summary: Get all user's watchlist items
 *     tags: [Watchlist]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of watchlist items
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 results:
 *                   type: integer
 *                   example: 2
 *                 data:
 *                   type: object
 *                   properties:
 *                     watchlist:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Watchlist'
 *       401:
 *         description: Unauthorized
 */
router.get("/", getUserWatchlist);


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
router.post("/", vaildateRequest(addToWatchlistSchema), addToWatchlist);

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
 *         name: movieId
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
router.put("/:id", vaildateRequest(addToWatchlistSchema), updateWatchlistItem);

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
 *         name: movieId
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
