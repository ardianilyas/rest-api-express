# Rest API Endpoint

- GET /api/posts => get all posts
- GET /api/posts/:id => get post by id
- POST /api/posts => create post
- PATCH /api/posts/:id => update post
- DELETE /api/posts/:id => delete post

body : {
  title: string,
  content: string
  isActive: boolean (default true)
}