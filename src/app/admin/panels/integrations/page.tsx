import {
  AdminHero,
  AdminShell,
  IntegrationManagementPanel,
} from "@/components/admin/system-health";

export default function AdminIntegrationManagementPanelPage() {
  return (
    <AdminShell>
      <AdminHero
        eyebrow="Connector operations"
        title="Integration Management Panel"
        description="Manage live connector posture, parser work, supported bank coverage, and operator actions from a main panel with context rail."
      />
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <IntegrationManagementPanel />
      </section>
    </AdminShell>
  );
}
