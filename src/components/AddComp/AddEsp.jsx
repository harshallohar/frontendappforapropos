import React from 'react'
import { Input, Label } from 'reactstrap'
import DataContext from '../../context/DataContext';

const AddEsp = (props) => {
    const { id } = props;
    let context = React.useContext(DataContext);
    let { addEspValue } = context;
    const [esp, setEsp] = React.useState({ name: "", espId: "", manufacturerId:"" });
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(esp);
    }

    const handleChange = (e) => {
        setEsp({...esp, [e.target.name]: e.target.value});
    }

    const handleClick = ()=> {
        console.log(esp);
        addEspValue(esp)
        setEsp({ name: "", espId: "", manufacturerId:""})
    }
    React.useEffect(()=>{
        console.log(id);
        if(id.length!=0){
            setEsp({...esp, manufacturerId: id[0]._id})
        }
    },[id])
    return (
        <div>
            <div className="text-center">
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="row my-2 form-group">
                        <div className="col-4">
                            <Label
                                htmlFor="name"
                                size='md'
                            >
                                Manufacturer Name
                            </Label>
                        </div>
                        <div className="col-4 my-2">
                            {id.length!==0 ? id[0].name : "Na"}
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-3">
                            <Label
                                htmlFor="name"
                                size='md'
                            >
                                Esp Name
                            </Label>
                        </div>
                        <div className="col-6">
                            <Input
                                value={esp.name}
                                type="text"
                                className='form-control'
                                name="name"
                                id="name"
                                onChange={(e)=>{handleChange(e)}}
                                placeholder='esp name'
                            />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-3">
                            <Label
                                htmlFor="espid"
                                size='md'
                            >
                                Esp Id
                            </Label>
                        </div>
                        <div className="col-6">
                            <Input
                                type="text"
                                className='form-control'
                                value={esp.espId}
                                onChange={(e)=>{handleChange(e)}}
                                name="espId"
                                id="espId"
                                placeholder='esp Id'
                            />
                        </div>
                    </div>
                    <button className='btn btn-outline-primary' onClick={(e)=>{handleClick(e)}}>submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddEsp