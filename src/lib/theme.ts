export const C = {
  bg:      "#0C0C0E",
  s1:      "#111113",
  s2:      "#171719",
  border:  "rgba(255,255,255,0.07)",
  border2: "rgba(255,255,255,0.12)",
  accent:  "#5DC8A5",
  tp:      "rgba(255,255,255,0.93)",
  tm:      "rgba(255,255,255,0.5)",
  td:      "rgba(255,255,255,0.25)",
} as const;

export const STATUS_COLORS: Record<string, string> = {
  Active:     "rgba(93,200,165,0.15)",
  Production: "rgba(93,165,200,0.15)",
  Published:  "rgba(200,168,93,0.15)",
};

export const STATUS_TEXT: Record<string, string> = {
  Active:     "#5DC8A5",
  Production: "#5da8c8",
  Published:  "#c8a85d",
};
