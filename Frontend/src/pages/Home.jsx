// THINGS TO ADD
// 1 : A banner with multiple imaeg - Use swiper slider libray
// 2 : A slider , where we list categories or Main products - use swiper slider
// 3 : Featured product slider - use swiper slider
// MAKE ALL OF THIS THINGS AS A DIFFERENT COMPONENT AND CALL HERE

import MainBanner from "../components/MainBanner";

const Home = () => {
  return (
    <section className="">
      <MainBanner />
    </section>
  );
};

export default Home;
