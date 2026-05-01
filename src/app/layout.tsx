import "./globals.css";
import Script from "next/script";
import { inter } from "@/src/fonts/inter";
import GTM from "@/src/components/GTM";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": "https://www.nexus-clinic.com/#medicalclinic",
    name: "Nexus Clinic - Weight Loss & Aesthetic Clinic Kuala Lumpur",
    url: "https://www.nexus-clinic.com/",
    telephone: "+60167745699",
    image: "https://www.nexus-clinic.com/logo.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "LG 10, Lower Ground Floor, Wisma UOA 2",
      addressLocality: "Kuala Lumpur",
      postalCode: "50450",
      addressRegion: "Federal Territory of Kuala Lumpur",
      addressCountry: "MY",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.7,
      reviewCount: 483,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="m2Jx5XHGk5VfQM86pq0VleG_ctP1wwrtGNvsy2jT86o" />
        <Script
          id="medical-clinic-schema"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>

      <body className={inter.className}>
         <GTM />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRRSXZ2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
// import "./globals.css";
// import Script from "next/script";
// 
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const schemaData = {
//     "@context": "https://schema.org",
//     "@type": "MedicalClinic",
//     "@id": "https://www.nexus-clinic.com/#medicalclinic",
//     name: "Nexus Clinic - Weight Loss & Aesthetic Clinic Kuala Lumpur",
//     url: "https://www.nexus-clinic.com/",
//     telephone: "+60167745699",
//     image: "https://www.nexus-clinic.com/logo.png",
//     priceRange: "$$",
//     address: {
//       "@type": "PostalAddress",
//       streetAddress: "LG 10, Lower Ground Floor, Wisma UOA 2",
//       addressLocality: "Kuala Lumpur",
//       postalCode: "50450",
//       addressRegion: "Federal Territory of Kuala Lumpur",
//       addressCountry: "MY",
//     },
//     aggregateRating: {
//       "@type": "AggregateRating",
//       ratingValue: 4.7,
//       reviewCount: 483,
//       bestRating: 5,
//       worstRating: 1,
//     },
//   };
// 
//   return (
//     <html lang="en">
//       <head>
//         <meta name="google-site-verification" content="m2Jx5XHGk5VfQM86pq0VleG_ctP1wwrtGNvsy2jT86o" />
//           <Script
//             id="medical-clinic-schema"
//             type="application/ld+json"
//             strategy="beforeInteractive"
//             dangerouslySetInnerHTML={{
//               __html: JSON.stringify(schemaData),
//             }}
//           />
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;
//             f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-PRRSXZ2');`,
//           }}
//         />
//       </head>
// 
//       <body>
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-PRRSXZ2"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           />
//         </noscript>
// 
//         {children}
//       </body>
//     </html>
//   );
// }