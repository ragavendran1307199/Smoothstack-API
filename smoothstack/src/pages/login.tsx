import { Container } from "react-bootstrap"
import Authentication from "../components/authentication"
import Sso from "../components/sso"

const Login = () => {
  return (
    <Container className="mb-4" style={{ marginTop: "100px" }}>
      <div className="row justify-content-start">
        <div className="col-xs-8 col-sm-4 col-md-8">
          <img style={{
            width: "80%",
            height: "80%"
          }}
            src="data:image/jpeg;base64,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gEIgFERAaCQRAIRQCEQCEgChFSKAQkEQCEgCEQiEmzreOMiAQiAQiAUREBoJBEAhFAIRAISAKEVIoBCQRAISAIRCISbOt44yIBCIBCIBREQGgkEQCEUAhEAhIAoRUigEJBEAhIAhEIhJs63jjIgEIgEIgFERAaCQRAIRQCEQCEgChFSKAQkEQCEgCEQiEmzreOMiAQiAQiAUREBoJBEAhFAIRAISAKEVIoBCQRAISAIRCISbOt44yIBCIBCIBREQGgkEQCEUAhEAhIAoRUigEJBEAhIAhEIhJs63jjIgEIgEIgFERAaCQRAIRQCEQCEgChFSKAQkEQCEgCEQiEmzreOMiAQiAQiAUREBoJBEAhFAIRAISAKEVIoBCQRAISAIRCISbOt44yIBCIBCIBREQGgkEQCEUAhEAhIAoRUigEJBEAhIAhEIhJs63jjIgEIgEIgFERAaCQRAIRQCEQCEgChFSKAQkEQCEgCEQiEmzreOMiAQiAQiAUREBoJBEAhFAIRAISAKEVIoBCQRAISAIRCISbOt44yIBCIBCIBREQGgkEQCEUAhEAhIAoRUigEJBEAhIAhEIhJs63jjIgEIgEIgFERAaCQRAIRQCEQCEgChFSKAQkEQCEgCEQiEn//Z"
            alt="img not loading" />
        </div>
        <div className="col-xs-4 col-sm-2 col-md-4">
          <Authentication/>
          <Sso/>
        </div>
      </div>
    </Container>
  )
}

export { Login }