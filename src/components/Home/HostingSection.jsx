'use client';
const HostingSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-purple-700 to-pink-600 rounded-2xl overflow-hidden">
            <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Try hosting</h2>
                    <p className="text-white text-lg mb-6">Earn extra income and unlock new opportunities by sharing your space.</p>
                    <button type="button" className="cursor-pointer bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors w-fit">
                        Learn more
                    </button>
                </div>
                <div className="md:w-1/2">
                    <img
                        src="/assets/host.webp"
                        alt="Host"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
    );
}

export default HostingSection