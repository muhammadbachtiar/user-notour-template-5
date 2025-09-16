import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { CustomCard } from "@/components/ui/simple/CustomCard"
import RichTextContent from "@/components/common/RichTextContent"
import { ChevronRight } from "lucide-react"

export interface TourCardProps {
  id?: number
  title?: string
  excerpt?: string
  date?: string
  readTime?: string
  image?: string
  slug?: string
  className?: string
  isDetail?: boolean
  content?: string
  category?: string
  showCategory?: boolean
  author?: string
}

export function TourCard({ title, image, slug, className, excerpt, isDetail = false }: TourCardProps) {
  return (
    <CustomCard className={cn("overflow-hidden", className)}>
      <div className={`relative ${isDetail ? 'h-90' : 'h-48'}`}>
        <Image
          src={image || "/placeholder.svg"}
          alt={title || "Tour Image"}
          fill
          className='object cover'
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">        
        <h3 className={`font-bold mb-2 transition-colors ${!isDetail ? 'hover:text-[#0d6b3f]' : ''
          }`}>
          {
            !isDetail ? <Link href={`/tour/${slug}`}>{title}</Link>
              : title
          }
        </h3>    
        {
          !isDetail ? <Link href={`/tour/${slug}`} className="text-[#0d6b3f] font-medium flex items-center hover:underline">
            Baca Selengkapnya
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link> : <RichTextContent content={excerpt || ''} />
        }    
      </div>
    </CustomCard>
  )
}
