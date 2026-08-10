"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  BookOpen,
  CalendarDays,
  Compass,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  NotebookPen,
  Presentation,
  Settings,
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const items = [
  { label: "Home", href: "/dashboard", icon: Home },
  { label: "My Roadmap", href: "/my-roadmap", icon: LayoutDashboard },
  { 
    label: "Learn", 
    href: "/learn", 
    icon: BookOpen,
    submenu: [
      { label: "My Courses", href: "/learn/my-courses" },
      { label: "Explore Courses", href: "/learn/explore" },
    ]
  },
  { label: "Opportunities", href: "/opportunities", icon: Compass },
  { label: "Assessments", href: "/assessments", icon: NotebookPen },
  { label: "Portfolio", href: "/portfolio", icon: Presentation },
  { label: "Upcoming Events", href: "/upcoming-events", icon: CalendarDays },
  { label: "Schedule", href: "/schedule", icon: Menu },
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleLogout = () => {
    setIsLogoutDialogOpen(false);
    router.push("/login");
  };

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const handleNavClick = () => {
    onNavigate?.();
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <Image
          src="/MPATH%20LOGO.png"
          alt="MPath logo"
          width={220}
          height={220}
          className="block h-auto w-full max-w-[220px] object-contain dark:hidden"
        />
        <Image
          src="/DARKMODE.png"
          alt="MPath logo dark"
          width={220}
          height={220}
          className="hidden h-auto w-full max-w-[220px] object-contain dark:block"
        />
      </div>

      <nav className="mt-4 space-y-1">
        {items.map(({ label, href, icon: Icon, submenu }) => {
          const isActive = pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
          const isDivider = label === "Upcoming Events";
          const hasSubmenu = submenu && submenu.length > 0;
          const isSubmenuOpen = openSubmenu === label;

          return (
            <div key={label}>
              {isDivider ? <div className="my-2 border-t border-slate-200/80 dark:border-slate-700" /> : null}
              
              {/* Main menu item */}
              {hasSubmenu ? (
                <button
                  onClick={() => toggleSubmenu(label)}
                  className={`group relative flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm font-medium transition ${
                    isActive
                      ? "text-[#0B5D4E] dark:text-[#7EE7D5]"
                      : "text-slate-600 hover:bg-[#E8F7F3] hover:text-[#0B5D4E] dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-[#7EE7D5]"
                  }`}
                >
                  {isActive ? (
                    <span className="absolute left-0 top-1/2 h-6 w-1.5 -translate-y-1/2 rounded-r-full bg-[#0B5D4E] dark:bg-[#7EE7D5]" />
                  ) : null}
                  <Icon className="h-4 w-4" />
                  <span className="flex-1">{label}</span>
                  {isSubmenuOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
              ) : (
                <Link
                  href={href}
                  onClick={handleNavClick}
                  className={`group relative flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm font-medium transition ${
                    isActive
                      ? "text-[#0B5D4E] dark:text-[#7EE7D5]"
                      : "text-slate-600 hover:bg-[#E8F7F3] hover:text-[#0B5D4E] dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-[#7EE7D5]"
                  }`}
                >
                  {isActive ? (
                    <span className="absolute left-0 top-1/2 h-6 w-1.5 -translate-y-1/2 rounded-r-full bg-[#0B5D4E] dark:bg-[#7EE7D5]" />
                  ) : null}
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              )}

              {/* Submenu items */}
              {hasSubmenu && isSubmenuOpen && (
                <div className="ml-7 mt-1 space-y-1">
                  {submenu.map((subitem) => {
                    const isSubActive = pathname === subitem.href;
                    return (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        onClick={handleNavClick}
                        className={`block rounded-lg px-3 py-2 text-sm transition ${
                          isSubActive
                            ? "bg-[#E8F7F3] font-medium text-[#0B5D4E] dark:bg-slate-800 dark:text-[#7EE7D5]"
                            : "text-slate-600 hover:bg-[#E8F7F3] hover:text-[#0B5D4E] dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-[#7EE7D5]"
                        }`}
                      >
                        {subitem.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="mt-auto -mx-6">
        <div className="w-full">
          <Image
            src="/sidenavimage.png"
            alt="Sidebar design"
            width={400}
            height={140}
            className="block w-full object-contain"
          />
        </div>
        <div className="space-y-2 px-6 pb-3 pt-3">
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-[#E8F7F3] hover:text-[#0B5D4E] dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-[#7EE7D5]">
            <Settings className="h-4 w-4" />
            Settings
          </button>
          <button
            onClick={() => setIsLogoutDialogOpen(true)}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-[#E8F7F3] hover:text-[#0B5D4E] dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-[#7EE7D5]"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>

      <Dialog open={isLogoutDialogOpen} onOpenChange={setIsLogoutDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Logout</DialogTitle>
            <DialogDescription>
              Are you sure you want to logout? You will need to sign in again to access your account.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsLogoutDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleLogout}
              className="bg-[#0B5D4E] hover:bg-[#0B5D4E]/90 dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#7EE7D5]/90"
            >
              Logout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function Sidebar() {
  return (
    <aside className="hidden h-full w-72 shrink-0 flex-col overflow-y-auto border-r border-slate-200 bg-white p-6 pt-2 lg:flex dark:border-slate-800 dark:bg-slate-900">
      <SidebarContent />
    </aside>
  );
}

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="p-2 text-slate-800 lg:hidden dark:text-slate-100">
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-6 pt-2">
        <SidebarContent onNavigate={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
