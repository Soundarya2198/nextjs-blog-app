import { redirect } from "next/navigation";
import styles from "./page.module.css";

async function createPost(formData: FormData) {
  "use server";

  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
      userId,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to create post");
  }

  redirect("/");
}

export default function CreatePost() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Create Blog Post</h1>

      <form action={createPost} className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label}>Title</label>
          <input name="title" required className={styles.input} />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Body</label>
          <textarea name="body" required className={styles.textarea} />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>User ID</label>
          <input
            name="userId"
            type="number"
            required
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.button}>
          Create Post
        </button>
      </form>
    </div>
  );
}
