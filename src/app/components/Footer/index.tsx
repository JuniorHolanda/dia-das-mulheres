"use client";

import { PiPhoneCallFill } from "react-icons/pi";
import {
  Scontainer,
  Scontent,
  Sfooter,
  Sform,
  Ssignature,
} from "./Footer.styles";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { VscGlobe } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import axios from "axios";

type PropsData = {
  name: string;
  email: string;
  empresa: string;
};

export default function Footer() {
  const textWhatsApp =
    "Olá venho da campanha Outubro Rosa e gostaria de saber mais sobre os produtos.";
  const numbWhatsApp = "38070539";

  const [formData, setFormData] = useState<PropsData>({
    name: "",
    email: "",
    empresa: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const { data } = await axios.post(
        "https://back-end-catalogo-miriam-momesso.onrender.com/subscribe",
        formData
      );

      console.log("Sucesso:", data);
      alert("Inscrição realizada com sucesso!");
      setFormData({ name: "", email: "", empresa: "" });
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao enviar os dados");
    }
  };

  return (
    <Sfooter>
      <Scontent>
        <Scontainer>
          <h3>Social</h3>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/momessooficial"
                aria-label="Ligar para (11) 92631-3152"
              >
                <span>
                  <FaInstagram />
                </span>
                @momessooficial
              </a>
            </li>
            <li>
              <a
                href={"https://catalogo.miriammomesso.com.br/"}
                target="_blank"
                aria-label="Acessar o catálogo Miriam Momesso"
              >
                <span>
                  <VscGlobe />
                </span>
                Catálogo
              </a>
            </li>
          </ul>
        </Scontainer>

        <Scontainer>
          <h3>Contato</h3>
          <ul>
            <li>
              <a
                href="tel:+5511926313152"
                aria-label="Ligar para (11) 92631-3152"
              >
                <span>
                  <PiPhoneCallFill />
                </span>
                11 926313152
              </a>
            </li>

            <li>
              <a
                href={`https://wa.me/5511${numbWhatsApp}?text=${textWhatsApp}`}
                target="_blank"
                aria-label="Conversar no WhatsApp sobre a campanha de Outubro Rosa"
              >
                <span>
                  <FaWhatsapp />
                </span>
                11 {numbWhatsApp}
              </a>
            </li>
            <li>
              <a
                href={"caroline@miriammomesso.com.br"}
                aria-label="Enviar Email para caroline@miriammomesso.com.br"
              >
                <span>
                  <MdOutlineEmail />
                </span>
                caroline@miriammomesso.com.br
              </a>
            </li>
          </ul>
        </Scontainer>

        <Scontainer>
          <h3>Newsletter</h3>
          <p>Assine nossa newsletter e tenha acesso a ofertas exclusivas.</p>
          <Sform onSubmit={handleSubmit}>
            <div>
              <label>
                Insira seu nome:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Digite seu nome"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </label>
               <label>
                Insira sua empresa:
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  placeholder="Digite o nome da empresa"
                  onChange={(e) =>
                    setFormData({ ...formData, empresa: e.target.value })
                  }
                />
              </label>
              <label>
                Insira seu e-mail:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Digite seu email"
                  required
                />
              </label>
            </div>
            <button type="submit">Assinar</button>
          </Sform>
        </Scontainer>
      </Scontent>
      <Ssignature>
        <address>
          Desenvolvido por{" "}
          <a
            href="https://github.com/JuniorHolanda"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedro Holanda
          </a>
        </address>
      </Ssignature>
    </Sfooter>
  );
}
