function CareScale({scaleType, scaleValue}){
    //const scaleValue = props.scaleValue;
    //const {scaleType, scaleValue} = props;
    const range = [1,2,3];
    let humanReadableCareScale="";
    switch (scaleValue){
        case 1:
            humanReadableCareScale = "peu"
            break;
        case 2 :
            humanReadableCareScale = "assez"
            break;
        case 3:
            humanReadableCareScale = "beaucoup"
            break;
        default:
            humanReadableCareScale="";
    }

    //We can actually use an object as a map for those two : 
    /*let assignedValue = {
        1: "peu",
        2: "assez",
        3: "beaucoup"
    }*/
    //And use it like an array : assignedValue[scaleValue], in a template string

    let humanReadableCareType = "";
    switch(scaleType){
        case "light":
            humanReadableCareType = "de lumière";
            break;
        case "water":
            humanReadableCareType = "d'arrosage";
            break;
        default:
            humanReadableCareType = "";
    }

    function infoAlert(){
        alert("Cette plante requiert " + humanReadableCareScale + " " + humanReadableCareType + ".")
    }

    return  <div onClick={infoAlert}>
                {range.map(rangeElement => 
                    rangeElement <= scaleValue && <span key={rangeElement.toString()}>{scaleType==="light" ? "☀️" : "💧"}</span>
                    )
                }
            </div>
}

export default CareScale