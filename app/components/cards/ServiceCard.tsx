export default function ServiceCard({ id, service, description, serviceType, children, className }: { id: string, service: string, description: string, serviceType?: string, children: React.ReactNode, className: string }) {
    return (
        <div className={`sm:w-[90%] w-full absolute ${className} rounded-2xl p-6 h-[50%] left-1/2 -translate-x-1/2 shadow-lg shadow-white/20 hover:shadow-amber-900/70`}>

            <div className="w-full pl-2 pt-1 shrink-0">
                <div className="sm:text-[3rem] text-[1.4rem] font-semibold pb-4">

                    {service}
                </div>
            </div>
            <div className="flex sm:gap-4 gap-8 sm:flex-row flex-col w-full h-[calc(100%-4rem)] sm:justify-between justify-center">
                <div className="pl-2 sm:w-1/2 w-full sm:text-[16px] text-[12px] font-light shrink-0">

                    {description}
                    {serviceType && (
                        <div className="mt-4 flex flex-wrap gap-2 text-[10px] sm:text-sm">
                            {serviceType.split(',').map((type) => (
                                <span key={type.trim()} className="font-medium px-3 py-1 rounded-full bg-white/20 sm:text-[0.9rem] text-[11px]">
                                    {type.trim()}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                <div className="sm:w-1/2 w-full flex-1 min-h-0 flex justify-center sm:items-start items-center *:max-w-full *:max-h-[95%] *:object-contain">
                    {children}
                </div>
            </div>
        </div>
    );
}