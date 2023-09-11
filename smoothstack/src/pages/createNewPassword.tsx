import { Container, Button } from "react-bootstrap"

const CreateNewPassword = () => {
    return (
        <Container className="mb-4" style={{ marginTop: "100px" }}>
            <div className="row justify-content-start">
                <div className="col-xs-4 col-sm-2 col-md-4">
                    <div className="mb-3 sm-1 container" style={{ marginTop: "20%" }}>
                    <h3>Generate New Password</h3>
                        <label className="form-label">Old Password</label>
                        <input type="email" className="form-control" />
                        <label className="form-label">New Password</label>
                        <input type="email" className="form-control" />
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" />
                        <Button style={{ marginTop: "20px" }}>submit</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CreateNewPassword