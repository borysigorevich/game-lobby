import React from 'react';

interface PageProps {
  params: Promise<{
    category: string;
  }>
}

const Page = async ({params}: PageProps) => {

  const { category } = await params;

  return (
    <div>
      {decodeURIComponent(category)}
    </div>
  );
};

export default Page;