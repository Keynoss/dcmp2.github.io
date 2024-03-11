import AssignmentLateRoundedIcon from '@mui/icons-material/AssignmentLateRounded';
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    text-align: center;

`

const InsideContainer = styled.div`
    width: 700px;
    height: 700px;
    padding: 50px;
    background-image: linear-gradient(to bottom, rgba(255,0,0,0)10%, rgba(255,255,255,1)100%);
    box-shadow: 5px 5px 5px black;
    position: absolute;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    text-align: start;
    align-content: center;
    top: 55%;
    left: 30%;
    transform: translate(-50%, -50%);

    @media (max-width: 1600px) {
        width: 600px;
        height: 550px;
    }

    @media (max-width: 980px) {
        width: 500px;
        height: 500px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media (max-width: 480px) {
        top: 60%;
        width: 400px;
        height: 500px;
    }
`

const CoverImg = styled.img`
    position: relative;
    width: 100%;
    height: 100vh;
`

const Title = styled.h1`
    font-size: 70px;
    font-weight: 700;
    padding-bottom: 20px;
    padding-top: 50px;

    @media (max-width: 1600px) {
        font-size: 50px;
    }

    @media (max-width: 980px) {
        font-size: 50px;

        padding-bottom: 20px;
        padding-top: 45px;
    }

    @media (max-width: 480px) {
        font-size: 40px;
    }
`

const Desc = styled.h3`
    font-weight: 500;
    padding-bottom: 70px;

    @media (max-width: 1600px) {
        font-size: 25px;
    }

    @media (max-width: 980px) {
        font-size: 20px;
        padding-bottom: 70px;
    }
`

const Alink = styled.a`
    font-size: 30px;
    padding: 10px;
    font-weight: 500;
    border-radius: 0.5rem;
    background-color: black;
    color: white;
    transition: 0.3s all ease-in-out;
    text-decoration: none;

    &:hover {
        color: rgb(107, 36, 12);
        background-color: white;
        transform: scale(1.06);
        border: 1px solid black;
    }

    @media (max-width: 1600px) {
        font-size: 20px;
    }

    @media (max-width: 980px) {
        font-size: 18px;
        padding: 10px;
   
    }
`


export default function HomeHero() {
    const [hero, setHero] = useState([]);

    useEffect(() => {
        fetchAllServices();
    }, [])

    const fetchAllServices = async () => {
        try {
            const response = await axios.get("http://localhost:8000/icon");
            setHero(response.data);

        } catch (e) {
            console.log(e);
        }
    }

    const filterHero = hero.filter((hero) => hero.category === "Hero");

    return (
     
            <Container>
                {filterHero.map((data, index) => (
                    <CoverImg key={index} src={`http://localhost:8000/images/${data.image}`} alt={data.alt} />
                ))}

                <InsideContainer>  
                         
                        <Title>DAULO <span style={{color: 'rgb(107, 36, 12)'}}>CONSTRUCTION</span></Title>
                        <Desc>Not only do we build buildings and houses, but we also build futures, homes, and cities.</Desc>   
                        <Alink href="/about"><AssignmentLateRoundedIcon></AssignmentLateRoundedIcon> Learn More</Alink>
                </InsideContainer>
            </Container>

    )
}