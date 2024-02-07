
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Handpoint',
  url: 'https://tmsdoc.handpoint.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon:'img/favicon.png',
  organizationName: 'tmsapiprod', // Usually your GitHub org/user name.
  projectName: 'tmsapiprod.github.io', // Usually your repo name.
  deploymentBranch: 'main',

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      navbar: {
        title: "",
        style: 'dark',
        logo: {
          alt: 'My Site Logo',
          src: 'img/handpoint-logo-hvitt.svg',
          width: 75,
          href: 'https://developer.handpoint.com/',
        },
        items: [
          {
            className: 'navbar-statuspage-icon',
            href: 'https://status.handpoint.com',
            position: 'right',
            'aria-label': 'Status Page',
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "TMS API",
          },
          
          {
            href: "https://github.com/handpoint",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: 'In-Person Payments Docs',
                href: 'https://developer.handpoint.com/cpdocs/index.html',
              },
              {
                label: 'Online Payments Docs',
                href: 'https://developer-ecomm.handpoint.com/',
              }
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: 'Handpoint Website',
                href: 'https://handpoint.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/handpoint',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/handpointltd?lang=en',
              },
            ],
          },
          {
            title: "Get our Apps",
            items: [
              {
                label: 'Get it on Google Play',
                href: 'https://play.google.com/store/apps/details?id=com.handpoint.hipos&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
              },

              {
                label: 'Download on the App Store',
                href: 'https://apps.apple.com/us/app/handpoint/id1450546788?itsct=apps_box_link&itscg=30200',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'Handpoint Status Page',
                href: 'https://status.handpoint.com',
              },
              {
                label: 'FAQ',
                href: 'https://handpoint.atlassian.net/wiki/spaces/PD/overview?homepageId=5898250',
              },
              {
                label: 'Subscribe to the Handpoint Newsletter',
                href: 'https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/handpoint',
              },
            ],
          },
        ],
        logo: {
          alt: 'Handpoint Logo',
          src: 'https://handpoint.imgix.net/handpoint-logo-w.png?w=150',
          href: 'https://www.handpoint.com'
        },
        copyright: `Copyright © ${new Date().getFullYear()} Handpoint`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"],
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          tmsapi: {
            specPath: "examples/tmsapi.yaml",
            outputDir: "docs/tmsapi",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
