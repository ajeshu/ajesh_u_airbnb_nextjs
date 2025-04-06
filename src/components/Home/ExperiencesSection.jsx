'use client'
const ExperiencesSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Discover experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden aspect-video">
                <img
                    src="/assets/person.jpg"
                    alt="In-person experiences"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">In-person experiences</h3>
                    <p className="text-white mb-4">Local activities led by expert hosts</p>
                    <button className="cursor-pointer bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors w-fit">
                        Browse all
                    </button>
                </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video">
                <img
                    src="/assets/travel.jpg"
                    alt="Online experiences"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Online experiences</h3>
                    <p className="text-white mb-4">Interactive activities you can do from home</p>
                    <button className="cursor-pointer bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors w-fit">
                        Browse all
                    </button>
                </div>
            </div>
        </div>
    </section>
    );
}

export default ExperiencesSection