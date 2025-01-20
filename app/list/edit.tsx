"use client"

import Modal from "@/components/modal"
import { FormEvent, useState } from "react"

export interface Food {
    title: string
    description: string
    image: string
    price: number
    rating: number
}


type Props = {
    handleChange: (index: number, f: Food) => void;
    selectedItem: Food;
    index: number;
  };
  
  const EditList = ({ handleChange, selectedItem, index }: Props) => {
    const [show, setShow] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(selectedItem.title);
    const [description, setDescription] = useState<string>(selectedItem.description);
    const [image, setImage] = useState<string>(selectedItem.image);
    const [price, setPrice] = useState<number>(selectedItem.price);
    const [rating, setRating] = useState<number>(selectedItem.rating);
  
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
  
    const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      handleChange(index, {
        title,
        image,
        description,
        price,
        rating,
      });
      setShow(false);
    };
  
    return (
      <div>
        <button onClick={handleOpen} className="w-9 h-9 bg-sky-400 text-white hover:bg-sky-500 rounded-full">
          ✎
        </button>
        <Modal isShow={show}>
          <form onSubmit={handleSubmit}>
            <div className="w-full p-3">
              <h1 className="text-2xl font-semibold">Edit Food Item</h1>
              <span className="text-sm text-slate-500">Make sure you fill with correct value</span>
            </div>
            {/* Input Fields */}
            <div className="w-full p-3">
              <label className="text-sm font-medium">Title</label>
              <input type="text" className="w-full p-2 text-sm border rounded-md" required value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="w-full p-3">
              <label className="text-sm font-medium">Image</label>
              <input type="url" className="w-full p-2 text-sm border rounded-md" required value={image} onChange={(e) => setImage(e.target.value)} />
            </div>
            <div className="w-full p-3">
              <label className="text-sm font-medium">Price</label>
              <input type="number" className="w-full p-2 text-sm border rounded-md" required value={price} onChange={(e) => setPrice(Number(e.target.value))} />
            </div>
            <div className="w-full p-3">
              <label className="text-sm font-medium">Description</label>
              <input type="text" className="w-full p-2 text-sm border rounded-md" required value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="w-full p-3">
              <label className="text-sm font-medium">Rating</label>
              <input type="number" className="w-full p-2 text-sm border rounded-md" required value={rating} onChange={(e) => setRating(Number(e.target.value))} />
            </div>
  
            <div className="w-full p-3 flex gap-2">
              <button type="button" className="py-2 px-4 bg-slate-600 text-white rounded-md" onClick={handleClose}>
                Close
              </button>
              <button type="submit" className="py-2 px-4 bg-red-600 text-white rounded-md">
                Save
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  };
  
  export default EditList;
  