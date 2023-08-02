import React, { useEffect } from 'react'
import './Form.css'
import axios from 'axios'
import qs from 'qs'


function FormStep3({ finishSteps, data, setData, setStep, setFinishSteps, setShowForm }) {

    const [education, setEducation] = React.useState('')
    const [degree, setDegree] = React.useState([])
    const [languages, setLanguages] = React.useState('')
    const [otherLanguages, setOtherLanguages] = React.useState('')
    const [answer, setAnswer] = React.useState('')

    function updateData() {
        let newData = [...data]

        let valdation = true;

        let fillData = []

        if (education === '') {
            valdation = false
            fillData.push('Education')
        }

        if (degree.length === 0) {
            valdation = false
            fillData.push('Degree')
        }

        if (languages === '') {
            valdation = false
            fillData.push('Languages')
        }

        if (answer === '') {
            valdation = false
            fillData.push('Answer')
        }

        if (valdation == true) {
            newData[0].education = education
            newData[0].degree = degree
            newData[0].languages = languages + ', ' + otherLanguages
            newData[0].answer = answer

            setData(newData)
            setStep(3)
            sendData()
        } else {
            alert(`Please fill in the following fields: ${fillData}`)
            setFinishSteps(2)
        }

    }

    useEffect(() => {
        if (finishSteps === 3) {
            updateData()
        }
    }, [finishSteps])


    function addDegree(e) {
        let newData = [...degree]

        if (e.target.checked) {
            newData.push(e.target.value)
            setDegree(newData)
        }
    }

    function addLanguages(e) {
        let newData = [...languages]

        if (e.target.checked) {
            newData.push(e.target.value)
            setLanguages(newData)
        }
    }


    function sendData() {

        let newData = qs.stringify(data);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3001/form',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: newData
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data);
                setShowForm(false)
            })
            .catch((error) => {
                console.log(error);
            });


    }

    return (
        <div>

            <div class="input-ratio">
                <p>What’s your level of education?</p>
                <div>
                    <input type="radio" id="followers-0-5" name="followers" value="Less than high school" onClick={e => setEducation(e.target.value)} />
                    <label for="followers-0-5">Less than high school</label>
                </div>
                <div>
                    <input type="radio" id="followers-5-10" name="followers" value="High school diploma or equivalent" onClick={e => setEducation(e.target.value)} />
                    <label for="followers-5-10">High school diploma or equivalent</label>
                </div>
                <div>
                    <input type="radio" id="followers-10-30" name="followers" value="Some college, but not a degree" onClick={e => setEducation(e.target.value)} />
                    <label for="followers-10-30">Some college, but not a degree</label>
                </div>
                <div>
                    <input type="radio" id="followers-30-50" name="followers" value="Bachelor’s degree" onClick={e => setEducation(e.target.value)} />
                    <label for="followers-30-50">Master’s degree</label>
                </div>
            </div>

            <div class="input-ratio checkboxes">
                <p>What is the field of your degree?</p>
                <div>
                    <input type="checkbox" id="Administration" value={'Administration'} onClick={e => addDegree(e)} />
                    <label for="Administration">Administration</label>
                </div>

                <div>
                    <input type="checkbox" id="Engineering" value={'Engineering'} onClick={e => addDegree(e)} />
                    <label for="Engineering">Engineering</label>
                </div>

                <div>
                    <input type="checkbox" id="Humanities" value={'Humanities'} onClick={e => addDegree(e)} />
                    <label for="Humanities">Humanities</label>
                </div>

                <div>
                    <input type="checkbox" id="Biological Sciences" value={'Biological Sciences'} onClick={e => addDegree(e)} />
                    <label for="Biological Sciences">Biological Sciences</label>
                </div>

                <div>
                    <input type="checkbox" id="Law" value={'Law'} onClick={e => addDegree(e)} />
                    <label for="Law">Law</label>
                </div>

                <div>
                    <input type="checkbox" id="None" value={'None'} onClick={e => addDegree(e)} />
                    <label for="None">None</label>
                </div>

            </div>

            <div class="input-ratio checkboxes">
                <p>What languages do you speak?</p>
                <div>
                    <input type="checkbox" id="Portugeese" value={'Portugeese'} onClick={e => addLanguages(e)} />
                    <label for="Portugeese">Portugeese</label>
                </div>

                <div>
                    <input type="checkbox" id="English" value={'English'} onClick={e => addLanguages(e)} />
                    <label for="English">English</label>
                </div>

                <div>
                    <input type="checkbox" id="Spanish" value={'Spanish'} onClick={e => addLanguages(e)} />
                    <label for="Spanish">Spanish</label>
                </div>

            </div>

            <div className="formInputRow">
                <p>Other languages</p>
                <input type="text" name="otherlanguages" id="otherlanguages" placeholder='Type using comma...' value={otherLanguages} onChange={e => setOtherLanguages(e.target.value)} />
            </div>

            <div className="formInputRow">
                <p>How does financial stability impact your life, and what dreams and goals could you accomplish with the financial achievements that being a successful Morgi host can provide?</p>
                <input type="text" name="answer" id="answer" placeholder='Type answer here...' value={answer} onChange={e => setAnswer(e.target.value)} />
            </div>


        </div>
    )
}

export default FormStep3