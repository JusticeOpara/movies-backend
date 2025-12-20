// import express from "express"
// import {
//   getMovies,
//   getMovieById,
//   createMovie,
//   updateMovie,
//   deleteMovie,
// } from "../controller/movieController.js"
// import { authMiddleware } from "../middleware/authMiddleware.js"
// import { vaildateRequest } from "../middleware/vaildateRequest.js"
// import { movieValidator } from "../validators/movieVaildator.js"

// const router = express.Router()

// // Public
// router.get("/", getMovies)
// router.get("/:id", getMovieById)

// // Private
// router.use(authMiddleware)

// router.post("/", vaildateRequest(movieValidator), createMovie)
// router.put("/:id", vaildateRequest(movieValidator), updateMovie)
// router.delete("/:id", deleteMovie)

// export default router


import express from "express";
import {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controller/movieController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { vaildateRequest } from "../middleware/vaildateRequest.js";
import { movieValidator } from "../validators/movieVaildator.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: Movie management endpoints
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get all movies
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: List of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
router.get("/", getMovies);

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie found
 *       404:
 *         description: Movie not found
 */
router.get("/:id", getMovieById);

// 🔐 Protected routes
router.use(authMiddleware);

/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MovieInput'
 *     responses:
 *       201:
 *         description: Movie created successfully
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 */
router.post("/", vaildateRequest(movieValidator), createMovie);

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Update a movie
 *     tags: [Movies]
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
 *             $ref: '#/components/schemas/MovieInput'
 *     responses:
 *       200:
 *         description: Movie updated successfully
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Movie not found
 */
router.put("/:id", vaildateRequest(movieValidator), updateMovie);

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Delete a movie
 *     tags: [Movies]
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
 *         description: Movie deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Movie not found
 */
router.delete("/:id", deleteMovie);

export default router;

