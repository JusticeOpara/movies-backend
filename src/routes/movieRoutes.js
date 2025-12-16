import express from "express"

const router = express.Router()

// router.post("/register", register)

router.get("/hello", (req, res) => {
    res.json({ message: "Hello Justice League" })
})

export default router