import { useState } from "react";

function useLocalStorage(key, initialValue) {
  // Récupère la valeur actuelle du local storage ou utilise la valeur initiale fournie
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // Fonction pour mettre à jour la valeur du local storage
  const setValue = (value) => {
    try {
      // Mise à jour de l'état interne
      setStoredValue(value);
      // Mise à jour du local storage
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

// Comment l'utiliser
import useLocalStorage from "./useLocalStorage";

function MyComponent() {
  // Récupère la valeur du local storage pour la clé "myValue" ou utilise la valeur initiale "initialValue"
  const [myValue, setMyValue] = useLocalStorage("myValue", "initialValue");

  // Utilisez la valeur de myValue comme vous le souhaitez dans votre composant
  // Et utilisez la fonction setMyValue pour mettre à jour la valeur dans le local storage
}
