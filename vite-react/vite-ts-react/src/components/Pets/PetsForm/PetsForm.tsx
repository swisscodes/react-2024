import { Dispatch, SetStateAction } from "react";
import useBreedHook from "src/Hooks/useBreedHook";

export interface IPetsForm {
  requestPets(): void,
  formState:{
    location:[string, Dispatch<SetStateAction<string>>],
    animal:[string, Dispatch<SetStateAction<string>>],
    breed:[string, Dispatch<SetStateAction<string>>],
  }
}

function PetsForm({ requestPets, formState}: IPetsForm) {
  const animals = ["bird", "cat", "dog", "rabbit", "reptile"];

  const [location, setLocation] = formState.location;
  const [animal, setAnimal] = formState.animal;
  const [breed, setBreed] = formState.breed;
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
