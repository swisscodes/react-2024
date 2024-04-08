import "./petdetails.css";
import { Link, useOutletContext } from "react-router-dom";
function PetDetails() {
  const {/*id:paramId*/ a} = useOutletContext<{ id?: number; name: string, itemClass: string, a?:number}>();
  return (
    <>
    
      <div className="">
        <p>ok</p>
        <Link to="/">Back to page</Link>
      </div>
    
    </>
  );
}

export default PetDetails;
