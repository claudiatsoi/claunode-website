# Claudia's Personal Portfolio (claunode.com)

This is a modern, responsive personal portfolio website built with **Next.js 16 (App Router)**, **React**, **Tailwind CSS**, and **Lucide React**.

It features a clean, minimalist design with a focus on readability and performance.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript
- **Linting:** ESLint

## Project Structure

- `app/`: Contains the main application code (layout, pages).
- `components/`: Reusable UI components.
  - `Hero.tsx`: Introduction section.
  - `About.tsx`: Bio and professional background.
  - `Projects.tsx`: Showcase of current projects.
  - `Contact.tsx`: Contact information.
  - `Footer.tsx`: Simple footer.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `.next` folder.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
