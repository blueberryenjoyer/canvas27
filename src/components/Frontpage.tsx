import authenticate from "./authenticate";

export default function Frontpage({ token }: any) {

    function thing(token: any) {
        authenticate(token)
    }


    return (
        <>
            <p>hello and welcome to my awesome authenticator.</p>
            <p onClick={() => { thing(token) }} className='makeTheseADifferentColorPlease'>authenticate</p>
        </>
    )
}