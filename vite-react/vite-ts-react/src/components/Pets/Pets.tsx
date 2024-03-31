export interface IProp {
  name: string;
  animal: string;
  breed: string;
  id?: number;
}

function Pets({name, animal, breed,}:IProp) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{animal}</h1>
      <h1>{breed}</h1>
    </div>
  );
}

export default Pets;
