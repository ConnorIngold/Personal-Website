// arrow syntax for function

const MySkills = () => {
	// skills JavaScript, Shopify, Vue.js, React.js, Node.js, Express.js, MongoDB, Git, GitHub, Heroku, Vercel
	const skills = [
		{
			name: 'JavaScript',
			icon: 'fab fa-js-square',
			color: '#f7df1e',
		},
		{
			name: 'Shopify',
			icon: 'fab fa-shopify',
			color: '#96bf48',
		},
		{
			name: 'Vue.js',
			icon: 'fab fa-vuejs',
			color: '#42b883',
		},
		{
			name: 'React.js',
			icon: 'fab fa-react',
			color: '#61dafb',
		},
		{
			name: 'Tailwind CSS',
			icon: 'fab fa-css3-alt',
			color: '#38b2ac',
		},
		{
			name: 'Node.js',
			icon: 'fab fa-node-js',
			color: '#3c873a',
		},
		{
			name: 'Express.js',
			icon: 'fas fa-server',
			color: '#000',
		},
		{
			name: 'MongoDB',
			icon: 'fas fa-database',
			color: '#47a248',
		},
		{
			name: 'GitHub',
			icon: 'fab fa-github',
			color: '#333',
		},
		{
			name: 'Heroku',
			icon: 'fab fa-heroku',
			color: '#430098',
		},
		{
			name: 'Vercel',
			icon: 'fas fa-cloud',
			color: '#000',
		},
	]

	return (
		<section id="skills" className="py-5 lg:py-10">
			<h2 className="mb-10 text-center">My Skills</h2>
			<div className="flex flex-wrap justify-center max-w-5xl gap-5 mx-auto">
				{skills.map((skill, index) => (
					<div
						key={index}
						className={`hover:bg-${skill.name.split('.')[0]}  transition-all ${
							skill.name === 'JavaScript' ? 'hover:text-black' : 'hover:text-white'
						} cursor-help duration-200 flex flex-row items-start gap-2.5 px-4 py-2.5 rounded-md border-2 border-solid border-[#1A1918] `}
					>
						<p>{skill.name}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default MySkills
