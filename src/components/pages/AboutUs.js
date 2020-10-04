import React from "react";

export const AboutUs = () => {
    return (
        <div>
            <div
                id="carouselExampleSlidesOnly"
                className="carousel slide animated fadeIn fast"
                data-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={'./assets/img/quienes-somos.png'}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 column-image">
                        <img src={'./assets/img/face1.jpg'} alt="error"/>
                        <img src={'./assets/img/face2.jpg'} alt="error"/>
                    </div>
                    <div className="col-12 col-lg-8">
                        <article className="block1">
                            <header>
                                <h2>Historia</h2>
                            </header>
                            <p>
                                Vegasaurio surge por amor. A nuestra familia, amigos y personas
                                importantes en nuestras vidas; pero también al ser humano, a la
                                buena comida y a los atracones también; a los animales, a la
                                Pachamama y a todo lo que es. En cada plato entregamos nuestro
                                compromiso con el universo a hacer del planeta un lugar mejor,
                                creemos firmemente en esto, y eso nos ha dado la fuerza de hacer
                                realidad este negocio y estamos seguros que nos hará llevarlo mucho
                                más allá de donde esta, nuestra querida ciudad que nos vio nacer y
                                crecer, en un principio como dos y ahora como tres.
                            </p>
                            <p>
                                En un principio, trabajábamos en la elaboración de productos veganos
                                artesanales de alta calidad, hamburguesas de lentejas, fréjol y
                                quinoa; salchichas de estilo alemán, y salchichas de tipo chorizo,
                                desarrollamos recetas de múltiples clases de quesos y otros
                                embutidos y fiambres también en base a vegetales, al igual que los
                                clásicos seitán y tofu pero en versiones de la casa.
                            </p>
                            <p>
                                El proyecto fue más allá de lo que se pensó y nos encontramos
                                desarrollando a la par un lugar de ensueño, donde naturaleza, artes
                                plásticas y gastronomía de primera puedan coexistir. Lounge del
                                Brujo lo hemos llamado pues cada creación y detalle nos han
                                significado pequeñas dosis de magia y brujería, como todo arte, para
                                su elaboración.
                            </p>
                            <p>
                                Actualmente somos un Mini-Market vegano en el que puedas encontrar
                                todo lo que necesitas para tener una experiencia a base de plantas
                                en tu día a día, y en lo más cotidiano, desde productos básicos de
                                alimentación como también de limpieza y cuidado personal. Comer y
                                vivir vegano puede ser muy fácil aquí con nosotros.
                            </p>
                            <section>
                                <header>
                                    <h3>
                                        Te invitamos a que des un salto hacia el universo de
                                        posibilidades, que descubras que el mundo es mucho más de lo que
                                        te han dicho que es y te aventures a vivir y soñar, libre de
                                        violencia y crueldad.
                                    </h3>
                                </header>
                            </section>
                        </article>
                    </div>
                </div>
            </div>
        </div>

    )
}
