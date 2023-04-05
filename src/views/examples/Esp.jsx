import moment from 'moment';
import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Nav, NavItem, Row, Table } from 'reactstrap'
import AddEsp from '../../components/AddComp/AddEsp';
import Header from '../../components/Headers/Header'
import DataContext from '../../context/DataContext';
const Esp = () => {
    const [check, setCheck] = React.useState(false);
    const [man, setMan] = React.useState("");
    const context = React.useContext(DataContext);
    const { manu, getEspForManu, espM } = context;
    let up = 0;
    const handleSelect = (e) => {
        let val = manu.filter((val) => {
            let v = 0;
            if (e.target.value === val._id) {
                v = val;
            }
            return v;
        })
        // console.log(val);
        if (val.length != 0) {
            getEspForManu({ manufacturerId: val[0]._id });
        }
        setMan(val)
    }


    React.useEffect(() => {
        console.log(espM)
    }, [espM])

    return (
        <div>
            <Header />
            <Container className="mt--7" fluid>
                <Row className='mt-5' >
                    <Col className="mb-5 mb-xl-0">
                        <Card className="shadow" >
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">ESP</h3>
                                    </div>
                                    <Nav className="justify-content-end" pills>
                                        <NavItem>
                                            <div class="form-group">
                                                <select name="manu" className="form-control" id="exampleFormControlSelect1" onChange={(e) => { handleSelect(e) }}>
                                                    <option selected>Select one manufacturer</option>
                                                    {manu.map((e, key) => {
                                                        return <option value={e._id} key={key}>{e.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </NavItem>
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
                                </Row>
                            </CardHeader>
                            <Table className="table table-bordered table-hover align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Esp Name</th>
                                        <th scope="col">Esp Id</th>
                                        <th scope="col">Added</th>
                                        <th scope="col">Active</th>
                                    </tr>
                                </thead>
                                <tbody style={{ backgroundColor: "greenyellow" }}>
                                    {
                                        espM.length !== 0 ? espM.map((e, key) => {
                                            return (<tr key={key}>
                                                    <th scope="row">{++up}</th>
                                                    <td>{e.name}</td>
                                                    <td><button className="btn btn-outline-secondary">{e.espId}</button></td>
                                                    <td>{moment(e['batchDate']).format("DD/MM/YYYY hh:mm:ss") || "NA"}</td>
                                                    {/* // {window.location.pathname === "/admin/batches" ? <td><button className="btn btn-outline-secondary" size="2em" onClick={() => { handleClick2(e) }}><i className="fa-sharp fa-solid fa-trash-can"></i></button></td> : ""} */}
                                                </tr>)
                                        }) :
                                            <tr>
                                                <th scope="row">{++up}</th>
                                                <td>NA</td>
                                                <td>NA</td>
                                                <td>NA</td>
                                                <td>
                                                    <div className="custom-control custom-switch">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customSwitch1"
                                                            value={check}
                                                        />
                                                        <label class="custom-control-label" for="customSwitch1"></label>
                                                    </div>
                                                </td>
                                            </tr>
                                    }
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
                <div className="row my-2">
                    <div className="col-5">
                        <div className="collapse" id="collapseExample">
                            <Card className="shadow">
                                <CardHeader className="bg-transparent">
                                    <Row className="align-items-center">
                                        <div className="col">
                                            <h4 className="text-uppercase mb-0">
                                                Adding new Esp
                                            </h4>
                                        </div>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <AddEsp id={man} />
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Esp