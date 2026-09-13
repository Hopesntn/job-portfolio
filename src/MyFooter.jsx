export default function Footer({isSpanish}) {
	return (
		<>

			<footer className="mt-16 w-full px-4 mx-auto lg:max-w-4xl md:max-w-2xl flex justify-center text-center">
				<div className="rounded-lg w-full max-w-7xl mx-auto md:flex md:items-center md:justify-between py-4 flex flex-col md:flex-row items-center gap-4">
					{
					isSpanish ? (
						<>
							<span>
								&copy; 2026 Fabricio. Casi todos los derechos reservados. Inspirado en midudev-portafolio
							</span>


							<a href="mailto:fabri.ortiz2005@hotmail.com">Contacto
							</a>
						</>
					) : (
						<>
							<span>
								&copy; 2026 Fabricio. Almost all rights reserved. Inspired by midudev-portfolio
							</span>


							<a href="mailto:fabri.ortiz2005@hotmail.com">
								Contact
							</a>
						</>
					)
				} </div>
			</footer>
		</>
	)
}
