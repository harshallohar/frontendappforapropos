import React from 'react'
import axios from 'axios'
import DataContext from '../context/DataContext'

const DataState = (props) => {
  const [manu, setManu] = React.useState([]);
  const [Batches, setBatches] = React.useState([]);
  const [Pics, setPics] = React.useState([]);
  const [update, setUpdate] = React.useState([]);
  const [espM, setEspM] = React.useState([]);
  let api = "http://192.168.0.107:5002";
  let config = {
    headers: {
      "Content-Type": "application/json",
    }
  }

  let allManu = async () => {
    const response = await axios.get(`${api}/api/v1/getAllManufacturers`)
    console.log(response.data.body);
    setManu(response.data.body);
  }

  let addManu = async (value) => {
    // let data = { name: value.name }
    console.log(value);
    // console.log(`${api}addSingleManufacturer`)
    // console.log(config);
    const val = await axios.post(`${api}/api/v1/addSingleManufacturer`, value, config);
    console.log(val.data);
    allManu();
    // setManufacturer()
  }

  let allBatchesForManufacturer = async (value) => {
    // console.log(value)
    // params
    config['params'] = {
      manufacturerId: value
    }
    // console.log(config);
    //getBatchesforManufacturer?manufacturerId=63f318927ca01c2164b23f78
    const response = await axios.get(`${api}/api/v1/getBatchesforManufacturer`, config);
    console.log(response.data.body);
    setBatches(response.data.body);
  }


  let AddBatches = async (value) => {
    console.log(value);
    let data = {
      name: value.name,
      manufacturerId: value.id,
    }
    const response = await axios.post(`${api}/api/v1/addSingleBatch`, data, config)
    console.log(response.data);
    allBatchesForManufacturer(value.id);
  }


  // displaying batch for pics
  let allPicForBatches = async (value) => {
    let obj = []
    // console.log(value);
    config['params'] = {
      id: value
    }
    const response = await axios.get(`${api}/api/v1/getPicsforBatches`, config);
    let projectedPics = response.data.body;
    obj = projectedPics.projectedPics.projectedPics
    console.log(response.data.body);
    setUpdate(obj);
    setPics(projectedPics.singleBatch);
  }


  // adding the pics 
  let AddPics = async (value) => {
    let data = {
      name: value.name,
      batchId: value.id
    }
    // console.log(data);
    const response = await axios.post(`${api}/api/v1/addSinglePic`, data, config);
    console.log(response.data);
    allPicForBatches(value.id);
    if (response.data.success) {
      return { success: true };
    }
    return { success: false };
  }
  // deleting the manufactuer
  const deleteManu = async (value) => {
    console.log(value);
    config['params'] = {
      "mid": value
    }
    const response = await axios.delete(`${api}/api/v1/deleteManufacturer`, config);
    console.log(response.data)
    allManu();
  }

  const deleteBatch = async (value) => {
    console.log(value);
    config['params'] = {
      bid: value.id,
    }
    // console.log(config);
    const response = await axios.delete(`${api}/api/v1/deleteBatch`, config)
    console.log(response.data);
    allBatchesForManufacturer(value.mid);
  }

  const getEspForManu = async (value)=>{
    // console.log(value);
    config['params'] = value;
    // console.log(config)
    const response = await axios.get(`${api}/api/v1/getESPforSingleManufacturer`, config)
    console.log(response.data.body[0]);
    setEspM(response.data.body)
  }

  const addEspValue = async (value)=>{
    const response = await axios.post(`${api}/api/v1/addSingleEsp`, value);
    console.log(response.data);
    getEspForManu({manufacturerId: value.manufacturerId})
  }


  return (
    <DataContext.Provider value={{
      addManu,
      allManu,
      manu,
      espM,
      AddBatches,
      allBatchesForManufacturer,
      Batches,
      allPicForBatches,
      Pics,
      update,
      deleteManu,
      AddPics,
      deleteBatch,
      api,
      getEspForManu,
      addEspValue,
    }}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataState