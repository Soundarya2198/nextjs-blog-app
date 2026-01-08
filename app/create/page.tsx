import { redirect } from "next/navigation";

async function createPost(formData: FormData) {
  "use server";

  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
      userId,
    }),
  });
  const result = await res.json();
  console.log(result);
  if (!res.ok) {
    throw new Error("Failed to create post");
  }
  redirect("/");
}
export default function CreatePost() {
  return (
    <div>
      <h1>Create Blog Post</h1>
      <form action={createPost}>
        <div>
          <label>Title</label>
          <br />
          <input name="title" required />
        </div>
        <br />
        <div>
          <label>Body</label>
          <br />
          <textarea name="body" required />
        </div>

        <br />

        <div>
          <label>User ID</label>
          <br />
          <input name="userId" type="number" required />
        </div>

        <br />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
