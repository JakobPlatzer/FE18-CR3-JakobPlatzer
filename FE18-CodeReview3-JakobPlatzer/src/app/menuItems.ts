export const menuItems = [
    {
        name: "Pizza Margherita ",
        image: "https://cdn.pixabay.com/photo/2020/01/27/12/56/cheese-4797173_1280.jpg",
        description: "cheese, tomato, oregano",
        price: 8,
        vfactor: "vegetarian",
        availability: true
    }, {
        name: "Pizza Cardinale ",
        image: "https://cdn.pixabay.com/photo/2016/03/05/20/12/american-1238698_1280.jpg",
        description: "ham, cheese, tomato, oregano",
        price: 9,
        vfactor: "",
        availability: true
    }, {
        name: "Pizza Salami ",
        image: "https://cdn.pixabay.com/photo/2020/12/28/10/58/pizza-5866647_1280.jpg",
        description: "salami, cheese, tomato, oregano",
        price: 9,
        vfactor: "",
        availability: true
    }, {
        name: "Pizza Marinara ",
        image: "https://media.istockphoto.com/id/899907206/de/foto/traditionelle-italienische-pizza-mit-tomatensauce-knoblauch-und-basilikum-auf-einem-holztisch.jpg?s=1024x1024&w=is&k=20&c=bXr503XyzwiJ0pntri9H5ofNpIgh32cucfTbuIPFOJs=",
        description: "tomato, oregano",
        price: 7,
        vfactor: "vegan",
        availability: true
    }, {
        name: "Spaghetti Carbonara ",
        image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
        description: "eggs, guanciale, pecorino romano",
        price: 9,
        vfactor: "",
        availability: false
    }, {
        name: "Spaghetti Cacio e Pepe ",
        image: "https://media.istockphoto.com/id/1467795632/es/foto/spaghetti-cacio-e-pepe-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=CJHDdDexLq03LyZwaKMs3vRwZ02u4K3THIStnqOlSKw=",
        description: "pepper, pecorino romano",
        price: 8,
        vfactor: "vegetarian",
        availability: true
    }, {
        name: "Spaghetti Pomodoro ",
        image: "https://media.istockphoto.com/id/696399086/es/foto/meatballs-en-salsa-de-tomate-con-espaguetis.jpg?s=1024x1024&w=is&k=20&c=UFc0zm8buiH1M9B4QH5EFYLWw7_pRqU8zmAi_dkpu0Y=",
        description: "tomatosauce",
        price: 8,
        vfactor: "vegan",
        availability: true
    }, {
        name: "Lasagna ",
        image: "https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021_1280.jpg",
        description: "cheese, meatsauce",
        price: 10,
        vfactor: "",
        availability: false
    }, {
        name: "Tiramisu",
        image: "https://cdn.pixabay.com/photo/2018/04/21/12/03/food-3338312_1280.jpg",
        description: "coffee, mascarpone",
        price: 5,
        vfactor: "vegetarian",
        availability: true
    }, {
        name: "Pana Cotta",
        image: "https://cdn.pixabay.com/photo/2016/05/05/12/47/dessert-1373820_1280.jpg",
        description: "strawberries",
        price: 4,
        vfactor: "vegetarian",
        availability: false
    }, 
]

export interface Meal {
    name: string,
    image: string,
    description: string,
    price: number,
    vfactor?: string,
    availability: boolean
}