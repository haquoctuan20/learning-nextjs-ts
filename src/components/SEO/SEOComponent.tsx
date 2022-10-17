import { SEO } from '@/models';
import Head from 'next/head';
import React from 'react';

interface SEOProps {
  data: SEO;
}

export function SEOComponent({ data }: SEOProps) {
  const { title, description, url, thumbnailUrl } = data;

  return (
    <Head>
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={thumbnailUrl} />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={thumbnailUrl} />
    </Head>
  );
}
