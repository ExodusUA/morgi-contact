import React, { useEffect } from 'react'
import './Form.css'


function FormStep2({ finishSteps, data, setData, setStep, setFinishSteps }) {

    const [instagram, setInstagram] = React.useState('')
    const [followers, setFollowers] = React.useState('')
    const [onlyFans, setonlyFans] = React.useState('')
    const [onlyFansFollowers, setonlyFansFollowers] = React.useState('')

    function updateData() {

        let valdation = true;

        let fillData = []

        if (instagram === '') {
            valdation = false
            fillData.push('Instagram')
        }

        if (followers === '') {
            valdation = false
            fillData.push('Instagram Followers')
        }

        if (onlyFans === '') {
            valdation = false
            fillData.push('OnlyFans')
        }

        if (onlyFansFollowers === '') {
            valdation = false
            fillData.push('OnlyFans Followers')
        }


        if (valdation == true) {
            let newData = [...data]

            newData[0].instagram = instagram
            newData[0].instaFollowers = followers
            newData[0].onlyFans = onlyFans
            newData[0].onlyFansFollowers = onlyFansFollowers

            setData(newData)
            setStep(3)
        } else {
            alert(`Please fill in the following fields: ${fillData}`)
            setFinishSteps(1)
        }
    }

    useEffect(() => {
        if (finishSteps === 2) {
            updateData()
        }
    }, [finishSteps])

    return (
        <div>
            <div className="formInputRow">
                <p>Instagram</p>
                <input type="Instagram" name="Instagram" id="Instagram" placeholder='Type nickname or paste link...' value={instagram} onChange={e => setInstagram(e.target.value)} />
            </div>

            <div class="input-ratio">
                <p>What is your number of Instagram followers?</p>
                <div>
                    <input type="radio" id="followers-0-5" name="followers" value="0-5" onClick={e => setFollowers(e.target.value)} />
                    <label for="followers-0-5">0 - 5K</label>
                </div>
                <div>
                    <input type="radio" id="followers-5-10" name="followers" value="5-10" onClick={e => setFollowers(e.target.value)} />
                    <label for="followers-5-10">5K - 10K</label>
                </div>
                <div>
                    <input type="radio" id="followers-10-30" name="followers" value="10-30" onClick={e => setFollowers(e.target.value)} />
                    <label for="followers-10-30">10K - 30K</label>
                </div>
                <div>
                    <input type="radio" id="followers-30-50" name="followers" value="30-50" onClick={e => setFollowers(e.target.value)} />
                    <label for="followers-30-50">30K - 50K</label>
                </div>
                <div>
                    <input type="radio" id="followers-50-70" name="followers" value="50-70" onClick={e => setFollowers(e.target.value)} />
                    <label for="followers-50-70">50K - 70K</label>
                </div>
                <div>
                    <input type="radio" id="followers-70-100" name="followers" value="70-100" onClick={e => setFollowers(e.target.value)} />
                    <label for="followers-70-100">70K - 100K</label>
                </div>
                <div>
                    <input type="radio" id="followers-100plus" name="followers" value="100plus" onClick={e => setFollowers(e.target.value)} />
                    <label for="followers-100plus">100K+</label>
                </div>
            </div>

            <div className="formInputRow">
                <p>OnlyFans</p>
                <input type="OnlyFans" name="OnlyFans" id="OnlyFans" placeholder='Type nickname or paste link...' value={onlyFans} onChange={e => setonlyFans(e.target.value)} />
            </div>

            <div class="input-ratio">
                <p>What is your number of OnlyFans followers?</p>
                <div>
                    <input type="radio" id="onlyFansFollowers-0-5" name="onlyFansFollowers" value="0-5" onClick={e => setonlyFansFollowers(e.target.value)} />
                    <label for="onlyFansFollowers-0-5">0 - 5K</label>
                </div>
                <div>
                    <input type="radio" id="onlyFansFollowers-5-10" name="onlyFansFollowers" value="5-10" onClick={e => setonlyFansFollowers(e.target.value)} />
                    <label for="onlyFansFollowers-5-10">5K - 10K</label>
                </div>
                <div>
                    <input type="radio" id="onlyFansFollowers-10-30" name="onlyFansFollowers" value="10-30" onClick={e => setonlyFansFollowers(e.target.value)} />
                    <label for="onlyFansFollowers-10-30">10K - 30K</label>
                </div>
                <div>
                    <input type="radio" id="onlyFansFollowers-30-50" name="onlyFansFollowers" value="30-50" onClick={e => setonlyFansFollowers(e.target.value)} />
                    <label for="onlyFansFollowers-30-50">30K - 50K</label>
                </div>
                <div>
                    <input type="radio" id="onlyFansFollowers-50-70" name="onlyFansFollowers" value="50-70" onClick={e => setonlyFansFollowers(e.target.value)} />
                    <label for="onlyFansFollowers-50-70">50K - 70K</label>
                </div>
                <div>
                    <input type="radio" id="onlyFansFollowers-70-100" name="onlyFansFollowers" value="70-100" onClick={e => setonlyFansFollowers(e.target.value)} />
                    <label for="onlyFansFollowers-70-100">70K - 100K</label>
                </div>
                <div>
                    <input type="radio" id="onlyFansFollowers-100plus" name="onlyFansFollowers" value="100plus" onClick={e => setonlyFansFollowers(e.target.value)} />
                    <label for="onlyFansFollowers-100plus">100K+</label>
                </div>
            </div>
        </div>
    )
}

export default FormStep2