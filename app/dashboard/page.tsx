import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth");
  if (!auth) {
    redirect("/login");
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <p> Welcome you are loggin in.....</p>
    </div>
  );
}
