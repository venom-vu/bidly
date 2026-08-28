import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title:
        "Bidly — Preconstruction CRM cho Tổng thầu Xây dựng Công nghiệp | Vtechcom",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Bidly là Preconstruction CRM do Vtechcom phát triển — quản trị pipeline đấu thầu S0–S8, Go/No-Go scorecard, Tender Workspace và Capability Library cho tổng thầu EPC, MEP và kết cấu thép tại Việt Nam.",
        },
        {
          property: "og:title",
          content:
            "Bidly — Preconstruction CRM cho Tổng thầu Xây dựng Công nghiệp",
        },
        {
          property: "og:description",
          content:
            "Từ tín hiệu dự án đến bàn giao tiền thi công — thay thế Excel, Zalo và email rời rạc bằng pipeline stage gate chuẩn cho tổng thầu công nghiệp Việt Nam.",
        },
        { property: "og:type", content: "website" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap",
        },
      ],
    },
  },
});
