import { LayoutProps } from '@/src/models';
import Link from 'next/link';
import React from 'react';

export function SecondLayout(props: LayoutProps) {
  return (
    <div>
      <h1>this is second layout</h1>
      <Link href='./products'>
        <a>Products</a>
      </Link>
      <Link href='./contact'>
        <a>Contact</a>
      </Link>
      <Link href='./about'>
        <a>About</a>
      </Link>
      <div>{props.children}</div>
    </div>
  );
}
