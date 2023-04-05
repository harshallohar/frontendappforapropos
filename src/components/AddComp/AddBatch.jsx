import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import DataContext from '../../context/DataContext';

const AddBatch = (props) => {
    const { name, id } = props;
    // adding manufacturer name and password
    const context = React.useContext(DataContext);
    const { AddBatches } = context;
    const [batch, setBatch] = React.useState({ name: "" });

    // handle Change
    const handleChange = (e) => {
        // console.log()
        setBatch({ ...batch, [e.target.name]: e.target.value })
    }

    // handling submitting 
    const handleSubmit = (e) => {
        e.preventDefault();
        // props.AddValue(manu)
    }

    // handling Clicking
    const handleClick = () => {
        console.log(batch);
        AddBatches({id: id, name: batch.name});

        setBatch({ name: "" })
    }

    React.useEffect(() => {
        console.log(id)
    }, [name, id])
    return (
        <div className=' text-center'>
            <Form onSubmit={(e) => { handleSubmit(e) }}>
                <div className='row'>
                    <div className="col-6">
                    <Label
                        for="exampleEmail"
                        size="md"
                    >
                        Manufacturer Name
                    </Label></div>
                    <Col>
                    <Label size='md'>
                        {name}
                    </Label></Col>
                </div>
                <div className='row my-2'>
                    <div className='col-5'>
                    <Label
                        for="Batch Name"
                        size="md"
                        className='mx-3'
                    >
                        Batch Name
                    </Label>
                    </div>
                    <Col>
                        <Input
                            id="name"
                            name="name"
                            placeholder="lg"
                            type="text"
                            value={batch.name}
                            onChange={(e) => { handleChange(e) }}
                        />
                    </Col>
                </div>
                <button className='btn btn-outline-primary' onClick={() => { handleClick() }}>Submit</button>
            </Form>
        </div>
    )
}

export default AddBatch