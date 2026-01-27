'use client'
import { Product } from "@/utils/interface";

interface GalleryProps {
    product: Product;
}

import {
    ScontainerImgMain,
    ScontainerSecondImg,
    Sgallery,
    SimgGallery,

} from "./galleryPage.styled";
import { useState } from "react";



export default function Gallery({ product }: GalleryProps) {

    const [changeImg, setChangeImg] = useState<string>(product.thumbnail);
    const [changeAlt, setChangeAlt] = useState<string>(product.altThumbnail);

    const change = (item: string, altImg: string) => {
        setChangeImg(item)
        setChangeAlt(altImg)
    }

    return (
        <Sgallery>
            <ScontainerImgMain>
                <img src={changeImg} alt={changeAlt} />
            </ScontainerImgMain>
            <ScontainerSecondImg>
                {product.gallery.map((item) => (
                    <SimgGallery
                        $isactive={changeImg === item.img}
                        onClick={() => change(item.img, item.altImg)}
                        key={item._id} >
                        <img src={item.img} alt={item.altImg} />
                    </SimgGallery>
                ))}
            </ScontainerSecondImg>
        </Sgallery>
    )
} 