
import Card from "./components/cardProduct";
import Header from "./components/Header";
import Slider from "./components/Slider";
import { ScontainerImg, Scontent, Shome, Slink } from "./page.styled";
import { Product } from "@/utils/interface";
import sliderProduct from "@/app/data/slides.json"
import { GoBook } from "react-icons/go";
import { Metadata } from "next";
import EntraceLoad from "./components/EntranceLoading";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Outubro Rosa",
  description: "Confira nossas sugestões de brindes para o Outubro Rosa",

  icons: {
    icon: '/favicon.png',
  },


  openGraph: {
    title: "Outubro Rosa ",
    description: "Confira nossas sugestões de brindes para o Outubro Rosa",
    type: 'website',
    url: 'catalogo.miriammomesso.com.br',
    images: [
      {
        url: 'https://res.cloudinary.com/dnr3wfqyy/image/upload/v1757971418/thumbnail_mjpgoi.jpg',
        width: 600,
        height: 600,
        alt: 'logo da empresa miriam momesso',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "Outubro Rosa",
    description: "Confira nossas sugestões para Outubro Rosa",
    images: [
      'https://res.cloudinary.com/dnr3wfqyy/image/upload/v1757971418/thumbnail_mjpgoi.jpg',
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default async function Home() {

  const keywords = [
    'Porta Caneta Elástico',
    'Necessaire Malote',
    'Térmica Baú Quad',
    'Chaveiro Basic',
    'Carteira Slim',
    'Necessaire Fachini'
  ];



  const res = await fetch('https://back-end-catalogo-miriam-momesso.onrender.com/product');
  const data: Product[] = await res.json();

  const filteredData = data.filter(item =>
    keywords.some(keyword => item.title.includes(keyword))
  );

  return (
    <>
      <EntraceLoad />
      <Shome>
        <Header
          title="Outubro Rosa"
          text="Confira nossas sugestões de brindes"
        />
        <Scontent>
          <Slider slides={sliderProduct} />
          

          <ScontainerImg>
            {
              filteredData.map((item, index) => (
                <Card key={`${item._id}-${index}`} product={item} />
              ))
            }
          </ScontainerImg>
          <Slink rel="noopener noreferrer" target="_blank" href={'http://catalogo.miriammomesso.com.br'}>
            <GoBook />
            Mais opções acesse nosso catálogo
          </Slink>
        </Scontent>
      </Shome>
      <Footer />
    </>
  );
}
