import { useState } from "react";
import axios from 'axios';

const baseURL = 'http://localhost:8080';

const Input = (id) => {
    let [value, setValue] = useState(null);

    return(<>
        <label for={id}>{id}</label>:<input value={value} onChange={(val)=>setValue(val)}></input>
    </>)
}

const Login = () => {
    let [response, setResponse] = useState([]);

    const getRequest = () => {
        axios.get(baseURL + '/api/users')
        .then(res=>setResponse(res.data));
    }

    return (
        <>
            <button onClick={() => getRequest()}>Hit Me!</button>
            {
                <ul>
                    {response.map(el => <li>{el.username}:{el.password}</li>)}
                    <Input />
                </ul>
            }
        </>
    )
}

export { Login }