import { useState } from "react";


export default function Signup({ token, setToken }: any) {

    const [submittedName, setSubmittedName]: any = useState('')

    async function doSignup() {
        if (token === null) {
            console.log('signing up')
            try {
                const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: `${(document.getElementById('signupUsername') as HTMLInputElement).value}`,
                            password: `${(document.getElementById('signupPassword') as HTMLInputElement).value}`
                        })
                    })
                const result = await response.json();
                setToken(result.token)

                setSubmittedName((document.getElementById('signupUsername') as HTMLInputElement).value)
                console.log(submittedName)
            } catch (err) {
                console.error(err);
            }
        }
        else {
            console.log(`you are already signed in`)
        }
    }


    if (!token) {
        return (
            <>
                <p>signup:</p>
                <input id='signupUsername' type="text" placeholder="username" />
                <input id='signupPassword' type="text" placeholder="password" />
                <p onClick={doSignup} className='makeTheseADifferentColorPlease'>submit</p>
            </>
        )
    }
    else {
        return (
            <>
                <p>you are signed in as  {submittedName}</p>
            </>
        )
    }
}