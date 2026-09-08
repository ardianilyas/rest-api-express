import { and, eq } from "drizzle-orm";
import { db } from "../../db";
import { posts } from "../../db/schema";
import { CreatePostDto, Post, UpdatePostDto } from "./post.dto";

export class PostService {
  async getPosts(): Promise<Post[]> {
    return db.select().from(posts).where(eq(posts.isActive, true));
  }

  async getPost(id: string): Promise<Post | undefined> {
    const [post] = await db.select().from(posts).where(
      and(
        eq(posts.id, id), eq(posts.isActive, true)
      )
    );
    if(!post) throw new Error("Post not found");
    return post;
  }

  async createPost(data: CreatePostDto): Promise<Post> {
    const [newPost] = await db.insert(posts).values(data).returning();
    return newPost;
  }

  async updatePost(data: UpdatePostDto, id: string) {
    const [updatedPost] = await db.update(posts).set(data).where(eq(posts.id, id)).returning();
    if(!updatedPost) throw new Error("Post not found");
    return updatedPost;
  }

  async deletePost(id: string) {
    const [deletedPost] = await db.delete(posts).where(eq(posts.id, id)).returning();
    if(!deletedPost) throw new Error("Post not found");
    return deletedPost;
  }
}