import express from "express"
import {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controller/movieController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"
import { vaildateRequest } from "../middleware/vaildateRequest.js"
import { movieValidator } from "../validators/movieVaildator.js"

const router = express.Router()

// Public
router.get("/", getMovies)
router.get("/:id", getMovieById)

// Private
router.use(authMiddleware)

router.post("/", vaildateRequest(movieValidator), createMovie)
router.put("/:id", vaildateRequest(movieValidator), updateMovie)
router.delete("/:id", deleteMovie)

export default router
