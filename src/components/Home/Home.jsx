

import { Button } from "../Button";
import { CardContainer } from '../CardContainer';
import global from '../../utils/global.json';
import { Reviews } from '../Reviews/Reviews';
import { BiHeart } from "react-icons/bi";


export const Home = () => {
    return (
        <main>

            <section className='hero__curve'>
                <img
                    className='hero__curve'
                    src="https://res.cloudinary.com/ferjen/image/upload/v1683603824/yeah_stretching/icons/home-banner_wuqq1o.png"
                    alt="Imagen de curvas rosadas"
                />
            </section>

            <section className='hero__container'>

                <article className='hero__title animate__animated animate__fadeInLeft'>
                    <h2>Tu cuerpo es el único lugar donde se puede vivir, <span className='text__highlight'>cuida de él.</span></h2>

                    <img
                        className='hero__icon-arrow'
                        src="https://res.cloudinary.com/ferjen/image/upload/v1681962589/yeah_stretching/icons/ys-icon-down-arrow_bcbfv1.svg"
                        alt="Decorativo icono con flecha" />
                    <h2>Hola!</h2>
                </article>

                <article className='hero__title--second animate__animated animate__fadeInLeft'>
                    <h2>Soy Yami Sayag</h2>
                    <h3 className='mb-1 mt-1'>Profe y creadora de Yeah Stretching</h3>
                    <h4>Yeah comenzó en Marzo del 2021, surge como una alternativa online para <span
                        className='hero__title--b'
                    > seguir activos y en movimiento, cuidando la salud de nuestro cuerpo y nuestra mente</span>, desde el hogar.
                    </h4>
                    <h5 className='text__highlight text-bold mt-1 mb-2'>¡Todos podemos y debemos hacer ejercicio!</h5>
                    <Button
                        className='btn-primary'
                        type='button'
                        aria-label='Obtén más información sobre mí'
                        title='Haz clic aquí para conocer más acerca de mí'
                    >
                        Conocé más sobre mi &gt;
                    </Button>

                </article>

                {/* <div className='hero__title animate__animated animate__fadeInLeft'>

                </div> */}
            </section>

            <div></div>

            <section className='services__container pt-2 mt-3'>
                <h2 className='services__title  animate__animated animate__fadeInUp'>
                    <span className='text__highlight'>{`Servicios que podés elegir :)`}</span>
                </h2>
                <h5 className='mb-3'>Súmate a nuevas experiencias</h5>
                <div>
                    <CardContainer global={global} />
                </div>
            </section>

            <section className='empresa__container mt-4 mb-3'>

                <div className='empresa__text ps-2 mb-3 mt-2'>
                    <h2 className='mt-2 mb-1'>Si tenés una Empresa,</h2>
                    <p className='mb-2'>Invertí en la salud y bienestar corporativo para permitir que tu capital humano y empresarial se vea mejorado</p>
                    <Button
                        className='btn-primary'
                    >
                        Quiero saber más &gt;
                    </Button>
                </div>

                <div className='empresa__img'>
                    <img
                        className='empresa__img'
                        src="https://res.cloudinary.com/ferjen/image/upload/v1683589683/yeah_stretching/clases/4-Stretching_de_oficina_t3aw4j.jpg"
                        alt="Mujer sentada en silla en la oficina, estirando los brazos, haciendo stretching"
                    />
                </div>

            </section>

            <section className='reviews__container mt-4'>

                <div>
                    <div className='reviews-text__container'>
                        <h2 className=' text__highlight mt-1 mb-2'>
                            Reviews&nbsp;
                            <span
                                className='text__highlight--icon'>
                                <BiHeart />
                            </span>&nbsp;
                        </h2>
                        <p className='reviews__text mb-2'>Las opiniones, valoraciones o testimonios de nuestros clientes nos importan ¡y mucho!</p>
                    </div>

                    <div className='reviews__container'>
                        <Reviews global={global} />
                    </div>

                </div>
                <button className='btn-secondary'>
                    <h3>Cuando te falte motivación,</h3>
                    <h3 className='text__highlight--white'>
                        que te sobre disciplina</h3>
                </button>

            </section>

        </main>
    )
};


