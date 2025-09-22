import { getConfig } from "@/components/CategoryList/api/get-config";
import { GameCardByCategory } from "@/components/GameCard/GameCardByCategory";
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

  return (<Suspense
      fallback={<p>Loading games...</p>}
    >
      <GameCardByCategory category={decodedCategory} search={search}/>
    </Suspense>
  );
};

export default Page;