import Image from 'next/image'
import GalleryImage1 from 'images/1.jpg'
import GalleryImage2 from 'images/2.jpg'
import GalleryImage3 from 'images/3.jpg'
import GalleryImage4 from 'images/4.png'
import GalleryImage5 from 'images/5.jpg'
import GalleryImage6 from 'images/6.jpg'
import GalleryImage7 from 'images/7.jpg'
import GalleryImage8 from 'images/8.jpg'
import { useRef } from 'react'

const galleryImages = [
  { id: 1, image: GalleryImage1, placeholderColor: '#AC8B6A' },
  { id: 2, image: GalleryImage2, placeholderColor: '#9F8170' },
  { id: 3, image: GalleryImage3, placeholderColor: '#9E7E69' },
  { id: 4, image: GalleryImage4, placeholderColor: '#9C5A55' },
  { id: 5, image: GalleryImage5, placeholderColor: '#998B77' },
  { id: 6, image: GalleryImage6, placeholderColor: '#AD875B' },
  { id: 7, image: GalleryImage7, placeholderColor: '#8C67AA' },
  { id: 8, image: GalleryImage8, placeholderColor: '#898477' }
]

export default function ImageGallery() {
  const galleryContainer = useRef<HTMLUListElement>(null)

  return (
    <ul ref={galleryContainer} className="flex w-full p-4 gap-4 overflow-x-scroll">
      {galleryImages.map(({ id, image, placeholderColor }) => (
        <li key={id}>
          <div className="relative object-cover h-96 rounded-md overflow-hidden aspect-square" style={{ backgroundColor: placeholderColor }}>
            <Image src={image} alt="" layout="fill" objectFit="cover" objectPosition="center" lazyRoot={galleryContainer} lazyBoundary="10px" />
          </div>
        </li>
      ))}
    </ul>
  )
}
