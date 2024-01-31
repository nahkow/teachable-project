
import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  console.log("I was here")
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = (e: Event) => {
      console.log(query, media)
      setMatches(media.matches)
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;