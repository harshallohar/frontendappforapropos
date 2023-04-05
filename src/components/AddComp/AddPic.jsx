import React from 'react'
import { Col, Form, FormGroup, Input, Label } from 'reactstrap'
import DataContext from '../../context/DataContext';

const AddPic = (props) => {
    let {id, name} = props;
    let context = React.useContext(DataContext);
    let {AddPics} = context;
    const [picid, setPicid] = React.useState("");
    const handleChange = (e)=>{
        setPicid(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const handleClick = async ()=> {
        console.log(picid, id)
        if(picid && id){
            let d = await AddPics({id: id, name: picid});
            console.log(d);
            if(d==true){
                alert("Pic is Added successfully");
                setPicid("");
            }
            else{
                alert("Pic is not Added")
            }
        }
    }

    React.useEffect(()=>{

    },[id, name])
  return (
    <>
    <div className='text-center my-3'>
            <Form onSubmit={(e) => { handleSubmit(e) }}>
                <FormGroup row>
                    <Label
                        for="exampleEmail"
                        size="md"
                    >
                        Batch Name
                    </Label>
                    <Col>
                    <Label size='md'>
                        {name}
                    </Label></Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="Pic Id"
                        size="md"
                        className='mx-3'
                    >
                        Pic Id
                    </Label>
                    <Col>
                        <Input
                            id="picid"
                            name="picid"
                            placeholder="Pic Id"
                            type="text"
                            value={picid}
                            onChange={(e) => { handleChange(e) }}
                        />
                    </Col>
                </FormGroup>
                <button className='btn btn-outline-primary' onClick={() => { handleClick() }}>Submit</button>
            </Form>
        </div>
    </>
  )
}

export default AddPic