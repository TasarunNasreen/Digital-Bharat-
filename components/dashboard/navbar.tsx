import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/dashboard/language-switcher";
import { ProfileMenu } from "@/components/dashboard/profile-menu";
import { SearchBar } from "@/components/dashboard/search-bar";
import { ThemeToggle } from "@/components/dashboard/theme-toggle";

export function DashboardNavbar() {
  return (
    <header className="sticky top-16 z-40 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="flex flex-1 items-center gap-3">
          <SearchBar />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" aria-label="View notifications">
            <Bell className="h-4 w-4" aria-hidden="true" />
          </Button>
          <LanguageSwitcher />
          <ThemeToggle />
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
