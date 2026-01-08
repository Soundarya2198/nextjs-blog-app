import { notFound, redirect } from "next/navigation";
import Link from "next/link";

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
    method: "Delete",
  });
  redirect("/");
}
const blog = async ({ params }: Props) => {
  const { id } = await params;
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!data.ok) return notFound();
  const post: Post = await data.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/blog/${id}/edit`}>Edit Blog Post</Link>
      <form action={deletePost}>
        <input type="hidden" name="id" value={id} />
        <button type="submit" style={{ color: "red", marginTop: "20px" }}>
          Delete Post
        </button>
      </form>
    </div>
  );
};
export default blog;
