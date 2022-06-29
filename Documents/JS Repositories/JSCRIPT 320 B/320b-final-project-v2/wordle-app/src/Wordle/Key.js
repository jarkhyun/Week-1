export default function Key({value, selectKey, removeKey, enterKey}) {
    
    const nodeArray = document.querySelectorAll(".square");
    let classNames = '';

    for (let i = 0; i < nodeArray.length; i++) {
        if (nodeArray[i].classList.length > 1) {
            if (value === nodeArray[i].outerText) {
                classNames = nodeArray[i].classList[1];
                for (let j = 0; j < nodeArray.length; j++) {
                    if (nodeArray[j].classList[1] === 'correct' && value === nodeArray[j].outerText) {
                        classNames = 'correct';
                    }
                }
            };
        }
    }

    return ( 
        <div>
            {value !== 'Ent' && value !== 'Del' && (
                <><input id={`btn${value}`} className={`key ${classNames}`} type="button" value={`${value}`} onClick={() => selectKey(`${value}`)}/></>
            )}
            {value === 'Ent' && (
                <><input id={`btn${value}`} className={`big-key `} type="button" value={`Enter`} onClick={() => enterKey()}/></>
            )}
            {value === 'Del' && (
                <><button id={`btn${value}`} className={`big-key `} onClick={() => removeKey()}>
                    <i className="gg-backspace"></i>
                </button></>
            )}
        </div>
    )
}