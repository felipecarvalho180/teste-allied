import { GetStaticProps } from 'next';
import Head from 'next/head';
import Card from '../components/card';
import Sku from '../components/sku';
import { getPlatforms } from '../services/platforms';
import { ContentWrapper, Header, Wrapper } from './style';

export default function Home({ platforms }) {
  return (
    <Wrapper>
      <Head>
        <title>Teste Allied</title>
      </Head>

      <Header>
        <h1>Selecione sua plataforma</h1>
      </Header>

      <ContentWrapper>
        {platforms &&
          platforms.map((platform) => (
            <Card key={platform.sku}>
              <h1>{platform.nome}</h1>
              <Sku text={platform.sku} />
              <p>{platform.descricao.replace('|', ' ')}</p>
              <button>Selecionar plataforma</button>
            </Card>
          ))}
      </ContentWrapper>
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
