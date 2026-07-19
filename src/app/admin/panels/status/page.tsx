import {
  AdminHero,
  AdminShell,
  SystemStatusPanel,
} from "@/components/admin/system-health";

export default function AdminSystemStatusPanelPage() {
  return (
    <AdminShell>
      <AdminHero
        eyebrow="System panel"
        title="Admin System Status Panel"
        description="A focused main view with context rail for heartbeat, uptime, latency, storage, and active operational notes."
      />
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <SystemStatusPanel />
      </section>
    </AdminShell>
  );
}
