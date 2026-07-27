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
    <div className="relative inline-flex">
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
      {status.thinkingBubble.enabled && (
        <div
          className={
            "absolute -top-[34px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[10px] " +
            "border border-border-primary bg-bg-white px-[10px] py-[6px] text-body-sm text-text-secondary shadow-sm " +
            "after:absolute after:left-1/2 after:top-full after:size-0 after:-translate-x-1/2 " +
            "after:border-[5px] after:border-transparent after:border-t-bg-surface after:content-['']"
          }
        >
          {status.thinkingBubble.text}
        </div>
      )}
    </div>
  );
}
