import { Container } from '@mui/material'
import React from 'react'

const Card = () => {


    return (

        <div className='text-white  '>
            <Container className='hover:cursor-pointer hover:px-0' style={{ fontFamily: "sans-serif", marginTop: "50px", marginBottom: "5px", display: "flex" }}>
                <div style={{ marginInline: "20px" }}>
                    <img style={{ width: "100%", height: "70%" }} src="https://i.ytimg.com/vi/WZbfIvvPRaI/sddefault.jpg" />
                    <div style={{ display: "flex", alignItems: "center", marginTop: "50px" }}>
                        <h2 style={{ fontSize: "30px", width: "100%" }}>38% of the population has O positive blood, making it the most common blood type. O positive red blood cells are not universally compatible to all types, but they are compatible to any red blood cells that are positive (A+, B+, O+, AB+).</h2>
                    </div>
                </div>
            </Container>

            <Container style={{ fontFamily: "sans-serif", marginBottom: "20px", display: "flex" }}>
                <div style={{ marginInline: "20px" }}>
                    <img style={{ width: "100%", height: "70%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvEkS_7rbKCZvMCLp29G1yc0x7DVpaczbPhi2fKrc7C9saXi8aFX2fPxpVH3HEPyAW7NQ&usqp=CAU" />
                    <div style={{ zIndex: "auto", display: "flex", alignItems: "center", marginTop: "50px" }}>
                        <h2 style={{ fontSize: "30px", width: "100%" }}>Type O is routinely in short supply and in high demand by hospitals – both because it is the most common blood type and because type O negative blood is the universal blood type needed for emergency transfusions and for immune deficient infants.
                        </h2>
                    </div>
                </div>
            </Container>

            <Container style={{ fontFamily: "sans-serif", marginBottom: "20px", display: "flex" }}>
                <div style={{ marginInline: "20px" }}>
                    <img style={{ width: "100%", height: "70%" }} src="https://i.ytimg.com/vi/nYCQqk7C0Zo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBBn_iHVRh4UR9YOPfoDXl10RlZWA" />
                    <div style={{ zIndex: "auto", display: "flex", alignItems: "center", marginTop: "50px" }}>
                        <h2 style={{ fontSize: "30px", width: "100%" }}>Type A+ donors can help change the world by donating whole blood and by donating platelets (an apheresis procedure that takes longer but often goes to cancer patients). And Type A and AB plasma are often used for trauma patients and accident victims.</h2>
                    </div>
                </div>
            </Container>


            <Container style={{ fontFamily: "sans-serif", marginBottom: "20px", display: "flex" }}>
                <div style={{ marginInline: "20px" }}>
                    <img style={{ width: "100%", height: "70%" }} src="https://i.ytimg.com/vi/7v9ND5qvr8o/mqdefault.jpg" />
                    <div style={{ zIndex: "auto", display: "flex", alignItems: "center", marginTop: "50px" }}>
                        <h2 style={{ fontSize: "30px", width: "100%" }}>blood group A – has A antigens on the red blood cells with anti-B antibodies in the plasma. blood group B – has B antigens with anti-A antibodies in the plasma. blood group O – has no antigens, but both anti-A and anti-B antibodies in the plasma. blood group AB – has both A and B antigens, but no antibodies.
                        </h2>
                    </div>
                </div>
            </Container>

            <Container style={{ fontFamily: "sans-serif", marginBottom: "20px", display: "flex" }}>
                <div style={{ marginInline: "20px" }}>
                    <img style={{ width: "100%", height: "70%" }} src="https://i.ytimg.com/vi/6-A-xJVEHXs/mqdefault.jpg" />
                    <div style={{ zIndex: "auto", display: "flex", alignItems: "center", marginTop: "50px" }}>
                        <h2 style={{ fontSize: "30px", width: "100%" }}>About 9% of the population have B positive blood. B positive red blood cells can be given to both B positive and AB positive patients. B positive patients can receive blood from B positive, B negative, O positive and O negative donors.</h2>
                    </div>
                </div>
            </Container>

            <Container style={{ fontFamily: "sans-serif", display: "flex" }}>
                <div style={{ marginInline: "20px" }}>
                    <img style={{ width: "100%", height: "70%" }} src="https://i.ytimg.com/vi/fWTzy3QQz7U/mqdefault.jpg" />
                    <div style={{ display: "flex", alignItems: "center", marginTop: "50px" }}>
                        <h2 style={{ fontSize: "30px", width: "100%" }}>About 9% of the population have B positive blood. B positive red blood cells can be given to both B positive and AB positive patients. B positive patients can receive blood from B positive, B negative, O positive and O negative donors.</h2>
                    </div>
                </div>
            </Container>

        </div>


    )
}

export default Card
