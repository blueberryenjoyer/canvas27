export default function authenticate(token: any) {

    async function auth() {
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
            const result = await response.json();
            console.log(result)
            if (result.success) { alert(result.message) }
            else { alert('please sign up') }

        } catch (err) { console.error(err); }
    }
    auth()

}