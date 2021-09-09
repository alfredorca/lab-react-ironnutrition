import { Card, Button } from "antd";

function FoodBox({food: {name, calories, servings, image, objectservings}}) {
 console.log()
  return (
    
       <Card
         title={name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={image} alt="" height={60} />
          <p>Calories: {calories}</p>
          <p>Servings: {servings}</p>
          <p>
            <b>
              Total Calories: {calories} * {objectservings}{" "}
            </b>{" "}
            kcal
          </p>
          <Button type="primary"> Delete </Button>
        </Card>
      
    
  );
}

export default FoodBox;
