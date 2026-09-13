export default function About({isSpanish}) {
	return (
		<div className="w-full max-w-3xl mx-auto px-4">
			{
			isSpanish ? (
				<>
					<section id="about-me">
						<div className="flex gap-3 pb-5">
							<svg className="mt-11 size-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path d="M13 27A1 1 0 1013 29 1 1 0 1013 27zM16 27A1 1 0 1016 29 1 1 0 1016 27zM19 27A1 1 0 1019 29 1 1 0 1019 27zM7 24A1 1 0 107 26 1 1 0 107 24zM10 27A1 1 0 1010 29 1 1 0 1010 27zM25 24A1 1 0 1025 26 1 1 0 1025 24zM22 27A1 1 0 1022 29 1 1 0 1022 27zM4 21A1 1 0 104 23 1 1 0 104 21zM28 21A1 1 0 1028 23 1 1 0 1028 21zM28 18A1 1 0 1028 20 1 1 0 1028 18zM28 15A1 1 0 1028 17 1 1 0 1028 15zM28 12A1 1 0 1028 14 1 1 0 1028 12zM25 6A1 1 0 1025 8 1 1 0 1025 6zM28 9A1 1 0 1028 11 1 1 0 1028 9zM7 6A1 1 0 107 8 1 1 0 107 6zM4 18A1 1 0 104 20 1 1 0 104 18zM4 15A1 1 0 104 17 1 1 0 104 15zM4 12A1 1 0 104 14 1 1 0 104 12zM4 9A1 1 0 104 11 1 1 0 104 9zM10 3A1 1 0 1010 5 1 1 0 1010 3zM22 3A1 1 0 1022 5 1 1 0 1022 3zM13 3A1 1 0 1013 5 1 1 0 1013 3zM16 3A1 1 0 1016 5 1 1 0 1016 3zM16 18A1 1 0 1016 20 1 1 0 1016 18zM16 15A1 1 0 1016 17 1 1 0 1016 15zM16 9A1 1 0 1016 11 1 1 0 1016 9zM16 21A1 1 0 1016 23 1 1 0 1016 21zM19 3A1 1 0 1019 5 1 1 0 1019 3z"></path>
							</svg>
							<h1 className="mt-10 text-3xl">Sobre mi</h1>
						</div>
					</section>
				</>
			) : (
				<section id="about-me">
					<div className="flex gap-3 pb-5">
						<svg className="mt-11 size-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
							<path d="M13 27A1 1 0 1013 29 1 1 0 1013 27zM16 27A1 1 0 1016 29 1 1 0 1016 27zM19 27A1 1 0 1019 29 1 1 0 1019 27zM7 24A1 1 0 107 26 1 1 0 107 24zM10 27A1 1 0 1010 29 1 1 0 1010 27zM25 24A1 1 0 1025 26 1 1 0 1025 24zM22 27A1 1 0 1022 29 1 1 0 1022 27zM4 21A1 1 0 104 23 1 1 0 104 21zM28 21A1 1 0 1028 23 1 1 0 1028 21zM28 18A1 1 0 1028 20 1 1 0 1028 18zM28 15A1 1 0 1028 17 1 1 0 1028 15zM28 12A1 1 0 1028 14 1 1 0 1028 12zM25 6A1 1 0 1025 8 1 1 0 1025 6zM28 9A1 1 0 1028 11 1 1 0 1028 9zM7 6A1 1 0 107 8 1 1 0 107 6zM4 18A1 1 0 104 20 1 1 0 104 18zM4 15A1 1 0 104 17 1 1 0 104 15zM4 12A1 1 0 104 14 1 1 0 104 12zM4 9A1 1 0 104 11 1 1 0 104 9zM10 3A1 1 0 1010 5 1 1 0 1010 3zM22 3A1 1 0 1022 5 1 1 0 1022 3zM13 3A1 1 0 1013 5 1 1 0 1013 3zM16 3A1 1 0 1016 5 1 1 0 1016 3zM16 18A1 1 0 1016 20 1 1 0 1016 18zM16 15A1 1 0 1016 17 1 1 0 1016 15zM16 9A1 1 0 1016 11 1 1 0 1016 9zM16 21A1 1 0 1016 23 1 1 0 1016 21zM19 3A1 1 0 1019 5 1 1 0 1019 3z"></path>
						</svg>
						<h1 className="mt-10 text-3xl">About Me</h1>
					</div>
				</section>
			)
		}
			{
			isSpanish ? (
				<>
					<div className="flex flex-col gap-3 text-lg md:pr-20">
						<p>
							Me llamo Fabricio pero mis amigos me llaman Fabri.{" "}
							<span className="text-yellow-200">
								Entré al mundo de la programación hace 2 años
							</span>
							, pero siempre he estado interesado en el mundo de la tecnología.
						</p>

						<p>
							He desarrollado proyectos en distintos lenguajes de programación,
																																							              así como también de distintas áreas.{" "}
							<span className="text-yellow-200">
								Desde un videojuego en C++ usando OpenGL hasta APIs y websites
																																																				usando herramientas del mundo web.
							</span>
						</p>

						<p>
							Entrando a mis hábitos y pasiones afuera de la programación, me
																																									              encanta hacer ejercicio y el mundo del fitness, así como también
																																										              pasar mi tiempo jugando videojuegos y estar cerca de una pantalla.
							<span className="text-yellow-200">
								Por la otra parte, me encanta leer, entender nuevas ideas y
																																																                aplicar mi conocimiento en mis actividades diarias.
							</span>
						</p>
					</div>

					<></>
				</>
			) : (
				<div className="flex flex-col gap-3 text-lg md:pr-20">
					<>
						<p>
							Hi, I'm Fabricio but my friends call me Fabri.{" "}
							<span className="text-yellow-200">
								I joined the programming world 2 years ago
							</span>
							, but I had been always interested in the world of technology.
						</p>

						<p>
							I have developed diferent projects using multiple programming
																																										              languages and about unrelated topics as well.{" "}
							<span className="text-yellow-200">
								From a videogame using C++ and OPENGL to web applications and
																																																                API's using the most recent web stack.
							</span>
						</p>

						<p>
							Getting inside my hobbies and passions outside programming. I love
																																										              working out and the whole fitness industry, just as using my time
																																										              playing videogames and be close to a screen. On the other hand, I
																																										              love to read,{" "}
							<span className="text-yellow-200">
								understand new ideas and apply my knowledge into my daily
																																																                activities.
							</span>
						</p>
					</>
				</div>
			)
		} </div>
	);
}
