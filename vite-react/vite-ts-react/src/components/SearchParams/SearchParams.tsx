import { useState, useEffect } from "react";
import { IProp } from "../Pets/Pets";

import PetsList from "../Pets/PetsList";
import PetsForm from "../Pets/PetsForm/PetsForm";

function SearchParams() {
  //const locationInit = 'Seattle, WA';

  const [location] = useState("");
  const [animal] = useState("");
  const [breed] = useState("");
  const [pets, setPets] = useState<IProp[]>([]);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // ignored the warning because i want to wait for submit before any change

  async function requestPets() {
    fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}
      `
    ).then((res) =>
      res.json().then((res) => {
        setPets([...res.pets]);
      })
    );
  }

  return (
    <>
      <PetsForm requestPets={requestPets} />

      <PetsList pets={pets} />
    </>
  );
}

export default SearchParams;
