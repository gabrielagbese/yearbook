import {React, useState, useRef, useEffect} from 'react'
import { gsap } from 'gsap'
import Carting from './Carting'
import Mun from './Mun'
import Athletics from './Athletics'
import ScrollTrigger from 'gsap/ScrollTrigger';

//gsap.registerPlugin(ScrollTrigger);

function Desktop() {
    const horizontalSlidersRef = useRef(null);
    const nextBlockRef = useRef(null);

    const [achievement, setAchievement] = useState(Carting);


    const cartRef = useRef(null)
    const munRef = useRef(null)
    const athRef = useRef(null)

    function toCarting() {
        setAchievement(Carting)
        cartRef.current.classList.add("rec-active")
        munRef.current.classList.remove("rec-active")
        athRef.current.classList.remove("rec-active")
    }
    function toMun() {
        setAchievement(Mun)
        cartRef.current.classList.remove("rec-active")
        munRef.current.classList.add("rec-active")
        athRef.current.classList.remove("rec-active")
    }
    function toAthletics() {
        setAchievement(Athletics)
        cartRef.current.classList.remove("rec-active")
        munRef.current.classList.remove("rec-active")
        athRef.current.classList.add("rec-active")
    }

    // useEffect(() => {
    // 	// Horizontal slider animation
    // 	const sections = gsap.utils.toArray('.slide');

    // 	gsap.to(sections, {
    // 		xPercent: -100 * (sections.length - 1),
    // 		ease: 'none',
    // 		scrollTrigger: {
    // 			trigger: '.horizontal-sliders',
    // 			pin: '.main',
    // 			pinSpacing: true,
    // 			scrub: 1,
    // 			end: '+=10000',
    // 		},
    // 	});



    // }, []);
    return (
        <div className='wrapper'>
			<div className='nav'></div>
			<div className="main">
				<div className='hero-desktop'>
					<div className='desktop-hero-text'><p>Lightway Academy Senior Class Of 2023</p></div>
					<div className='desktop-hero-carousel'>
						<div className='slider-col1'>
							<div className='reel1'>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
							</div>
							<div className='reel2'>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
							</div>
						</div>
						<div className='slider-col2'>
							<div className='reel1'>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
							</div>
							<div className='reel2'>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
								<div className='slider-image'></div>
							</div>
						</div>
					</div>
				</div>
				<div className='vertical-sliders'>
				<div className="slide">
						<div className='director-content'>
							<div className='director-col1'>
								<p className='dir-address'>Director's Address</p>
								<div className='dir-image'></div>
								<p className='dir-name'>Barr. &#40;Mrs&#41; Joyce Agbese, <br /> Executive Director of Lightway Academy</p>
							</div>
							<div className='director-col2'>
								<p>
									Dear graduates,
								</p>
								<p>
									As the school Director, it brings me immense joy and pride to stand before you today as you embark on this exciting new chapter of your lives. Congratulations to each and every one of you for reaching this significant milestone.
								</p>
								<p>Graduation marks the end of one journey and the beginning of another. As you step out into the world beyond these walls, I want to share a few thoughts with you.</p>
								<p>First and foremost, remember that success is not measured by comparing yourself to others. I know you’ve heard it before but let in sink in afresh that each of you is unique, with your own set of talents and passions. Embrace your individuality and remember that your path in life will be different from your peers. It's essential to focus on your personal growth and progress rather than getting lost in comparison.</p>
								<p>Tony Elumelu recently said, "I often tell my children that winning starts in their minds, rather than at the finish line. It begins each day till you achieve your goal. However, you must have self-discipline and robust time management skills to win. “
									Success is never accidental; it is the result of our deliberate efforts to achieve greatness. This quote reminds us that achievements come from dedication, hard work, and perseverance. No matter where you go or what you do, always give your best, and success will follow.</p>
								<p>Life is an unpredictable journey filled with challenges and opportunities. Embrace both, for they are the building blocks of growth. Embrace failure as a stepping stone to learning and improvement. Embrace success as a testament to your efforts and dedication.</p>
								<p>As you leave this institution and venture into the world, remember that learning doesn't end here. Be lifelong learners, continuously seeking knowledge, new skills, and fresh perspectives. Change is inevitable so embrace it and be adaptable, for it will open doors to unforeseen possibilities.</p>
								<p>We thank you dear parents for allowing us the privilege to help shape your children into great men and women.
									Congratulations once again graduating learners; may your future be filled with boundless success and happiness.
									We pray that the grace of the Almighty God will continue to keep us all.</p>
								<p>Thank you.</p>
							</div>
						</div>
						<div className='director-welcome'>Welcome.</div>
					</div>
				</div>
				<div className='slide principal-slide'>
						<div className='principal-side'>
							<p className='principal-title'>Principal's Advice</p>
							<div className='principal-image'></div>
							<p className='principal-name'>
								Mr David Latifu <br/>
								Principal, Lightway Academy
							</p>
						</div>
						<ol>
							<li> Stay focused and set clear goals: Decide what you want to achieve as you progress.
							</li>
							<li> Have a sense of purpose, be motivated, and make the most of your time.</li>
							<li>Manage your time effectively, by developing good time management skills to balance your academic workload, extracurricular activities, and personal life.
							</li>
							<li>Prioritize tasks, create a schedule, and avoid last-minute cramming to reduce stress. </li>
							<li>Build strong relationships with teachers and mentors.
							</li>
							<li>Have effective study habits.
							</li>
							<li>Embrace challenges and seek personal growth: Don't be afraid of failure or setbacks. Embrace challenges as opportunities for growth and learning.</li>
							<li> Push yourself out of your comfort zone, develop new skills, and discover your passions.</li>
						</ol>
					</div>
					<div className="slide headboy-slide">
						<div className='headboy-img'></div>
						<div className='headboy-text'>
							<p className='title'>Head Boy's Speech</p>
							<div className='text'>
								<p>Warm greetings to all, I would like to use this opportunity to appreciate and thank my God for without him I would not be here today, the Director, the Principal Vice Principals and the school management for all my years till this very moment in this prestigious and amazing school. </p>
								<p>Okay, let's get into it. I would like to say that this is the beginning to a next and new level of life. The things we did before and the things we do now are going to influence what we do in the future, I would like to quote myself on that. I came to this school in the year 2012 as a primary 2 pupil, that is about eleven years in this school, and ever since I can remember I was always told be my parents and teachers to take my studies seriously. Being a little child of zero experience then, I always thought they bothered me a lot and I always wanted to just play.</p>
								<p>Everything about this school, most especially the teachers has shaped me as a person being here for most of my life in a positive and strong way.  To my friends, I am grateful for your support. Soluchukwu my rival and best friend who pushed me to go far in my academics, Harry who is like a brother to me, Jedidiah the unchanging who always cares no matter what and who'd always give me a hug, Gaza my rival the most encouraging friend who pushed me to go farther in sports with his strong character and personality, the beautiful Tehilah, my coworker who is hardworking, Flourish who always understood me, Clinton, Chigbo and Oty who made my days in Lightway fun and full of laughter, Lauraine who is work-shy but exceptionally smart and intelligent, Duchess, the nice and friendly one, Pearl the quiet and cheerful one, the lovely Elizabeth who I grew up with since Js1, Laila, Precious, Daniella and Nneoma who are always kind to me, who are one of a kind. </p>
								<p>I have always entered the school gate with a feeling of being cared for as if I were with family and I will cherish all those memories and experiences. Today I will leave the school gate in finality but I will leave as a grown man who has left his family to become someone better and a success. To the Director and School Management, it truly is an honour to finish as the head boy of this school! Farewell! Sayonara!</p>
							</div>
						</div>
					</div>
					<div className='slide headgirl-slide'>
						<div className='headgirl-img'></div>
						<div className='headgirl-text'>
							<p className='title'>Head Girl's Speech</p>
							<div className='text'>
								<p>My name is Tehillah James, the outgoing head girl of the 2022/2023 academic session. I have been a student of Lightway Academy since Jss 1 to till now and can gladly say that I have had so many experiences and memories some good, bad, some beautiful.
								</p>
								<p>These experiences which I shared with my lovely classmates has built us to become better individuals and now we can become the pride of our nation and school.
								</p>
								<p>I also want to thank my teachers, without them this journey wouldn't have been possible. Thank you for making this day a memorable part of my life.
								</p>
								<p>Thank you everyone</p>
							</div>
						</div>
					</div>
					<div className="slide group-slide">
						<div className='group-image'></div>
						<p>Class of 2023</p>
					</div>
				<div className="horizontal-sliders" ref={horizontalSlidersRef}>
					{/* <div className="slide">
						<div className='director-content'>
							<div className='director-col1'>
								<p className='dir-address'>Director's Address</p>
								<div className='dir-image'></div>
								<p className='dir-name'>Barr. &#40;Mrs&#41; Joyce Agbese, <br /> Executive Director of Lightway Academy</p>
							</div>
							<div className='director-col2'>
								<p>
									Dear graduates,
								</p>
								<p>
									As the school Director, it brings me immense joy and pride to stand before you today as you embark on this exciting new chapter of your lives. Congratulations to each and every one of you for reaching this significant milestone.
								</p>
								<p>Graduation marks the end of one journey and the beginning of another. As you step out into the world beyond these walls, I want to share a few thoughts with you.</p>
								<p>First and foremost, remember that success is not measured by comparing yourself to others. I know you’ve heard it before but let in sink in afresh that each of you is unique, with your own set of talents and passions. Embrace your individuality and remember that your path in life will be different from your peers. It's essential to focus on your personal growth and progress rather than getting lost in comparison.</p>
								<p>Tony Elumelu recently said, "I often tell my children that winning starts in their minds, rather than at the finish line. It begins each day till you achieve your goal. However, you must have self-discipline and robust time management skills to win. “
									Success is never accidental; it is the result of our deliberate efforts to achieve greatness. This quote reminds us that achievements come from dedication, hard work, and perseverance. No matter where you go or what you do, always give your best, and success will follow.</p>
								<p>Life is an unpredictable journey filled with challenges and opportunities. Embrace both, for they are the building blocks of growth. Embrace failure as a stepping stone to learning and improvement. Embrace success as a testament to your efforts and dedication.</p>
								<p>As you leave this institution and venture into the world, remember that learning doesn't end here. Be lifelong learners, continuously seeking knowledge, new skills, and fresh perspectives. Change is inevitable so embrace it and be adaptable, for it will open doors to unforeseen possibilities.</p>
								<p>We thank you dear parents for allowing us the privilege to help shape your children into great men and women.
									Congratulations once again graduating learners; may your future be filled with boundless success and happiness.
									We pray that the grace of the Almighty God will continue to keep us all.</p>
								<p>Thank you.</p>
							</div>
						</div>
						<div className='director-welcome'>Welcome.</div>
					</div> */}
					{/* <div className='slide principal-slide'>
						<div className='principal-side'>
							<p className='principal-title'>Principal's Advice</p>
							<div className='principal-image'></div>
							<p className='principal-name'>
								Mr David Latifu <br/>
								Principal, Lightway Academy
							</p>
						</div>
						<ol>
							<li> Stay focused and set clear goals: Decide what you want to achieve as you progress.
							</li>
							<li> Have a sense of purpose, be motivated, and make the most of your time.</li>
							<li>Manage your time effectively, by developing good time management skills to balance your academic workload, extracurricular activities, and personal life.
							</li>
							<li>Prioritize tasks, create a schedule, and avoid last-minute cramming to reduce stress. </li>
							<li>Build strong relationships with teachers and mentors.
							</li>
							<li>Have effective study habits.
							</li>
							<li>Embrace challenges and seek personal growth: Don't be afraid of failure or setbacks. Embrace challenges as opportunities for growth and learning.</li>
							<li> Push yourself out of your comfort zone, develop new skills, and discover your passions.</li>
						</ol>
					</div> */}
					{/* <div className="slide headboy-slide">
						<div className='headboy-img'></div>
						<div className='headboy-text'>
							<p className='title'>Head Boy's Speech</p>
							<div className='text'>
								<p>Warm greetings to all, I would like to use this opportunity to appreciate and thank my God for without him I would not be here today, the Director, the Principal Vice Principals and the school management for all my years till this very moment in this prestigious and amazing school. </p>
								<p>Okay, let's get into it. I would like to say that this is the beginning to a next and new level of life. The things we did before and the things we do now are going to influence what we do in the future, I would like to quote myself on that. I came to this school in the year 2012 as a primary 2 pupil, that is about eleven years in this school, and ever since I can remember I was always told be my parents and teachers to take my studies seriously. Being a little child of zero experience then, I always thought they bothered me a lot and I always wanted to just play.</p>
								<p>Everything about this school, most especially the teachers has shaped me as a person being here for most of my life in a positive and strong way.  To my friends, I am grateful for your support. Soluchukwu my rival and best friend who pushed me to go far in my academics, Harry who is like a brother to me, Jedidiah the unchanging who always cares no matter what and who'd always give me a hug, Gaza my rival the most encouraging friend who pushed me to go farther in sports with his strong character and personality, the beautiful Tehilah, my coworker who is hardworking, Flourish who always understood me, Clinton, Chigbo and Oty who made my days in Lightway fun and full of laughter, Lauraine who is work-shy but exceptionally smart and intelligent, Duchess, the nice and friendly one, Pearl the quiet and cheerful one, the lovely Elizabeth who I grew up with since Js1, Laila, Precious, Daniella and Nneoma who are always kind to me, who are one of a kind. </p>
								<p>I have always entered the school gate with a feeling of being cared for as if I were with family and I will cherish all those memories and experiences. Today I will leave the school gate in finality but I will leave as a grown man who has left his family to become someone better and a success. To the Director and School Management, it truly is an honour to finish as the head boy of this school! Farewell! Sayonara!</p>
							</div>
						</div>
					</div> */}
					{/* <div className='slide headboy-slide'>
						<div className='headgirl-img'></div>
						<div className='headgirl-text'>
							<p className='title'>Head Girl's Speech</p>
							<div className='text'>
								<p>My name is Tehillah James, the outgoing head girl of the 2022/2023 academic session. I have been a student of Lightway Academy since Jss 1 to till now and can gladly say that I have had so many experiences and memories some good, bad, some beautiful.
								</p>
								<p>These experiences which I shared with my lovely classmates has built us to become better individuals and now we can become the pride of our nation and school.
								</p>
								<p>I also want to thank my teachers, without them this journey wouldn't have been possible. Thank you for making this day a memorable part of my life.
								</p>
								<p>Thank you everyone</p>
							</div>
						</div>
					</div> */}
					{/* <div className="slide group-slide">
						<div className='group-image'></div>
						<p>Class of 2023</p>
					</div> */}

				</div>
				<div className='students-slide'>
					<div>
						<div className='student-name'>
							<p>Abrakassa Thomas Elizabeth</p>
						</div>
					</div>
					<div>
						<div className='student-name'>
							<p>Ali Aridja Lauraine</p>
						</div>
					</div>
					<div>
						<div className='student-name'>
							<p>Bawas Shekwogaza Micah</p>
						</div>
					</div>
					<div>
						<div className='student-name'>
							<p>Dania-Lawaernce Flourish</p>
						</div>
					</div>
					<div>
						<div className='student-name'>
							<p>Ede Nneoma Tiffany</p>
						</div>
					</div>
					<div>
						<div className='student-name'>
							<p>Emmanuel Chukwemeka Chigbo</p>
						</div>
					</div>
					<div>
						<div className='student-name'>
							<p>Enoma Pearl Aiseosa</p>
						</div>
					</div>
					<div>
						<div className='student-name'>
							<p>Harry Chibuzor Peter</p>
						</div>
					</div>
					<div>
						<div className='student-name'>
							<p>Jedidiah Nandon Habu</p>
						</div>
					</div>
					<div>
						<div className='student-name'>
							<p>James Tehillah</p> 
						</div>
					</div>
					<div>
						<div className='student-name'>
							<p>Joseph</p>
						</div>
					</div>
					<div>
						<div className='student-name'>
							<p>Laila Mubarak Ali</p>
						</div>
					</div> 
					<div>
						<div className='student-name'>
							<p>Oseni Daniella</p>
						</div>
					</div>
					<div>
						<div className='student-name'>
							<p>Oty Kamsi Ajiri</p>
						</div>
					</div>
					<div>
						<div className='student-name'>
							<p>Precious David Pius</p>
						</div>
					</div>
					<div>
						<div className='student-name'>
							<p>Uwakwe Clinton Chinonso</p>
						</div>
					</div>
					<div>
						<div className='student-name'>
							<p>Yellow Duke Duchess Iquo</p>
						</div>
					</div>
					<div>
						<div className='student-name'>
							<p></p>
						</div>
					</div>
				</div>
				<div className="recognition-slide" ref={nextBlockRef}>
						<div className='title-intro'>
							<p className='rec-title'>Achievements and Recognition</p>
							<p className='rec-text'>
								Throughout the academic year, our school has been a melting pot of brilliance, 
								determination, and dedication. From academic excellence to artistic brilliance, 
								from sportsmanship to community service, our students have left an indelible mark, proving that they are the 
								true embodiment of our school's values and spirit.<br/> Some highlights include:
							</p>
							<div className='recognition-menu'>
								<button ref={cartRef} className="rec-item rec-active" onClick={toCarting}>FIA Carting Champions</button>
								<button ref={munRef} className="rec-item" onClick={toMun}>Model United Nations</button>
								<button ref={athRef} className="rec-item" onClick={toAthletics}>Athletics</button>
							</div>  
						</div>
						<div className='recognition-main'>
							{achievement}
						</div>
					
				</div>
			</div>
		</div>
    )
}

export default Desktop