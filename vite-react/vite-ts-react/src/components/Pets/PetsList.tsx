import "./petlist.css";
import { Link, Outlet, useParams } from "react-router-dom";
import Pets, { IProp } from "./Pets";
import { MouseEvent, useState } from "react";

interface IPetsArray {
  pets: IProp[];
}

function PetsList({ pets }: IPetsArray) {
  const { petId } = useParams();
  const [a, setA] = useState<number>();
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet: IProp) => (
          <div className="pet-items" key={pet.id}>
            <Link
              to={`/details/${pet.id}`}
              onClick={(e) => name(e, pet.id)}
              className="pet-link"
            >
              <Pets
                name={pet.name}
                animal={pet.animal}
                breed={pet.breed}
                images={pet.images}
                id={pet.id}
              />
            </Link>
            {a === pet.id || Number(petId) === pet.id ? (
              <Outlet context={{ id: pet.id, name: pet.name }} key={pet.id} />
            ) : null}
          </div>
        ))
      )}
    </div>
  );

  function name(e: MouseEvent<HTMLAnchorElement>, id?: number) {
    setA(id);
  }
}

export default PetsList;
