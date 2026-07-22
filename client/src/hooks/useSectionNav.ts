import { useLocation } from "wouter";
import { scrollToSection } from "@/lib/scroll";

export const PENDING_SCROLL_KEY = "im-pending-scroll";

/**
 * Navigate to a home-page section by id, from anywhere in the app.
 * On the home page it scrolls directly; from any other route it navigates
 * home first and leaves a pending id for Home to pick up once mounted.
 */
export function useSectionNav() {
  const [location, setLocation] = useLocation();

  return (id: string) => {
    if (location === "/") {
      scrollToSection(id);
    } else {
      sessionStorage.setItem(PENDING_SCROLL_KEY, id);
      setLocation("/");
    }
  };
}
