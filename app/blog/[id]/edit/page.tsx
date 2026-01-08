import { redirect } from "next/navigation";

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
    method: "Put",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });

  redirect(`/blog/${id}`);
}
export default async function UpdatePost({ params }: Props) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return (
    <div>
      <h1>Edit Blog Post</h1>
      <form action={updatePost}>
        <input type="hidden" name="id" value={id}></input>
        <div>
          <label>Title</label>
          <br />
          <input name="title" defaultValue={data.title} required />
        </div>
        <br />
        <div>
          <label>Body</label>
          <br />
          <textarea name="body" defaultValue={data.body} required />
        </div>

        <br />

        <button type="submit">Edit Blog Post</button>
      </form>
    </div>
  );
}
