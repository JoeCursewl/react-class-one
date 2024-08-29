import './Home.css'
import Navbar from './Navbar/Navbar'
import PosterHome from '../posters/poster-home'
import { IMG_URL_PRODUCTO_FKDDLK4, IMG_URL_VISION_PRO } from '../brd.config'
import ShowCard from '../products/show-card'

export default function Home() {
    return (
        <section>
            <Navbar />

            <PosterHome />

            <div className='home-products'>
                <div className='home-products-all'>

                    <ShowCard nom_producto={"IPHONE 15 PRO"} color={"Titanium"} precio={"$ 999.99"} img_producto={IMG_URL_PRODUCTO_FKDDLK4}/>
                    
                    <ShowCard nom_producto={"VISION PRO"} color={"White"} precio={"$ 4000.99"} img_producto={IMG_URL_VISION_PRO}/>
         
                </div>
            </div>
        </section>
    )
}
