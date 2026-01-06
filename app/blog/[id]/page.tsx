import { notFound } from "next/navigation";
type Post = {
  title: string;
  body: string;
};

type Props = {
  params: {
    id: string;
  };
};
const blog = async ({ params }: Props) => {
  const { id } = await params;
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!data.ok) return notFound();
  const post: Post = await data.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
export default blog;
