
import FoodList from "@/components/food/food-list";
import { Food } from "./edit";

const ListPage = () => {
    // membuat data makanan
    let foods: Food[] = [
        {
            title: "Soto Ayam",
            price: 15000,
            rating: 0,
            description: "Soto ayam adalah makanan yang terbuat dari ayam yang dimasak dengan kuah bening dan disajikan dengan nasi",
            image: "https://images.pexels.com/photos/1703272/pexels-photo-1703272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Bakso",
            price: 12000,
            rating: 0,
            description: "Bakso adalah bola daging yang terbuat dari campuran daging sapi dan tepung tapioka",
            image: "https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Mie Goreng",
            price: 10000,
            rating: 0,
            description: "Mie goreng adalah mie yang digoreng dengan bumbu dan sayuran",
            image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Rendang",
            price: 20000,
            rating: 0,
            description: "Rendang adalah masakan daging dengan bumbu rempah-rempah yang dimasak dalam waktu lama hingga kering",
            image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]


    return (
        <div className="flex flex-wrap w-full">
            <h1 className="text-3xl mb-2 font-semibold w-full text-center">
                Sekopling Restaurant
            </h1>
            <p className="text-sm text-slate-500 mb-4 text-center w-full">
                Daftar makanan yang tersedia
            </p>
            <FoodList data={foods} />
        </div>
    );
}

export default ListPage;