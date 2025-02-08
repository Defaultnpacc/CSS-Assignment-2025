'use client';

import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const OwlCarouselClient = (props) => {
    return <OwlCarousel {...props} />;
};

export default OwlCarouselClient;
