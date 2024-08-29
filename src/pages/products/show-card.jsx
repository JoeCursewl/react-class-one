export default function ShowCard({ nom_producto, color, precio, img_producto }) {
  return (
    <div className="en-card-product">
      <div className="en-info-product">
        <div>
          <p>{nom_producto}</p>
          <p>{color}</p>
        </div>

        <div>
          <p>{precio}</p>
        </div>
      </div>

      <div className="en-card-img">
        <img src={img_producto} alt="" />
      </div>
    </div>
  );
}
