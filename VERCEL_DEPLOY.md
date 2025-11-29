# Deploying Sauti Mpya to Vercel

This guide will help you deploy your Sauti Mpya application to Vercel.

## Prerequisites

1.  A [GitHub](https://github.com/) account.
2.  A [Vercel](https://vercel.com/) account (you can sign up with GitHub).
3.  Your **Supabase** project URL and Anon Key.
4.  Your **Groq** API Key.

## Step 1: Push to GitHub

1.  Initialize a git repository if you haven't already:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
2.  Create a new repository on GitHub.
3.  Push your code to the new repository:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git branch -M main
    git push -u origin main
    ```

## Step 2: Deploy on Vercel

1.  Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your GitHub repository.
4.  Vercel will automatically detect that this is a **Vite** project.
    *   **Framework Preset:** Vite
    *   **Root Directory:** `./` (default)
    *   **Build Command:** `vite build` (default)
    *   **Output Directory:** `dist` (default)

## Step 3: Configure Environment Variables

**CRITICAL:** You must add your environment variables for the app to work.

1.  In the "Environment Variables" section of the deployment screen, add the following:

    | Name | Value |
    | :--- | :--- |
    | `VITE_SUPABASE_URL` | Your Supabase Project URL |
    | `VITE_SUPABASE_ANON_KEY` | Your Supabase Anon Key |
    | `VITE_GROQ_API_KEY` | Your Groq API Key |

2.  Click **"Deploy"**.

## Step 4: Finalize

1.  Wait for the deployment to finish (usually takes ~1 minute).
2.  Once complete, you will get a live URL (e.g., `https://sauti-mpya.vercel.app`).
3.  **Important:** Go to your **Supabase Dashboard** -> **Authentication** -> **URL Configuration**.
4.  Add your new Vercel URL to the **Site URL** and **Redirect URLs** to ensure login redirects work correctly.

## Troubleshooting

*   **404 on Refresh:** If you get 404 errors when refreshing pages like `/login` or `/chat`, ensure the `vercel.json` file is present in your repository. It handles the routing rewrites.
*   **Login Errors:** Double-check your environment variables in Vercel settings and ensure your Supabase URL configuration allows the Vercel domain.
