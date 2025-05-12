"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, MessageSquare, Vote, Newspaper, Calendar, Heart, Briefcase, Bot, User } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "My Home",
    icon: Home,
    href: "/my-home",
  },
  {
    title: "Direct Line",
    icon: MessageSquare,
    href: "/direct-line",
  },
  {
    title: "Polls",
    icon: Vote,
    href: "/polls",
  },
  {
    title: "KZO News",
    icon: Newspaper,
    href: "/news",
  },
  {
    title: "KZO Time",
    icon: Calendar,
    href: "/events",
  },
  {
    title: "Volunteer Hub",
    icon: Heart,
    href: "/volunteers",
  },
  {
    title: "Executor Panel",
    icon: Briefcase,
    href: "/executor",
  },
  {
    title: "AI Guide",
    icon: Bot,
    href: "/ai-gid",
  },
  {
    title: "Profile",
    icon: User,
    href: "/profile",
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-sky-500 text-white font-bold">M</div>
          <span className="text-lg font-semibold">MyKzo</span>
        </div>
        <div className="md:hidden">
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>© 2025 MyKzo</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
