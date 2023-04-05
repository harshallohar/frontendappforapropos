import axios from 'axios'
import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Header from '../../components/Headers/Header'
import DataContext from '../../context/DataContext'

const UploadBin = () => {
    let context = React.useContext(DataContext);
    let { Batches, manu, allManu, allBatchesForManufacturer, api } = context;

    // setid the manufacturer id for changing the state 
    const [id, setId] = React.useState("");
    const [files, setFiles] = React.useState(null);
    const [vers, setVers] = React.useState("");

    const handleSelected = (e) => {
        let val = manu.filter((val) => {
            let id = "";
            if (e.target.value === val.name) {
                id = val["_id"]
            }
            return id
        })
        console.log(val)
        allBatchesForManufacturer(val[0]['_id'])
    }
    const handleSelected2 = (e) => {
        console.log(e.target.value)
        let val = Batches.filter((val) => {
            let id = "";
            if (e.target.value === val.name) {
                id = val["_id"]
            }
            return id
        })
        setId(val[0]['_id'])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setFiles(e.target.files[0])
    }


    const handleChange2 = (e) => {
        setVers(e.target.value);
    }

    const handleClick = async () => {
        console.log("click");
        // console.log(id);
        if (setFiles && vers && id) {
            const formdata = new FormData();
            formdata.append("bin", files)
            formdata.append("batchId", id)
            formdata.append("v", vers);
            let value = await axios.post(`${api}/api/v2/uploadtest-1`, formdata);
            if (value.status == 200) {
                alert("Data is uploaded")
            }
            setFiles(null);
        }
        else {
            alert("Please Enter the data properly")
        }

        setVers("");
    }
    const handleClick1 = async () => {
        console.log("click");
        // console.log(id);
        if (setFiles && vers && id) {
            const formdata = new FormData();
            formdata.append("bin", files)
            formdata.append("batchId", id)
            formdata.append("v", vers);
            let value = await axios.post(`${api}/api/v2/uploadtest-1`, formdata);
            if (value.status == 200) {
                alert("Data is uploaded")
            }
            setFiles(null);
        }
        else {
            alert("Please Enter the data properly")
        }

        setVers("");
    }
    const handleClick2 = async () => {
        console.log("click");
        // console.log(id);
        if (setFiles && vers && id) {
            const formdata = new FormData();
            formdata.append("bin", files)
            formdata.append("batchId", id)
            formdata.append("v", vers);
            let value = await axios.post(`${api}/api/v2/uploadtest-2`, formdata);
            if (value.status == 200) {
                alert("Data is uploaded")
            }
            setFiles(null);
        }
        else {
            alert("Please Enter the data properly")
        }

        setVers("");
    }
    const handleClick3 = async () => {
        console.log("click");
        // console.log(id);
        if (setFiles && vers && id) {
            const formdata = new FormData();
            formdata.append("bin", files)
            formdata.append("batchId", id)
            formdata.append("v", vers);
            let value = await axios.post(`${api}/api/v2/uploadtest-3`, formdata);
            if (value.status == 200) {
                alert("Data is uploaded")
            }
            setFiles(null);
        }
        else {
            alert("Please Enter the data properly")
        }

        setVers("");
    }
    React.useEffect(() => {
        allManu();
    }, [id])
    return (
        <div>
            <Header />
            <Container className="mt--7" fluid>
                {/* <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="8">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Upload Bin Files: { } </h3>
                                    </div>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <form onSubmit={(e) => { handleSubmit(e) }}>
                                    <div className="row form-group">
                                        <label
                                            htmlFor="Manufacturer"
                                            className="form-label py-1 px-2">
                                            Manufacturer Name
                                        </label>
                                        <div className="col-4 my-1">
                                            <select name='manu' className="form-control" aria-label="Default select example" onChange={(e) => { handleSelected(e) }}>
                                                <option>select a manufacturer</option>
                                                {manu.length !== 0 ? manu.map((val, key) => {
                                                    return (
                                                        <option key={key}>{val.name}</option>
                                                    )
                                                }) : <option>No Data to show</option>}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row my-3 form-group">
                                        <label
                                            htmlFor="Batch"
                                            className="form-label py-1 px-2 pr-3">Batch Name</label>

                                        <div className="col-4 my-1 mx-5">
                                            <select name='batches' className="form-control" aria-label="Default select example" onChange={(e) => { handleSelected2(e) }}>
                                                <option>select a batch</option>

                                                {Batches.length !== 0 ? Batches.map((val, key) => {
                                                    return (
                                                        <option defaultValue key={key}>{val.name}</option>
                                                    )
                                                }) : <option>No Data to show</option>}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row my-3 form-group">
                                        <label className='form-label pl-2 pr-3' htmlFor="exampleFormControlFile1">Binary Files</label>
                                        <div className="col my-1 mx-5">
                                            <input
                                                onChange={(e) => { handleChange(e) }}
                                                type="file"
                                                className="form-control-file"
                                                id="exampleFormControlFile1" />
                                        </div>
                                    </div>
                                    <div className="row my-3 form-group">
                                        <label className='form-label pr-5 pl-2' htmlFor="version">Version</label>
                                        <div className="col-4">
                                            <input type="text" value={vers} className="form-control mx-5" onChange={(e) => { handleChange2(e) }} />
                                        </div>
                                    </div>
                                    <div className="text-center my-2">
                                        <button type="submit" className="btn btn-primary" onClick={() => { handleClick() }}>Submit</button>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row> */}
                {/* upload bin test file 1 */}
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="8">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0"> CB code </h3>
                                    </div>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <form onSubmit={(e) => { handleSubmit(e) }}>
                                    <div className="row form-group">
                                        <label
                                            htmlFor="Manufacturer"
                                            className="form-label py-1 px-2">
                                            Manufacturer Name
                                        </label>
                                        <div className="col-4 my-1">
                                            <select name='manu' className="form-control" aria-label="Default select example" onChange={(e) => { handleSelected(e) }}>
                                                <option>select a manufacturer</option>
                                                {manu.length !== 0 ? manu.map((val, key) => {
                                                    return (
                                                        <option key={key}>{val.name}</option>
                                                    )
                                                }) : <option>No Data to show</option>}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row my-3 form-group">
                                        <label
                                            htmlFor="Batch"
                                            className="form-label py-1 px-2 pr-3">Batch Name</label>

                                        <div className="col-4 my-1 mx-5">
                                            <select name='batches' className="form-control" aria-label="Default select example" onChange={(e) => { handleSelected2(e) }}>
                                                <option>select a batch</option>

                                                {Batches.length !== 0 ? Batches.map((val, key) => {
                                                    return (
                                                        <option defaultValue key={key}>{val.name}</option>
                                                    )
                                                }) : <option>No Data to show</option>}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row my-3 form-group">
                                        <label className='form-label pl-2 pr-3' htmlFor="exampleFormControlFile1">Binary Files</label>
                                        <div className="col my-1 mx-5">
                                            <input
                                                onChange={(e) => { handleChange(e) }}
                                                type="file"
                                                className="form-control-file"
                                                id="exampleFormControlFile1" />
                                        </div>
                                    </div>
                                    <div className="row my-3 form-group">
                                        <label className='form-label pr-5 pl-2' htmlFor="version">Version</label>
                                        <div className="col-4">
                                            <input type="text" value={vers} className="form-control mx-5" onChange={(e) => { handleChange2(e) }} />
                                        </div>
                                    </div>
                                    <div className="text-center my-2">
                                        <button type="submit" className="btn btn-primary" onClick={() => { handleClick1() }}>Submit</button>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>


                {/* upload bin test file 2 */}
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="8">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">NoLoad Code</h3>
                                    </div>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <form onSubmit={(e) => { handleSubmit(e) }}>
                                    <div className="row form-group">
                                        <label
                                            htmlFor="Manufacturer"
                                            className="form-label py-1 px-2">
                                            Manufacturer Name
                                        </label>
                                        <div className="col-4 my-1">
                                            <select name='manu' className="form-control" aria-label="Default select example" onChange={(e) => { handleSelected(e) }}>
                                                <option>select a manufacturer</option>
                                                {manu.length !== 0 ? manu.map((val, key) => {
                                                    return (
                                                        <option key={key}>{val.name}</option>
                                                    )
                                                }) : <option>No Data to show</option>}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row my-3 form-group">
                                        <label
                                            htmlFor="Batch"
                                            className="form-label py-1 px-2 pr-3">Batch Name</label>

                                        <div className="col-4 my-1 mx-5">
                                            <select name='batches' className="form-control" aria-label="Default select example" onChange={(e) => { handleSelected2(e) }}>
                                                <option>select a batch</option>

                                                {Batches.length !== 0 ? Batches.map((val, key) => {
                                                    return (
                                                        <option defaultValue key={key}>{val.name}</option>
                                                    )
                                                }) : <option>No Data to show</option>}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row my-3 form-group">
                                        <label className='form-label pl-2 pr-3' htmlFor="exampleFormControlFile1">Binary Files</label>
                                        <div className="col my-1 mx-5">
                                            <input
                                                onChange={(e) => { handleChange(e) }}
                                                type="file"
                                                className="form-control-file"
                                                id="exampleFormControlFile1" />
                                        </div>
                                    </div>
                                    <div className="row my-3 form-group">
                                        <label className='form-label pr-5 pl-2' htmlFor="version">Version</label>
                                        <div className="col-4">
                                            <input type="text" value={vers} className="form-control mx-5" onChange={(e) => { handleChange2(e) }} />
                                        </div>
                                    </div>
                                    <div className="text-center my-2">
                                        <button type="submit" className="btn btn-primary" onClick={() => { handleClick2() }}>Submit</button>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                
                
                {/* upload bin test file finale */}
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="8">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Application Code</h3>
                                    </div>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <form onSubmit={(e) => { handleSubmit(e) }}>
                                    <div className="row form-group">
                                        <label
                                            htmlFor="Manufacturer"
                                            className="form-label py-1 px-2">
                                            Manufacturer Name
                                        </label>
                                        <div className="col-4 my-1">
                                            <select name='manu' className="form-control" aria-label="Default select example" onChange={(e) => { handleSelected(e) }}>
                                                <option>select a manufacturer</option>
                                                {manu.length !== 0 ? manu.map((val, key) => {
                                                    return (
                                                        <option key={key}>{val.name}</option>
                                                    )
                                                }) : <option>No Data to show</option>}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row my-3 form-group">
                                        <label
                                            htmlFor="Batch"
                                            className="form-label py-1 px-2 pr-3">Batch Name</label>

                                        <div className="col-4 my-1 mx-5">
                                            <select name='batches' className="form-control" aria-label="Default select example" onChange={(e) => { handleSelected2(e) }}>
                                                <option>select a batch</option>

                                                {Batches.length !== 0 ? Batches.map((val, key) => {
                                                    return (
                                                        <option defaultValue key={key}>{val.name}</option>
                                                    )
                                                }) : <option>No Data to show</option>}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row my-3 form-group">
                                        <label className='form-label pl-2 pr-3' htmlFor="exampleFormControlFile1">Binary Files</label>
                                        <div className="col my-1 mx-5">
                                            <input
                                                onChange={(e) => { handleChange(e) }}
                                                type="file"
                                                className="form-control-file"
                                                id="exampleFormControlFile1" />
                                        </div>
                                    </div>
                                    <div className="row my-3 form-group">
                                        <label className='form-label pr-5 pl-2' htmlFor="version">Version</label>
                                        <div className="col-4">
                                            <input type="text" value={vers} className="form-control mx-5" onChange={(e) => { handleChange2(e) }} />
                                        </div>
                                    </div>
                                    <div className="text-center my-2">
                                        <button type="submit" className="btn btn-primary" onClick={() => { handleClick3() }}>Submit</button>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default UploadBin