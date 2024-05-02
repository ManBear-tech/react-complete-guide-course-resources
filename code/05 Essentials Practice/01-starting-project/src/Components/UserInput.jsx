export default function UserInput({label, onUserInput}) {

    function handleInput(event) {
        onUserInput(label, event.target.valueAsNumber)
    }

    return (
            <p>
                <label>{label}</label>
                <input onChange = {handleInput} type = "number"></input>
            </p>
    )
}