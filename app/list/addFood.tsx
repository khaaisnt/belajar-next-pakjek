"use client"

import Modal from "@/components/modal"
import { FormEvent, useState } from "react"
import { Food } from "./food-list"

type props = {
    handleAdd: (f: Food) => void
}

const AddList = (myProp: props) => {
    const [show, setShow] = useState<boolean>(false)
    //state ini untuk menyimpan status tampilan modal

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [image, setImage] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [rating, setRating] = useState<number>(0)

    const handleOpen = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        setShow(false)
        myProp.handleAdd({
            title: title,
            image: image,
            description: description,
            price: price,
            rating: rating
        })
        /* refresh state to default value */
        setTitle("")
        setPrice(0)
        setImage("")
        setRating(0)
        setDescription("")
    }
    return (
        <div className="">
            <button type="button"
                className="px-4 py-2  bg-green-600 text-white hover:bg-green-500 rounded-sm"
                onClick={() => handleOpen()}>
                Add Item
            </button>

            <Modal isShow={show}>
                <form onSubmit={event => handleSubmit(event)}>
                    {/* modal header */}
                    <div className="w-full p-3">
                        <h1 className="text-2xl font-semibold">
                            Add Food Item
                        </h1>
                        <span className="text-sm text-slate-500">
                            Make sure you fill with correct value
                        </span>
                    </div>

                    {/* modal body */}
                    <div className="w-full p-3">
                        <div>
                            <label htmlFor="title"
                                className="text-sm font-medium">
                                Title
                            </label>
                            <input type="text" id="title"
                            className="w-full p-2 text-sm rounded-md border"
                            required={true} 
                            value={title}
                            onChange={event => setTitle(event.target.value)}/>
                        </div>
                    </div>
                    <div className="w-full p-3">
                        <div>
                            <label htmlFor="image"
                                className="text-sm font-medium">
                                image
                            </label>
                            <input type="url" id="image"
                            className="w-full p-2 text-sm rounded-md border"
                            required={true} 
                            value={image}
                            onChange={event => setImage(event.target.value)}/>
                        </div>
                    </div>
                    <div className="w-full p-3">
                        <div>
                            <label htmlFor="price"
                                className="text-sm font-medium">
                                price
                            </label>
                            <input type="number" id="price"
                            className="w-full p-2 text-sm rounded-md border"
                            required={true} 
                            value={price}
                            onChange={event => setPrice(Number(event.target.value))}/>
                        </div>
                    </div>
                    <div className="w-full p-3">
                        <div>
                            <label htmlFor="descriptions"
                                className="text-sm font-medium">
                                descriptions
                            </label>
                            <input type="text" id="descriptions"
                            className="w-full p-2 text-sm rounded-md border"
                            required={true} 
                            value={description}
                            onChange={event => setDescription(event.target.value)}/>
                        </div>
                    </div>
                    <div className="w-full p-3">
                        <div>
                            <label htmlFor="rating"
                                className="text-sm font-medium">
                                rating
                            </label>
                            <input type="number" id="rating"
                            className="w-full p-2 text-sm rounded-md border"
                            required={true} 
                            value={rating}
                            onChange={event => setRating(Number(event.target.value))}/>
                        </div>
                    </div>

                    {/* modal footer */}
                    <div className="w-full p-3 flex gap-2">
                        <button type="button"
                            className="py-2 px-4 rounded-md bg-slate-600 hover:bg-slate-500 text-white"
                            onClick={() => handleClose()}>
                            Close
                        </button>
                        <button type="submit"
                            className="py-2 px-4 rounded-md bg-red-600 hover:bg-red-500 text-white">
                            Save
                        </button>
                    </div>

                </form>
            </Modal>
        </div>
    )
}
export default AddList