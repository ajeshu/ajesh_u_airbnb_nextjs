'use client';
import { SWRConfig } from 'swr';

const options = {
  fetcher: (url) => fetch(url).then(res => res.json()),
  dedupingInterval: 5000,
  revalidateOnFocus: false,
};

export default function SWRWrapper({ children }) {
  return (
    <SWRConfig value={options}>
      {children}
    </SWRConfig>
  );
}
