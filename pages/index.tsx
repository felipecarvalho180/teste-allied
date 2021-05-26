import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPlatforms } from '../services/platforms';
import { Wrapper } from '../styles';

export default function Home({ platforms }) {
  return (
    <Wrapper>
      <Head>
        <title>Teste Allied</title>
      </Head>

      {platforms &&
        platforms.map((platform) => (
          <div key={platform.sku}>
            <h1>{platform.nome}</h1>
            <span>{platform.sku}</span>
            <span>{platform.descricao}</span>
          </div>
        ))}
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPlatforms();

  return {
    props: {
      platforms: data.plataformas,
    },
    revalidate: 60 * 60 * 168,
  };
};
