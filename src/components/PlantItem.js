import CareScale from "./CareScale";

function PlantItem({plant, cartList, updateCart}){

    function handleClick(e){
        console.log("Voici mon event : ", e);
    }

    function soldes(plant){
        return plant.isSpecialOffer === true && <div className="lmj-sales">Soldes !</div>;
    }

    function updateAndStore(aCartList){
        updateCart([...aCartList]);
        localStorage.setItem("cartList", JSON.stringify(aCartList));
    }

    return(
    <li className="lmj-plant-item" onClick={handleClick}> {/*Equivalent of plant.isBestSale ? <span>🔥</span> : null*/}
        {soldes(plant)}
        <img className="lmj-plant-item-cover" src={plant.pictureURL} alt={`${plant.name} cover`}/>
        <span>{plant.name} {plant.isBestSale && <span>🔥</span>}</span>
        <div>
            <CareScale scaleType="light" scaleValue={plant.light}/>
            <CareScale scaleType="water" scaleValue={plant.water}/>
        </div>
        <button onClick={() => {
            const plantIndex = cartList.findIndex((value) => value.plant.id === plant.id)
            if(plantIndex > -1){
                const currentPlantCount = cartList[plantIndex].count;
                cartList[plantIndex] = {...cartList[plantIndex], count: currentPlantCount + 1}
                updateAndStore(cartList)
            }
            else{
                updateAndStore([...cartList, {plant, count: 1}])
            }
        }
        }>
                    Ajouter au panier
        </button>
    </li> 
    );
}

export default PlantItem