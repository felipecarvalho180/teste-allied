import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Card from '../../components/card';
import Layout from '../../components/layout';
import PageTitle from '../../components/page-title';
import PlusItem from '../../components/plus-item';
import Sku from '../../components/sku';
import {
  ComputerInterface,
  TabletInterface,
  WifiInterface,
} from '../../models/plans/plans.model';
import { getPlans } from '../../services/plans/plans';
import { getPlatforms } from '../../services/platforms';
import {
  AdditionalItemsWrapper,
  CardContentWrapper,
  ContentWrapper,
  ScrollWrapper,
} from './style';

interface PlanoInterface {
  plans: ComputerInterface[] | TabletInterface[] | WifiInterface[];
}

export default function Plano({ plans }: PlanoInterface) {
  return (
    <Layout>
      <Head>
        <title>Teste Allied</title>
      </Head>
      <PageTitle text="Selecione seu plano" />

      <ScrollWrapper>
        <ContentWrapper>
          {plans &&
            plans.map(
              (plan) =>
                plan.ativo && (
                  <Card key={plan.sku}>
                    <CardContentWrapper>
                      <h1>{plan.franquia}</h1>
                      <Sku text={plan.sku} />
                      <h2>R$ {plan.valor}</h2>
                      <AdditionalItemsWrapper>
                        {plan.aparelho?.nome && (
                          <PlusItem>
                            <p>{plan.aparelho.nome}</p>
                          </PlusItem>
                        )}
                        {plan.aparelho?.valor && (
                          <PlusItem>
                            <p>{plan.aparelho.valor}</p>
                          </PlusItem>
                        )}
                        {plan.aparelho?.numeroParcelas && (
                          <PlusItem>
                            <p>Até {plan.aparelho.numeroParcelas} parcelas</p>
                          </PlusItem>
                        )}
                        {plan.aparelho?.valorParcela && (
                          <PlusItem>
                            <p>Cada parcela R${plan.aparelho.valorParcela} </p>
                          </PlusItem>
                        )}
                      </AdditionalItemsWrapper>
                    </CardContentWrapper>
                    <a>Selecionar plano</a>
                  </Card>
                )
            )}
        </ContentWrapper>
      </ScrollWrapper>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const platforms = await getPlatforms();

  const paths = platforms.map((platform) => ({
    params: {
      slug: platform.sku,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const plans = await getPlans({ sku: slug.toString() });

  return {
    props: {
      plans,
    },
    revalidate: 60 * 60 * 24,
  }; // 24 horas
};
