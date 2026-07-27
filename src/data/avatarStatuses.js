import {
  Tv1Fill,
  MoonFill,
  TimeFill,
  BedFill,
  WalkFill,
} from "@mingcute/react";

// Priority = array order: interrupting statuses (Walking, Away) are checked
// before the base statuses they can override (Online, Offline, Sleeping).
// Slots are half-open [start, end) 24h WAT; `end < start` wraps past midnight.
//
// badgeIconColor is a raw CSS custom property (not a Tailwind class): mingcute
// icons set `style={{ color: 'currentColor', ...props.style }}` internally, and
// an inline style always wins over a class-based `text-*` color utility, so the
// color has to be passed directly via the icon's `color` prop instead.
export const avatarStatuses = [
  {
    key: "walking",
    label: "Walking",
    slots: [{ start: "08:00", end: "09:00" }],
    badgeClassName: "bg-bg-accent-violet",
    badgeIconColor: "var(--static-white)",
    icon: WalkFill,
    thinkingBubble: { enabled: true, text: "On a walk" },
  },
  {
    key: "away",
    label: "Away",
    slots: [
      { start: "09:00", end: "10:00" },
      { start: "12:00", end: "13:00" },
      { start: "16:00", end: "16:30" },
    ],
    badgeClassName: "bg-bg-accent-orange",
    badgeIconColor: "var(--static-white)",
    icon: TimeFill,
    thinkingBubble: { enabled: false },
  },
  {
    key: "online",
    label: "Online",
    slots: [{ start: "10:00", end: "15:00" }],
    badgeClassName: "bg-bg-accent-green",
    badgeIconColor: "var(--static-white)",
    icon: Tv1Fill,
    thinkingBubble: { enabled: false },
  },
  {
    key: "offline",
    label: "Offline",
    slots: [{ start: "17:30", end: "22:30" }],
    badgeClassName: "bg-bg-tertiary",
    badgeIconColor: "var(--static-white)",
    icon: MoonFill,
    thinkingBubble: { enabled: false },
    default: true,
  },
  {
    key: "sleeping",
    label: "Sleeping",
    slots: [{ start: "23:30", end: "07:49" }],
    badgeClassName: "bg-bg-accent-blue",
    badgeIconColor: "var(--static-white)",
    icon: BedFill,
    thinkingBubble: { enabled: true, text: "zzZ" },
  },
];
