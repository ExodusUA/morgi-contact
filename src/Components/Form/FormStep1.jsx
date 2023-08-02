import React, { useEffect } from 'react'
import './Form.css'

function FormStep1({ data, setData, setStep, finishSteps, setFinishSteps }) {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [age, setAge] = React.useState('')
    const [city, setCity] = React.useState('')

    function updateData() {
        let valdation = true;

        let fillData = []

        if (name === '') {
            valdation = false
            fillData.push('Name')   
        }

        if (email === '') {
            valdation = false
            fillData.push('Email')
        }

        if (phone === '') {
            valdation = false
            fillData.push('Phone')
        }

        if (age === '') {
            valdation = false
            fillData.push('Age')
        }

        if (city === '') {
            valdation = false
            fillData.push('City')
        }

        if (valdation == true) {
            let newData = [...data]
            newData[0].name = name
            newData[0].email = email
            newData[0].phone = phone
            newData[0].age = age
            newData[0].city = city

            setData(newData)
            setStep(2)
        } else {
            alert(`Please fill in the following fields: ${fillData}`)
            setFinishSteps(0)
        }
    }

    useEffect(() => {
        if (finishSteps === 1) {
            updateData()
        }
    }, [finishSteps])

    return (
        <div>
            <div className="formInputRow">
                <p>Full Name</p>
                <input type="name" name="name" id="name" placeholder='Type name...' value={name} onChange={e => setName(e.target.value)} required />
            </div>

            <div className="formInputRow">
                <p>Email</p>
                <input type="Email" name="Email" id="Email" placeholder='Type email...' value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="formInputRow">
                <p>Phone</p>
                <input type="Phone" name="Phone" id="Phone" placeholder='Type phone...' value={phone} onChange={e => setPhone(e.target.value)} />
            </div>

            <div class="input-ratio">
                <p>Age</p>
                <div>
                    <input type="radio" id="age-18-22" name="age" value="18-22" onClick={e => setAge(e.target.value)} />
                    <label for="age-18-22">18 - 22</label>
                </div>

                <div>
                    <input type="radio" id="age-23-27" name="age" value="23-27" onClick={e => setAge(e.target.value)} />
                    <label for="age-23-27">23 - 27</label>
                </div>

                <div>
                    <input type="radio" id="age-28-32" name="age" value="28-32" onClick={e => setAge(e.target.value)} />
                    <label for="age-28-32">28 - 32</label>
                </div>

                <div>
                    <input type="radio" id="age-33-45" name="age" value="33-45" onClick={e => setAge(e.target.value)} />
                    <label for="age-33-45">33 - 45</label>
                </div>

                <div>
                    <input type="radio" id="age-46-plus" name="age" value="46+" onClick={e => setAge(e.target.value)} />
                    <label for="age-46-plus">46+</label>
                </div>
            </div>

            <div className="formInputRow">
                <p>City</p>
                <input type="City" name="City" id="City" placeholder='Type city...' value={city} onChange={e => setCity(e.target.value)} />
            </div>
        </div>
    )
}

export default FormStep1