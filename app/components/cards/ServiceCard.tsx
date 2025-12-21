export default function ServiceCard({ id, service, description, serviceType, children, className }: { id: string, service: string, description: string, serviceType?: string, children: React.ReactNode, className: string }) {
    return (
        <div className={`sm:w-[90%] w-full absolute ${className} rounded-2xl p-6  h-[50%] left-1/2 -translate-x-1/2 shadow-lg shadow-white/20 hover:shadow-amber-900/70 sm:backdrop-blur-3xl backdrop-blur-xl`}>

            <div className="flex sm:flex-row flex-col w-full h-full justify-between">
                <div className="sm:w-1/2 w-full pl-2 pt-1">
                    <div className="sm:text-[3rem] text-[1.4rem] font-semibold pb-4">

                        {service}
                    </div>
                    <div className="pl-2 sm:text-[16px] text-[14px] font-light">

                        {description}
                        {serviceType && (
                            <div className="mt-4 flex flex-wrap gap-2">
                                {serviceType.split(',').map((type) => (
                                    <span key={type.trim()} className="font-medium px-3 py-1 rounded-full bg-white/20 sm:text-[0.9rem] text-[11px]">
                                        {type.trim()}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="sm:w-1/2 w-full h-full flex justify-center items-center sm:mt-8 mt-2">
                    {children}
                </div>
            </div>
        </div>
    );
}