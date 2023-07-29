import { React, useRef } from 'react'

function Mobile() {

	const directorModalRef = useRef(null);
	const headboyModalRef = useRef(null);
	const headgirlModalRef = useRef(null);

	const kartDialogRef = useRef(null);
	const munDialogRef = useRef(null);
	const athDialogRef = useRef(null);


	function openDirectorModal() {
		directorModalRef.current.showModal()
	}
	function closeDirectorModal() {
		directorModalRef.current.close()
	}

	function openHeadboyModal() {
		headboyModalRef.current.showModal()
	}
	function closeHeadboyModal() {
		headboyModalRef.current.close()
	}

	function openHeadgirlModal() {
		headgirlModalRef.current.showModal()
	}
	function closeHeadgirlModal() {
		headgirlModalRef.current.close()
	}

	function openKart() {
		kartDialogRef.current.showModal()
	}
	function closeKart() {
		kartDialogRef.current.close()
	}

	function openMun() {
		munDialogRef.current.showModal()
	}
	function closeMun() {
		munDialogRef.current.close()
	}

	function openAth() {
		athDialogRef.current.showModal()
	}
	function closeAth() {
		athDialogRef.current.close()
	}
	return (
		<>
			<div className='mobile-nav'>
				<div className='lwa-mobile-icon'></div> 
			</div>
			<div className='mobile-wrapper'>
				<div className='mobile-hero'>
					<div className='hero-top'>Lightway Academy Senior Class Of 2023</div>
					<div className='hero-image'>

					</div>
				</div>
				<div className='welcome-space'>Welcome.</div>
				<div className='mobile-speeches'>

					<div className='mobile-director' >
						<div className='speech-head'>
							<div className='speech-title-author'>
								<p className='speech-title'>Director's Address</p>
								<p className='speech-author'>Barr  &#40;Mrs.&#41; Joyce Agbese, <br />Executive Director</p>
							</div>
							<div className='speech-image director-image'></div>
						</div>
						<p className='speech-external'>Dear graduates,

							As the school Director, it brings me immense joy and pride to stand before you today as you embark on this exciting new chapter of your lives. Congratulations to each and every one of you for reaching this significant milestone.

							Graduation marks the end of one journey and the beginning of another. As you step out into the world beyond these walls, I want to share a few thoughts with you.</p>
						<button onClick={openDirectorModal} className='read-more'>Read more</button>
						<dialog ref={directorModalRef} className='director-modal'>
							<p onClick={closeDirectorModal} className='close'>Close</p>
							<p>Dear graduates,

								As the school Director, it brings me immense joy and pride to stand before you today as you embark on this exciting new chapter of your lives. Congratulations to each and every one of you for reaching this significant milestone.

								Graduation marks the end of one journey and the beginning of another. As you step out into the world beyond these walls, I want to share a few thoughts with you.

								First and foremost, remember that success is not measured by comparing yourself to others. I know you’ve heard it before but let in sink in afresh that each of you is unique, with your own set of talents and passions. Embrace your individuality and remember that your path in life will be different from your peers. It's essential to focus on your personal growth and progress rather than getting lost in comparison.

								Tony Elumelu recently said, "I often tell my children that winning starts in their minds, rather than at the finish line. It begins each day till you achieve your goal. However, you must have self-discipline and robust time management skills to win. “ Success is never accidental; it is the result of our deliberate efforts to achieve greatness. This quote reminds us that achievements come from dedication, hard work, and perseverance. No matter where you go or what you do, always give your best, and success will follow.

								Life is an unpredictable journey filled with challenges and opportunities. Embrace both, for they are the building blocks of growth. Embrace failure as a stepping stone to learning and improvement. Embrace success as a testament to your efforts and dedication.

								As you leave this institution and venture into the world, remember that learning doesn't end here. Be lifelong learners, continuously seeking knowledge, new skills, and fresh perspectives. Change is inevitable so embrace it and be adaptable, for it will open doors to unforeseen possibilities.

								We thank you dear parents for allowing us the privilege to help shape your children into great men and women. Congratulations once again graduating learners; may your future be filled with boundless success and happiness. We pray that the grace of the Almighty God will continue to keep us all.

								Thank you.</p>
						</dialog>
					</div>

					<div className='mobile-principal'>
						<div className='speech-head-reverse'>
							<div className='speech-title-author'>
								<p className='speech-title'>Principal's Advice</p>
								<p className='speech-author'>Mr. David Latifu, <br />Principal</p>
							</div>
							<div className='speech-image mobile-principal-image'></div>
						</div>
						<div>
							<ol className='advice-ol'>
								<li>Stay focused and set clear goals: Decide what you want to achieve as you progress.</li>
								<li>Have a sense of purpose, be motivated, and make the most of your time.</li>
								<li>Manage your time effectively, by developing good time management skills to balance your academic workload, extracurricular activities, and personal life.</li>
								<li>last-minute cramming to reduce stress.
									Build strong relationships with teachers and mentors.
								</li>
								<li>Have effective study habits.</li>
								<li>Embrace challenges and seek personal growth: Don't be afraid of failure or setbacks.</li>
								<li>Embrace challenges as opportunities for growth and learning.</li>
								<li>Push yourself out of your comfort zone, develop new skills, and discover your passions.</li>
							</ol>
						</div>
					</div>

					<div className='mobile-headboy' >
						<div className='speech-head'>
							<div className='speech-title-author'>
								<p className='speech-title'>Headboy's Speech</p>
								<p className='speech-author'>Joseph Emmanuel, <br />Outgoing Headboy</p>
							</div>
							<div className='speech-image mobile-headboy-image'></div>
						</div>
						<p className='speech-external'>Warm greetings to all, I would like to use this opportunity to appreciate and thank my God for without him I would not be here today, the Director, the Principal Vice Principals and the school management for all my years till this very moment in this prestigious and amazing school.</p>
						<button onClick={openHeadboyModal} className='read-more'>read more</button>
						<dialog ref={headboyModalRef} className='headboy-modal'>
							<p onClick={closeHeadboyModal} className='close'>Close</p>
							<p>Warm greetings to all, I would like to use this opportunity to appreciate and thank my God for without him I would not be here today, the Director, the Principal Vice Principals and the school management for all my years till this very moment in this prestigious and amazing school.

Okay, let's get into it. I would like to say that this is the beginning to a next and new level of life. The things we did before and the things we do now are going to influence what we do in the future, I would like to quote myself on that. I came to this school in the year 2012 as a primary 2 pupil, that is about eleven years in this school, and ever since I can remember I was always told be my parents and teachers to take my studies seriously. Being a little child of zero experience then, I always thought they bothered me a lot and I always wanted to just play.

Everything about this school, most especially the teachers has shaped me as a person being here for most of my life in a positive and strong way. To my friends, I am grateful for your support. Soluchukwu my rival and best friend who pushed me to go far in my academics, Harry who is like a brother to me, Jedidiah the unchanging who always cares no matter what and who'd always give me a hug, Gaza my rival the most encouraging friend who pushed me to go farther in sports with his strong character and personality, the beautiful Tehilah, my coworker who is hardworking, Flourish who always understood me, Clinton, Chigbo and Oty who made my days in Lightway fun and full of laughter, Lauraine who is work-shy but exceptionally smart and intelligent, Duchess, the nice and friendly one, Pearl the quiet and cheerful one, the lovely Elizabeth who I grew up with since Js1, Laila, Precious, Daniella and Nneoma who are always kind to me, who are one of a kind.

I have always entered the school gate with a feeling of being cared for as if I were with family and I will cherish all those memories and experiences. Today I will leave the school gate in finality but I will leave as a grown man who has left his family to become someone better and a success. To the Director and School Management, it truly is an honour to finish as the head boy of this school! Farewell! Sayonara!</p>
						</dialog>
					</div>

					<div className='mobile-headgirl' >
						<div className='speech-head-reverse'>
							<div className='speech-title-author'>
								<p className='speech-title'>Headgirl's Speech</p>
								<p className='speech-author'>Tehillah James, <br />Outgoing Headgirl</p>
							</div>
							<div className='speech-image mobile-headgirl-image'></div>
						</div>
						<p className='speech-external'>Good day Director, principal, parents, teachers and students of Lightway Academy, friends and fellow graduating learners.

							My name is Tehillah James, the outgoing head girl of the 2022/2023 academic session. I have been a student of Lightway Academy since Jss 1 to till now and can gladly say that I have had so many experiences and memories some good, bad, some beautiful.

							These experiences which I shared with my lovely classmates has built us to become better individuals and now we can become the pride of our nation and school.

							I also want to thank my teachers, without them this journey wouldn't have been possible. Thank you for making this day a memorable part of my life.

							Thank you everyone for your time.</p>
						{/* <p onClick={openHeadgirlModal}>read more</p>
						<dialog ref={headgirlModalRef} className='headgirl-modal'>
							<p onClick={closeHeadgirlModal}>close</p>
						</dialog> */}
					</div>
				</div>
				<div className='classof'>
					<div className='classof-img'></div>
					<p className='classof-text'>Class of 2023</p>
				</div>
				<div className='mobile-students'>
					<div className='mobile-student ali'>
						<p className='mobile-student-name '>Aridja Lauraine ALI</p>
					</div>
					<div className='mobile-student ajiri'>
						<p className='mobile-student-name '>Oty Kamsi AJIRI</p>
					</div>
					<div className='mobile-student asuquo'>
						<p className='mobile-student-name '>Emmanuel Chukwuemeka ASUQUO</p>
					</div>
					<div className='mobile-student bawas'>
						<p className='mobile-student-name '>Shekwogaza Micah BAWAS</p>
					</div>
					<div className='mobile-student dania'>
						<p className='mobile-student-name '>Flourish Oshimame DANIA-LAWRENCE</p>
					</div>
					<div className='mobile-student edeh'>
						<p className='mobile-student-name'>Nneoma Tiffany EDEH</p>
					</div>
					<div className='mobile-student emmanuel'>
						<p className='mobile-student-name'>Joseph Chukwuemeka EMMANUEL</p>
					</div>
					<div className='mobile-student enoma'>
						<p className='mobile-student-name'>Pearl Aiseosa ENOMA</p>
					</div>
					<div className='mobile-student habu'>
						<p className='mobile-student-name'>Jedidiah Nandom HABU</p>
					</div>
					<div className='mobile-student harry'>
						<p className='mobile-student-name'>Chibuzor Peter HARRY</p>
					</div>
					<div className='mobile-student james'>
						<p className='mobile-student-name'>Tehillah Chinezem JAMES-OKOROAFOR</p>
					</div>
					<div className='mobile-student mubarak'>
						<p className='mobile-student-name'>Laila Ali MUBARAK</p>
					</div>
					<div className='mobile-student solu'>
						<p className='mobile-student-name'>Soluchukwu David NDUNELI</p>
					</div>
					<div className='mobile-student oseni'>
						<p className='mobile-student-name'>Daniella Edward OSENI</p>
					</div>
					<div className='mobile-student pius'>
						<p className='mobile-student-name'>Precious David PIUS</p>
					</div>
					<div className='mobile-student thomas'>
						<p className='mobile-student-name'>Elizabeth Abrakassa THOMAS</p>
					</div>

					<div className='mobile-student clinton'>
						<p className='mobile-student-name'>Clinton Chinonso UWAKWE</p>
					</div>
					<div className='mobile-student duke'>
						<p className='mobile-student-name'>Duchess Iquo YELLOW-DUKE</p>
					</div>

				</div>
				<div className='mobile-recognition'>
					<p className='mobile-rec-title'>Achievements and Recognition</p>
					<div className='rec-writeup'>
						<p className='rec-writeup-content'>Throughout the academic year, our school has been a melting pot of brilliance, determination, and dedication. From academic excellence to artistic brilliance, from sportsmanship to community service, our students have left an indelible mark, proving that they are the true embodiment of our school's values and spirit.
							Some highlights include:</p>
					</div>
					<div className='mobile-rec-menu'>

						<div className='mobile-rec-item' >
							<div className='mobile-rec-item-name' onClick={openKart}>FIA Karting Champions</div>
							<div className='mobile-rec-item-img kart-thumb' onClick={openKart} ></div>
							<dialog className='mobile-rec-dialog' ref={kartDialogRef}>
								<p onClick={closeKart} className='close'>Close</p>
								<p className='rec-dialog-header'>FIA Karting Champions</p>
								<div className='rec-dialog-first-pic kart-pic'></div>
								<p className='rec-dialog-text '>Lightway Academy students dominated and triumphed at the FIA Karting in Schools events, clinching multiple prizes. This was an event organized by the FIA (Fédération Internationale de l'Automobile). FIA serves as the governing body for motorsport, including Formula 1, ensuring fair competition and fostering the development of future racing champions.</p>
								<div className='rec-dialog-first-pic kart-pic2'></div>
								<div className='rec-dialog-first-pic kart-pic3'></div>
							</dialog>
						</div>
						<div className='mobile-rec-item' >
							<div className='mobile-rec-item-name' onClick={openMun}>Model United Nations</div>
							<div className='mobile-rec-item-img mun-thumb' onClick={openMun}></div>
							<dialog className='mobile-rec-dialog' ref={munDialogRef}>
								<p onClick={closeMun} className='close'>Close</p>
								<p className='rec-dialog-header'>Model United Nations</p>
								<div className='rec-dialog-first-pic mun-pic'></div>
								<p className='rec-dialog-text '>Lightway Academy students showcased their exceptional diplomacy and leadership skills, representing both the school and the city with pride at two prestigious Model United Nations conferences. First, at the national level, they made a remarkable impact at TAFMUN, and then Internationally in New York</p>        
								<div className='rec-dialog-first-pic mun-pic2'></div>
								<div className='rec-dialog-first-pic mun-pic3'></div>
							</dialog>
						</div>
						<div className='mobile-rec-item' >
							<div className='mobile-rec-item-name' onClick={openAth}>Athletics</div>
							<div className='mobile-rec-item-img ath-thumb' onClick={openAth}></div>
							<dialog className='mobile-rec-dialog' ref={athDialogRef}>
								<p onClick={closeAth} className='close'>Close</p>
							</dialog>
						</div>
					</div>
				</div>
				<div className='mobile-gallery'></div>
				<div className='mobile-footer'></div>
			</div>
		</>
	)
}

export default Mobile