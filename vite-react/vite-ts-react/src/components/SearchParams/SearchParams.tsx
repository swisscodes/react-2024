import { useState, useEffect } from "react";
import Pets from "../Pets/Pets";
import { IProp } from "../Pets/Pets";
import useBreedHook from "src/Hooks/useBreedHook";
function SearchParams() {
  //const locationInit = 'Seattle, WA';
  const animals = ["bird", "cat", "dog", "rabbit", "reptile"];

  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedHook(animal);
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
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">Location</label>
        <input
          id="location"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />

        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
        >
          <option value="" disabled hidden>
            Please select...
          </option>
          {animals.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <label htmlFor="breed">Breed</label>
        <select
          id="breed"
          value={breed}
          disabled={breeds?.length === 0}
          onChange={(e) => setBreed(e.target.value)}
        >
          <option disabled value="" hidden>
            Please select...
          </option>
          {breeds.map((item: string) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>

      {Array.isArray(pets) &&
        pets.map((o) => <Pets {...o} key={o.id + o.name} />)}
    </div>
  );
}

export default SearchParams;
