import { Phone } from "lucide-react";
import { getItemBySlug } from "../../../utils/actions/get-data";
import { PostProps } from "../../../utils/post.type";
import styles from "./styles.module.scss";
import { Hero } from "../../../components/hero";
import { Container } from "../../../components/container";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { objects }: PostProps = await getItemBySlug(slug).catch(() => {
      return {
        title: "Devmotors - Sua oficina especializada!",
        description: "Oficina de carros em Xique-Xique Bahia!",
      };
    });

    return {
      title: `Devmotors - ${objects[0].title}`,
      description: `${objects[0].metadata.description.text}`,
      keywords: ["devmotors", "troca de óleo", "manutenção preventiva", "troca de óleo em jundiaí"],
      openGraph: {
        title: `DevMototrs - ${objects[0].title}`,
        images: [`${objects[0].metadata.banner.url}`],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (error) {
    return {
      title: "Devmotors - Sua oficina especializada!",
      description: "Oficina de carros em Xique-Xique Bahia!",
    };
  }
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { objects }: PostProps = await getItemBySlug(slug);
  console.log(objects);

  return (
    <>
      <Hero
        heading={objects[0].title}
        buttonTitle={objects[0].metadata.button.title}
        buttonUrl={objects[0].metadata.button.url}
        bannerUrl={objects[0].metadata.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />
      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1>{objects[0].metadata.description.title}</h1>
            <p>{objects[0].metadata.description.text}</p>
            {objects[0].metadata.description.button_active && (
              <a
                href={objects[0].metadata.description.button_url}
                target="blank"
                className={styles.link}
              >
                {objects[0].metadata.description.button_title}
              </a>
            )}
          </article>

          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt={objects[0].title}
              quality={100}
              fill={true}
              src={objects[0].metadata.description.banner.url}
              sizes="(max-widith: 480px) 100vw, (max-width:1024px) 75vw, 50vw"
            />
          </div>
        </section>
      </Container>
    </>
  );
}
