import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get("auth")?.value === "true";

  if (!isAuthenticated) {
    redirect("/login");
  } else {
    redirect("/dashboard/pedidos");
  }


}
