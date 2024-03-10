import "../stylesheet/HomeHero.css"
import AssignmentLateRoundedIcon from '@mui/icons-material/AssignmentLateRounded';


export default function HomeHero() {

    return (
     
            <div className='cover'>
             
                <div className='insideContainer'>             
                        <h1>DAULO <span style={{color: 'rgb(107, 36, 12)'}}>CONSTRUCTION</span></h1>
                        <h3>Not only do we build buildings and houses, but we also build futures, homes, and cities.</h3>   
                        <a href="/about"><button><AssignmentLateRoundedIcon></AssignmentLateRoundedIcon> Learn More</button></a>
                </div>
            </div>

    )
}