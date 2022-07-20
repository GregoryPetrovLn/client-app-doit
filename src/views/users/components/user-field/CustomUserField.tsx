import React from 'react';
import './CustomUserField.scss'
import {Input, Button, Loader} from "../../../../components";
import {User} from "../../redux/types";
import {Formik} from 'formik';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

interface CustomUserField {
    showElement?: boolean,
    btnText: string,
    createRequest: Function,
    deleteHandler?: () => void,
    deleteBtn?: boolean,
    selectedUser?: User | null,
    loading?: boolean
}

const CustomUserField = ({
                             showElement,
                             btnText,
                             createRequest,
                             deleteBtn,
                             deleteHandler,
                             selectedUser,
                             loading
                         }: CustomUserField) => {


    if (loading) {
        return <Loader/>
    }
    if (showElement) {
        return (
            <Formik
                initialValues={selectedUser ? {
                    name: selectedUser.name,
                    email: selectedUser.email
                } : {
                    name: '',
                    email: '',
                }}
                validationSchema={Schema}
                onSubmit={(values, {resetForm}) => {
                    createRequest(values)
                    resetForm()
                }}
            >
                {({
                      values,
                      handleChange,
                      handleSubmit,
                      errors,
                      touched
                  }) => (
                    <div className={'user-field'}>
                        <Input errors={errors} touched={touched} id={'name'} placeholder={'Name'} value={values.name} onChange={handleChange}/>
                        <Input  errors={errors} touched={touched} id={'email'} placeholder={'Email'} value={values.email} onChange={handleChange}/>
                        <Button onClick={handleSubmit}>{btnText}</Button>
                        {deleteBtn && <Button className={'delete-btn'} onClick={deleteHandler}>Delete</Button>}
                    </div>
                )}
            </Formik>
        )
    } else {
        return null
    }
};

CustomUserField.defaultProps = {
    deleteBtn: false,
    deleteHandler: () => undefined,
    showElement: true,
    loading: false
}

export default CustomUserField;