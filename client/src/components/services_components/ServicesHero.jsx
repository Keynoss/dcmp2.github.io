import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { HashLink } from "react-router-hash-link";

const Container = styled.div`
   position: relative;
    width: 100%;
    height: 100vh;
    margin: auto;
    text-align: center;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 1000px) {
        padding-top: 50px;
        height: 100%;
        
    }

`

const Title = styled.h1`
    width: 100%;
    align-content: center;
    color: rgb(107, 36, 12);
    align-self: center;
    font-weight: bolder;
    justify-content: center;
    text-align: center;
    padding: 50px 0 10px 0;

`

const RowContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;


    @media (max-width: 960px){
        flex-direction: column;
        align-items: center;
    }
`

const ColContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 25%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    margin: 10px;


    @media (max-width: 960px){
        margin: 10px 20px;
        width: 500px;
    }

    @media (max-width: 600px){
        margin: 10px 20px;
        width: 350px;
    }

    @media (max-width: 400px){
        margin: 10px 10px;
        width: 200px;
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;


    @media (max-width: 960px){
        flex-direction: column;
        align-items: center;
    }
`

const Layer = styled.div`
    background: transparent;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;

    &:hover h3{
        bottom: 49%;
        color: rgb(107, 36, 12);
        background-color: white;
    }

    &:hover {
        background: rgb(245, 204, 160,0.7);
    }
`

const Service = styled.h3`
    width: 100%;
    font-weight: bold;
    color: whitesmoke;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    transition: 0.5s;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 25px;
    

    @media (max-width: 1400px) {
        font-size: 20px;
    }

    @media (max-width: 1100px) {
        font-size: 15px;
    }
    
    @media (max-width: 600px) {
        font-size: 12px;
    }
`

function ServicesHero() {
    const [services, setServices] = useState([{}]);

    useEffect(() => {
        fetchAllServices();
    }, [])

    const fetchAllServices = async () => {
        try {
            const response = await axios.get("http://localhost:8000/services");
            setServices(response.data);

        } catch (e) {
            console.log(e);
        }
    }

    const filterWC = services.filter((WC) => WC.image === "Construction.webp");
    const filterRen = services.filter((Ren) => Ren.image === "renovation.jpg");
    const filterElec = services.filter((Elec) => Elec.image === "electrical.jpg");
    const filterPlum = services.filter((Plum) => Plum.image === "Plumbing.jpg");
    const filterCarp = services.filter((Carp) => Carp.image === "carpentry.jpg");
    const filterPaF = services.filter((PaF) => PaF.image === "Painting and flooring.webp");

    return (
        <Container>
            <Title>OUR SERVICES</Title>

            <RowContainer>
                {filterWC.map((data, index) => (
                    <ColContainer key={index}>
                        <Img src={`http://localhost:8000/images/${data.image}`} alt={data.title} />
                        <Layer>
                            <HashLink to="/services#WC"><Service>{data.title}</Service></HashLink>
                        </Layer>
                    </ColContainer>
                ))}

                {filterRen.map((data, index) => (
                    <ColContainer key={index}>
                        <Img src={`http://localhost:8000/images/${data.image}`} alt={data.title} />
                        <Layer>
                            <HashLink to="/services#Ren"><Service>{data.title}</Service></HashLink>
                        </Layer>
                    </ColContainer>
                ))}

                {filterElec.map((data, index) => (
                    <ColContainer key={index}>
                        <Img src={`http://localhost:8000/images/${data.image}`} alt={data.title} />
                        <Layer>
                            <HashLink to="/services#Elec"><Service>{data.title}</Service></HashLink>
                        </Layer>
                    </ColContainer>
                ))}

            </RowContainer>

            <RowContainer>
                {filterCarp.map((data, index) => (
                    <ColContainer key={index}>
                        <Img src={`http://localhost:8000/images/${data.image}`} alt={data.title} />
                        <Layer>
                            <HashLink to="/services#Carp"><Service>{data.title}</Service></HashLink>
                        </Layer>
                    </ColContainer>
                ))}

                {filterPlum.map((data, index) => (
                    <ColContainer key={index}>
                        <Img src={`http://localhost:8000/images/${data.image}`} alt={data.title} />
                        <Layer>
                            <HashLink to="/services#Plum"><Service>{data.title}</Service></HashLink>
                        </Layer>
                    </ColContainer>
                ))}

                {filterPaF.map((data, index) => (
                    <ColContainer key={index}>
                        <Img src={`http://localhost:8000/images/${data.image}`} alt={data.title} />
                        <Layer>
                            <HashLink to="/services#PaF"><Service>{data.title}</Service></HashLink>
                        </Layer>
                    </ColContainer>
                ))}

            </RowContainer>

        </Container>
    )
}

export default ServicesHero;




