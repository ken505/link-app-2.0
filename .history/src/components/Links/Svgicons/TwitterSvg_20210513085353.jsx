import classes from "./TwitterSvg.module.css";

const ITEMS = [
  {
    href: "https://twitter.com/ken_tsx",
    title: "Twitter",
    src: "/twitter.svg",
    alt: "twitter Logo",
    width: 19,
    height: 19,
  },
];

export function TwitterSvg() {
  return (
    <svg
      classes={}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
