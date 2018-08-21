import React, { Component } from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="banner"></div>
                <div className="post_detail">
                    <h2>¿Qué es Design Thinking?</h2>
                    <div className="box_autor">
                        <div className="circle">
                            <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?_nc_cat=0&oh=70e475620e1a2b8deed4f433da9baaae&oe=5C035AB1" alt=""/>
                        </div>
                        <div className="autor">
                            <h4>Brenda González Ortega</h4>
                            <p>TA en Ironhack</p>
                        </div>
                    </div>
                    <p>
                        Design Thinking, en su esencia, es un protocolo para
                        resolver problemas complejos y descubrir nuevas
                        oportunidades, mediante el diseño de soluciones deseables
                        para clientes / usuarios.
                    </p>
                    <p>
                        No se limita a experiencias digitales, es una metodología
                        que se puede usar para resolver cualquier problema, y
                        ​​se ha adoptado en organizaciones de una serie de industrias
                        para abordar los problemas más importantes (tan grandes
                        como la pobreza y el calentamiento global) desde un punto
                        de vista innovador - ya que permite la máxima creatividad
                        y evita altos costos de producción.
                    </p>
                    <p className="quote">&quot;

                        Design Thinking es un proceso profundamente humano
                        que aprovecha las habilidades que tenemos pero que pasa
                        desapercibido por las prácticas más convencionales de
                        resolución de problemas. Se basa en nuestra capacidad
                        de ser intuitivos, reconocer patrones y construir ideas
                        que sean emocionalmente significativas además de
                        funcionales.&quot;

                        - Ideo
                    </p>
                    <h3>Orígenes del pensamiento de diseño</h3>
                    <p>

                        El pensamiento de diseño tiene sus raíces en el método
                        científico (que comienza estableciendo una hipótesis
                        y luego, a través de un mecanismo de retroalimentación,
                        continúa iterativamente para formar un modelo o teoría),
                        y luego sus orígenes pueden remontarse al Renacimiento.
                    </p>
                    <p>
                        Sin embargo, en la historia moderna, la idea del
                        pensamiento de diseño nació en los años 60, pero
                        David M. Kelley la adaptó a los negocios a finales
                        de los 80 cuando trabajaba en la Universidad de Stanford
                        y su empresa IDEO la popularizó en 1991.
                    </p><p>
                        Kelley también fundó el Hasso Plattner Institute of Design,
                    el instituto de pensamiento de diseño de la Universidad
                    de Stanford, famoso en todo el mundo como "the d.school".
                </p>
                    <h3>La metodología Design Thinking
                    </h3>
                    <p>
                    El pensamiento de diseño sugiere que para crear productos o ideas innovadores y valiosos, debe seguir 5 pasos:
                </p>
                    <p><strong>1. Empatice: </strong>
                        la innovación centrada en el ser humano comienza por desarrollar una comprensión de las necesidades no satisfechas o no articuladas de los clientes o los usuarios. En esta fase, el objetivo es entender para quién está diseñando. Puede hacerlo hablando con usuarios potenciales usando técnicas de entrevista, observándolos usando técnicas etnográficas o desempeñando su función por un período de tiempo.
                    En el pensamiento de diseño, la observación ocupa un lugar central. La observación puede discernir qué es lo que las personas realmente hacen en lugar de lo que se les dice que hacen.
                </p>
                    <p>  <strong>2. Definir: </strong>
                    sintetice sus hallazgos y defina un enunciado del problema a partir de ese trabajo de empatía, centrándose en el punto de vista del usuario.
                </p>
                    <p>
                        <strong>3. Ideación: </strong>  use técnicas de lluvia de ideas para generar muchas ideas para resolver el problema. El objetivo es llegar a tantos como sea posible para fomentar la innovación. A menudo, la primera idea es demasiado genérica y no es realmente innovadora.
                </p>
                    <p>
                        <strong>4. Prototipo:</strong>  después de que se le ocurra una "buena" idea, debe validarla. La forma más sencilla de hacerlo es construir un prototipo. No tiene que ser de alta fidelidad. Un prototipo debe ilustrar su idea de una manera que pueda probarla con las personas para ver si funciona. El punto importante aquí es crear algo concreto con el que las personas puedan interactuar y criticar, en lugar de simplemente darle retroalimentación sobre una idea.
                </p>
                    <p>
                        <strong>5. Prueba: </strong>  ponga sus soluciones conceptuales en frente de las personas para ver qué funciona y qué no, de modo que pueda usar los comentarios para refinarlo.
                </p>
                    <img src="http://longevity3.stanford.edu/designchallenge/files/2013/09/hex_design-1.jpg" alt=""/>

                <h3>Un proceso iterativo</h3>
                <p>Es importante notar que aunque este método es un proceso lineal, también es iterativo.</p>
                <p className="quote">&quot; El diseño iterativo es una metodología de diseño basada en un proceso cíclico de creación de prototipos, pruebas, análisis y refinación de un producto o proceso. En función de los resultados de las pruebas de la iteración más reciente de un diseño, se realizan cambios y mejoras. Este proceso está destinado a mejorar en última instancia la calidad y la funcionalidad de un diseño
                    &quot; Wikipedia</p>
                <p>El diseño iterativo es una forma de enfrentar la realidad de las necesidades y comportamientos impredecibles de los usuarios que pueden conducir a cambios radicales y fundamentales en un diseño. Las pruebas de usuario a menudo muestran que incluso las ideas cuidadosamente evaluadas serán inadecuadas cuando se enfrenten a una prueba de usuario.</p>
                    <img src="https://2.bp.blogspot.com/-rzpPjeCjxLc/WNsAmpqyDKI/AAAAAAAABhU/gyY_h8wnXgIfb24eHxGVnbd6nAvEsimJwCLcB/w1200-h630-p-k-no-nu/design-thinking-map-1otf7yw.jpg" alt=""/>
                <p>La premisa básica de este método iterativo es "fallar rápido". En otras palabras, el objetivo es probar el concepto lo más rápido posible poniéndolo frente a los usuarios para encontrar lo que funciona y lo que no funciona, y refinar el concepto en consecuencia.
                </p>
                    <p>
                    Como el proceso es rápido y económico, puede repetir el prototipo en función de los comentarios que reciba durante la fase de prueba, y seguir el ciclo tantas veces como sea necesario para alcanzar el resultado deseado.
                </p>
                    <hr className="divider"/>
                    <h4>¿Te gusto este post? Síguenos en: <FontAwesome name="facebook-f"/><FontAwesome name="meetup"/> <FontAwesome name="instagram"/> </h4>
                    <span>O inscribete ya al próximo bootcamp de UX/UI en Ironhack</span>

                    <button className="btn_saber">Saber más</button>
                    <button className="btn_aplicar">Aplicar</button>

                </div>
            </div>
        );
    }
}

export default Home;