import { NextFunction, Request, Response } from "express";
import { PostService } from "./post.service";
import { validate } from "../../utils/validate";
import { createPostDto, getPostDto, updatePostDto } from "./post.dto";

export class PostController {
  constructor(private readonly postService: PostService) {}

  getPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const posts = await this.postService.getPosts();
      res.status(200).json({ success: true, data: posts });
    } catch (error) {
      next(error);
    }
  }

  getPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = validate(getPostDto, req.params.id, "id");
      const post = await this.postService.getPost(id);
      res.status(200).json({ success: true, data: post });
    } catch (error) {
      next(error);
    }
  }

  createPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = validate(createPostDto, req.body);
      const post = await this.postService.createPost(data);
      res.status(201).json({ success: true, data: post });
    } catch (error) {
      next(error);
    }
  }

  updatePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = validate(getPostDto, req.params.id, "id");
      const data = validate(updatePostDto, req.body);
      const post = await this.postService.updatePost(data, id);
      res.status(200).json({ success: true, data: post });
    } catch (error) {
      next(error);
    }
  }

  deletePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = validate(getPostDto, req.params.id, "id");
      await this.postService.deletePost(id);
      res.status(204);
    } catch (error) {
      next(error);
    }
  }
}