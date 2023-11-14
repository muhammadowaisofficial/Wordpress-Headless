import React from 'react';

// export const metadata = {
//   title: "Home | Ecommerce Inside UAE | No#1 Ecommerce Marketing Agency",
//   description: 'Find out about the power of Ecommerce Inside, Top Ecommerce Marketing Agency. Boost your online sales and grow your business with our expert solutions.',
//   icons: [{ rel: "icon", url: "/images/favicon.webp" }],
// };

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default HomeLayout;