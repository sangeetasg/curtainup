import { Form , Button} from "react-bootstrap";
import Auth from "../shared/Auth";

const Login = () => {
  return (
    <>
      <Auth authHeading="Sign in">
        <Form>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control className="p-3 border-0 bg-white" type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formPlaintextPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="p-3 border-0 bg-white" type="password" placeholder="Enter your password" />
          </Form.Group>
          <Form.Group className="d-grid pt-3">
            <Button variant="primary" type="submit" className="text-uppercase py-3 fw-bold">
              Login
            </Button>
          </Form.Group>
        </Form>
      </Auth>
    </>
  )
}

export default Login;