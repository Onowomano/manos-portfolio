import avatarImage from "../assets/avatar-image.png";
import { useAvatarStatus } from "../hooks/useAvatarStatus";
import { avatarStatuses } from "../data/avatarStatuses";

export default function Avatar({ statusOverride }) {
  const liveStatus = useAvatarStatus();
  const status = statusOverride
    ? avatarStatuses.find((candidate) => candidate.key === statusOverride)
    : liveStatus;
  const Icon = status.icon;

  return (
    <div className="group relative inline-flex">
      <img
        src={avatarImage}
        alt="Mano"
        className="size-[57.39px] rounded-full object-cover"
      />
      <span
        className={`absolute -right-[2px] -bottom-[2px] flex size-[18.26px] items-center justify-center rounded-full ring-[3px] ring-bg-surface ${status.badgeClassName}`}
      >
        <Icon className="size-[12px]" color={status.badgeIconColor} />
      </span>
      <div
        className={`absolute -top-[34px] left-1/2 -translate-x-1/2 whitespace-nowrap transition-opacity ${
          status.thinkingBubble.enabled
            ? "opacity-100"
            : "pointer-events-none opacity-0 duration-500 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:duration-150"
        }`}
      >
        {/* relative anchor so the tail svg's `top-full` positions against
            this bubble box instead of the outer avatar wrapper */}
        <div className="relative drop-shadow-[0_0_2px_rgba(0,0,0,0.08)]">
          <div className="relative rounded-[6px] bg-bg-surface px-[6px] py-[4px] text-[12px] leading-[16px] font-normal tracking-[-0.48px] text-text-secondary shadow-[inset_0_0_0_1px_var(--border-secondary)]">
            {status.thinkingBubble.text}
          </div>
          {/* Erases the pill's bottom border where the tail attaches, so the
              tail's own stroke reads as one continuous outline instead of
              crossing the pill's border. */}
          <div
            className="absolute left-1/2 top-full h-[3px] w-[13px] -translate-x-1/2 -translate-y-[2px] bg-bg-surface"
            aria-hidden="true"
          />
          {/* Curved tail + trailing dot, traced from the Figma "chat" vector
              (node 2091:16672) so the shape matches exactly instead of a
              CSS-triangle approximation. */}
          <svg
            className="absolute left-1/2 top-full -translate-x-1/2 fill-bg-surface"
            width="14"
            height="15"
            viewBox="38 26 14 15"
            aria-hidden="true"
          >
            <path d="M51.7285 26.543C51.3585 26.592 51.0072 26.7415 50.7168 26.9814L48.4062 28.8916L46.3506 30.9473C44.7176 32.5803 41.9288 31.8332 41.3311 29.6025L40.8467 27.793C40.6622 27.1045 40.07 26.6113 39.3721 26.543Z" />
            <path
              d="M51.7285 26.543C51.3585 26.592 51.0072 26.7415 50.7168 26.9814L48.4062 28.8916L46.3506 30.9473C44.7176 32.5803 41.9288 31.8332 41.3311 29.6025L40.8467 27.793C40.6622 27.1045 40.07 26.6113 39.3721 26.543"
              fill="none"
              className="stroke-border-secondary"
              strokeWidth="1"
            />
            <circle
              cx="41.1074"
              cy="37.7539"
              r="2.5899"
              className="stroke-border-secondary"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
