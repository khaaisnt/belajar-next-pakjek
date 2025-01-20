"use client";
import AddList from "@/app/list/addFood";
import EditList, { Food } from "@/app/list/edit";
import { useState } from "react";
import Foods from ".";

interface FoodListProps {
  data: Food[];
}

const FoodList = ({ data }: FoodListProps) => {
  const [stateData, setStateData] = useState<Food[]>(data);

  // Function untuk menghapus makanan
  const handleRemove = (index: number) => {
    setStateData((prevState) => prevState.filter((_, i) => i !== index));
  };

  // Function untuk menambahkan makanan
  const handleAddData = (f: Food) => {
    setStateData((prevState) => [...prevState, f]);
  };

  // Function untuk mengedit makanan
  const handleEdit = (index: number, f: Food) => {
    setStateData((prevState) => prevState.map((item, i) => (i === index ? f : item)));
  };

  return (
    <div>
      <div>
        <AddList handleAdd={handleAddData} />
      </div>
      <div className="w-full flex flex-wrap">
        {stateData.map((food, index) => (
          <div className="w-full md:w-1/2 p-3 relative" key={`food-${index}`}>
            <Foods {...food} />
            <button className="absolute top-0 right-0 bg-red-500 text-white font-semibold size-9 rounded-full text-lg" onClick={() => handleRemove(index)}>
              &times;
            </button>
            <div className="absolute top-0 right-10">
              <EditList index={index} selectedItem={food} handleChange={handleEdit} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
