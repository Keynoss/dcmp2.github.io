import styled from "styled-components"
import { useState, useEffect } from "react";
import axios from "axios";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import { HashLink } from "react-router-hash-link";


const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 0;
    text-align: center;
    padding-top: 30px;
    background-image: linear-gradient(to left top, #dcdcdc, #e5e5e5, #ededed, #f6f6f6, #ffffff);
 
    @media (max-width: 1000px) {
        flex-direction: column;
        padding-top: 10px;
    }

`
const InsideContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    padding-bottom: 20px;
    text-align: start;

    @media (max-width: 1000px) {
        flex-direction: column;
        padding: 30px 0;
    }
`

const LeftContainer = styled.div`
    
`

const Alink = styled.a`
    text-decoration: none;
    color: black;
    font-weight: 600;
    transition: 0.4s all ease-in-out;

    &:hover {
        color: rgb(107, 36, 12);
    }
`

const Img = styled.img`
    width: 80px;

    @media (max-width: 600px) {
        width: 60px;
    }
`
const Title = styled.h4`
    
`

const Desc = styled.p`
    
`

const SocMedLogo = styled.div`
    
`

const ImgIcon = styled.img`
    width: 50px;
    transition: 0.5s all ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`



const MidContainer = styled.div`
    
`

const Uls = styled.ul`
    
`

const Lis = styled.li`
`

const RightContainer = styled.div`
    
`

const TitleDesc = styled.h2`
    text-align: center;
    font-size: 25px;
    font-weight: 500;
`

const Info = styled.h3`
    font-size: 20px;
    
`

const InfoDesc = styled.p`
    font-size: 15px;
    width: 400px;
    transition: 0.4s all ease-in-out;

    &:hover {
        color: rgb(107, 36, 12);
    }

`

const Copyright = styled.p`
    padding-top: 15px;
    border-top: 1px solid rgb(107, 36, 12);
`


function Footer() {
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        fetchAllServices();
    }, [])

    const fetchAllServices = async () => {
        try {
            const response = await axios.get("http://localhost:8000/icon");
            setIcons(response.data);

        } catch (e) {
            console.log(e);
        }
    }

    const filterIcon = icons.filter((icon) => icon.category === "Icon");
    const filterLogo = icons.filter((logo) => logo.category === "Brand");


    return (
        <Container>
            <InsideContainer>
                <LeftContainer>
                    {filterLogo.map((data, index) => (
                        <Alink key={index} href={data.url}><Img src={`http://localhost:8000/images/${data.image}`} alt={data.alt} /></Alink>
                    ))}
                    <Desc>We assure each client receives outstanding services</Desc>


                    <SocMedLogo>
                        <Title>You can follow us on:</Title>
                        {filterIcon.map((data, index) => (
                            <Alink key={index} href={data.url} target="blank"><ImgIcon src={`http://localhost:8000/images/${data.image}`} alt={data.alt} /></Alink>
                        ))}
                    </SocMedLogo>


                </LeftContainer>

                <MidContainer>
                    <Title>Our Services:</Title>
                    <Uls>
                        <Lis><HashLink className="dropdown-item" to="/services#WC">Whole Construction</HashLink></Lis>
                        <Lis><HashLink className="dropdown-item" to="/services#Ren">Renovation</HashLink></Lis>
                        <Lis><HashLink className="dropdown-item" to="/services#Elec">Electrical</HashLink></Lis>
                        <Lis><HashLink className="dropdown-item" to="/services#Carp">Carpentry</HashLink></Lis>
                        <Lis><HashLink className="dropdown-item" to="/services#Plum">Plumbing</HashLink></Lis>
                        <Lis><HashLink className="dropdown-item" to="/services#PaF">Painting and Flooring</HashLink></Lis>
                    </Uls>
                </MidContainer>

                <RightContainer>
                    <TitleDesc>CONTACT INFORMATION</TitleDesc>
                    <Info><LocationOnIcon /> Office Address</Info>
                    <InfoDesc>2/F Peninsula Court Bldg., Paseo de Roxas cor. Makati Ave., Makati City, Metro Manila</InfoDesc>
                    <Info><ContactPhoneIcon /> Phone Number</Info>
                    <InfoDesc>(632)817-9469/813-2246</InfoDesc>
                    <Info><EmailIcon /> Email Address</Info>
                    <InfoDesc>dauloconstruction@gmail.com</InfoDesc>
                </RightContainer>
            </InsideContainer>

            <Copyright>Copyright © 2023 Daulo Construction All Right Reserved.</Copyright>
        </Container>
    )
}

export default Footer