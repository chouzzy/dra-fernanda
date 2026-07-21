// components/GoogleTagManager.tsx
'use client'

import Script from 'next/script'

// ID de Medição do Google Analytics 4 (formato G-XXXXXXXX).
// OBS: o script antigo carregava "gtm.js" (Google Tag Manager) com este ID de GA4,
// por isso o GA4 acusava "A coleta de dados não está ativa no seu site".
// O correto para um ID G- é carregar "gtag/js" + inicializar via gtag('config').
const GA_MEASUREMENT_ID = 'G-J6C201FE21'

export default function GoogleTagManager() {
  return (
    <>
      {/* Carrega a biblioteca oficial do Google Analytics 4 (gtag.js) */}
      <Script
        id="ga4-lib"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      {/* Inicializa o gtag. O gtag('config') já dispara o page_view inicial.
          As navegações internas (SPA) e os cliques de saída (ex.: botões do
          WhatsApp para wa.me/...) são capturados automaticamente pela
          "Medição avançada" do GA4 — não é preciso enviar eventos manualmente
          (fazer isso duplicaria os page_views nas navegações). */}
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  )
}
