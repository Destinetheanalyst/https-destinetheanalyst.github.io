# 🚀 Deploy Your Portfolio to GitHub Pages

## Step 1 — Set Up Git & GitHub
1. [Create a free GitHub account](https://github.com) if you don't have one
2. Install Git → https://git-scm.com/downloads

## Step 2 — Create a GitHub Repository
1. Click **"New repository"** on GitHub
2. Name it: `your-username.github.io`  ← EXACT format required for a root domain
   - OR name it anything (e.g. `data-portfolio`) for: `your-username.github.io/data-portfolio`
3. Set to **Public**
4. Click **"Create repository"**

## Step 3 — Upload Your Files
### Option A — Drag & Drop (no terminal needed)
1. Open your new repo on GitHub
2. Click **"uploading an existing file"**
3. Drag in: `index.html`, `style.css`, `script.js`
4. Click **"Commit changes"**

### Option B — Via Terminal
```bash
cd path/to/your/portfolio-folder
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

## Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under "Source" → select **"Deploy from a branch"**
3. Branch: **main** | Folder: **/ (root)**
4. Click **Save**
5. Wait ~60 seconds → your site is live at: `https://YOUR-USERNAME.github.io`

## Step 5 — Customize Your Portfolio
Open `index.html` and replace:
- `Alex Morgan` → Your real name
- `AM` (logo) → Your initials
- `alex@example.com` → Your email
- GitHub, LinkedIn, Kaggle links → Your real profiles
- Project titles, descriptions & metrics → Your real work
- Add your real profile photo (replace the icon in the About section)

## Keeping It Updated
Each time you make changes:
```bash
git add .
git commit -m "Update portfolio"
git push
```
GitHub Pages auto-deploys within ~60 seconds.

## Optional: Custom Domain (e.g. alexmorgan.dev)
1. Buy a domain at [Namecheap](https://namecheap.com) or [Google Domains](https://domains.google)
2. In repo Settings → Pages → add your custom domain
3. Update DNS records with your registrar to point to GitHub Pages IPs

## File Structure
```
your-repo/
├── index.html       ← Main page
├── style.css        ← All styles
├── script.js        ← Interactions
├── resume.pdf       ← Your resume (add this!)
└── assets/          ← Images (optional)
    └── profile.jpg
```
