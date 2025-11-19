import { Metadata } from "next";
import { SiteSettings } from "./settings";

const SEO_CONFIG: Metadata = {
  title: {
    template: `%s | ${SiteSettings.name}`,
    default: "Founderflow - Modern Next.js SaaS Boilerplate",
  },
  description:
    "A modern, fully featured Next.js boilerplate with authentication, subscriptions, i18n, beautiful UI components, and everything you need to launch your SaaS quickly.",
  keywords:
    "nextjs, saas, boilerplate, authentication, subscriptions, i18n, ui components, typescript",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicon/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicon/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicon/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/favicon/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/favicon/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicon/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/favicon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicon/apple-icon.png" },
    ],
  },
  manifest: "/favicon/manifest.json",
  openGraph: {
    type: "website",
    siteName: "Founderflow",
    locale: "en_US",
    url: "https://Founderflow.online",
    title: "Founderflow - Next.js SaaS Boilerplate",
    description:
      "A modern, fully featured Next.js boilerplate with authentication, subscriptions, i18n, beautiful UI components, and everything you need to launch your SaaS quickly.",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Founderflow - Next.js SaaS Boilerplate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Founderflowdev",
    title: "Founderflow - Next.js SaaS Boilerplate",
    description:
      "A modern, fully featured Next.js boilerplate with authentication, subscriptions, i18n, beautiful UI components, and everything you need to launch your SaaS quickly.",
    images: ["/og-blog.jpg"],
  },
};

export default SEO_CONFIG;
