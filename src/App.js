import { Col, Row } from "antd";
import { useState } from "react";
import "./App.css";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";
import foods from "./foods.json";

function App() {
  const [food, setFood] = useState(foods);

  return (
    <div className="App">
      <Row>
        {food.map((food, i) => (
          <Col key={i} span={8} className="foodItem">
          <FoodBox food={food} />
          </Col>
        ))}
      </Row>
      <div className="nameform">
      <AddFoodForm/>
      </div>
    </div>
  );
}

export default App;
