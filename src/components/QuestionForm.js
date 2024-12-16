import { useState } from "react"

function QuestionForm(){

    const [inputValue, setInputValue] = useState("Posez votre question ici");
    const isInputError = inputValue.includes('/');

    function filterField(value){
        if (!value.includes("!")){
            setInputValue(value);
        }
    }

    return <div>
        <textarea value={inputValue} onChange={(e) => filterField(e.target.value)}/>
        {isInputError && (<div>Pas de "/" ici, on ne se fera pas hacker !</div>)}
        <button onClick={() => alert(inputValue)}>Alertez-moi !</button>
    </div>




    //Non-controlled form
 /*   function handleSubmit(e){
        e.preventDefault();
        alert(e.target['my_input'].value)
    }

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="my_input" defaultValue={'Tapez votre texte'}/>
        <button type="submit">Entrer</button>
    </form>);*/

}

export default QuestionForm