import { Button, Container } from "react-bootstrap"

interface ChatSpaceProps {
    children: React.ReactNode 
}

const ChatSpace: React.FC<ChatSpaceProps> = (props) => {
    return (
        <Container style={{
            height: "80vh",
            position: "relative"
        }} className="content">
            <div>{props && props.children}</div>
            <div style={{ display: "flex", bottom: "0px", position: "absolute", right: "10px", left: "10px" }}>
                <textarea placeholder="enter you query here" className="form-control" />
                <Button>send</Button>
            </div>
        </Container>
    )
}

export default ChatSpace