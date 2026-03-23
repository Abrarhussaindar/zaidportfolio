import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../app/(root)/layout.css"; // Custom CSS for layout

// Define fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Define metadata for SEO
export const metadata: Metadata = {
  title: {
    default: "Zaid Mayers - ML & AI Engineer | Data Scientist",
    template: "%s | Zaid Mayers"
  },
  description: "Machine Learning and Artificial Intelligence Engineer with a Master's from Drexel University. Specializing in computer vision, deep learning, cloud infrastructure, and end-to-end ML pipeline development.",
  keywords: [
    "machine learning engineer",
    "AI engineer",
    "data scientist",
    "computer vision",
    "deep learning",
    "TensorFlow",
    "PyTorch",
    "Scikit-Learn",
    "Python developer",
    "drone detection",
    "ResNet",
    "YOLOv11",
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "Drexel University",
    "Philadelphia",
    "Zaid Mayers",
    "ML pipeline",
    "predictive analytics",
    "churn prediction",
    "biomedical AI",
    "pattern recognition"
  ],
  authors: [{ name: "Zaid Mayers", url: "https://linkedin.com/in/zaid-mayers-b1ba7121a" }],
  creator: "Zaid Mayers",
  publisher: "Zaid Mayers",
  category: "Portfolio & AI Research",
  applicationName: "Zaid Mayers Portfolio",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Zaid Mayers - ML & AI Engineer | Data Scientist",
    description: "ML & AI Engineer based in Philadelphia, PA. MS in Machine Learning Engineering from Drexel University (GPA 4.0). Research in drone detection, biomedical pattern recognition, and cloud infrastructure.",
    siteName: "Zaid Mayers Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaid Mayers - ML & AI Engineer",
    description: "ML & AI Engineer specializing in computer vision, deep learning, and end-to-end ML pipelines. Dean's List at Drexel University.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ],
  appleWebApp: {
    title: "Zaid Mayers",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" },
    ],
  },
  other: {
    "linkedin:profile": "https://linkedin.com/in/zaid-mayers-b1ba7121a",
    "contact:email": "zaidmayers2@gmail.com",
    "contact:phone": "+1-206-930-0523",
    "location:city": "Philadelphia",
    "location:state": "PA",
    "location:country": "USA",
    "profession": "ML & AI Engineer",
    "availability": "Available for work",
  },
};

// JSON-LD structured data for better SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Zaid Mayers",
  "jobTitle": "Machine Learning and Artificial Intelligence Engineer",
  "description": "ML & AI Engineer specializing in computer vision, deep learning, and cloud infrastructure. MS in Machine Learning Engineering from Drexel University.",
  "email": "zaidmayers2@gmail.com",
  "telephone": "+1-206-930-0523",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Philadelphia",
    "addressRegion": "PA",
    "addressCountry": "USA"
  },
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "Drexel University",
      "location": "Philadelphia, PA"
    },
    {
      "@type": "CollegeOrUniversity",
      "name": "Presidency University",
      "location": "India"
    }
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "iMaple Laboratory, Drexel University",
    "location": "Philadelphia, PA"
  },
  "knowsAbout": [
    "Machine Learning",
    "Artificial Intelligence",
    "Computer Vision",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "Scikit-Learn",
    "Python",
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "Data Science",
    "Statistical Modeling",
    "ResNet",
    "YOLOv11",
    "CI/CD",
    "ArgoCD"
  ],
  "sameAs": [
    "https://linkedin.com/in/zaid-mayers-b1ba7121a"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Master of Science in Machine Learning Engineering",
      "educationalLevel": "Master's Degree",
      "credentialCategory": "degree",
      "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Drexel University" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Bachelor of Technology in Computer Science Engineering",
      "educationalLevel": "Bachelor's Degree",
      "credentialCategory": "degree",
      "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Presidency University" }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Additional meta tags for better performance */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="format-detection" content="email=yes" />

        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for social media domains */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />

        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="US-PA" />
        <meta name="geo.placename" content="Philadelphia" />
        <meta name="geo.position" content="39.9526;-75.1652" />
        <meta name="ICBM" content="39.9526, -75.1652" />

        {/* Theme color for different browsers */}
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="antialiased text-white bg-black font-inter">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}