import {
  AdminHero,
  AdminShell,
  SystemHealthOverview,
} from "@/components/admin/system-health";

export default function AdminSystemHealthPage() {
  return (
    <AdminShell>
      <AdminHero
        eyebrow="Internal observability"
        title="Admin System Health"
        description="Monitor FinTrack ingestion, parser reliability, bank coverage, and operational errors from one internal-only surface."
      />
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <SystemHealthOverview />
      </section>
    </AdminShell>
  );
}
