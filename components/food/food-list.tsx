"use client";
import AddList from "@/app/list/addFood";
import Food from "@/components/food";
import { useState } from "react";

type Food = {
  title: string;
  description: string;
  rating: number;
  price: number;
  image: string;
}

const FoodList = (myProps: Food) => {
  const [stateData, setStateData] = useState<Food[]>(myProps.data)

//   fucntion to remove food from list
    const handleRemove = (index: number) => {
        // store list to temp variable
        const tempList = stateData
        // remove one item of array
        tempList.splice(index, 1)
        // update state of list
        setStateData([...tempList])
    };

    const handleAddData = (f: Food) => {
      const tempList = stateData
      tempList.push(f)
    /* push digunakan untuk menambah item baru pada array */
      setStateData([...tempList])
    }

  return (
    <div>
      <div>
        <AddList handleAdd={handleAddData}/>
      </div>
      <div className="w-full flex flex-wrap">
        {/* map: scanning data di dalam array */}
      {stateData.map((food, index) => (
        <div className="w-full md:w-1/2 p-3 relative" key={`food-${index}`}>
          <Food
            title={food.title}
            description={food.description}
            rating={food.rating}
            price={food.price}
            image={food.image}
          />
          <button className="absolute top-0 right-0 font-semibold text-white bg-red-500 size-9 rounded-full text-lg"
          onClick={() => handleRemove(index)}
          >
            &times;
          </button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FoodList;
