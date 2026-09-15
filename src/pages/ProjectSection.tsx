import { ExalnaProject, WarnetProject, StickchainProject, PringastulaProject, RestaurantProject } from "../constants/images"

const ProjectSection = () => {



    return (
        <section className="flex items-center justify-center flex-col gap-12 mt-12" id="project-section">

            <div className="flex flex-col w-[90vw] mt-24">
                <div className="flex flex-col-reverse gap-8 text-start">
                    <h2 className="text-5xl font-medium mb-4">Recent already projects</h2>
                    <p className="text-sm font-medium text-gray-700">We move forward with a focus on innovation and excellence.</p>
                </div>

                {/* ------------- CONTAINER */}
                <div className="mt-24 grid grid-cols-3 gap-12">
                    {/* ----------- CARD ITEMS */}
                    <div className="flex flex-col items-start gap-4 hover:scale-95 transition-all duration-300">
                        <img src={ExalnaProject} alt="Exalna Project" className="w-full" />
                        <div className="flex flex-col gap-2 w-full items-start justify-start">
                            <div className="flex flex-col-reverse w-full justify-between items-start">
                                <h3 className="text-white text-xl">Exalna Platform</h3>
                                <ul className="flex flex-row gap-2 text-gray-400 font-bold text-sm">
                                    <li className="bg-lime-800 text-white px-4">React</li>
                                    <li className="bg-lime-800 text-white px-4">Typescript</li>
                                </ul>
                            </div>
                            <p className="text-gray-400 text-start">Built an AI-powered platform to streamline supplier discovery and simplify cross-border trade processes.</p>
                        </div>
                    </div>
                    {/* ----------- END CARD ITEMS */}
                    {/* ----------- CARD ITEMS */}
                    <div className="flex flex-col items-start gap-4 hover:scale-95 transition-all duration-300">
                        <img src={WarnetProject} alt="Exalna Project" className="w-full" />
                        <div className="flex flex-col gap-2 w-full items-start justify-start">
                            <div className="flex flex-col-reverse w-full justify-between items-start">
                                <h3 className="text-white text-xl">Warnet Management System</h3>
                                <ul className="flex flex-row gap-2 text-gray-400 font-bold text-sm">
                                    <li className="bg-lime-800 text-white px-4">React</li>
                                    <li className="bg-lime-800 text-white px-4">Typescript</li>
                                </ul>
                            </div>
                            <p className="text-gray-400 text-start">Developed a comprehensive management system for warnet operations, including user authentication, game management, and billing.</p>
                        </div>
                    </div>
                    {/* ----------- END CARD ITEMS */}
                    {/* ----------- CARD ITEMS */}
                    <div className="flex flex-col items-start gap-4 hover:scale-95 transition-all duration-300">
                        <img src={StickchainProject} alt="Exalna Project" className="w-full" />
                        <div className="flex flex-col gap-2 w-full items-start justify-start">
                            <div className="flex flex-col-reverse w-full justify-between items-start">
                                <h3 className="text-white text-xl">Stickchain Gameshop Platform</h3>
                                <ul className="flex flex-row gap-2 text-gray-400 font-bold text-sm">
                                    <li className="bg-lime-800 text-white px-4">React</li>
                                    <li className="bg-lime-800 text-white px-4">Typescript</li>
                                </ul>
                            </div>
                            <p className="text-gray-400 text-start">Developed a comprehensive management system for warnet operations, including user authentication, game management, and billing.</p>
                        </div>
                    </div>
                    {/* ----------- END CARD ITEMS */}
                    {/* ----------- CARD ITEMS */}
                    <div className="flex flex-col items-start gap-4 hover:scale-95 transition-all duration-300">
                        <img src={PringastulaProject} alt="Exalna Project" className="w-full" />
                        <div className="flex flex-col gap-2 w-full items-start justify-start">
                            <div className="flex flex-col-reverse w-full justify-between items-start">
                                <h3 className="text-white text-xl">Pringastula Company Profile</h3>
                                <ul className="flex flex-row gap-2 text-gray-400 font-bold text-sm">
                                    <li className="bg-lime-800 text-white px-4">React</li>
                                    <li className="bg-lime-800 text-white px-4">Typescript</li>
                                </ul>
                            </div>
                            <p className="text-gray-400 text-start">A modern company profile website for Pringastula, showcasing their services and achievements.</p>
                        </div>
                    </div>
                    {/* ----------- END CARD ITEMS */}
                    {/* ----------- CARD ITEMS */}
                    <div className="flex flex-col items-start gap-4 hover:scale-95 transition-all duration-300">
                        <img src={RestaurantProject} alt="Exalna Project" className="w-full" />
                        <div className="flex flex-col gap-2 w-full items-start justify-start">
                            <div className="flex flex-col-reverse w-full justify-between items-start">
                                <h3 className="text-white text-xl">Restaurant Management System</h3>
                                <ul className="flex flex-row gap-2 text-gray-400 font-bold text-sm">
                                    <li className="bg-lime-800 text-white px-4">React</li>
                                    <li className="bg-lime-800 text-white px-4">Typescript</li>
                                </ul>
                            </div>
                            <p className="text-gray-400 text-start">A modern restaurant management system for efficient operations and customer service.</p>
                        </div>
                    </div>
                    {/* ----------- END CARD ITEMS */}

                </div>
                {/* ------------- END CONTAINER */}
            </div>
        </section>
    )
}

export default ProjectSection;