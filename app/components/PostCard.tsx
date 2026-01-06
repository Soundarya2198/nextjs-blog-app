import Link from "next/link";
import styles from "./PostCard.module.css";

type PostCardProps = {
  id: number;
  title: string;
};

export default async function PostCard({ id, title }: PostCardProps) {
  return (
    <div className={styles.card}>
      <Link href={`/blog/${id}`} className="styles.title">
        <h3>{title}</h3>
      </Link>
    </div>
  );
}
