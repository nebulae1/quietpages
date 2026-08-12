const siteUrl = (
  import.meta.env.SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  "https://quietpages-eta.vercel.app"
).replace(/\/$/, "");

export const SITE = {
  name: "Kids Travel Channel",
  description:
    "The channel for travel content for the whole family.",
  url: siteUrl,
  locale: "en-US",
  language: "en",
  repositoryUrl: "https://github.com/nebulae1/kids-travel-channel",
};

export const NAVIGATION = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Articles" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const CONTACT = {
  email: "info@kidstravelchannel.com",
  socialHandle: "@thekidstravelchannel",
  socialUrl: "https://x.com/kidstravelchannel",
};

export const FORMS = {
  contact: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
  newsletter: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
};

export const SOCIAL_LINKS = [
  { href: "/rss.xml", label: "RSS feed", icon: "rss" },
  { href: CONTACT.socialUrl, label: `${SITE.name} on X`, icon: "twitter" },
  { href: SITE.repositoryUrl, label: `${SITE.name} on GitHub`, icon: "github" },
  { href: `mailto:${CONTACT.email}`, label: "Email", icon: "mail" },
];

export const authors = [
  {
    slug: "emilie-helton",
    name: "Emilie Helton",
    bio: "Writer & editor covering travel.",
    longBio:
      "Emilie Helton writes about the quiet edges of travel and adventure. Previously an editor at two small magazines, she now publishes essays and field notes from a desk overlooking the harbour.",
    avatar: "/avatars/emilie-helton.svg",
  },
];

export const categories = [
  { slug: "articles", name: "Articles" },
  { slug: "videos", name: "Videos" },
  { slug: "socials", name: "Socials" },
];

export const tags = [
  { slug: "food", name: "Food" },
  { slug: "singapore", name: "Singapore" },
  { slug: "family-travel", name: "Family Travel" },
  { slug: "local-eats", name: "Local Eats" },
  { slug: "kid-friendly-dining", name: "Kid-Friendly Dining" },
  { slug: "asia-travel", name: "Asia Travel" },
  { slug: "hawker-centers", name: "Hawker Centers" },
  { slug: "disney", name: "Disney" },
];