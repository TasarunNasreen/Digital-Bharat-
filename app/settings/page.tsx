import { LanguageSelector } from "@/components/citizen/language-selector";
import { NotificationSettings } from "@/components/citizen/notification-settings";
import { SettingsCard } from "@/components/citizen/settings-card";
import { ThemeToggle } from "@/components/dashboard/theme-toggle";

export default function SettingsPage() {
  return (
    <div className="bg-slate-50 py-10 sm:py-12">
      <div className="container mx-auto max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
        <section className="rounded-lg border bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase text-blue-700">
            Settings
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-950">
            Citizen Preferences
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            Persist theme, language, and notification preferences using browser
            local storage.
          </p>
        </section>

        <div className="space-y-4">
          <SettingsCard
            title="Theme"
            description="Switch between light and dark interface preferences."
          >
            <ThemeToggle />
          </SettingsCard>
          <SettingsCard
            title="Language Selection"
            description="Choose your preferred citizen portal language."
          >
            <LanguageSelector />
          </SettingsCard>
          <SettingsCard
            title="Notifications"
            description="Enable or disable local mock notification preferences."
          >
            <NotificationSettings />
          </SettingsCard>
        </div>
      </div>
    </div>
  );
}
