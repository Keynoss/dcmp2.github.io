import styled from "styled-components";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import MessageForm from "./MessageForm";

const Container = styled.div`
    margin: 100px;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: start;
    align-items: center;
    justify-content: start;

    @media (max-width: 980px) {
        margin: 40px;

    }

`

const Title = styled.h1`
    margin-bottom: 50px;
    align-content: center;
    color: rgb(107, 36, 12);
    align-self: center;
    font-weight: bolder;
    justify-content: center;
    text-align: center;
    padding: 50px 0 10px 0;
`

const InsideContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media (max-width: 980px) {
        flex-direction: column;
    }

`

const LeftContainer = styled.div`
    padding: 40px;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
        padding: 0px;
    }

`

const TitleDesc = styled.h2`
    padding: 10px;
    text-align: center;
`

const Info = styled.h3`
    padding: 10px;
    
`

const InfoDesc = styled.p`
    padding: 10px;
    transition: 0.4s all ease-in-out;

    &:hover {
        color: rgb(107, 36, 12);
    }

`

const RightContainer = styled.div`
     padding: 40px;
     justify-content: center;
     align-items: center;
     border: 1px solid rgb(107, 36, 12);
`


function ContactHero() {
    return (
        <Container>
            <Title>CONTACT US</Title>
            <InsideContainer>
                <LeftContainer>
                    <TitleDesc>CONTACT INFORMATION</TitleDesc>
                    <Info><LocationOnIcon /> Office Address</Info>
                    <InfoDesc>2/F Peninsula Court Bldg., Paseo de Roxas cor. Makati Ave., Makati City, Metro Manila</InfoDesc>
                    <Info><ContactPhoneIcon /> Phone Number</Info>
                    <InfoDesc>(632)817-9469/813-2246</InfoDesc>
                    <Info><EmailIcon /> Email Address</Info>
                    <InfoDesc>dauloconstruction@gmail.com</InfoDesc>
                </LeftContainer>
                <RightContainer>
                    <TitleDesc>SEND INQUIRY NOW!</TitleDesc>
                    <MessageForm />
                </RightContainer>
            </InsideContainer>
        </Container>
    )
}

export default ContactHero;