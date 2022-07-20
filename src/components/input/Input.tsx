import React, {ChangeEventHandler} from 'react';
import './Input.scss'
import {FormikErrors, FormikTouched, FormikValues} from "formik";

interface InputInterface {
    value?: string,
    placeholder?: string
    id: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
    touched:FormikTouched<FormikValues>,
    errors:FormikErrors<FormikValues>
}

const Input = ({value, id, placeholder, onChange,errors,touched}: InputInterface) => {
    return (
        <div className={'custom-input'}>
            <input id={id} name={id} value={value} onChange={onChange} placeholder={placeholder}/>
            {errors[id] && touched[id] ? (
                <span className={'custom-input__error'}>{errors[id]?.toString()}</span>
            ) : null}
        </div>
    );
};

Input.defaultProps={
    placeholder:'Placeholder'
}

export default Input;