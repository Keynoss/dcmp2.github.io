import styled from "styled-components"
import MoreRoundedIcon from '@mui/icons-material/MoreRounded';

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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

    @media (max-width: 1000px) {
        padding-bottom: 50px;
        
    }

`

const Cover = styled.div`
    position: relative;
    padding: 50px;
    background: rgb(107, 36, 12);
    width: 700px;
    color: white;

    @media (max-width: 1000px) {
        width: 600px;
        
    }

    @media (max-width: 600px) {
        width: 400px;
    }
`

const Title = styled.h2`
    padding-top: 30px;
    padding-bottom: 20px;
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;

    @media (max-width: 1000px) {
       font-size: 30px;
       padding-top: 25px;
       padding-bottom: 15px; 
    }

    @media (max-width: 600px) {
        font-size: 20px;
        padding-top: 20px;
        padding-bottom: 10px; 
    }
`
const Desc = styled.p`
    font-size: 20px;

    @media (max-width: 1000px) {
       font-size: 20px;
    }

    @media (max-width: 600px) {
        font-size: 15px;
    }
`

const Uls = styled.ul`
 
`

const Lis = styled.li`
    padding: 10px;

    @media (max-width: 1000px) {
       font-size: 20px;
    }

    @media (max-width: 600px) {
        font-size: 15px;
    }
`

const Button = styled.button`
    font-size: 20px;
    padding: 10px;
    font-weight: 500;
    border-radius: 0.5rem;
    background-color: black;
    color: white;
    transition: 0.3s all ease-in-out;

    &:hover {
        color: rgb(107, 36, 12);
        background-color: white;
        transform: scale(1.06);
    }

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
    margin-left: 50px;
`

const Line = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 20px;
`

const Value = styled.h2`
    font-size: 50px;
    font-weight: bold;

    @media (max-width: 1000px) {
        font-size: 40px;
    }
`
const ValueDesc = styled.p`
    font-size: 20px;

    @media (max-width: 1000px) {
        font-size: 15px;
    }
`

export default function HomeSection() {
    return (
        <Container>
            <LeftContainer>
                <Cover>
                    <Title>Our Core Compentencies</Title>
                    <Desc>Full-service company Daulo Construction is committed to going above and beyond for its customers. Among our specialties are:</Desc>
                    <Uls>
                        <Lis><span style={{fontWeight: "bold"}}>Construction Management: </span>Comprehensive approach to construction management of any kind.</Lis>
                        <Lis><span style={{fontWeight: "bold"}}>Renovation: </span> A strategy that tackles the problem of deferred maintenance.</Lis>
                        <Lis><span style={{fontWeight: "bold"}}>Flooring & Painting: </span> Providing flawless finishes that endure over time.</Lis>
                        <Lis><span style={{fontWeight: "bold"}}>Interior Finishes: </span> Meticulous attention to detail that enhances every area.</Lis>
                    </Uls>
                    <Button><MoreRoundedIcon></MoreRoundedIcon> Discover More</Button>
                </Cover>
            </LeftContainer>
            <RightContainer>
                <Line>
                    <Value>200+</Value>
                    <ValueDesc>Successfully Project</ValueDesc>
                    <Value>1,200+</Value>
                    <ValueDesc>Revenue Investments</ValueDesc>
                </Line>
                <Line>
                    <Value>10+</Value>
                    <ValueDesc>Year of experiences with proud</ValueDesc>
                    <Value>50+</Value>
                    <ValueDesc>Colleagues & counting more daily</ValueDesc>
                </Line>
            </RightContainer>
        </Container>
       
    )
}