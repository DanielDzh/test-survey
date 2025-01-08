import { Layout } from '@layout';
import localFont from 'next/font/local';

import BasicProviders from '@providers/BasicProviders';

const openSans = localFont({
  src: [
    {
      path: '../../public/fonts/OpenSans/OpenSans-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/OpenSans/OpenSans-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: 'Survey App',
  description: 'A dynamic survey application',
};

const RootLayout = ({ children }: { children: React.ReactNode; isDarkMode: boolean }) => {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>
        <BasicProviders>
          <Layout>{children}</Layout>
        </BasicProviders>
      </body>
    </html>
  );
};

export default RootLayout;
