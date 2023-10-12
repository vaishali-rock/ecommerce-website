import Button from "../Common/Button";

export default function Login() {

    function handleButtonClick(){
        return alert("Click from login button");
    }

    return (
        <div>
            <label>
                Email: <input name="email" />
            </label>
            <hr />
            <label>
                Password: <input name="password" />
            </label>
            <hr />
            <Button buttonText={'Login'} handleButtonClick={handleButtonClick}></Button>
        </div>
    );
}