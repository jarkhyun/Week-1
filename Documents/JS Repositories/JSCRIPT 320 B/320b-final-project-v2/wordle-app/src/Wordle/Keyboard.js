import Key from "./Key";

export default function Keyboard({selectKey, removeKey, enterKey}) {
    const topRow = ['Q','W','E','R','T','Y','U','I','O','P'];
    const middleRow = ['A','S','D','F','G','H','J','K','L'];
    const bottomRow = ['Ent','Z','X','C','V','B','N','M', 'Del'];

    const topKeyboard = topRow.map((value, index) =>
        <Key
            key = {index}
            value = {value}
            selectKey = {selectKey}
            removeKey = {removeKey}
            enterKey = {enterKey}
        />
    )

    const middleKeyboard = middleRow.map((value, index) =>
        <Key
            key = {index}
            value = {value}
            selectKey = {selectKey}
            removeKey = {removeKey}
            enterKey = {enterKey}
        />
    )

    const bottomKeyboard = bottomRow.map((value, index) =>
        <Key
            key = {index}
            value = {value}
            selectKey = {selectKey}
            removeKey = {removeKey}
            enterKey = {enterKey}
        />
    )

    //const classNames = displayKeyboardProgress();

    return ( 
            <div id="VirtualKey">
                <div className="row">
                    {topKeyboard}
                </div>
                <div className="row">
                    {middleKeyboard}
                </div>
                <div className="row">
                    {bottomKeyboard}
                </div>
            </div>
    )
}