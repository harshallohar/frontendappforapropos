// reactstrap components
import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory, } from 'react-router-dom';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import image1 from "../../assets/img/icons/common/github.svg"
import image2 from "../../assets/img/icons/common/google.svg"
import UserContext from '../../context/UserContext';
import { selectUser } from '../../features/userSlice';

const Login = () => {
  const location = useHistory();
  let user = useSelector(selectUser);
  let context = React.useContext(UserContext);
  let { login } = context;
  const [creditional, setCreditional] = React.useState({ email: "", password: "" })

  const handleChange = (e) => {

    // console.log({...creditional,[e.target.name]: e.target.value });
    setCreditional({ ...creditional, [e.target.name]: e.target.value });
  }
  const handleClick = async (e) => {
    console.log("clicked login");
    console.log(user);
    await login(creditional)
    if (user.type == "admin") {
      location.push("/admin/index");
    }
    else if (user.type == "manufacturer") {
      location.push("/user/index");
    }
    else {
      alert("Enter the proper creditional");
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  React.useEffect(() => {
    if (user) {
      if (user.type == "admin") {
        location.push("/admin/index");
      }
      else if (user.type == "manufacturer") {
        location.push("/user/index");
      }
    }
  }, [user])
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-light shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              {/* <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      image1
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button> */}
              {/* <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      image2
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button> */}
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            <Form role="form" onSubmit={(e) => { handleSubmit(e) }}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">

                  <InputGroupText>
                    <i className="ni ni-email-83" />
                  </InputGroupText>

                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={(e) => { handleChange(e) }}
                    autoComplete="new-email"
                    value={creditional.email}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">

                  <InputGroupText>
                    <i className="ni ni-lock-circle-open" />
                  </InputGroupText>

                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={(e) => { handleChange(e) }}
                    autoComplete="new-password"
                    value={creditional.password}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button" onClick={() => { handleClick() }}>
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            {/* <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a> */}
          </Col>
          <Col className="text-right" xs="6">

          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
