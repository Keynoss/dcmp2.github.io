import { useState,  } from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';


const Button = styled.button`
    padding: 10px 20px;
    border-radius: 0.7em ;
    font-weight: 500;
    font-size: 20px;
    background: -webkit-linear-gradient(225deg, rgb(235, 87, 87) 0%,rgb(0, 0, 0) 100%);
    color: whitesmoke;
    border: none;
    transition: 0.3s all ease-in-out;
    

    &:hover {
        transform: scale(1.07);
    }

`

function EstimateModal() {
  const [show, setShow] = useState(false);

  const { handleSubmit, watch } = useForm();

  const wholeConstruction = watch("Whole Construction");

    console.log("wholeConstruction");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const handleChange = (e) => {
    setSelect(e.target.value);
    
  }



  return (
    <>
      <Button onClick={handleShow}>
        Get Estimate
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Estimate your Project!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            <form action="#">
                <div className="form-group">
                    <label htmlFor="custom-select">Services:</label>
                    <select className="form-select" aria-label="Default select example" >
                        <option >Select your project service:</option>
                        <option name="Whole Construction" value="1">Whole Construction</option>
                        <option name="Renovation" value="2">Renovation</option>
                        <option name="Electrical" value="3">Electrical</option>
                        <option name="Plumbing" value="4">Plumbing</option>
                        <option name="Carpentry" value="5">Carpentry</option>
                        <option name="Painting and Flooring" value="6">Painting and Flooring</option>
                    </select>
                </div>
                
            </form>

        
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EstimateModal;