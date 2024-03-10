import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";


const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px 100px;
    text-align: start;
    padding-top: 50px;

    @media (max-width: 1000px) {
        flex-direction: column;
        margin: 10px 50px;
    }
`

const LeftContainer = styled.div`
    position: relative;
    margin: auto;
`
const Title = styled.h1`
    font-family: 'Brush Script MT', cursive;
    font-size: 80px;

    @media (max-width: 1000px) {
        font-size: 50px;
    }
`
const TitleDesc = styled.h3`
    
`

const Desc = styled.p`
    
    @media (max-width: 1000px) {
        font-size: 15px;
    }
`
const RightContainer = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
`
const OverviewImg = styled.img`
    width: 700px;
    margin: 20px 30px;
    box-shadow: 10px 10px 20px black;

    @media (max-width: 1000px) {
        width: 500px;
    }

    @media (max-width: 600px) {
        width: 400px;
    }
`



export default function HomeOverview() {
    const [about, setAbout] = useState([]);

    useEffect(() => {
        fetchAllServices();
    }, [])

    const fetchAllServices = async () => {
        try {
            const response = await axios.get("http://localhost:8000/about");
            setAbout(response.data);

        } catch (e) {
            console.log(e);
        }
    }

    const filterHome = about.filter((home) => home.title === "DAULO CONSTRUCTION");


    return (
        <Container>
            {filterHome.map((home, index) => (
                <LeftContainer key={index}>
                    <Title style={{color: "rgb(107, 36, 12)"}}>Company Overview</Title>
                    <TitleDesc>{home.title}</TitleDesc>
                    <Desc>{home.desc}.</Desc>
                </LeftContainer> 
            ))}      

            {filterHome.map((home, index) => (       
                <RightContainer key={index}>
                    <OverviewImg src={`http://localhost:8000/images/${home.cover_img}`} alt={home.title}/>
                </RightContainer>
            ))} 
        </Container>
        
    )
}