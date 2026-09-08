import { Router } from "express";
import postRouter from "../feature/post/post.route";

const router = Router();

router.use("/posts", postRouter);

export default router;
