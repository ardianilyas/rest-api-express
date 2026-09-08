import { Router } from "express";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";

const router = Router();

const postService = new PostService();
const postController = new PostController(postService);

router.get("/", postController.getPosts);
router.get("/:id", postController.getPost);
router.post("/", postController.createPost);
router.patch("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

export default router;