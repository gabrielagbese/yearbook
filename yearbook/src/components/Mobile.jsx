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
			<div className='mobile-nav'>nav</div>
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
							<p onClick={closeDirectorModal}>close</p>
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
							<p onClick={closeHeadboyModal}>close</p>
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
							<div className='mobile-rec-item-img' onClick={openKart}></div>
							<dialog className='mobile-rec-dialog' ref={kartDialogRef}>
								<p onClick={closeKart}>kart</p>
								a
							</dialog>
						</div>
						<div className='mobile-rec-item-reverse' >
							<div className='mobile-rec-item-name' onClick={openMun}>Model United Nations</div>
							<div className='mobile-rec-item-img' onClick={openMun}></div>
							<dialog className='mobile-rec-dialog' ref={munDialogRef}>
								<p onClick={closeMun}>mun</p>
							</dialog>
						</div>
						<div className='mobile-rec-item' >
							<div className='mobile-rec-item-name' onClick={openAth}>Athletics</div>
							<div className='mobile-rec-item-img' onClick={openAth}></div>
							<dialog className='mobile-rec-dialog' ref={athDialogRef}>
								<p onClick={closeAth}>ath</p>
							</dialog>
						</div>
					</div>
				</div>
				<div className='mobile-gallery'>gallery</div>
				<div className='mobile-footer'></div>
			</div>
		</>
	)
}

export default Mobile