import { useState } from "react";


const Forms = () => {
    const [formsData, setFormsData] = useState({
        firstname: "",
        lastname: "",
        email: "",
    });



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormsData({ ...formsData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formsData);
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
            <label>
                FirstName:
                <input type="text"
                name="firstName"
                value={formsData.firstname}
                onChange={handleInputChange} />
                
            </label>
            </div>
            <br />
            <div>
                <label>
                    LastName:
                    <input type="text"
                    name="lastname"
                    value={formsData.lastname}
                    onChange={handleInputChange} />
                </label>

            </div>
            <br />
            <div>
                <label>
                    email:
                    <input type="email"
                    name="email"
                    value={formsData.email}
                    onChange={handleInputChange} />
                </label>
            </div>
            <br />
            <div>
            <p> checkboxs:</p>
            <label for=" checkbox1"> option 1:</label>
            <input  type="checkbox" name="checkbox1" value="option 1"/>
            
            <br />
            <label for="checkbox2">option 2:</label>
            <input type="checkbox" name="checkbox2" value="option 2"/>
            
            <br />
            <label for="checkbox3">option 3:</label>
            <input type="checkbox" name="checkbox3" value="option 3"/>
            


            </div>
            <br />
            <div>
                <label>
                    <button type="submit">Submit</button>
                </label>
            
                
            </div>



            
        </form>
    )
}
export default Forms 