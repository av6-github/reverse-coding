import { Container } from 'react-bootstrap';
import heroimg from '../assets/heroimg.png'
import midone from '../assets/midone.png'
import midtown from '../assets/midtown.png'
import bottomone from '../assets/bottomone.png'

export default function Hero() {
  return (
    <Container fluid className="mt-5">
    <div style={{ padding: "250px", margin:"0px", display: "flex", justifyContent: "center", position: "relative", bottom: "200px"}}>
        <img src={heroimg} style = {{height: "2000%", width: "2000%"}}alt="img" />
    </div>


        <div style={{ padding: "250px", margin:"0px", display: "flex", justifyContent: "center", position: "relative", bottom: "200px"}}>
            <p style={{textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "white"}}>Manage your entire process, </p>
            <p>from sourcing to employee onboarding</p>
            <p>and management</p>
            <img src={midone} style = {{height: "2000%", width: "2000%"}}alt="img" />
        </div>


        <div style={{ margin:"0px", display: "flex", justifyContent: "center"}}>
            <img src={midtown} style = {{height: "2000%", width: "2000%"}}alt="img" />
        </div>

        <div style={{ margin:"0px", display: "flex", justifyContent: "center"}}>
            <img src={bottomone} style = {{height: "2000%", width: "2000%"}}alt="img" />
        </div>
        



    </Container>
  );
}
