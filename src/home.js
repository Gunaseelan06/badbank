// import './App.css';
import './home.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import "./images/bank.jpeg";
import image from './images/pict-1.avif';
import image1 from './images/newPic7.png';
export default function Home(){
  let style={color:'#9d75cf',textAlign:"center"};

return<>

<div id='cardDiv'>
      
      {/* <marquee style={{width:"100%",background:"transparent", border:"2px solid #9d75cf"}}> <h5 style={{color :"#9d75cf", fontWeight:"bold"}}>Unlock exclusive benefits with our special deposit offer! Earn competitive interest rates and enjoy peace of mind with our trusted banking services || You can withdraw your funds anytime with no penalties or fees</h5></marquee>  */}
      
  {/* <img src={img}/> */}
 
   <div id="main-page">


    <Card className="my-card" >

      <Carousel> 

     <Carousel.Item interval={500} >
    <img src={image1} className="d-block w-100" />
    </Carousel.Item> 

   </Carousel>  

   </Card>  
 

  <Card style={{background:"transparent" ,border:"none"}}>
<div id='words'>
  
  <p style={{color:"white"}}>Welcome to Bad bank</p>
<h4>"Secure your future with smart banking choices today. Let's grow together."

</h4>
{/* <button id='home-btn' onClick={()=>  window.location.hash = "#/login"} > Login</button> */}

</div>
</Card>
</div>
</div> 
{
  // window.innerWidth < 1000 ?  <Footer/> :  <Footer position="fixed"/>
}
 
    </>
}