import Image from "next/image"

// const hoverStyles = {
// 	'clip-path': 'polygon(-1% -1%, 100% -1%, 70% 101%, -1% 101%)',
// 	 'background-position-x': '25%',
// 	//  'background-image': `url(${defaultImage})`
// }

export const HeroShowcase = ({ buttonLabel, defaultImage, eyebrow, header, hoverImage, link, overlapHero }) => {

    return <section>
        <div className="p-section">
            <div className="max-w-section">
        <a href={link}>

        <div className="grid grid-cols-4 gap-2.5 md:grid-cols-8 md:gap-4 xl:grid-cols-12 mt-8 sm:mt-16">
							<div className="col-start-1 col-span-4 md:col-span-8 xl:col-span-12 2xl:col-start-2 2xl:col-span-10 bg-faded-slate drop-shadow-md group transition-all ease-in-out duration-300">
								<div className="grid grid-cols-4 gap-2.5 md:grid-cols-8 md:gap-4 xl:grid-cols-12 2xl:grid-cols-10">

									<div className="relative xl:col-start-1 xl:col-span-3 2xl:col-span-3 hidden xl:block">									
										<div className={`h-full w-full bg-center bg-no-repeat bg-cover [background-position-x:25%] group-hover:opacity-0 transition-opacity duration-300 ease-in-out 
										`} 
                                        
                                        style={{["background-image"]: `url(${hoverImage})`,
                                        ["clip-path"]: "polygon(-1% -1%, 100% -1%, 70% 101%, -1% 101%); background-position-x: 25%" }}></div>
										
										<div className="h-full w-full opacity-0 group-hover:opacity-100 bg-center bg-no-repeat bg-cover [background-position-x:25%] absolute top-0 left-0 transition-opacity duration-300 ease-in-out" 
                                        
                                        style={{ ["background-image"]: `url(${defaultImage})`,
                                        ["clip-path"]: "polygon(-1% -1%, 100% -1%, 70% 101%, -1% 101%); background-position-x: 25%" }}
                                        
                                        ></div>

									</div>

									<div className="col-start-1 col-span-4 md:col-start-2 md:col-span-6 xl:col-start-4 xl:col-span-9 2xl:col-start-4 2xl:col-span-7 px-6 md:px-0 py-7">


        <div className="block xl:flex justify-between">
        <div className="pr-0 xl:pr-7">
			<div className="text-sm text-fox-red uppercase font-bold mb-1">
                {eyebrow}
                </div>
				<div className="h5 mb-5 xl:mb-0 text-black">{header}</div>
				</div>
                {/*  CTA  */}
											<div className="relative flex items-center pl-4 xl:pr-7">
												<div className="absolute top-1/2 -translate-y-1/2 left-0 h-6 w-1 bg-cyber-blue"></div>
												<div className="text-black pr-2 text-base font-extrabold uppercase relative whitespace-normal sm:whitespace-nowrap">{buttonLabel}</div>
												<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 35 35" className="relative w-6 h-6 group-hover:translate-x-5 transition-all ease-in-out duration-300">
													<circle cx="17.5" cy="17.5" r="17.5" className="fill-cyber-blue"></circle>
													<path d="m18.62 22.54 5.04-5.04-5.04-5.04M11.34 22.54l5.04-5.04-5.04-5.04" className="fill-transparent stroke-2 stroke-white stroke-round"></path>
												</svg>
											</div>
											{/*  End of CTA  */}
                                            </div>
									</div>
								</div>
							</div>
						</div>
				</a>
		</div>
	</div>
</section>
}