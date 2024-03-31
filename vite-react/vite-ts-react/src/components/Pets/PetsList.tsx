import Pets, { IProp } from "./Pets";

interface IPetsArray {
    pets:IProp[]
}

function PetsList({ pets }:IPetsArray) {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet:IProp) => (
          <Pets
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
}

export default PetsList;
