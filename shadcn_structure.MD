.
├── app
│ ├── layout.tsx
│ └── page.tsx
├── components
│ ├── ui
│ │ ├── alert-dialog.tsx
│ │ ├── button.tsx
│ │ ├── dropdown-menu.tsx
│ │ └── ...
│ ├── main-nav.tsx
│ ├── page-header.tsx
│ └── ...
├── lib
│ └── utils.ts
├── styles
│ └── globals.css
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json

\*I place the UI components in the components/ui folder.

\*The rest of the components such as <PageHeader /> and <MainNav /> are placed in the components folder.

\*The lib folder contains all the utility functions. I have a utils.ts where I define the cn helper.

\*The styles folder contains the global CSS.
