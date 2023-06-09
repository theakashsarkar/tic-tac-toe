import { useState } from "react";

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        setFullName(e.target.value + ' ' + lastName);
    }
    function handleLastNameChange(e)
    {
        setLastName(e.target.value);
        setFullName(firstName + ' ' + firstName);
    }
    return (
        <>
            <h1>Let's check you in</h1>
            <label>
                First name: {''}
                <input
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <br />
            <label>
                First name: {''}
                <input
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <p>
                Your ticket will be issued to: <b>{fullName}</b>
            </p>
        </>
    )
}