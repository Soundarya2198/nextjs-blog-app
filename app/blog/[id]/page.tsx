import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

type Post = {
  title: string;
  body: string;
};

type Props = {
  params: {
    id: string;
  };
};

async function deletePost(formData: FormData) {
  "use server";
  const id = formData.get("id");

  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });

  redirect("/");
}

const Blog = async ({ params }: Props) => {
  const { id } = params;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!data.ok) return notFound();

  const post: Post = await data.json();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.body}>{post.body}</p>

        <div className={styles.actions}>
          <Link href={`/blog/${id}/edit`} className={styles.edit}>
            Edit Blog Post
          </Link>

          <form action={deletePost}>
            <input type="hidden" name="id" value={id} />
            <button type="submit" className={styles.delete}>
              Delete Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;
