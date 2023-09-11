import { Container, Row, Col } from "react-bootstrap";
import { OffCanvasExample } from "../components/manageUser";

const AdminPanel = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title"></h4>
              <p className="card-description">
                Manage User
              </p>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      
                      <td><OffCanvasExample name={"Samso Park"} placement={"end"}  /></td>
                      <td>example@smoothstack.com</td>
                      <td>admin</td>
                      <td>active</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Col>
      </Row>

    </Container>
  )
}

export { AdminPanel }