import { Sbtn, Slink } from "./btnWhatsApp.styled";


export default async function BtnZap() {

  const textWhatsApp =
    "Olá venho da campanha Outubro Rosa e gostaria de saber mais sobre os produtos.";
  const numbWhatsApp = "38070539";

  return (
    <Slink href={`https://wa.me/5511${numbWhatsApp}?text=${textWhatsApp}`}
      target="_blank"
      aria-label="Conversar no WhatsApp sobre a campanha de Outubro Rosa" rel="noopener noreferrer">
      <Sbtn />
    </Slink>
  );
}
