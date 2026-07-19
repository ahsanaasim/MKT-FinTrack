import {
  AdminHero,
  AdminShell,
  ErrorLogsPanel,
} from "@/components/admin/system-health";

export default function AdminErrorLogsPanelPage() {
  return (
    <AdminShell>
      <AdminHero
        eyebrow="Incident review"
        title="Error Logs Panel"
        description="Filter recent parser, payment, and upstream incidents by severity, then search across integration names and messages."
      />
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <ErrorLogsPanel />
      </section>
    </AdminShell>
  );
}
