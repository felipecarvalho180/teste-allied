import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Card from '../components/card';
import Layout from '../components/layout';
import PageTitle from '../components/page-title';
import Sku from '../components/sku';
import { PlatformInterface } from '../models/platforms/platform.model';
import { getPlatforms } from '../services/platforms';
import { ContentWrapper } from './style';

interface HomeProps {
  platforms: PlatformInterface[];
}

export default function Home({ platforms }: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>Teste Allied</title>
      </Head>
      <PageTitle text="Selecione sua plataforma" />

      <ContentWrapper>
        {platforms &&
          platforms.map((platform) => (
            <Card key={platform.sku}>
              <h1>{platform.nome}</h1>
              <Sku text={platform.sku} />
              <p>{platform.descricao.replace('|', ' ')}</p>
              <Link href={`/plano/${platform.sku}`}>
                <a>Selecionar plataforma</a>
              </Link>
            </Card>
          ))}
      </ContentWrapper>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const platforms = await getPlatforms();

  return {
    props: {
      platforms,
    },
    revalidate: 60 * 60 * 168,
  };
};
