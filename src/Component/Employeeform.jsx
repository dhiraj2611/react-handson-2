import { useState} from "react";
import './Style.css';
const Employeeform = () => {

    const [inp,SetInp] = useState({});

    const handleChange = (event) =>
    {
        const name = event.target.name;
        const value = event.target.value;
        SetInp(values => ({...values,[name]:value}))
    }
    const handleSubmit=(event)=>
    {
        event.preventDefault();
        const blockc = document.getElementById("blockContainer");
        const b = document.createElement("div");
        b.setAttribute("id","block");
        b.append("Name: ",inp.uname);
        b.append(" | ");
        b.append("Department: ",inp.udept);
        b.append(" | ");
        b.append("Rating: ",inp.ur);
        blockc.appendChild(b);
        
    }
    return(
        <div id="container">
            <form onSubmit={handleSubmit}>

                <br/>
                <label>Name:
                    <input type="text" name="uname" value={inp.uname} onChange={handleChange} />
                </label>
                <br/><br/>
                <label>
                    Department: 
                    <input type="text" name="udept" value={inp.udept} onChange={handleChange} />
                </label>
                <br/><br/>
                <label>
                Rating: 
                    <input type="number" name="ur" value={inp.ur} onChange={handleChange}  />
                </label><br/><br/>
                <br/>
                <input type="submit"/>
            </form>
            <div id="blockContainer"></div>
        </div>
    )
} 


export default Employeeform;