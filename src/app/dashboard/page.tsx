import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get("auth")?.value === "true";

  if (!isAuthenticated) {
    redirect("/login");
  }

  return (
    <div className="container h-full w-full max-w-full p-4 sm:max-w-none">
      <h1 className="mb-4 text-2xl font-bold sm:text-3xl">Panel</h1>
    </div>
  );
}
