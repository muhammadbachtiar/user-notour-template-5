"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/simple/card"
import Icons from "../common/icons"
import { useContent } from "@/hooks/useContent"
import useSetting from "@/hooks/useSettings"
import { InfoCard } from "@/types/Simple"


export default function MenuCards() {

  const { data, isLoading } = useSetting(`service-${process.env.NEXT_PUBLIC_VILLAGE_ID}`, {});
  const { service } = useContent();
  const appData: InfoCard[] = data?.value || [];

  function CardMenuSkeleton() {
    return <Card className="h-full py-2 sm:py-3 bg-white/90 backdrop-blur-sm border-gray-200 animate-pulse">
      <CardHeader>
        <div className="flex items-center mb-2 sm:mb-3">
          <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full mr-2 sm:mr-3 bg-gray-300" />
          <div className="h-5 sm:h-6 w-32 sm:w-40 bg-gray-200 rounded-md" />
        </div>
        <div className="h-3 sm:h-4 w-3/4 bg-gray-100 rounded-md" />
      </CardHeader>
      <CardFooter>
        <div className="h-6 sm:h-8 w-full bg-gray-300 rounded-md" />
      </CardFooter>
    </Card>
  }

  return (
   <div className="relative z-10 flex justify-center">
        <div className="py-2 px-4 sm:px-6 md:px-0 max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full mx-auto">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-start mb-4 sm:mb-6"
              >
                <h2 className="text-xl sm:text-2xl font-bold uppercase text-[#CF4647]">{service.title}</h2>
                <p className="text-xs sm:text-sm text-black mt-1">{service.subTittle}</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {
                  isLoading ? [...Array(6)].map((_, index) => <CardMenuSkeleton key={index} />) :
                  appData.length <= 0 && (
                    <div className="h-48 sm:h-72 w-full col-span-1 sm:col-span-2 lg:col-span-3 flex items-center justify-start">
                      <p className="text-start text-sm sm:text-base text-gray-500">Tidak ada layanan</p>
                    </div>
                  )
                }
                {appData.map((item, index) => (
                  <Link key={item.id} target="blank" href={item.link} className="w-full h-full">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full"
                    >
                      <Card className="h-full w-full items-center flex bg-white/90 backdrop-blur-sm border-[#CF4647]/20 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                        <CardHeader className="p-3 sm:p-4 md:p-6">
                          <div className="flex w-full items-center mb-1 sm:mb-2">
                            <span className="text-xl sm:text-2xl md:text-3xl mr-2 sm:mr-3">
                              {(() => {
                                const IconComponent = Icons[item.icon] 
                                const Icon = IconComponent;
                                return Icon ? <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#CF4647]" /> : null;
                              })()}
                            </span>
                            <CardTitle className="text-black text-base sm:text-lg md:text-xl leading-tight">{item.title}</CardTitle>
                          </div>
                          <CardDescription className="text-black font-medium text-xs sm:text-sm leading-relaxed">
                            Semua informasi tentang {item.title} dapat kamu lihat disini
                          </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            
                        </CardFooter>
                      </Card>
                    </motion.div>
                  </Link>
                ))}
              
              </div>
          </div>
        </div>
    </div>
  )
}

