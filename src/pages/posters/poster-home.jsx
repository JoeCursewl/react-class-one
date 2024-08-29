import './poster-home.css';

export default function PosterHome() {
  return (
    <div className="poster-home">
      <div className='img-e-poster-info'>
        <img src="/posters/poster-xiaomi-img.svg" alt="" />
        <p>Xiaomi</p>
      </div>

      <div className='img-e-poster-info'>
        <img src="/posters/poster-apple-img.svg" alt="" />
        <p>Apple</p>
      </div>

      <div className='img-e-poster-info'>
        <img src="/posters/poster-samsung-img.svg" alt="" />
        <p>Samsung</p>
      </div>

      <div className='img-e-poster-info'>
        <aside>+10k</aside>
        <p>Productos</p>
      </div>
    </div>
  );
}
