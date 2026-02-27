import { useState, useEffect } from "react";

/**
 * Returns a greeting string that updates every minute.
 * "Good morning"  → 05:00 – 11:59
 * "Good afternoon"→ 12:00 – 16:59
 * "Good evening"  → 17:00 – 20:59
 * "Good night"    → 21:00 – 04:59
 *
 * Uses the user's local timezone automatically (via JS Date).
 */
export function useGreeting() {
  function getGreeting() {
    const hour = new Date().getHours(); // local time
    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    if (hour >= 17 && hour < 21) return "Good evening";
    return "Good night";
  }

  const [greeting, setGreeting] = useState(getGreeting);

  useEffect(() => {
    // Recalculate at the start of every minute so it flips at the right time
    const tick = () => setGreeting(getGreeting());
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  return greeting;
}
