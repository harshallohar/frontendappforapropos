import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import DataContext from '../../context/DataContext';

const AddManu = () => {
    // adding manufacturer name and password
    const context = React.useContext(DataContext);
    const { addManu } = context;
    const [manu, setManu] = React.useState({ id: "", name: "", password: "", desc: "" });

    // handle Change
    const handleChange = (e) => {
        // console.log()
        setManu({ ...manu, [e.target.name]: e.target.value })
    }

    // handling submitting 
    const handleSubmit = (e) => {
        e.preventDefault();
        // props.AddValue(manu)
    }

    // handling Clicking
    const handleClick = () => {
        console.log(manu);
        if (manu.name !== "" && manu.password !== "" && manu.desc !== "") {
            addManu(manu);
            setManu({ name: "", password: "", desc: "", id: "" })
        }
        else {
            alert("All the data must be filled");
        }
    }
    return (
        <div className=' text-center'>
            <Form onSubmit={(e) => { handleSubmit(e) }}>
                <div className="row my-2">
                    <div className="col-3">
                        <Label
                            for="exampleEmail"
                            size="md"
                        >
                            Name
                        </Label></div>
                    <Col>
                        <Input
                            id="exampleEmail"
                            name="name"
                            placeholder="manufactuer name"
                            type="text"
                            value={manu.name}
                            onChange={(e) => { handleChange(e) }}
                        />
                    </Col>
                </div>
                <div className="row my-2">
                    <div className="col-3">
                        <Label
                            for="password"
                            size="md"
                            className='mx-3'
                        >
                            Password
                        </Label></div>
                    <Col >
                        <Input
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                            value={manu.password}
                            onChange={(e) => { handleChange(e) }}
                        />
                    </Col>
                </div>
                <div className="row my-2">
                    <div className="col-3">
                        <Label
                            for="password"
                            size="md"
                            className='mx-3'
                        >
                            Descirption
                        </Label>
                    </div>
                    <Col>
                        <Input
                            id="desc"
                            name="desc"
                            placeholder="descrpition"
                            type="textarea"
                            value={manu.desc}
                            onChange={(e) => { handleChange(e) }}
                        />
                    </Col>
                </div>
                <div className="row my-2">
                    <div className="col-3">
                        <Label
                            for="password"
                            size="md"
                            className='mx-3'
                        >
                            Id
                        </Label>
                    </div>
                    <Col>
                        <Input
                            id="id"
                            name="id"
                            placeholder="manufacturer id"
                            type="text"
                            value={manu.id}
                            onChange={(e) => { handleChange(e) }}
                        />
                    </Col>
                </div>
                <button className='btn btn-outline-primary' onClick={() => { handleClick() }}>Submit</button>
            </Form>
        </div>
    )
}

export default AddManu