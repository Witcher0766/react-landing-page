import React from "react";


const Box = ({myData}) => {

    const {name, para, img, name1, para1, img1, name2, para2, img2} = myData;

    return (
        <>
        <div className="main-box">
            <div className="sub-box">
                <h3>{name}</h3>
                <p>
                   {para}
                </p>
            </div>
            <img className="grow-together" src={img} alt="grow-together" />
        </div>


        <div className="main-box-1">
            <div className="sub-box">
                <h3>{name1}</h3>
                <p>
                   {para1}
                </p>
            </div>
            <img className="grow-together" src={img1} alt="grow-together" />
        </div>
        <div className="main-box">
            <div className="sub-box">
                <h3>{name2}</h3>
                <p>
                   {para2}
                </p>
            </div>
            <img className="grow-together" src={img2} alt="grow-together" />
        </div>



        </>
    )
}

export default Box;