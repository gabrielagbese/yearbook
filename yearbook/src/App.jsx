import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Carting from './components/Carting'
import Mun from './components/Mun'
import Athletics from './components/Athletics'

import Desktop from './components/Desktop'
import Mobile from './components/Mobile'


gsap.registerPlugin(ScrollTrigger);

const HorizontalSlider = () => {
	
	const [isSmallViewport, setIsSmallViewport] = useState(window.innerWidth < 1080);

	useEffect(() => {
		const handleResize = () => {
		  setIsSmallViewport(window.innerWidth < 1080);
		};
	
		window.addEventListener('resize', handleResize);
	
		return () => {
		  window.removeEventListener('resize', handleResize);
		};
	  }, []);
	

	return (
		<div>
			{isSmallViewport ? <Mobile /> : <Desktop />}
		</div>
	);
};

export default HorizontalSlider;
