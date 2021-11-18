import { seo } from "config"

export default {
  openGraph: {
    type: "website",
    locale: "de_GER",
    url: seo.canonical,
    site_name: seo.title,
  },
}
