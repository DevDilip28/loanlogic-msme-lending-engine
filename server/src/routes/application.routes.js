import express from "express"
import { evaluateApplication } from "../controllers/application.controller.js";

const router = express.Router()

router.post("/evaluate", evaluateApplication);

export default router
