export const brand = {
  name: "FinTrack",
  tagline: "Your financial story, beautifully told",
};

export { usePreviewState } from "./state-preview";

export const supportedBanks = [
  { id: "icici", name: "ICICI Bank", supported: true },
  { id: "hdfc", name: "HDFC Bank", supported: true },
  { id: "axis", name: "Axis Bank", supported: true },
  { id: "sbi", name: "SBI Card", supported: true },
  { id: "kotak", name: "Kotak Mahindra", supported: true },
  { id: "cdsl", name: "CDSL", supported: true },
  { id: "nsdl", name: "NSDL", supported: true },
  { id: "yes", name: "Yes Bank", supported: false },
  { id: "idfc", name: "IDFC First", supported: false },
];

export const landingFaqs = [
  {
    q: "How does FinTrack read my statements?",
    a: "We connect securely via OAuth to Gmail and supported banks. Statements stay encrypted in your personal vault — we never sell or share your data.",
  },
  {
    q: "Which banks and brokers are supported?",
    a: "ICICI, HDFC, Axis, SBI Card, Kotak, CDSL, and NSDL are fully supported. Unsupported formats can be uploaded as PDF or entered manually.",
  },
  {
    q: "Can I pay my credit card bills here?",
    a: "Yes. One-click UPI/BBPS payments let you settle dues without leaving FinTrack, with a receipt saved to your vault.",
  },
  {
    q: "Is my data encrypted?",
    a: "Every statement is encrypted at rest. Only you can decrypt and download from the Statement Vault.",
  },
];

export const features = [
  {
    title: "One story for every account",
    description:
      "Credit cards, mutual funds, equities, and NPS — woven into a single editorial dashboard that feels like a magazine, not a spreadsheet.",
    icon: "layers",
  },
  {
    title: "Sync that writes itself",
    description:
      "Connect Gmail or bank OAuth once. FinTrack parses statements automatically and surfaces what needs your attention.",
    icon: "refresh",
  },
  {
    title: "Pay with confidence",
    description:
      "See dues early, confirm with a clear receipt, and archive every payment in your encrypted vault.",
    icon: "wallet",
  },
  {
    title: "Privacy by design",
    description:
      "Encrypted vault storage, granular privacy controls, and revoke-anytime integrations keep you in control.",
    icon: "shield",
  },
];

export type AccountIntegration = {
  id: string;
  email: string;
  institution: string;
  status: "connected" | "syncing" | "error" | "expired";
  lastSync: string;
  syncError?: string;
};

export const accounts: AccountIntegration[] = [
  {
    id: "acc-1",
    email: "priya.sharma@gmail.com",
    institution: "Gmail",
    status: "connected",
    lastSync: "2026-07-19T06:12:00Z",
  },
  {
    id: "acc-2",
    email: "priya.sharma@gmail.com",
    institution: "HDFC Bank",
    status: "connected",
    lastSync: "2026-07-19T05:48:00Z",
  },
  {
    id: "acc-3",
    email: "priya.sharma@gmail.com",
    institution: "CDSL",
    status: "error",
    lastSync: "2026-07-18T21:10:00Z",
    syncError: "Statement format changed — retry or upload PDF",
  },
  {
    id: "acc-4",
    email: "priya.sharma@gmail.com",
    institution: "NPS CRA",
    status: "connected",
    lastSync: "2026-07-18T18:02:00Z",
  },
];

export const syncHistory = [
  {
    id: "sync-1",
    at: "2026-07-19T06:12:00Z",
    status: "success" as const,
    message: "3 statements parsed · ₹42,180 due detected",
  },
  {
    id: "sync-2",
    at: "2026-07-18T21:10:00Z",
    status: "error" as const,
    message: "CDSL demat statement unrecognized",
    error: "Parser version mismatch for Q2 demat statement",
  },
  {
    id: "sync-3",
    at: "2026-07-18T06:05:00Z",
    status: "success" as const,
    message: "HDFC credit card statement imported",
  },
  {
    id: "sync-4",
    at: "2026-07-17T06:00:00Z",
    status: "success" as const,
    message: "NPS contribution slip synced",
  },
];

export const dashboardData = {
  userName: "Priya",
  netWorth: 2847650,
  netWorthChange: 3.2,
  nps: { balance: 412800, units: 1842.55, trend: [38, 40, 41, 42, 41, 43, 44] },
  mutualFunds: {
    units: 1284.32,
    value: 986400,
    trend: [72, 74, 73, 78, 80, 79, 82],
  },
  equity: { holdings: 18, value: 1245200, trend: [60, 62, 65, 63, 68, 70, 72] },
  creditCard: {
    name: "HDFC Regalia",
    masked: "•••• 4412",
    dueDate: "2026-07-28",
    outstanding: 42180,
    minDue: 2109,
  },
  investmentBreakdown: [
    { label: "Equities", value: 44 },
    { label: "Mutual funds", value: 35 },
    { label: "NPS", value: 15 },
    { label: "Cash", value: 6 },
  ],
  recentActivity: [
    {
      id: "act-1",
      title: "HDFC Regalia statement synced",
      detail: "Outstanding ₹42,180 · Due Jul 28",
      at: "2h ago",
      type: "sync",
    },
    {
      id: "act-2",
      title: "Parag Parikh Flexi Cap units updated",
      detail: "+12.4 units · NAV ₹84.20",
      at: "Yesterday",
      type: "investment",
    },
    {
      id: "act-3",
      title: "NPS Tier-I contribution posted",
      detail: "₹5,000 · PRAN •••• 8821",
      at: "2 days ago",
      type: "nps",
    },
    {
      id: "act-4",
      title: "Axis Bluechip dividend credited",
      detail: "₹1,240 to linked savings",
      at: "4 days ago",
      type: "investment",
    },
  ],
};

export type Statement = {
  id: string;
  fileName: string;
  type: "Credit Card" | "Mutual Fund" | "Equity" | "NPS";
  institution: string;
  periodStart: string;
  periodEnd: string;
  uploadedAt: string;
  sizeKb: number;
};

export const statements: Statement[] = [
  {
    id: "st-1",
    fileName: "hdfc-regalia-jun-2026.pdf",
    type: "Credit Card",
    institution: "HDFC Bank",
    periodStart: "2026-06-01",
    periodEnd: "2026-06-30",
    uploadedAt: "2026-07-19T06:12:00Z",
    sizeKb: 842,
  },
  {
    id: "st-2",
    fileName: "cdsl-demat-q2-2026.pdf",
    type: "Equity",
    institution: "CDSL",
    periodStart: "2026-04-01",
    periodEnd: "2026-06-30",
    uploadedAt: "2026-07-18T21:10:00Z",
    sizeKb: 1204,
  },
  {
    id: "st-3",
    fileName: "nps-contribution-jun.json",
    type: "NPS",
    institution: "NPS CRA",
    periodStart: "2026-06-01",
    periodEnd: "2026-06-30",
    uploadedAt: "2026-07-18T18:02:00Z",
    sizeKb: 48,
  },
  {
    id: "st-4",
    fileName: "ppfas-flexicap-jun-2026.pdf",
    type: "Mutual Fund",
    institution: "CAMS",
    periodStart: "2026-06-01",
    periodEnd: "2026-06-30",
    uploadedAt: "2026-07-17T09:40:00Z",
    sizeKb: 512,
  },
  {
    id: "st-5",
    fileName: "icici-amazon-may-2026.pdf",
    type: "Credit Card",
    institution: "ICICI Bank",
    periodStart: "2026-05-01",
    periodEnd: "2026-05-31",
    uploadedAt: "2026-06-20T11:22:00Z",
    sizeKb: 790,
  },
];

export type NotificationItem = {
  id: string;
  title: string;
  body: string;
  type: "payment" | "sync" | "system" | "investment";
  at: string;
  read: boolean;
  dueAmount?: number;
  dueDate?: string;
  actionHref?: string;
  actionLabel?: string;
  paymentStatus?: string;
  statementSource?: string;
};

export const notifications: NotificationItem[] = [
  {
    id: "n-1",
    title: "HDFC Regalia payment due",
    body: "₹42,180 is due on Jul 28. Pay now to avoid late fees.",
    type: "payment",
    at: "2026-07-19T07:00:00Z",
    read: false,
    dueAmount: 42180,
    dueDate: "2026-07-28",
    actionHref: "/payments",
    actionLabel: "Pay now",
    paymentStatus: "Due soon",
    statementSource: "HDFC Bank",
  },
  {
    id: "n-2",
    title: "CDSL sync needs attention",
    body: "We could not parse your latest demat statement. Retry sync or upload the PDF.",
    type: "sync",
    at: "2026-07-18T21:15:00Z",
    read: false,
    actionHref: "/accounts",
    actionLabel: "View accounts",
    statementSource: "CDSL",
  },
  {
    id: "n-3",
    title: "Mutual fund NAV update",
    body: "Parag Parikh Flexi Cap rose 1.2% this week. Your units: 428.16.",
    type: "investment",
    at: "2026-07-18T08:00:00Z",
    read: true,
    actionHref: "/dashboard",
    actionLabel: "View dashboard",
  },
  {
    id: "n-4",
    title: "Vault encryption rotated",
    body: "Your statement vault keys were rotated successfully. No action needed.",
    type: "system",
    at: "2026-07-16T12:00:00Z",
    read: true,
  },
];

export const parsedReviewData = {
  source: "HDFC Regalia · Jun 2026",
  bankFormat: "HDFC Credit Card PDF",
  creditCard: {
    name: "HDFC Regalia",
    account: "•••• 4412",
    outstanding: "42180",
    dueDate: "2026-07-28",
    minDue: "2109",
  },
  investments: [
    { name: "Parag Parikh Flexi Cap", units: "428.16", value: "360420" },
    { name: "Axis Bluechip", units: "210.40", value: "142180" },
  ],
  nps: { pran: "•••• 8821", balance: "412800", contribution: "5000" },
  summary: {
    fieldsParsed: 18,
    confidence: 94,
    needsReview: 2,
  },
};

export const adminMetrics = {
  status: "Healthy",
  uptime: "99.97%",
  apiLatencyMs: 142,
  integrationHealth: 96,
  errorCount24h: 7,
  lastUpdated: "2026-07-19T09:45:00Z",
  integrations: [
    { name: "Gmail OAuth", type: "Email", status: "healthy", errors: 0 },
    { name: "HDFC Parser", type: "Bank", status: "healthy", errors: 1 },
    { name: "CDSL Parser", type: "Demat", status: "degraded", errors: 4 },
    { name: "NPS CRA", type: "Retirement", status: "healthy", errors: 0 },
    { name: "BBPS Payments", type: "Payments", status: "healthy", errors: 2 },
  ],
  errorLogs: [
    {
      id: "err-1",
      at: "2026-07-19T06:10:00Z",
      integration: "CDSL Parser",
      type: "ParseError",
      message: "Unexpected column layout in Q2 demat PDF",
    },
    {
      id: "err-2",
      at: "2026-07-19T04:22:00Z",
      integration: "HDFC Parser",
      type: "Timeout",
      message: "Statement fetch exceeded 30s",
    },
    {
      id: "err-3",
      at: "2026-07-18T22:01:00Z",
      integration: "BBPS Payments",
      type: "Upstream",
      message: "BBPS ack delayed — payment later confirmed",
    },
  ],
};

export const userProfile = {
  name: "Priya Sharma",
  email: "priya.sharma@gmail.com",
  mobile: "+91 98765 43210",
};

export function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

export function formatDateTime(iso: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso));
}
