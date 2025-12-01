
# **Portfolio Website – Deployment Guide**

This repository contains my personal portfolio website built with **React + Vite**.
Because GitHub Pages does not directly support Vite’s build structure, the site is deployed from the `/docs` directory.

Follow the steps below whenever you want to update the portfolio.

---

## 🚀 **How to Make Changes & Deploy**

### **1. Navigate to the project directory**

```bash
cd C:\Users\nikhi\Documents\github\nikhilbv.github.io
```

---

### **2. Edit the project**

Use VS Code, Sublime Text, or any editor of your choice:

```text
Make your changes in /src, /public, or index.html
```

---

### **3. Build the production version**

GitHub Pages cannot serve `/src/main.tsx`, so we must build the site:

```bash
npm run build
```

This creates a `dist/` folder containing the production-ready files.

---

### **4. Preview the build (optional)**

To preview the build locally:

```bash
npm run preview
```

This shows exactly what GitHub Pages will host.

---

### **5. Prepare GitHub Pages folder**

GitHub Pages supports deployment from either:

* `/ (root)`
* `/docs`

Since this is a **React + Vite** project, we deploy from **/docs**.

Do the following:

1. Delete the old `/docs` folder
2. Rename the newly-generated `dist` folder → `docs`

Example:

```bash
rmdir docs     # Remove old docs
mv dist docs      # Rename dist → docs
```

(You can also do this manually in File Explorer.)

---

### **6. Commit & push**

Finally, push the updated site to GitHub:

```bash
git add .
git commit -m "Update portfolio build"
git push
```

GitHub Pages will automatically redeploy from `/docs`.

---

## 🌐 **Live URL**

Your site will be available at:

```
https://nikhilbv.github.io
```

---

## ⚠️ Troubleshooting

### **WhatsApp / LinkedIn still shows old thumbnails?**

Cache old previews for hours or days.
Force refresh by sharing:

```
https://nikhilbv.github.io?v=2
```

or incrementing the version number.

### **MIME type errors?**

This happens only if the raw `/src/main.tsx` is being served.
Make sure you:

* Delete `/docs`
* Rename `dist → docs`
* Push again

---

## 📁 **Project Structure (Important)**

```
/docs          # Production build served by GitHub Pages
/src           # React source code
/public        # Static assets (og images, icons, etc.)
index.html
package.json
vite.config.js
```
