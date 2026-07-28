export default function CategoryFilter({ categories, active, onChange }) {
  const tabs = ["all", ...categories];

  return (
    <div className="flex items-center gap-[8px]">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          aria-pressed={active === tab}
          className={`flex items-center justify-center rounded-[999px] px-[10px] py-[4px] text-body-lg text-text-primary ${
            active === tab ? "bg-bg-primary" : ""
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
