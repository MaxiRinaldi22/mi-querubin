import { DashboardSidebar } from "@/components/DashboardSideBar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
          <main className="p-4">{children}</main>
      </div>
    </SidebarProvider>
  )
}

