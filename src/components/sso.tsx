import { Button, Container } from "react-bootstrap"

const Sso = () => {

    const ssoLogin = () => {    
        console.log('login in using SSO')
        
    }

    return (
        <Container style={{textAlign:"center", marginTop:"40px"}}>
            <Button onClick={ssoLogin} style={{width:"100px"}}>SSO</Button>
        </Container>
    )

}

export default Sso