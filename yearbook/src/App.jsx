import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { gsap } from 'gsap';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const [sectionStaged, setSectionStaged] = useState(false);

	const nurseryHeadRef = useRef(null);
	const primaryHeadRef = useRef(null);
	const secondaryHeadRef = useRef(null);
	const bodyRef = useRef(null);

	let mm = gsap.matchMedia();

	const stageHero = () => {
		mm.add('(min-width: 960px)', () => {
			gsap.to(secondaryHeadRef.current, { duration: 1, x: '0%', ease: 'power3.easeIn' });
			gsap.to(primaryHeadRef.current, { duration: 1, x: '0%', ease: 'power3.easeIn' });
			gsap.to(nurseryHeadRef.current, { duration: 1, x: '0%', ease: 'power3.easeIn' });
			gsap.to(bodyRef.current, { duration: 1, x: '0%', ease: 'power3.easeIn' });
		});

		mm.add('(max-width: 959px)', () => {
			gsap.to(secondaryHeadRef.current, { duration: 1, y: '0%', ease: 'power3.easeIn' });
			gsap.to(primaryHeadRef.current, { duration: 1, y: '0%', ease: 'power3.easeIn' });
			gsap.to(nurseryHeadRef.current, { duration: 1, y: '0%', ease: 'power3.easeIn' });
			gsap.to(bodyRef.current, { duration: 1, y: '0%', ease: 'power3.easeIn' });
		});
		setSectionStaged(true);
	}

	const stageSecondary = () => {
		secondaryHeadRef.current.style.zIndex = "3"
		primaryHeadRef.current.style.zIndex = "2"
		nurseryHeadRef.current.style.zIndex = "2"
		mm.add('(min-width: 960px)', () => {
			gsap.to(secondaryHeadRef.current, { duration: 1, x: '-100%', ease: 'power3.easeIn' });
			gsap.to(primaryHeadRef.current, { duration: 1, x: '-200%', ease: 'power3.easeIn' });
			gsap.to(nurseryHeadRef.current, { duration: 1, x: '-300%', ease: 'power3.easeIn' });
			gsap.to(bodyRef.current, { duration: 1, x: '-100%', ease: 'power3.easeIn' });
		});

		mm.add('(max-width: 959px)', () => {
			gsap.to(secondaryHeadRef.current, { duration: 1, y: '-300%', ease: 'power3.easeIn' });
			gsap.to(primaryHeadRef.current, { duration: 1, y: '-400%', ease: 'power3.easeIn' });
			gsap.to(nurseryHeadRef.current, { duration: 1, y: '-500%', ease: 'power3.easeIn' });
			gsap.to(bodyRef.current, { duration: 1, y: '-100%', ease: 'power3.easeIn' });
		});
		setSectionStaged(true);
	};

	const stagePrimary = () => {
		secondaryHeadRef.current.style.zIndex = "2"
		primaryHeadRef.current.style.zIndex = "3"
		nurseryHeadRef.current.style.zIndex = "2"
		mm.add('(min-width: 960px)', () => {
			gsap.to(secondaryHeadRef.current, { duration: 1, x: '-100%', ease: 'power3.easeIn' });
			gsap.to(primaryHeadRef.current, { duration: 1, x: '-200%', ease: 'power3.easeIn' });
			gsap.to(nurseryHeadRef.current, { duration: 1, x: '-300%', ease: 'power3.easeIn' });
			gsap.to(bodyRef.current, { duration: 1, x: '-100%', ease: 'power3.easeIn' });
		});

		mm.add('(max-width: 959px)', () => {
			gsap.to(secondaryHeadRef.current, { duration: 1, y: '-300%', ease: 'power3.easeIn' });
			gsap.to(primaryHeadRef.current, { duration: 1, y: '-400%', ease: 'power3.easeIn' });
			gsap.to(nurseryHeadRef.current, { duration: 1, y: '-500%', ease: 'power3.easeIn' });
			gsap.to(bodyRef.current, { duration: 1, y: '-100%', ease: 'power3.easeIn' });
		});
		setSectionStaged(true);
	};

	const stageNursery = () => {
		secondaryHeadRef.current.style.zIndex = "2"
		primaryHeadRef.current.style.zIndex = "2"
		nurseryHeadRef.current.style.zIndex = "3"
		mm.add('(min-width: 960px)', () => {
			gsap.to(secondaryHeadRef.current, { duration: 1, x: '-100%', ease: 'power3.easeIn' });
			gsap.to(primaryHeadRef.current, { duration: 1, x: '-200%', ease: 'power3.easeIn' });
			gsap.to(nurseryHeadRef.current, { duration: 1, x: '-300%', ease: 'power3.easeIn' });
			gsap.to(bodyRef.current, { duration: 1, x: '-100%', ease: 'power3.easeIn' });
		});

		mm.add('(max-width: 959px)', () => {
			gsap.to(secondaryHeadRef.current, { duration: 1, y: '-300%', ease: 'power3.easeIn' });
			gsap.to(primaryHeadRef.current, { duration: 1, y: '-400%', ease: 'power3.easeIn' });
			gsap.to(nurseryHeadRef.current, { duration: 1, y: '-500%', ease: 'power3.easeIn' });
			gsap.to(bodyRef.current, { duration: 1, y: '-100%', ease: 'power3.easeIn' });
		});
		setSectionStaged(true);
	};

	return (
		<div className='main-wrapper'>
			<div className='nav' onClick={sectionStaged? stageHero : {}}>n</div>
			<div className='hero'>hero</div>
			<div className='secondary-head section-head' ref={secondaryHeadRef} onClick={stageSecondary}>
				<p className='head-name'>Secondary</p>
				<div className='head-image'></div>
			</div>
			<div className='primary-head section-head' ref={primaryHeadRef} >
				<p className='head-name'>Primary</p>
				<div className='head-image'></div>
			</div>
			<div className='nursery-head section-head' ref={nurseryHeadRef} >
				<p className='head-name'>Nursery</p>
				<div className='head-image'></div>
			</div>
			<div className='section-body' ref={bodyRef}>
				<div className='student'>student</div>
				<div className='student'>student</div>
				<div className='student'>student</div>
				<div className='student'>student</div>
				<div className='student'>student</div>
				<div className='student'>student</div>
				<div className='student'>student</div>
				<div className='student'>student</div>
				<div className='student'>student</div>
			</div>
		</div>
	);
}

export default App;
