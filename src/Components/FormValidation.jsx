

import React, { Component } from 'react'
import "../Assets/form.scss"

const validationRules = {
    required: val => val !== null && val !== undefined && val !== '',

    phone: phone => {
        const re = "^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$";
        return re.test(String(phone));

    },
    email: email => {
        const re = "^[\w-\.]+@([\w-]+\.)+[a-zA-Z]{2,6}$"
        return re.test(String(email).toLowerCase());
    }

}

export default class FormValidation extends Component {
    constructor(props) {
        super(props);

        this.formValidationRules = {
            firstName: [
                {
                    rule: validationRules.required,
                    message: "First name is required"

                }
            ],
            lastName: [
                {
                    rule: validationRules.required,
                    message: "Last name is required"
                }
            ],
            phone: [
                {
                    rule: validationRules.phone,
                    message: "Phone is incorect"
                }
            ],
            email: [
                {
                    rule: validationRules.email,
                    message: "Email is invalid"
                },
                {
                    rule: validationRules.required,
                    message: "Email is required"
                }
            ]

        };

        this.state = {
            firstName: { value: "", isTouched: false, isValid: false, errors: [] },
            lastName: { value: "", isTouched: false, isValid: false, errors: [] },
            phone: { value: "", isTouched: false, isValid: false, errors: [] },
            email: { value: "", isTouched: false, isValid: false, errors: [] },
        };
    }
    render() {
        return (
            <div>
                <div className="container">
                    <form className="formInput" >
                        <label className="formLabel">
                            <p>First Name</p>
                            <input
                            //  className={
                            //     !firstName.isValid 

                            // }
                                type="text"
                                name="firstName"
                                value={this.state.firstName.value}
                                required />
                        </label>
                        <label className="formLabel">
                            <p>Last Name</p>
                            <input type="text"
                                name="lastName"
                                value={this.state.lastName.value}
                                required />
                        </label>
                        <label className="formLabel">
                            <p>Phone</p>
                            <input type="number"
                                name="phone"
                                value={this.state.phone.value}
                                minlength="10" />
                        </label>
                        <label className="formLabel">
                            <p>Email</p>
                            <input type="email"
                                name="email"
                                value={this.state.email.value}
                                required />
                        </label>


                    </form>
                </div>
            </div >
        )
    }
}
