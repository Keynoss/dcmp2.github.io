import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 50px 100px;

    @media (max-width: 960px) {
        margin: 20px;
    }

    @media (max-width: 600px) {
        margin: 10px;
    }
`

const Title = styled.h1`
    color: rgb(107, 36, 12);
    font-weight: bolder;
    padding: 20px 0 50px 0;
`

const InsideContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media (max-width: 960px) {
        flex-direction: column;
    }

`

const Mission = styled.div`
    margin: 20px 50px;
`

const Vision = styled.div`
    margin: 20px 50px;

`
const TitleMV = styled.h2`
    padding-bottom: 20px;
`

function AboutMandV() {
    return (
        <Container>
            <Title>DAULO CONSTRUCTION'S GROWTH</Title>

            <InsideContainer>
                <Mission>
                    <TitleMV>MISSION</TitleMV>
                    <p>Our goal is to make a profit that is reasonable by meeting the demands of our clients with prompt, high-quality service and workmanship. To do this, we hire highly skilled workers who carry out their duties with honesty, equity, and integrity.</p>
                </Mission>
                <Vision>
                    <TitleMV>VISION</TitleMV>
                    <p>To attain long-term longevity and controlled growth by offering our clients the best construction services possible, which will foster enduring client relationships and lead to business growth through referrals.</p>
                </Vision>
            </InsideContainer>
        </Container>
    )
}

export default AboutMandV;