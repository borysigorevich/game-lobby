import { getConfig } from "@/components/CategoryList/api/get-config";
import { GameCard } from "@/components/GameCard/GameCard";
import React, { Suspense } from 'react';

interface PageProps {
  params: Promise<{
    category: string;
  }>,
  searchParams: Promise<{
    search: string;
  }>
}

export const generateStaticParams = async () => {
  const { data: categories } = await getConfig()

  return categories?.menu.lobby.items.map((category) => ({
    category: encodeURIComponent(category.name.en),
  })) || [];
}

const Page = async ({ params, searchParams }: PageProps) => {

  const { category } = await params;
  const { search } = await searchParams;

  const decodedCategory = decodeURIComponent(category);

  return (
    <>
      <h2>Available Games</h2>
      <Suspense
        fallback={<p>Loading games...</p>}
      >
        <GameCard category={decodedCategory} search={search}/>
      </Suspense>
    </>
  );
};

export default Page;