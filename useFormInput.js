import { useState } from "react";

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

// Pour utiliser ce hook dans un composant de formulaire, vous pouvez faire ceci :
function Form() {
  const email = useFormInput("");
  const password = useFormInput("");

  function handleSubmit(event) {
    event.preventDefault();
    // Envoyer les données de formulaire à l'API
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email :
        <input type="email" {...email} />
      </label>
      <label>
        Mot de passe :
        <input type="password" {...password} />
      </label>
      <button type="submit">Se connecter</button>
    </form>
  );
}
