import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="banner">
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div className="banner-data">
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=1200" />
          <div className="legends">
            Every booking includes free protection from Host cancellations,
            listing inaccuracies, and other issues like trouble checking in.
            <button className="btn btn-outline-warning">
              <Link href="/search?purpose=for-sale" passHref>
                Exploure Buying House
              </Link>
            </button>
          </div>
        </div>
        <div className="banner-data">
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-29919648/original/38def551-c7d8-4731-8d86-ff57f7f10bc2.jpeg?im_w=1200" />
          <div className="legends">
            Our Place has a classic and contemporay feel to it. Relaxing
            lighgthing once we do not like ceilling lights. Its cozy and
            spacious. The beedrooms have a very good size and big storage
            closets.
            <button className="btn btn-outline-warning">
              <Link href="/search?purpose=for-sale" passHref>
                Exploure Buying House
              </Link>
            </button>
          </div>
        </div>
        <div className="banner-data">
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-45076629/original/0d4e80ac-b1b4-44d1-ab2f-10c67c1e8e2a.jpeg?im_w=1200" />
          <div className="legends">
            Our guests have the unique opportunity to experience the beautiful
            scenery over the tropical coast of Zanzibar through the same windy
            windows that the Arab Princess Sayyida Salme once enjoyed.
            <button className="btn btn-outline-warning">
              <Link href="/search?purpose=for-sale" passHref>
                Exploure Buying House
              </Link>
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
