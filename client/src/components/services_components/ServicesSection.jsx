import styled from "styled-components";
import ConsCarousel from "./ConsCarousel";
import RenCarousel from "./RenCarousel";
import ElecCarousel from "./ElecCarousel";
import CarpCarousel from "./CarpCarousel";
import PlumCarousel from "./PlumCarousel";
import PaFCarousel from "./PaFCarousel";


const Container = styled.div`
    position: relative;
    height: 100%;
    text-align: center;
    margin: 50px 100px;
    padding: 100px 0 50px 0;


    @media (max-width: 960px) {
        margin: 30px 10px;
       
    }
`

const Section1 = styled.div`
    position: relative;
    margin: 0 100px;
    text-align: start;
    align-items: center;
    display: flex;
    justify-content: space-around;
    padding-bottom: 50px;
    
    @media (max-width: 960px) {
        flex-direction: column;
        margin: 0 50px;
        padding: 0;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        margin: 0 20px;
    }
`

const LeftSection = styled.div`
    flex-basis: 50%;
    margin-left: 50px;

    @media (max-width: 960px) {
        margin: 20px 20px;
    }
    
`

const RightSection = styled.div`
    flex-basis: 50%;
    margin-left: 50px;

    @media (max-width: 960px) {
        margin: 20px 20px;
    }

`

const Section2 = styled.div`
    position: relative;
    margin: 0 100px;
    text-align: start;
    align-items: center;
    display: flex;
    justify-content: space-around;
    padding-bottom: 50px;
    
    @media (max-width: 960px) {
        flex-direction: column-reverse;
        margin: 0 50px;
        padding: 0;
    }

    @media (max-width: 600px) {
        flex-direction: column-reverse;
        margin: 0 20px;
    }
`




function ServicesSection () {
    return (
        <Container>
            <Section1 >
                <LeftSection id="WC">
                    <h2>Whole Construction</h2>
                    <p>The physical labor that goes into constructing a building or other structure is referred to as building construction. Plant, machinery, materials, cladding, fixtures, installation fitting, formwork, and external finish are all unloaded during this process.</p>
                    <br />
                    <p>If you like this services, please contact us.</p>
                </LeftSection>
                <RightSection >
                    <ConsCarousel />
                </RightSection>
            </Section1>

            <Section2>
                <LeftSection id="Ren">
                   <RenCarousel />
                </LeftSection>
                <RightSection>
                <h2>Renovation</h2>
                    <p>While renovating a home is undoubtedly a large project, you must be prepared from the start to make sure your ideas will be realized.</p>
                    <br />
                    <p>If you like this services, please contact us.</p>
                </RightSection>
            </Section2>

            <Section1>
                <LeftSection id="Elec">
                    <h2>Electrical</h2>
                    <p>Construction electrical work entails the use of heavy equipment, such as high-duty equipment and networks for electrical installations. This equipment requires a massive power supply in order to operate properly.</p>
                    <br />
                    <p>If you like this services, please contact us.</p>
                </LeftSection>
                <RightSection>
                    <ElecCarousel />
                </RightSection>
            </Section1>

            <Section2>
                <LeftSection id="Carp">
                   <CarpCarousel />
                </LeftSection>
                <RightSection>
                <h2>Carpentry</h2>
                    <p>Carpenters install wood on floors, walls, roofs, and other wood-framed buildings after preparing the wood for construction. They build doors, skirting boards, architraves, and other fixtures for the home. Carpenters can handle tasks like installing door or window frames, stair preparation, and shuttering installation.</p>
                    <br />
                    <p>If you like this services, please contact us.</p>
                </RightSection>
            </Section2>

            <Section1>
                <LeftSection id="Plum">
                    <h2 >Plumbing</h2>
                    <p>Plumbing is the system of installed pipes and fixtures in a building that are used to remove waterborne wastes and distribute potable drinkable water. Typically, it is distinguished from sewage and water systems that supply a city or a collection of buildings.</p>
                    <br />
                    <p >If you like this services, please contact us.</p>
                </LeftSection>
                <RightSection>
                    <PlumCarousel />
                </RightSection>
            </Section1>

            <Section2 >
                <LeftSection id="PaF">
                   <PaFCarousel />
                </LeftSection>
                <RightSection>
                <h2>Painting and Flooring</h2>
                    <p>Painting Services: Let our talented painters makeover your space with premium paints and supplies. We have the know-how to provide exceptional results whether you need specialty finishes, exterior painting, or interior painting.</p>
                    <p>Flooring Services: We provide a variety of flooring alternatives to fit your taste and budget, from tile and vinyl to hardwood and laminate. For a perfect finish, our skilled installers guarantee accuracy and close attention to detail.</p>
                    <br />
                    <p>If you like this services, please contact us.</p>
                </RightSection>
            </Section2>

           
        </Container>
    )
}

export default ServicesSection;