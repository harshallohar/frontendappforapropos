import React from 'react'
import classnames from 'classnames'
import Header from '../components/Headers/Header';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row
} from 'reactstrap';
import BatchItem from '../components/OemComp/BatchItem';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
// import { NavLink } from 'react-router-dom';
const Oemboard = (props) => {
  let user = useSelector(selectUser);
  const [activeNav, setActiveNav] = React.useState(1);
  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
  }
  return (
    <div>
      <Header />
      <Container className='mt--7' fluid>
        {user && <BatchItem />}
      </Container>
    </div>
  )
}

export default Oemboard