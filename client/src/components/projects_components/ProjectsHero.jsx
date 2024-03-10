import styled from "styled-components";
import MuntCarousel from "./MuntCarousel";
import CavCarousel from "./CavCarousel";
import LagCarousel from "./LagCarousel";
import TagCarousel from "./TagCarousel";

const Container = styled.div`
   position: relative;
    height: 100%;
    margin: 80px 100px 30px 100px;
    text-align: center;
    padding-bottom: 80px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media (max-width: 1000px) {
        padding-top: 50px;
        margin: 80px 20px 30px 20px;
        justify-content: space-evenly;
       padding-bottom: 20px;
    }

`

const Title = styled.h1`

    color: rgb(107, 36, 12);
    font-weight: bolder;
    padding: 80px 0 50px 0;

    @media (max-width: 960px) {
        padding: 0px 0 10px 0;

    }
`

const Desc = styled.p`
    width: 100%;
    padding: 10px 150px;

    @media (max-width: 1000px) {
        padding: 0 20px;

    }
`

const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 50px 0;
    width: 100%;
    height: 100%;

    @media (max-width: 990px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin: auto;
        padding-bottom: 0;
        padding-top: 0;
    }
`

function ProjectsHero () {

    return (
        <Container>
            <Title>PROJECTS</Title>
            <Desc>Our well-established teams and substantial experience enable us to produce projects of the highest caliber. Our extensive experience in the field gives us access to skilled personnel, and our well-established teams perform the essential inspections to guarantee adherence to guidelines and requirements.</Desc>
            <Row>
                <MuntCarousel />
                <CavCarousel />
            </Row>
            <Row>
                <LagCarousel />
                <TagCarousel />
            </Row>
        </Container>
    )
}

export default ProjectsHero