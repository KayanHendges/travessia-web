import { cn } from "@/lib/utils";
import { Carousel } from "../ui/carousel";

interface ValueContentOption {
  title: string;
  description: React.ReactNode;
}

const values: ValueContentOption[] = [
  {
    title: "Valores Morais e Éticos",
    description: (
      <>
        A doutrina católica enfatiza valores como compaixão, justiça,
        solidariedade e respeito ao próximo. Esses princípios podem guiar as
        crianças na tomada de decisões éticas e na construção de relacionamentos
        saudáveis.
      </>
    ),
  },
  {
    title: "Formação Integral",
    description: (
      <>
        As escolas católicas promovem um ambiente de comunidade e pertencimento.
        Os alunos aprendem a importância de cuidar uns dos outros e a se
        envolver em atividades que beneficiam a sociedade.
      </>
    ),
  },
  {
    title: "Senso de Comunidade",
    description: (
      <>
        Acreditamos que juntos somos mais fortes. Promovemos um ambiente
        acolhedor e de apoio mútuo, incentivando nossos alunos a cuidar uns dos
        outros e a se envolver em iniciativas que impactam a sociedade
        positivamente.
      </>
    ),
  },
  {
    title: "Respeito à Dignidade Humana",
    description: (
      <>
        A doutrina católica ensina que cada pessoa é criada à imagem e
        semelhança de Deus, possuindo dignidade intrínseca. Isso influencia a
        forma como os alunos tratam os outros e como se veem como parte de uma
        humanidade comum.
      </>
    ),
  },
  {
    title: "Conexão com a História e a Cultura",
    description: (
      <>
        A tradição católica tem raízes profundas na história e na cultura
        ocidental. A compreensão dessa herança cultural enriquece a educação das
        crianças, proporcionando-lhes uma base sólida para compreender o mundo.
      </>
    ),
  },
  {
    title: "Desenvolvimento Espiritual",
    description: (
      <>
        A educação católica incentiva a busca pela espiritualidade e o
        relacionamento com Deus, oferecendo conforto, esperança e um senso de
        propósito aos alunos, especialmente em momentos desafiadores.
      </>
    ),
  },
  {
    title: "Ética do Serviço",
    description: (
      <>
        A doutrina católica enfatiza o serviço aos outros como uma expressão
        concreta da fé. Os alunos são incentivados a se envolver em atividades
        voluntárias e a contribuir para o bem-estar da sociedade.
      </>
    ),
  },
];

export const ValuesCarousel = () => {
  return (
    <Carousel.Root>
      <Carousel.Gallery className="gap-0">
        {values.map(({ title, description }) => {
          return (
            <Carousel.Slide key={title} className="px-3 py-5">
              <div
                className={cn(
                  "min-w-[90%] md:min-w-[350px] max-w-[350px] h-full",
                  "flex flex-col items-center gap-4",
                  "bg-white rounded-xl shadow-lg p-6"
                )}
              >
                <h4 className="text-zinc-950 text-xl font-semibold">{title}</h4>

                <p className="text-sm text-zinc-600 text-center">
                  {description}
                </p>
              </div>
            </Carousel.Slide>
          );
        })}
      </Carousel.Gallery>
      <Carousel.PaginationBar />
    </Carousel.Root>
  );
};
