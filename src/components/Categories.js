import { plantList } from "../resources/plantList"

function Categories({categorySelected, updateCategorySelected}){
    const defaultSelectText = "Select a category"

    let categoryList = plantList.reduce((accumulator, currentValue) => 
        accumulator.includes(currentValue.category) ? accumulator : accumulator.concat(currentValue.category)
        , []);
    categoryList.splice(0, 0, defaultSelectText);
    return (
    <div>
        <select onChange={(event) => {
                event.target.value !== defaultSelectText &&
                updateCategorySelected(event.target.value)
            }}>
        {categoryList.map((category,index) => 
                <option key={`${category}`}>
                    {category}
                </option>
            )}
        </select>
        <button onClick={() => updateCategorySelected("")}>Réinitialiser</button>
    </div>
    );
}

export default Categories