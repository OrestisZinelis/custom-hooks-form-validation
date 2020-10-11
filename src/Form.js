import React from 'react';
import useForm from "./useForm";
import validate from './validateLogin';
import './index.css';

const Form = () => {
    const { handleChange, handleSubmit, values, errors } = useForm(submit, validate);

    function submit() {
        console.log("Submitted Succesfully");
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                noValidate>
                <div>
                    <label>Email</label>
                </div>
                <div>
                    <input
                        className={`${errors.email && "inputError"}`}
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                    <label>Password</label>
                </div>
                <div>
                    <input
                        className={`${errors.password && "inputError"}`}
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>)
};

export default Form;
