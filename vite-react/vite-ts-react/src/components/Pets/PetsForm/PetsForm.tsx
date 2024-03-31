import { useState } from "react";
import useBreedHook from "src/Hooks/useBreedHook";

interface IPetsForm {
  requestPets(): void;
}

function PetsForm({ requestPets }: IPetsForm) {
  const animals = ["bird", "cat", "dog", "rabbit", "reptile"];

  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedHook(animal);

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
    </div>
  );
}

export default PetsForm;
