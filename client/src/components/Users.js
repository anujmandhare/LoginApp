import { useState } from "react";
import { postRequest, getRequest } from "./Api";

const CustomInput = ({ data }) => {
    const { id, value, setter, type, labelData } = data;
    const isDesc = id==='description';
    return (<div className="mb-3 row">
        <div className="col-sm-2x"></div>
        <label className="col-sm-2 col-form-label" required htmlFor={id} >{labelData}{isDesc?null:<span>*</span>}</label>
        <div className="col-sm-4">
            {id !== 'description' ? <input className="form-control" id={id} required value={value} type={type} onChange={(val, d) => {
                setter(val.target.value)
            }}></input> :
                <textarea className="form-control" id={id} required value={value} type={type} onChange={(val, d) => {
                    setter(val.target.value)
                }} ></textarea>}
        </div>
    </div >)
}

const Login = () => {
    const clearFields = () => {
        setUsername('');
        setEmail('');
        setDob('');
        setDescription('');
    }

    const tt = new Date();
    const date = `${tt.getFullYear() + '-' + tt.getMonth() + '-' + tt.getDate()}`
    let [response, setResponse] = useState([]);
    let [username, setUsername] = useState('');
    let [email, setEmail] = useState('');
    let [dob, setDob] = useState(date);
    let [description, setDescription] = useState('');

    const formSubmit = async () => {
        const payload = {
            username,
            email,
            dob,
            description
        };
        clearFields();
        await postRequest(payload, setResponse);
        setTimeout(() => {
            getRequest(setResponse)
        }, 2000);
    }

    const validation = () => {
        const user = document.getElementById('username').classList;
        const em = document.getElementById('email');
        const d = document.getElementById('dob').classList;

        if (!username) {
            user.add('is-invalid');
            return;
        } else {
            user.remove('is-invalid');
        }
        if (!email) {
            em.classList.add('is-invalid');
            return;
        } else if (!(/(^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$)/.test(email))) {
            em.classList.add('is-invalid');
            return;
        } else {
            em.classList.remove('is-invalid');
        }
        if (!dob) {
            d.add('is-invalid');
            return;
        } else {
            d.remove('is-invalid');
        }
        formSubmit();
    };

    return (
        <>
            <div className="form container">
                <CustomInput data={{ labelData: 'Username', id: 'username', type: 'text', value: username, setter: setUsername }} />
                <CustomInput data={{ labelData: 'Email Address', id: 'email', type: 'email', value: email, setter: setEmail }} />
                <CustomInput data={{ labelData: 'Date of Birth', id: 'dob', type: 'date', value: dob, setter: setDob }} />
                <CustomInput data={{ labelData: 'Personal Description', id: 'description', type: 'type', value: description, setter: setDescription }} />
                <div className="mb-3 row">
                    <button className="col-sm-2 btn btn-primary" onClick={() => validation()}>Login Me!</button>
                    <button className="col-sm-2 btn btn-warning" onClick={() => getRequest(setResponse)}>Get Database Entries</button>
                </div>
            </div>
            {response.length ?
                <><ul key='header' className="row">
                    <li key='username' className="col-sm-2 border">Username</li>
                    <li key='email' className="col-sm-3 border">Email Address</li>
                    <li key='dob' className="col-sm-2 border">Date of Birth</li>
                    <li key='description' className="col-sm-5 border">Personal Description</li>
                </ul>
                    {response.map((el, index) => {
                        return (<><ul key={'data' + index} className="row">
                            <li key={'username' + index} className="col-sm-2 border">{el.username}</li>
                            <li key={'email' + index} className="col-sm-3 border">{el.email}</li>
                            <li key={'dob' + index} className="col-sm-2 border">{el.dob}</li>
                            <li key={'description' + index} className="col-sm-5 border">{el.description}</li>
                        </ul></>)
                    })}
                </>
                : null}
        </>
    )
}

export { Login }