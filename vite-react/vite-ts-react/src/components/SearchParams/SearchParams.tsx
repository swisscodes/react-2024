import { useState, useEffect } from "react";
import { IProp } from "../Pets/Pets";
import PetsList from "../Pets/PetsList";
import PetsForm, { IPetsForm } from "../Pets/PetsForm/PetsForm";

function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState<IProp[]>([]);

  const formState: IPetsForm["formState"] = {
    //indexed access type getting type from parent
    location: [location, setLocation],
    animal: [animal, setAnimal],
    breed: [breed, setBreed],
  };

  // const formState1 = {
  //   //getting type from returned typed
  //   location: ([] = [location, setLocation]),
  //   animal: [animal, setAnimal],
  //   breed: ([] = [breed, setBreed]),
  // };

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
        setPets(res.pets);
      })
    );
  }

  return (
    <>
      <PetsForm requestPets={requestPets} formState={formState} />

      <PetsList pets={pets} />
    </>
  );
}

export default SearchParams;
