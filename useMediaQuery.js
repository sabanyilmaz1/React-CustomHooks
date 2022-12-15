// Voici un exemple de useMediaQuery pour réagir en fonction des média queries du CSS :

import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);

    const handleChange = () => setMatches(mediaQueryList.matches);
    mediaQueryList.addListener(handleChange);

    return () => mediaQueryList.removeListener(handleChange);
  }, [query]);

  return matches;
}

// Pour utiliser ce hook, vous pouvez faire ceci :

function App() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <div>
      <p>Taille de l'écran : {isSmallScreen ? "petit" : "grand"}</p>
      {isSmallScreen ? (
        <p>Contenu adapté pour les petits écrans</p>
      ) : (
        <p>Contenu adapté pour les grands écrans</p>
      )}
    </div>
  );
}
