import React, { useState } from "react";
// reactstrap components
import moment from "moment/moment";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  Nav,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";


import Header from "../components/Headers/Header";
import DataContext from "../context/DataContext";
import AddManu from "../components/AddComp/AddManu";
import { useDispatch } from "react-redux";
import { getValue } from "../features/valSlice";
import { Link } from "react-router-dom";

const Index = (props) => {
  let up = 0;
  const [activeNav, setActiveNav] = useState(1);
  let context = React.useContext(DataContext);
  let { allManu, manu, deleteManu } = context;
  const dispatch = useDispatch();
  React.useEffect(() => {
    allManu();
  }, [])

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  const handleClick = (value) => {
    console.log(value["_id"], "-----", value['name']);
    dispatch(getValue(value));

  }
  const handleClick2 = (value) => {
    // console.log(value["_id"])
    alert("Do you want to deleted the manufacturer");
    console.log();
    // deleteManu(value["_id"])
  }
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Manufacturer</h3>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <button
                          className="btn btn-primary"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          <span className="d-none d-md-block">Add</span>
                          <span className="d-md-none">Add</span>
                        </button>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Manufacturer Name</th>
                    <th scope="col">Manufacturer Name</th>
                    <th scope="col">Added</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {manu.length !== 0 ? manu.map((e, key) => {
                    return (<tr key={key}>
                      <th scope="row">{++up}</th>
                      <td><Link className="btn btn-outline-primary" onClick={() => { handleClick(e) }} to="/admin/batches">{e.name}</Link></td>
                      <td>{moment(e['addedDate']).format("DD/MM/YYYY hh:mm:ss")}</td>
                      <td><button className="btn btn-outline-secondary" onClick={() => { handleClick2(e) }}><i className="fa-sharp fa-solid fa-trash-can"></i></button></td>
                    </tr>)
                  }) : <tr>
                    <th>Na</th>
                    <th>Na</th>
                    <th>Na</th>
                  </tr>
                  }
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col>
            <div className="collapse" id="collapseExample">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h4 className="text-uppercase mb-0">
                        Add New Manufacturer
                      </h4>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <AddManu />
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
        {/* <Row className="mt-5">
          {bview && <BatchItem id={id} name={Mname} />}
        </Row> */}
      </Container>
    </>
  );
};

export default Index;
