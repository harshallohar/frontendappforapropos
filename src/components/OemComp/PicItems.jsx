import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux';
import { Card, CardBody, CardHeader, Col, Container, Nav, NavItem, Row, Table } from 'reactstrap';
import DataContext from '../../context/DataContext'
import { selectBatch } from '../../features/batchSlice';
import AddPic from '../AddComp/AddPic';
import Header from '../Headers/Header';

const PicItems = (props) => {
  let batch = useSelector(selectBatch);
  let up = 0;
  const { id, name } = props
  let context = React.useContext(DataContext);
  let { allPicForBatches, update } = context;
  const handleClick = (val) => {
    console.log(val);
  }
  React.useEffect(() => {
    console.log(batch)
    // console.log(id);
    // console.log(name);
    if(batch!==null){
      allPicForBatches(batch["_id"]);
    }
    
  }, [id, name, batch])
  return (
    <>
    <Header/>
      <Container fluid>
        <Row className="mt--7">
          {batch!==null ? <Col className="mb-5 mb-xl-0 my-3" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Batch Name: {batch.name} </h3>
                  </div>
                  {window.location.pathname === "/admin/pics" ? <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <button
                          className="btn btn-primary"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                        >
                          <span className="d-none d-md-block">Add</span>
                          <span className="d-md-none">Add</span>
                        </button>
                      </NavItem>
                    </Nav>
                  </div> : ""}
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Pic Name</th>
                    <th scope="col">Previous Version</th>
                    <th scope="col">Update Version</th>
                    <th scope="col">Added Dated</th>
                    <th scope='col'></th>
                  </tr>
                </thead>
                <tbody>
                  {update.length !== 0 ? update.map((e, key) => {
                    return (<tr key={key}>
                      <th scope="row">{++up}</th>
                      <td><button className="btn btn-outline-primary">{e.picId || "NA"}</button>  </td>
                      <td>{e['prevBinVersion']?.v || "NA"}</td>
                      <td>{e['binVersion']?.v || "NA"}</td>
                      <td>{moment(e['otaDate']).format("DD/MM/YYYY hh:mm:ss") || "NA"}</td>
                      {window.location.pathname === "/admin/index" ? <td><button className="btn btn-outline-secondary" size="2em" onClick={() => { handleClick(e) }}><i className="fa-sharp fa-solid fa-trash-can"></i></button></td> : ""}
                    </tr>)
                  }) : <tr>
                    <th scope="row">{++up}</th>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                  </tr>}
                </tbody>
              </Table>
            </Card>
          </Col> : <Col className="mb-5 mb-xl-0 my-3">
          <Card className="shadow">
              <CardHeader className="border-0">
                Choose the batch first
                </CardHeader>
                </Card>
            </Col>}
          {/* {window.location.pathname === "/admin/index" ? */}
          <Col xl="4">
            <div className="collapse" id="collapse3">
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
                  {batch&&<AddPic id={batch["_id"]} name={batch.name} />}
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      {/* : ""} */}
    </>
  )
}

export default PicItems