
const ServiceSection = () => {
    return (
        <section className="flex justify-center mt-24">
            <div className="w-[90vw]">
                <div className="flex flex-col-reverse gap-8 text-start">
                    <h2 className="text-8xl font-medium mb-4">Selected Services</h2>
                    <p className="text-sm font-medium text-gray-700">I help brands, startup, and teams turn ideas into digital solutions.</p>
                </div>
                <div className="mt-24">
                    <ul className="flex flex-col gap-12">
                        <li className="border-b-2 border-white py-12">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row items-center gap-52">
                                    <span>01</span>
                                    <h3 className="text-4xl font-bold text-start">Web Development</h3>
                                </div>
                                <p className="text-end">I help UMKM business to establish a strong online presence with modern, responsive websites.</p>
                            </div>
                        </li>
                        <li className="border-b-2 border-white py-12">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row items-center gap-52">
                                    <span>02</span>
                                    <h3 className="text-4xl font-bold text-start">Mobile Development</h3>
                                </div>
                                <p className="text-end">I help Startup to build scalable and efficient software solutions.</p>
                            </div>
                        </li>
                        <li className="border-b-2 border-white py-12">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row items-center gap-52">
                                    <span>03</span>
                                    <h3 className="text-4xl font-bold text-start">AI Integration</h3>
                                </div>
                                <p className="text-end">I help businesses integrate AI technologies into their operations for enhanced efficiency and innovation.</p>
                            </div>
                        </li>
                        <li className="border-b-2 border-white py-12">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row items-center gap-52">
                                    <span>04</span>
                                    <h3 className="text-4xl font-bold text-start">Websites Application</h3>
                                </div>
                                <p className="text-end">I help businesses create dynamic and user-friendly websites that drive engagement and conversions.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default ServiceSection;