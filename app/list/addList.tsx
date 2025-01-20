"use client";

import Modal from "@/components/modal";
import { FormEvent, useState } from "react";

type props = {
  handleAdd: (f: Food) => void;
};

const AddList = (myProp: props) => {
  const [show, setShow] = useState<boolean>(false);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setShow(false);
    myProp.handleAdd({
      title: title,
      description: description,
      image: image,
      price: price,
      rating: rating,
    });
    setTitle("");
    setPrice(0);
    setImage("");
    setDescription("");
    setRating(0);
  };

  return (
    <div>
      <button
        type="button"
        className="px-4 py-2 bg-lime-500 text-white hover:bg-lime-400 duration-200 rounded-md"
        onClick={() => handleOpen()}
      >
        Add Item
      </button>
      <Modal isShow={show}>
        <form onSubmit={(event) => handleSubmit(event)}>
          {/* MODAL HEADER */}
          <div className="w-full p-3">
            <h1 className="text-2xl font-semibold">Add Food Item</h1>
            <span className="text-sm text-slate-500">
              Make sure you fill with corect value
            </span>
          </div>
          {/* MODAL BODY */}
          <div className="w-full p-3">
            <div>
              <label htmlFor="title" className="text-sm font-medium">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full p-2 text-sm rounded-md border"
                required={true}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="price" className="text-sm font-medium">
                price
              </label>
              <input
                type="number"
                id="price"
                className="w-full p-2 text-sm rounded-md border"
                required={true}
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description" className="text-sm font-medium">
                description
              </label>
              <input
                type="text"
                id="desciption"
                className="w-full p-2 text-sm rounded-md border"
                required={true}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="image" className="text-sm font-medium">
                image
              </label>
              <input
                type="url"
                id="image"
                className="w-full p-2 text-sm rounded-md border"
                required={true}
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="rating" className="text-sm font-medium">
                Rating
              </label>
              <input
                type="number"
                id="rating"
                className="w-full p-2 text-sm rounded-md border"
                required={true}
                value={rating}
                onChange={(event) => setRating(event.target.value)}
              />
            </div>
          </div>
          {/* MODAL FOOTER */}
          <div className="w-full p-3 flex gap-2">
            <button
              type="button"
              className="py-2 px-4 rounded-md bg-orange-500 hover:bg-orange-400 text-white"
              onClick={() => handleClose()}
            >
              Close
            </button>
            <button
              type="submit"
              className="py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-400 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default AddList;