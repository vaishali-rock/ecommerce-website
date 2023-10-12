import Button from '../Common/Button'

export default function SignUp() {

    function handleButtonClick(){
        return alert("This is test");
    }
    
    return (
        <div>
            <label>
                FirstName: <input name="firstName" />
            </label>
            <hr />
            <label>
                LastName: <input name="lastName" />
            </label>
            <hr />
            <label>
                PhoneNumber: <input name="phoneNumber" />
            </label>
            <hr />
            <label>Select an option:</label>
                <select>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            <hr />
            <label>
                Email: <input name="email" />
            </label>
            <hr />
            <label>
                Password: <input name="password" />
            </label>
            <hr />
            <Button buttonText={'SignUp'} handleButtonClick={handleButtonClick}></Button>
        </div>
    );
}