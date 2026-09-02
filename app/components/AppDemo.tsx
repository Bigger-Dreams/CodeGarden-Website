const accounts = [
  { label: "Gehaltskonto", value: "€ 4.823,10" },
  { label: "Sparkonto", value: "€ 6.450,00" },
  { label: "Verrechnungskonto", value: "€ 2.047,55" },
];

const actions = [
  { label: "Überweisen", icon: <SwapIcon /> },
  { label: "Order aufgeben", icon: <TrendIcon /> },
  { label: "Sparziel", icon: <PiggyIcon /> },
];

const transactions = [
  { title: "Kauf Andritz AG", subtitle: "Depot · Handel", amount: "−€ 1.050,60", positive: false },
  { title: "Gehalt", subtitle: "Employer GmbH · Einkommen", amount: "+€ 3.200,00", positive: true },
  {
    title: "Verkauf AT&S Austria Tech. & Systemtech.",
    subtitle: "Depot · Handel",
    amount: "+€ 434,00",
    positive: true,
  },
];

const tabs = [
  { label: "Übersicht", icon: <GridIcon />, active: true },
  { label: "Konto", icon: <WalletIcon />, active: false },
  { label: "Depot", icon: <TrendIcon />, active: false },
  { label: "Märkte", icon: <ChartIcon />, active: false },
  { label: "Profile", icon: <UserIcon />, active: false },
];

export function AppDemo({ className }: { className?: string }) {
  return (
    <div
      className={`relative flex aspect-[1206/2622] flex-col overflow-hidden bg-[#0e0e10] ${className ?? ""}`}
    >
      <div className="flex items-center justify-between px-5 pt-3">
        <span className="font-sans text-[13px] font-medium text-white">9:41</span>
        <div className="flex items-center gap-1 text-white/70">
          <SignalIcon />
          <WifiIcon />
          <BatteryIcon />
        </div>
      </div>

      <h1 className="mt-2 text-center font-sans text-[15px] font-semibold text-white">
        Übersicht
      </h1>

      <div className="flex-1 overflow-hidden pb-16">
        <div className="mt-5 px-5">
          <p className="font-sans text-[11px] text-white/45">Guten Tag,</p>
          <p className="mt-0.5 font-sans text-lg font-bold text-white">Patrick</p>
        </div>

        <div className="mt-4 px-5">
          <p className="font-sans text-[11px] text-white/45">Gesamtvermögen</p>
          <p className="mt-0.5 font-sans text-[26px] font-bold text-white">€ 17.205,71</p>
        </div>

        <div className="mt-4 flex gap-2 px-5">
          {accounts.map((account) => (
            <div
              key={account.label}
              className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2"
            >
              <p className="truncate font-sans text-[9px] text-white/45">{account.label}</p>
              <p className="mt-0.5 truncate font-sans text-[11px] font-medium text-white">
                {account.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-5 mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="font-sans text-[11px] text-white/45">Vermögensentwicklung</p>
          <div className="mt-1 flex items-center gap-2">
            <p className="font-sans text-xl font-bold text-white">€ 17.205,71</p>
            <span className="rounded-full bg-rose-500/15 px-2 py-0.5 font-sans text-[10px] font-medium text-rose-400">
              −0,90%
            </span>
          </div>
          <p className="mt-0.5 font-sans text-[11px] text-white/45">−€ 155,98 heute</p>

          <svg viewBox="0 0 300 90" className="mt-3 w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,70 C30,40 55,85 80,65 C110,42 140,20 170,35 C200,50 220,68 250,45 C270,30 285,15 300,10 L300,90 L0,90 Z"
              fill="url(#chart-fill)"
            />
            <path
              d="M0,70 C30,40 55,85 80,65 C110,42 140,20 170,35 C200,50 220,68 250,45 C270,30 285,15 300,10"
              fill="none"
              stroke="#ec4899"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="mt-4 flex justify-around px-5">
          {actions.map((action) => (
            <div key={action.label} className="flex flex-col items-center gap-1.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] text-white/80">
                {action.icon}
              </div>
              <p className="font-sans text-[10px] text-white/70">{action.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-5 mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="font-sans text-[13px] font-semibold text-white">Letzte Aktivität</p>
          <div className="mt-3 flex flex-col">
            {transactions.map((tx, index) => (
              <div
                key={tx.title}
                className={`flex items-start justify-between gap-3 py-2.5 ${
                  index > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <div className="min-w-0">
                  <p className="truncate font-sans text-[12px] font-medium text-white">
                    {tx.title}
                  </p>
                  <p className="truncate font-sans text-[10px] text-white/45">{tx.subtitle}</p>
                </div>
                <p
                  className={`shrink-0 font-sans text-[12px] font-medium ${
                    tx.positive ? "text-emerald-400" : "text-white"
                  }`}
                >
                  {tx.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-white/10 bg-[#0e0e10] px-2 py-2.5">
        {tabs.map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-1">
            <div className={tab.active ? "text-pink-400" : "text-white/40"}>{tab.icon}</div>
            <p
              className={`font-sans text-[8.5px] ${
                tab.active ? "text-pink-400" : "text-white/40"
              }`}
            >
              {tab.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SignalIcon() {
  return (
    <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
      <rect x="0" y="7" width="3" height="4" rx="0.5" />
      <rect x="4.5" y="5" width="3" height="6" rx="0.5" />
      <rect x="9" y="3" width="3" height="8" rx="0.5" />
      <rect x="13" y="0" width="3" height="11" rx="0.5" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="15" height="11" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M1 4.5C4.8 1 11.2 1 15 4.5" strokeLinecap="round" />
      <path d="M3.5 7.2C5.9 5 10.1 5 12.5 7.2" strokeLinecap="round" />
      <path d="M6.3 9.8C7.2 9 8.8 9 9.7 9.8" strokeLinecap="round" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
      <rect x="0.5" y="0.5" width="20" height="11" rx="2.5" stroke="currentColor" />
      <rect x="2" y="2" width="17" height="8" rx="1.5" fill="currentColor" />
      <rect x="21.5" y="4" width="1.5" height="4" rx="0.75" fill="currentColor" />
    </svg>
  );
}

function SwapIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 8h13l-3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 16H5l3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 16l5-5 4 4 7-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 8h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PiggyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M4 12c0-3.3 3.1-6 7-6 3 0 5.6 1.6 6.6 3.9L20 10v3l-2 .5c-.3 1-.9 1.9-1.7 2.5V18h-2.6v-1.2A8 8 0 0 1 11 17c-3.9 0-7-2.7-7-6Z"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="11" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="8" rx="2" />
      <rect x="3" y="13" width="8" height="8" rx="2" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <circle cx="16" cy="14" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 20V10M12 20V4M20 20v-7" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c1.5-4 4.5-6 7-6s5.5 2 7 6" strokeLinecap="round" />
    </svg>
  );
}
