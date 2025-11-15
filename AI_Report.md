1. AI Tools Used
   ChatGPT (GPT-5.1)

I used ChatGPT mainly as a support tool during development. It helped me understand the project structure for a Next.js App Router setup, clarified how API fetching should work, and guided me on how to design some UI layouts with Tailwind CSS. I also referred to it when I got stuck with routing issues, fallback image handling, and general debugging.

2. Code Sections Influenced by AI Assistance
   Next.js App Router Setup

The initial layout of the project, including:

app/page.tsx

app/movie/[id]/page.tsx

These files were prepared with the help of AI suggestions, and I refined them further.

API Fetching Logic

The basic logic for interacting with the OMDB API (both search and detail lookup) was drafted with AI assistance. I modified the code to match my needs and cleaned it up for readability.

Utility Components

The SafeImage component, which provides a fallback image when the poster fails to load, was partially inspired by AI suggestions. I adjusted the logic so that it works consistently across the project.

Configuration

AI provided guidance for:

Setting up next.config.js to allow remote images

Configuring environment variables for the API key
I incorporated these changes into the project manually.

3. Deployment Information
   Live URL (Vercel Deployment)
   YOUR_DEPLOYED_URL_HERE

GitHub Repository Link
https://github.com/YOUR_USERNAME/streaming-dashboard-app
