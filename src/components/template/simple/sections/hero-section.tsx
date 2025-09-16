// import Image from "next/image"
import { CustomButton } from "@/components/ui/simple/CustomButton"
import { ChevronRight } from "lucide-react"
import type { HeroSection as HeroSectionType } from "@/types/Simple"
import { useRouter } from "next/navigation"

interface HeroSectionProps {
  data: HeroSectionType
}

export function HeroSection({ data }: HeroSectionProps) {

  const router = useRouter();

  const handleClickProfil = () => {
    router.push('/article');
  };

  const handleClickLayanan = () => {
    router.push('#info-layanan');
  };

  return (
    <section className="relative h-[500px] md:h-[600px]">
      <div className="absolute inset-0">
        {/* <Image src={data.image || "/placeholder.svg"} alt="Hero Image" fill className="object-cover" priority /> */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted          
        >
          <source src={data?.image ?? '/images/placeholder.svg'} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{data.title}</h1>
          <p className="text-lg md:text-xl mb-6">{data.description}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CustomButton className="bg-[#0d6b3f] hover:bg-[#0a5733]" onClick={handleClickProfil}>
              {data.buttons.primary.text}
              <ChevronRight className="h-4 w-4 ml-1" />
            </CustomButton>
            <CustomButton variant="outline" className="bg-white text-[#0d6b3f] hover:bg-gray-100" onClick={handleClickLayanan}>
              {data.buttons.secondary.text}
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  )
}
