import { Input } from "antd";
import './AddFoodForm.css'

function AddFoodForm() {
 // onChange = {};
 return (
   <form className="nameName">
     <h3 className='addFoodForm'>Name</h3>
     <Input  value={""} type="text" placeholder="Food" />
     <h3 className='addFoodForm'>Image</h3>
     <Input  value={""} type="text" placeholder="URL-Link" />
     <h3 className='addFoodForm'>Calories</h3>
     <Input  value={"1"} type="number" />
     <h3 className='addFoodForm'>Servings</h3>
     <Input  value={"1"} type="number" />
   </form>
 );
}

export default AddFoodForm;