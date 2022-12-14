export const Projects = () => {
	return (
		<div id='projects' className='mt-5 lg:mt-10'>
			<h2 className='mb-10 uppercase lg:mb-15 text-4xl font-bold tracking-tight text-blue-900 text-center'>
				Projects
			</h2>
			<div className='flex justify-center items-center'>
				<div className='flex flex-wrap justify-center items-center w-full'>
					<div className='flex flex-col items-center'>
						{/* Beginning of project three */}
						<div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
							<img className='rounded-t-lg' src='images/BlueVest.png' alt='' />
							<div className='p-2'>
								<h5 className='mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white'>
									BlueVest
								</h5>
								<p className='mb-3 text-center font-normal text-gray-700 dark:text-gray-400'>
									Project for a client named "BlueVest". Built the application with a group of 3
									other developers. The client wanted an application to match potential clients with
									financial professionals in a process that is quick and easy for the client.
									Developed an algorithm to match a client with 3 different agents based on the
									clients state and when those 3 agents last received a lead.
								</p>
								<ul className='text-sm lg:text-base mb-2 flex flex-row flex-wrap items-center justify-center'>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>React</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>Redux</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>
										Redux-Saga
									</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>Passport</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>Tailwind</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>
										Canopy Connect API
									</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>
										Calendly API
									</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>
										SendGrid API
									</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>Node</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>Express</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>Postgres</li>
								</ul>
								<div className='flex justify-center items-center'>
									<button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
										<a href='https://github.com/blueyprime/blue-prime'>GitHub Repo</a>
									</button>
								</div>
							</div>
						</div>
						{/* End of project three */}
						{/* Beginning of project four */}
						<div className='mt-8 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
							<img className='rounded-t-lg' src='images/movieSaga.png' alt='' />
							<div className='p-2'>
								<h5 className='mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white'>
									Movie Sagas
								</h5>
								<p className='mb-3 text-center font-normal text-gray-700 dark:text-gray-400'>
									Application where you can add information about your favorite movies. You can show
									the title, description, genres, and an image of the movie. You also click them to
									see the full details of the movie. There is also the ability to edit the full
									details if needed. It also features file upload via multer.
								</p>
								<ul className='text-sm lg:text-base mb-2 flex flex-row flex-wrap items-center justify-center'>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>React</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>Redux</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>
										Redux-Saga
									</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>
										Material-UI
									</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>Multer</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>Node</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>Express</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>Postgres</li>
								</ul>
								<div className='flex justify-center items-center'>
									<button className='inline-flex mr-2 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
										<a href='https://guarded-scrubland-35964.herokuapp.com/#/'>Deployed App</a>
									</button>
									<button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
										<a href='https://github.com/stephdaking/weekend-movie-sagas'>GitHub Repo</a>
									</button>
								</div>
							</div>
						</div>
						{/* End of project four */}
						{/* Beginning of project two */}
						<div className='max-w-sm mt-8 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
							<img className='rounded-t-lg' src='images/portfolio.png' alt='' />
							<div className='p-2'>
								<h5 className='mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white'>
									Portfolio Website
								</h5>
								<p className='mb-3 text-center font-normal text-gray-700 dark:text-gray-400'>
									Portfolio website where I can display all of my skills and projects.
								</p>
								<ul className='text-sm lg:text-base mb-2 flex flex-row flex-wrap items-center justify-center'>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>React</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>Tailwind</li>
								</ul>
								<div className='flex justify-center items-center'>
									<button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
										<a href='https://github.com/stephdaking/personal-portfolio'>GitHub Repo</a>
									</button>
								</div>
							</div>
						</div>
						{/* End of project two */}
						{/* Beginning of project one */}
						<div className='mt-8 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
							<img className='rounded-t-lg' src='images/tarkovConnect.png' alt='' />
							<div className='p-2'>
								<h5 className='mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white'>
									Tarkov Connect
								</h5>
								<p className='mb-3 text-center font-normal text-gray-700 dark:text-gray-400'>
									Live chat application to find people to play the game "Escape From Tarkov" with.
									Features include live chat, private messaging, friend system, notifications, and
									player feedback system.
								</p>
								<ul className='text-sm lg:text-base mb-2 flex flex-row flex-wrap items-center justify-center'>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>React</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>Redux</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>
										Redux-Saga
									</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>
										Socket.io
									</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>
										Material-UI
									</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>Passport</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>Node</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>Express</li>
									<li className='mr-2 mb-2 border border-black rounded p-2 bg-sky-700'>Postgres</li>
								</ul>
								<div className='flex justify-center items-center'>
									<button className='inline-flex mr-2 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
										<a href='https://tarkov-connect.herokuapp.com/#/login'>Deployed App</a>
									</button>
									<button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
										<a href='https://github.com/stephdaking/solo-project'>GitHub Repo</a>
									</button>
								</div>
							</div>
						</div>
						{/* End of project one */}
					</div>
				</div>
			</div>
		</div>
	);
};
