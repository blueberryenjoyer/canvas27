


export default function Signup({ token, setToken }: any) {

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
            } catch (err) {
                console.error(err);
            }
        }
        else {
            console.log(`you are already signed in`)
        }
    }



    return (
        <>
            <p>signup:</p>
            <input id='signupUsername' type="text" placeholder="username" />
            <input id='signupPassword' type="text" placeholder="password" />
            <p onClick={doSignup}>submit</p>
        </>
    )
}