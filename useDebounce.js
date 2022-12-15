import { useEffect, useState } from "react";

// UseDebounce : Hook pour décompter une valeur
export const useDebounce = (value, delay) => {
  //State et setters pour la valeur décomptée
  const [debouncedValue, setDebouncedValue] = useState(value);

  //Mettre à jour debouncedValue après un certain temps
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    //Annuler l'effet précédent si la valeur change (avant le délai)
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Comment l'utiliser
//
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    // Faire une recherche ici
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
