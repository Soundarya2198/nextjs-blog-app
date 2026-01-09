import { redirect } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

type Props = {
  params: {
    id: number;
  };
};

async function updatePost(formData: FormData) {
  "use server";

  const title = formData.get("title");
  const body = formData.get("body");
  const id = formData.get("id");

  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });

  redirect(`/blog/${id}`);
}

export default async function UpdatePost({ params }: Props) {
  const { id } = params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await res.json();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Edit Blog Post</h1>

        <form action={updatePost}>
          <input type="hidden" name="id" value={id} />

          <div className={styles.field}>
            <label className={styles.label}>Title</label>
            <input
              className={styles.input}
              name="title"
              defaultValue={data.title}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Body</label>
            <textarea
              className={styles.textarea}
              name="body"
              defaultValue={data.body}
              required
            />
          </div>

          <div className={styles.actions}>
            <button type="submit" className={styles.submit}>
              Update Post
            </button>

            <Link href={`/blog/${id}`} className={styles.cancel}>
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
