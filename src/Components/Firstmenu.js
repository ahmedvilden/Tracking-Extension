import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Empty, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTshirt,faBox } from '@fortawesome/free-solid-svg-icons'
import DragImage from './DragImage'
import MyCarousel from "./WardrobeDisplay";
import Center from 'react-center';
import { Divider } from 'antd';

export default function FirstMenu(user) {
    const [itemlist, setItemlist] = useState([ {name:'H&M Chinos Slim fit',
        imageSrc:'https://lp2.hm.com/hmgoepprod?set=quality[79],source[/07/4c/074ca333e1991ecc86519f19ccc26c9c6beb7192.jpg],origin[dam],category[kids_boy8y_trousers_trousers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[3]&call=url[file:/product/main]',
        description:'PREMIUM QUALITY. Chinos in thick stretch twill made from premium cotton. Regular waist, zip fly, and yoke seam with side pockets and back pockets. Slim fit.'
        ,categories:[{parentId:1},{parentId:1},{parentId:1}]
    },{name:'FLORAL EMBROIDERY SHIRT',
        imageSrc:'https://i.pinimg.com/originals/5a/14/2a/5a142ac2dc7c3a5b823dc507cd26f55a.jpg',
        description:'FLORAL EMBROIDERY SHIRT .',
        categories:[{parentId:12},{parentId:12},{parentId:12}]
    },
        {name:'New Look Belt In Black',
            imageSrc:'https://media2.newlookassets.com/i/newlook/610300101/mens/accessories/black-double-circle-buckle-belt.jpg?strip=true&qlt=80&w=720',
            description:'New Look Belt In Black .'
        },{name:'ASOS Faux Leather Slim Belt In Black With Contrast Internal & Metal Keeper',
            imageSrc:'https://images.asos-media.com/products/asos-smart-faux-leather-slim-belt-in-black-with-dark-green-contrast-internal-metal-keeper/8066229-3?$XXL$&wid=513&fit=constrain',
            description:'ASOS Faux Leather Slim Belt In Black With Contrast Internal & Metal Keeper',
            categories:[{parentId:1},{parentId:1},{parentId:1}]

        }]);
    const [wishlist, setWishlist] = useState(0);
    const [wardrobe, setWardrobe] = useState(0);
    const [showWardrobe, setShowWardrobe] = useState(false);

    return(<>   {showWardrobe == false ? <>
<br/>
<br/>
<br/>
<br/>
<br/>



        <Row>
            <Col   onMouseEnter={() => setWishlist(42)}
                   onMouseLeave={() =>  setWishlist(0)}    style={{textAlign: 'center', border: 'man'}}  span={12} xs={{ order: 1 }} sm={{ order: 1 }} md={{ order: 1 }} lg={{ order: 1 }}>

                <FontAwesomeIcon

                  size={"7x"} color="#3D0FCF" icon={faBox} transform={{ rotate: wishlist }} />
                <br/>
                <br/>
                <h3>Go to your wishlist !</h3>
            </Col>

            <Col  onMouseEnter={() => setWardrobe(42)}
                  onMouseLeave={() =>  setWardrobe(0)}
                   onClick = {()=> setShowWardrobe( true)} style={{textAlign: 'center'}} span={12} xs={{ order: 2 }} sm={{ order: 2 }} md={{ order: 2 }} lg={{ order: 2}}>

                    <FontAwesomeIcon  size={"7x"} color="#3D0FCF" icon={faTshirt}  transform={{ rotate: wardrobe }} />
                <br/>
                <br/>
                <h3>Go to your wardrobe !</h3>
            </Col>

        </Row>
        <br/>
        <Row>
            <Col  style={{textAlign: 'center' , paddingLeft : '100px'}}   span={12} xs={{ order: 1 }} sm={{ order: 1 }} md={{ order: 1 }} lg={{ order: 1 }}>

                        <DragImage  />


            </Col>
            <Col  style={{textAlign: 'center', paddingLeft : '100px'}}     span={12} xs={{ order: 2 }} sm={{ order: 2 }} md={{ order: 2 }} lg={{ order: 2 }}>
                <DragImage  />
            </Col>
        </Row>

        <div className="col-sm d-flex justify-content-center"
             style = {{
                 display: "flex",
                 justifyContent: "center",
                 backgroundColor: "white",
                 paddingTop: "10px",
                 paddingBottom: "10px",
                 position: "fixed",
                 left: 0,
                 bottom: 0,
                 width: "100%",
                 zIndex: 120,
             }}>
            <br/>
            <br/>
            <img className="img-responsive authImg" src = "https://www.saveyourwardrobe.com/wp-content/themes/saveyourwardrobe_gaspardbruno/assets/images/logo.svg"/>
            <br/>
            <br/>
        </div>
    </> : <>        <MyCarousel items={itemlist}/>
    </>} </>)
}
