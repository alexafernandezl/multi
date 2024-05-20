let carouselId = `
<ol class="carousel-indicators">
                                <li
                                    data-bs-target="#carouselId"
                                    data-bs-slide-to="0"
                                    class="active"
                                    aria-current="true"
                                    aria-label="First slide"
                                ></li>
                                <li
                                    data-bs-target="#carouselId"
                                    data-bs-slide-to="1"
                                    aria-label="Second slide"
                                ></li>
                                <li
                                    data-bs-target="#carouselId"
                                    data-bs-slide-to="2"
                                    aria-label="Third slide"
                                ></li>
                            </ol>
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active">
                                    <img
                                        src="img/billetera1.png"
                                        class="w-100 d-block"
                                        alt="First slide"
                                    />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h3>Carteras</h3>
                                       
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src="img/lentes2.png"
                                        class="w-100 d-block"
                                        alt="Second slide"
                                    />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h3>Lentes</h3>
                                        
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src="img/faja.png"
                                        class="w-100 d-block"
                                        alt="Third slide"
                                    />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h3>Fajas</h3>
                                    </div>
                                </div>
                            </div>
                            <button
                                class="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselId"
                                data-bs-slide="prev"
                            >
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button
                                class="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselId"
                                data-bs-slide="next"
                            >
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
`;
document.getElementById("carouselId").innerHTML = carouselId;