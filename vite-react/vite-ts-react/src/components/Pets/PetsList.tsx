import "./petlist.css";
import { Link, Outlet, useParams } from "react-router-dom";
import Pets, { IProp } from "./Pets";
import { MouseEvent, useState } from "react";

interface IPetsArray {
  pets: IProp[];
}

function PetsList({ pets }: IPetsArray) {
  const { petId } = useParams();
  const [current, setCurrent] = useState<number>();
  const [currentPet, setCurrentPet] = useState<IProp>();

  return (
    <div className="search-wrap">
      <div className="search">
        {!pets.length ? (
          <h1>No Pets Found</h1>
        ) : (
          pets.map((pet: IProp) => (
            <div className="pet-items" key={pet.id}>
              <Link
                to={`/details/${pet.id}`}
                onClick={(e) => name(e, pet)}
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
              
            </div>
          ))
        )}
      </div>
      {current === currentPet?.id || Number(petId) === currentPet?.id ? (
                <Outlet context={{ id: currentPet?.id, name: currentPet?.name }} key={currentPet?.id} />
              ) : null}
    </div>
  );

  function name(e: MouseEvent<HTMLAnchorElement>, pet?: IProp) {
    setCurrent(pet?.id);
    setCurrentPet(pet)
  }
}

export default PetsList;
