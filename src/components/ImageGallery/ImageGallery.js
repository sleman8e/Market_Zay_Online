import React from "react";

const ImageGallery = ({ products }) => {
    return (
        <div className="container-fluid" style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map(product => (
                    <div key={product.id} className="col">
                        <div className="card border-0 shadow-sm rounded h-100 d-flex flex-column" style={{ backgroundColor: "#ffffff" }}>
                            <div style={{ height: "200px", overflow: "hidden", borderRadius: "10px 10px 0 0" }}>
                                <img src={product.image} className="card-img-top rounded-top" alt={product.title} style={{ objectFit: "contain", width: "100%", height: "100%", objectPosition: "50% 50%" }} />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-center mb-auto" style={{ fontSize: "1.2rem" }}>{product.title}</h5>
                                {/*<p className="card-text text-muted" style={{ fontSize: "0.9rem", marginBottom: "15px" }}>{product.description}</p>*/}
                                <div className="d-flex justify-content-between align-items-center mt-auto">
                                    <p className="card-text text-success fw-bold" style={{ fontSize: "1rem" }}>${product.price}</p>
                                    <button className="btn btn-outline-success" style={{ fontSize: "0.9rem" }}>Add to Cart</button> {/* Changed btn-outline-primary to btn-outline-success */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
