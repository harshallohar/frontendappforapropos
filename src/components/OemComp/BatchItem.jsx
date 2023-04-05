import moment from 'moment';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Nav, NavItem, Row, Table } from 'reactstrap'
import DataContext from '../../context/DataContext'
import { setBatch } from '../../features/batchSlice';
import { selectValue } from '../../features/valSlice';
import AddBatch from '../AddComp/AddBatch';
import Header from '../Headers/Header';
import PicItems from './PicItems';

const BatchItem = (props) => {
  let value = useSelector(selectValue);
  const dispatch = useDispatch();

  let up = 0;
  const [bid, setBid] = React.useState("");
  const [Bname, setBname] = React.useState("");
  const [pview, setPview] = React.useState(false);

  const context = React.useContext(DataContext);

  const { allBatchesForManufacturer, Batches, deleteBatch } = context;
  let { id, name } = props;

  const handleClick = (value) => {
    dispatch(setBatch(value))
  }

  const handleClick2 = (value) => {
    // console.log(value["_id"]);
    deleteBatch({ id: value['_id'], mid: id });
  }

  React.useEffect(() => {
    if (value !== null) {
      allBatchesForManufacturer(value["_id"])
    }

    console.log(value)
    // console.log(window.location.pathname)
  }, [value])

  return (
    <>
      {window.location.pathname == "/user/index" ? "" : <Header />}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          {value !== null ? <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Manufacturer Name: {value.name} </h3>
                  </div>
                  {window.location.pathname === "/admin/batches" ? <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        {/* <button
                          className="btn btn-primary"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          <span className="d-none d-md-block">Add</span>
                          <span className="d-md-none">Add</span>
                        </button> */}
                      </NavItem>
                    </Nav>
                  </div> : ""}
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Batch Name</th>
                    <th scope="col">Added</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {Batches.length !== 0 ? Batches.map((e, key) => {
                    return (<tr key={key}>
                      <th scope="row">{++up}</th>
                      <td><Link className="btn btn-outline-primary" onClick={() => { handleClick(e) }} to="/admin/pics">{e.name || "NA"}</Link>  </td>
                      <td>{moment(e['batchDate']).format("DD/MM/YYYY hh:mm:ss") || "NA"}</td>
                      {window.location.pathname === "/admin/batches" ? <td><button className="btn btn-outline-secondary" size="2em" onClick={() => { handleClick2(e) }}><i className="fa-sharp fa-solid fa-trash-can"></i></button></td> : ""}
                    </tr>)
                  }) : <tr>
                    <th scope="row">{++up}</th>
                    <td>NA</td>
                    <td>NA</td>
                  </tr>}
                </tbody>
              </Table>
            </Card>
          </Col> :
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="shadow">
                <CardHeader className="border-0"> Choose the Manufacturer</CardHeader>
              </Card>
            </Col>}
          {/* {window.location.pathname === "/admin/index" ? */}
          {/* <Col xl="4">
            <div className="collapse" id="collapseExample">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h4 className="text-uppercase mb-0">
                        Adding New Batch
                      </h4>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {value && <AddBatch id={value["_id"]} name={value.name} />}
                </CardBody>
              </Card>
            </div>
          </Col> */}
          {/* : ""} */}
          {/* {pview && <PicItems id={bid} name={value.name} />} */}
        </Row>
      </Container>
    </>
  )
}

export default BatchItem