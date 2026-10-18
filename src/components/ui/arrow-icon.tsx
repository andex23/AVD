type Direction = "up-right" | "down-right" | "right";
const paths: Record<Direction, string> = {
  "up-right": "M6 18 18 6M6 6h12v12",
  "down-right": "M6 6l12 12M6 18h12V6",
  right: "M4 12h16m-7-7 7 7-7 7",
};
/** Decorative direction cue; the containing link supplies the accessible name. */
export function ArrowIcon({direction = "up-right"}: {direction?: Direction}) {
  return <span className="direction-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false" aria-hidden="true"><path d={paths[direction]}/></svg></span>;
}
