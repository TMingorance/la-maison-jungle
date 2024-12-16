import "../styles/ShoppingList.css"
import { plantList } from "../resources/plantList"
import PlantItem from "./PlantItem";
import Categories from "./Categories";


function ShoppingList({categorySelected, updateCategorySelected, cartList, updateCart}) {
    
        /*
    plantList.forEach((plant) =>{ 
        if (categoryList.find(element => element === plant.category) === undefined)  
        categoryList.push(plant.category);});
    */

    console.log("categorySelected = " + categorySelected);

    return  <div>
                <h2>Liste des catégories</h2>
                <Categories categorySelected={categorySelected} updateCategorySelected={updateCategorySelected} />
                <h2>Liste des plantes</h2>
                <ul className="lmj-plant-list">
                    {plantList.map((plant) => {
                        if(!categorySelected || (categorySelected && plant.category === categorySelected))
                            return <PlantItem cartList={cartList} updateCart={updateCart} key={plant.id} plant={plant}/>
                        else
                            return null;
                    })}                  
                </ul>
            </div>;
}

export default ShoppingList