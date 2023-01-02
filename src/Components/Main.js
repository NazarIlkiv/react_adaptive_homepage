import React from "react";
import "../App.css";
import mi01 from "./img/img-main/01.jpg";
import mi02 from "./img/img-main/02.jpg";
import mi03 from "./img/img-main/03.jpg";
import mi04 from "./img/img-main/04.jpg";
import cli01 from "./img/clients/01.svg";
import cli02 from "./img/clients/02.svg";
import cli03 from "./img/clients/03.svg";
import cli04 from "./img/clients/04.svg";
import cli05 from "./img/clients/05.svg";
import serv01 from "./img/services/01.svg";
import serv02 from "./img/services/02.svg";
import serv03 from "./img/services/03.svg";
import serv04 from "./img/services/04.svg";
import why01 from "./img/why/01.jpg";
import why02 from "./img/why/02.jpg";
import adv01 from "./img/advantages/image.jpg";
import test01 from "./img/testimonial/avatars/01.jpg";
import test02 from "./img/testimonial/avatars/02.jpg";
import test03 from "./img/testimonial/avatars/03.jpg";
import rating from "./img/testimonial/rating.svg";
import bg01 from "./img/blog/01.jpg";
import bg02 from "./img/blog/02.jpg";
import bg03 from "./img/blog/03.jpg";

function Main() {
  return (
    <>
      <section className="page__main main">
        <div className="main__container ">
          <div className="main__content">
            <div className="main-header header-main">
              <h1 className="header-main__title">
                Marketing solutions that grow your business.
              </h1>
              <div className="header-main__text text text_big">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor.
                </p>
              </div>
              <div className="header-main__actions">
                <a href="" className="header-main__button button">
                  Our services
                </a>
                <a href="" className="header-main__button button button_dark">
                  Contact us
                </a>
              </div>
            </div>
          </div>
          <div className="main-images images-main">
            <div className="images-main__column">
              <div className="images-main__item images-main__item_1">
                <img src={mi01} alt="mi01"></img>
              </div>
              <div className="images-main__item images-main__item_2">
                <img src={mi02} alt="mi02"></img>
              </div>
            </div>
            <div className="images-main__column">
              <div className="images-main__item images-main__item_3">
                <img src={mi03} alt="mi03"></img>
              </div>
              <div className="images-main__item images-main__item_4">
                <img src={mi04} alt="mi04"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page__clients clients">
        <div className="clients__container">
          <h2 className="clients__title">
            TRUSTED BY startups and large enterprises
          </h2>
          <div className="clients__items">
            <div className="clients__item">
              <img src={cli01}></img>
            </div>
            <div className="clients__item">
              <img src={cli02}></img>
            </div>
            <div className="clients__item">
              <img src={cli03}></img>
            </div>
            <div className="clients__item">
              <img src={cli04}></img>
            </div>
            <div className="clients__item">
              <img src={cli05}></img>
            </div>
          </div>
        </div>
      </section>
      <sections className="page__services services">
        <div className="services__container">
          <div className="services__content">
            <div className="services__header header-main">
              <a href="#" className="header-main__label">
                Services
              </a>
              <h2 className="header-main__title">Services we offer</h2>
              <div className="header-main__text text text_big">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor.
                </p>
              </div>
              <div className="header-main__actions">
                <a href="" className="header-main__button button">
                  All services
                </a>
              </div>
            </div>
          </div>
          <div className="services__items">
            <div className="services__column">
              <article className="services__item item-service">
                <div className="item-service__icon">
                  <img src={serv01}></img>
                </div>
                <h4 className="item-service__title">Social Media Marketing</h4>
                <div className="item-service__text text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  lobortis arcu enim urna adipiscing praesent velit.
                </div>
              </article>
              <article className="services__item item-service">
                <div className="item-service__icon">
                  <img src={serv02}></img>
                </div>
                <h4 className="item-service__title">Email Marketing</h4>
                <div className="item-service__text text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  lobortis arcu enim urna adipiscing praesent velit.
                </div>
              </article>
            </div>
            <div className="services__column">
              <article className="services__item item-service">
                <div className="item-service__icon">
                  <img src={serv03}></img>
                </div>
                <h4 className="item-service__title">Paid Advertising</h4>
                <div className="item-service__text text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  lobortis arcu enim urna adipiscing praesent velit.
                </div>
              </article>
              <article className="services__item item-service">
                <div className="item-service__icon">
                  <img src={serv04}></img>
                </div>
                <h4 className="item-service__title">SEO Optimization</h4>
                <div className="item-service__text text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  lobortis arcu enim urna adipiscing praesent velit.
                </div>
              </article>
            </div>
          </div>
        </div>
      </sections>
      <sections className="page__why why">
        <div className="why__container">
          <div className="why__images images-why">
            <div className="images-why__item images-why__item_1">
              <img src={why01} />
            </div>
            <div className="images-why__item images-why__item_2">
              <img src={why02} />
            </div>
          </div>
          <div className="why__content">
            <div className="why__header header-main">
              <a href="#" className="header-main__label">
                why choose us
              </a>
              <h2 className="header-main__title">
                We help great brands scale with content marketing.
              </h2>
              <div className="header-main__text text text_big">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor.
                </p>
              </div>
              <ul className="header-main__list">
                <li>This is some text inside of a div.</li>
                <li>This is some text inside of a div.</li>
                <li>This is some text inside of a div.</li>
                <li>This is some text inside of a div.</li>
              </ul>
            </div>
          </div>
        </div>
      </sections>
      <sections className="page__advantages advantages">
        <div className="advantages__container">
          <div className="advantages__items">
            <article className="advantages__item">
              <h4 className="advantages__value">1.2M+</h4>
              <div className="advantages__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim.
              </div>
            </article>
            <article className="advantages__item">
              <h4 className="advantages__value">98%</h4>
              <div className="advantages__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim.
              </div>
            </article>
            <article className="advantages__item">
              <h4 className="advantages__value">3.4B</h4>
              <div className="advantages__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim.
              </div>
            </article>
            <article className="advantages__item">
              <h4 className="advantages__value">10+</h4>
              <div className="advantages__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim.
              </div>
            </article>
          </div>
          <div className="advantages__image">
            <img src={adv01} />
          </div>
        </div>
      </sections>
      <sections className="page__testimonials testimonials">
        <div className="testimonials__container">
          <div className="testimonials__header header-main">
            <a href="#" className="header-main__label">
              testimonials
            </a>
            <h2 className="header-main__title">See what our clients say</h2>
            <div className="header-main__body">
              <div className="header-main__text text text_big">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero.
                </p>
              </div>
              <div className="header-main__actions">
                <a href="#" className="header-main__button button">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
          <div className="testimonials__items">
            <article className="testimonials__item item-testimonial">
              <div className="item-testimonial__user user-testimonial">
                <div className="user-testimonial__avatar user-testimonial__avatar_1">
                  <img src={test01} alt="avatars" />
                </div>
                <div className="user-testimonial__body">
                  <div className="user-testimonial__title">John Doe</div>
                  <div className="user-testimonial__company">Company Name</div>
                </div>
              </div>
              <h4 className="item-testimonial__title">
                "I recommend this agency"
              </h4>
              <div className="item-testimonial__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero.
                </p>
              </div>
              <div className="item-testimonial__rating">
                <img src={rating} alt="rating" />
              </div>
            </article>
            <article className="testimonials__item item-testimonial">
              <div className="item-testimonial__user user-testimonial">
                <div className="user-testimonial__avatar user-testimonial__avatar_2">
                  <img src={test02} alt="avatars" />
                </div>
                <div className="user-testimonial__body">
                  <div className="user-testimonial__title">Alice Smith</div>
                  <div className="user-testimonial__company">Company Name</div>
                </div>
              </div>
              <h4 className="item-testimonial__title">
                "The support is awesome"
              </h4>
              <div className="item-testimonial__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero.
                </p>
              </div>
              <div className="item-testimonial__rating">
                <img src={rating} alt="rating" />
              </div>
            </article>
            <article className="testimonials__item item-testimonial">
              <div className="item-testimonial__user user-testimonial">
                <div className="user-testimonial__avatar user-testimonial__avatar_3">
                  <img src={test03} alt="avatars" />
                </div>
                <div className="user-testimonial__body">
                  <div className="user-testimonial__title">Sophia Miller</div>
                  <div className="user-testimonial__company">Company Name</div>
                </div>
              </div>
              <h4 className="item-testimonial__title">
                “A game changer for us”
              </h4>
              <div className="item-testimonial__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero.
                </p>
              </div>
              <div className="item-testimonial__rating">
                <img src={rating} alt="rating" />
              </div>
            </article>
          </div>
        </div>
      </sections>
      <section className="page__blog blog">
        <div className="blog__container">
          <div className="blog__header header-main">
            <a href="#" className="header-main__label">
              Blog
            </a>
            <h2 className="header-main__title">
              Read our <br />
              articles & news
            </h2>
            <div className="header-main__body">
              <div className="header-main__text text text_big">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero.
                </p>
              </div>
              <div className="header-main__actions">
                <a href="#" className="header-main__button button">
                  All Posts
                </a>
              </div>
            </div>
          </div>
          <div className="blog__items">
            <article className="blog__item item-blog">
              <div className="item-blog__header">
                <a href="#" className="item-blog__image">
                  <img src={bg01} alt="image" />
                </a>
                <a href="#" className="item-blog__category">
                  Social Media
                </a>
              </div>
              <div className="item-blog__body">
                <div className="item-blog__date">August 28, 2022</div>
                <h4 className="item-blog__title">
                  <a href="#" className="item-blog__link-title">
                    How to Use Social Proof in Marketing
                  </a>
                </h4>
                <div className="item-blog__text text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    lobortis arcu enim urna adipiscing praesent velit viverra
                    sit semper lorem.
                  </p>
                </div>
                <a href="#" className="item-blog__link">
                  Read now
                </a>
              </div>
            </article>
            <article className="blog__item item-blog">
              <div className="item-blog__header">
                <a href="#" className="item-blog__image">
                  <img src={bg02} alt="image" />
                </a>
                <a href="#" className="item-blog__category">
                  Strategy
                </a>
              </div>
              <div className="item-blog__body">
                <div className="item-blog__date">August 28, 2022</div>
                <h4 className="item-blog__title">
                  <a href="#" className="item-blog__link-title">
                    Make a great first impression with these titles
                  </a>
                </h4>
                <div className="item-blog__text text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    lobortis arcu enim urna adipiscing praesent velit viverra
                    sit semper lorem.
                  </p>
                </div>
                <a href="#" className="item-blog__link">
                  Read now
                </a>
              </div>
            </article>
            <article className="blog__item item-blog">
              <div className="item-blog__header">
                <a href="#" className="item-blog__image">
                  <img src={bg03} alt="image" />
                </a>
                <a href="#" className="item-blog__category">
                  Strategy
                </a>
              </div>
              <div className="item-blog__body">
                <div className="item-blog__date">August 28, 2022</div>
                <h4 className="item-blog__title">
                  <a href="#" className="item-blog__link-title">
                    How to Grab Your Reader’s Attention
                  </a>
                </h4>
                <div className="item-blog__text text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    lobortis arcu enim urna adipiscing praesent velit viverra
                    sit semper lorem.
                  </p>
                </div>
                <a href="#" className="item-blog__link">
                  Read now
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <sections className="page__start start">
        <div className="start__container">
          <div className="start__body">
            <div className="start__column">
              <h2 className="start__title">
                Ready to start scaling
                <br /> your business now?
              </h2>
              <div className="start__text text">
                <p>
                  Lorem ipsum dolor sit am consectetur adipiscing varius enim in
                  eros.
                </p>
              </div>
            </div>
            <div className="start__column">
              <div className="start__actions">
                <a href="#" className="start__button button">
                  Our services
                </a>
                <a href="#" className="start__button button button_dark">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </sections>
    </>
  );
}

export default Main;
