import './Home.css'
import Navbar from './Navbar/Navbar'
import PosterHome from '../posters/poster-home'
import { IMG_URL_PRODUCTO_FKDDLK4, IMG_URL_VISION_PRO } from '../brd.config'

export default function Home() {
    return (
        <section>
            <Navbar />

            <PosterHome />

            <div className='home-products'>
                <div className='home-products-all'>

                    <div className='en-card-product'>

                        <div className='en-info-product'>
                            <div>
                                <p>IPHONE 15 PRO</p>
                                <p>Titanium</p>
                            </div>

                            <div>
                                <p>$ 999.99 or 41.62/mo. for 24 mo.</p>
                            </div>
                        </div>

                        <div className='en-card-img'>
                            <img src={IMG_URL_PRODUCTO_FKDDLK4} alt="" />
                        </div>
                    </div>

                    <div className='en-card-product'>

                        <div className='en-info-product'>
                            <div>
                                <p>IPHONE 15 PRO</p>
                                <p>Titanium</p>
                            </div>

                            <div>
                                <p>$ 999.99 or 41.62/mo. for 24 mo.</p>
                            </div>
                        </div>

                        <div className='en-card-img'>
                            <img src={IMG_URL_PRODUCTO_FKDDLK4} alt="" />
                        </div>
                    </div>

                    <div className='en-card-product'>

                        <div className='en-info-product'>
                            <div>
                                <p>IPHONE 15 PRO</p>
                                <p>Titanium</p>
                            </div>

                            <div>
                                <p>$ 999.99 or 41.62/mo. for 24 mo.</p>
                            </div>
                        </div>

                        <div className='en-card-img'>
                            <img src={IMG_URL_PRODUCTO_FKDDLK4} alt="" />
                        </div>
                    </div>

                    <div className='en-card-product'>

                        <div className='en-info-product'>
                            <div>
                                <p>IPHONE 15 PRO</p>
                                <p>Titanium</p>
                            </div>

                            <div>
                                <p>$ 999.99 or 41.62/mo. for 24 mo.</p>
                            </div>
                        </div>

                        <div className='en-card-img'>
                            <img src={IMG_URL_PRODUCTO_FKDDLK4} alt="" />
                        </div>
                    </div>

                    <div className='en-card-product'>

                        <div className='en-info-product'>
                            <div>
                                <p>IPHONE 15 PRO</p>
                                <p>Titanium</p>
                            </div>

                            <div>
                                <p>$ 999.99 or 41.62/mo. for 24 mo.</p>
                            </div>
                        </div>

                        <div className='en-card-img'>
                            <img src={IMG_URL_PRODUCTO_FKDDLK4} alt="" />
                        </div>
                    </div>

                    <div className='en-card-product'>

                        <div className='en-info-product'>
                            <div>
                                <p>IPHONE 15 PRO</p>
                                <p>Titanium</p>
                            </div>

                            <div>
                                <p>$ 999.99 or 41.62/mo. for 24 mo.</p>
                            </div>
                        </div>

                        <div className='en-card-img'>
                            <img src={IMG_URL_PRODUCTO_FKDDLK4} alt="" />
                        </div>
                    </div>
                    
                </div>

            </div>

        </section>
    )
}
