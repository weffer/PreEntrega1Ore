import { useParams } from "react-router-dom";
import { getImageURL } from "../../utils/image-util";

import { useProductDetail } from "../../Hooks/useProductDetail";
import { useProductCount } from "../../Hooks/useProductCount";


function ItemListDetail() {

  const { id } = useParams();
  const { detail } = useProductDetail({id});
  const { count, handleIncrement, handleDecrement } = useProductCount({detail});

  
  return (    
    detail  ?
    (
        <section className="container-xl mt-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-7">
                <div id="indicadores" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button
                            className="active"
                            type="button"
                            data-bs-target="#indicadores"
                            data-bs-slide-to="0"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#indicadores"
                            data-bs-slide-to="1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#indicadores"
                            data-bs-slide-to="2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#indicadores"
                            data-bs-slide-to="3"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        {
                            detail.galeria &&
                            (
                                <>
                                    <div className="carousel-item active">
                                        <img src={getImageURL(detail.galeria[0])} alt="" className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={getImageURL(detail.galeria[1])} alt="" className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={getImageURL(detail.galeria[2])} alt="" className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={getImageURL(detail.galeria[3])} alt="" className="d-block w-100" />
                                    </div>
                                </>
                            )
                        }
                        <button
                            type="button"
                            className="carousel-control-prev"
                            data-bs-target="#indicadores"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon"></span>
                        </button>

                        <button
                            type="button"
                            className="carousel-control-next"
                            data-bs-target="#indicadores"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
                </div>
                <div className="col-md-7 mt-5">
                <h2 className="text-center fw-bold">{detail.nombre}</h2>
                <p className="mt-5 fs-5">
                    {detail.descripcion}
                </p>                

                <p className="mt-5 fs-5 fw-bold">
                    {detail.titulo}
                </p>                
                {
                    detail.caracteristicas &&
                    (
                        <>
                            <p className="mt-5 fs-5">
                                {detail.caracteristicas[0]}
                            </p>
                            <p className="mt-5 fs-5">
                                {detail.caracteristicas[1]}
                            </p>
                        </>
                    ) 
                } 
                <p className="fw-bold text-primary fs-3 text-center">$ {detail.precio}</p>

                <form className="row">
                    <div className="col-12">
                    <div className="form-group">
                        <label htmlFor="cbCantidad" className="form-label fw-bold"
                        >Cantidad</label>
                        <div className="productCount col-5 mx-auto">
                            <button className="btn btn-danger" onClick={(event)=> handleDecrement(event) }>-</button>
                            <p>{count}</p>
                            <button className="btn btn-success" onClick={(event)=> handleIncrement(event)}>+</button>
                        </div>
                    </div>
                    </div>
                    <div className="col-12 mt-3 d-grid">
                    <input
                        type="submit"
                        value="Agregar"
                        className="btn btn-primary px-4 text-white fw-bold"
                    />
                    </div>
                </form>
                </div>
            </div>
            </section>
    ):
    (
        <p className="text-center mt-5 fw-bold">No hay detalle del producto que esta buscando</p>
    )   
  )
}

export default ItemListDetail
