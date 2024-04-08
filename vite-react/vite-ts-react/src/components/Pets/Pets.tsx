import "./pets.css";

export interface IProp {
  name: string;
  animal: string;
  breed: string;
  id?: number;
  images: string[];
}

function Pets({ name, animal, breed, images }: IProp) {
  // const [current, setCurrent] = useState<number>();

  return (
    <div className="pets-div">
      <h1>{name}</h1>
      <h1>{animal}</h1>
      <h1>{breed}</h1>
      <h1>{images.length && <img src={images[0]} alt={name} />}</h1>
    </div>
  );

  // function setClickedDetail(e: MouseEvent<HTMLAnchorElement>, id?: number) {
  //   setCurrent(id);
  // }
}

export default Pets;
