# Amal Kishor's Developer Portfolio 🚀

A modern, highly performant, and interactive full-stack developer portfolio. Engineered with **Next.js**, **React**, **Tailwind CSS**, and **Framer Motion**, and featuring an integrated AI assistant powered by **Google Gemini**.

[![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)

---

## 🎯 Features

- **Blazing Fast Performance**: Statically generated (SSG) and Server-Side Rendered (SSR) pages via Next.js for perfect Core Web Vitals.
- **Dynamic Projects Grid**: Beautifully showcases recent full-stack applications (ShopVerse, Mindora.ai, etc.) with associated tech stacks and challenge learnings.
- **AI-Powered Chat Assistant**: An integrated Google Gemini conversational AI that can answer questions about the developer's experience and skill set in real-time.
- **Live GitHub Stats**: Fetches and renders up-to-date metrics seamlessly using the GitHub REST API.
- **Smooth Micro-Interactions**: Complex layout animations and route transitions engineered with Framer Motion.
- **Serverless Form Handling**: Secure and seamless contact form submission without a dedicated backend server using Web3Forms / Formsubmit.
- **Fully Responsive Architecture**: Custom-built tailwind design system ensuring flawless scaling from mobile displays to ultra-wide desktop monitors.

---

## 💻 Technical Stack

- **Frontend**: React 19, Next.js (App Router), TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Simple Icons)
- **AI Integration**: Google Gemini API
- **Live Data**: GitHub REST API
- **Deployment**: Vercel

---

## ⚙️ Local Development

### Prerequisites

Ensure you have **Node.js 18+** and **npm** installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amalverse/amal.dev.git
   cd amal.dev
   ```

2. Install runtime dependencies:
   ```bash
   npm install
   ```

3. Configure your Environment Variables:
   Create a `.env` file at the root of the project and provide the following keys:

   ```env
   # Your customized contact email for the submission form
   NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
   
   # Form handling access key (Web3Forms/FormSubmit)
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key
   
   # Google Gemini API key required for the AI chat assistant
   GEMINI_API_KEY=your-gemini-api-key
   
   # Your GitHub username for dynamic repository statistics
   GITHUB_USERNAME=your-github-username
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your local browser to interact with the application.

---

## 🚀 Production Deployment (Vercel)

This application is strictly optimized for instantaneous deployment on [Vercel](https://vercel.com).

1. Push your code to your GitHub repository.
2. Sign in to Vercel and **Import** the repository.
3. Open the **Environment Variables** configuration tab.
4. Paste the 4 required variables listed in the `.env` setup above.
5. Click **Deploy**. Vercel will automatically detect the Next.js framework, run `npm run build`, and serve your static assets globally over its CDN.

---

## 👨‍💻 Author

**Amal Kishor**  
Full-Stack Developer building AI-powered web applications.  
- GitHub: [@amalverse](https://github.com/amalverse)
- Portfolio: [amal.dev](https://amal.dev)
