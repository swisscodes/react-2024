export interface IProp {
  name: string;
  animal: string;
  breed: string;
  id?: number;
}

function Pets(props:IProp) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.animal}</h1>
      <h1>{props.breed}</h1>
    </div>
  );
}

export default Pets;
