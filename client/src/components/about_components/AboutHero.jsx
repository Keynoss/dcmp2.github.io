import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
    text-align: center;
    margin: 50px 100px;
    padding: 50px 0 50px 0;

    @media (max-width: 1200px) {
        height: 100%;
    }

    @media (max-width: 960px) {
        margin: 30px 10px;
        height: 120vh;
    }
`

const Title = styled.h1`

    color: rgb(107, 36, 12);
    font-weight: bolder;
    padding: 20px 0 50px 0;

    @media (max-width: 960px) {
        padding: 0px 0 10px 0;

    }
`

const Row1 = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: start;
    justify-content: space-evenly;
    padding: 20px 0;


    @media (max-width: 960px) {
        flex-direction: column;
    }
`

const TitleDesc = styled.h2`
    

`

const Para = styled.p`
    
`

const Uls = styled.ul`
    

`

const Lis = styled.li`
    
`

const HeroImg = styled.img`
    width: 500px;
    height: 300px;

    @media (max-width: 960px) {
        width: 450px;
        height: 250px;
    }

    @media (max-width: 600px) {
        width: 400px;
        height: 200px;
    }
`

const Col = styled.div`
    margin: 0 100px;


    @media (max-width: 1200px) {
       margin: 0 30px;
    }
    @media (max-width: 960px) {
        margin: 0 20px;
    }
`

const Row2 = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: start;
    justify-content: space-evenly;
    padding: 20px 0;

    @media (max-width: 960px) {
        flex-direction: column-reverse;

    }

`


function AboutHero() {
    const [about, setAbout] = useState([]);

    useEffect(() => {
        fetchAllServices();
    }, [])

    const fetchAllServices = async () => {
        try {
            const response = await axios.get("https://dcmp2-github-io.onrender.com/about");
            setAbout(response.data);

        } catch (e) {
            console.log(e);
        }
    }

    const filterAbout = about.filter((home) => home.title === "WHY CHOOSE DAULO CONSTRUCTION");
    const filterCompany = about.filter((home) => home.title === "THE COMPANY");

    return (
        <Container>
            <Title>ABOUT US</Title>

            {filterAbout.map((data, index) => (
                <Row1 key={index}>
                    <Col>
                        <TitleDesc>{data.title}</TitleDesc>
                        <Para>{data.desc}</Para>
                        <Uls>
                            <Lis>Quality fit out product</Lis>
                            <Lis>Reliable construction services</Lis>
                            <Lis>Accomodating management</Lis>
                            <Lis>On-time completion</Lis>
                        </Uls>
                    </Col>

                    <Col>
                        <HeroImg src={`http://localhost:8000/images/${data.cover_img}`} alt={data.alt}/>
                    </Col>
                    
                </Row1>
            ))}

            {filterCompany.map((data, index) => (
                <Row2 key={index}>
                    <Col>
                        <HeroImg src={`http://localhost:8000/images/${data.cover_img}`} alt={data.alt}/>
                    </Col>

                    <Col>
                        <TitleDesc>{data.title}</TitleDesc>
                        <Para>{data.desc}</Para>
                    
                    </Col>

                
                </Row2>
            ))}
        </Container>
    )
}

export default AboutHero;