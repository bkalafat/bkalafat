# Deploy bkalafat.com to Your Own Domain - Complete Guide

## TL;DR - Easiest Path (Recommended)

**Use Cloudflare Pages** - It's the simplest, most cost-effective solution:
- ✅ Free hosting
- ✅ Free SSL/HTTPS certificate
- ✅ Automatic deployments from GitHub
- ✅ Superior global CDN
- ✅ Works perfectly with GoDaddy domains

---

## Comparison: GitHub Pages vs Cloudflare Pages

| Feature | GitHub Pages | Cloudflare Pages |
|---------|-------------|-----------------|
| Free Hosting | ✅ Yes | ✅ Yes |
| SSL Certificate | ✅ Automatic | ✅ Automatic |
| CDN Performance | Basic | ⭐ Superior Global CDN |
| Custom Domain | ✅ Yes | ✅ Yes |
| Deployment Speed | ~2-3 min | ~1 min (faster builds) |
| Configuration | Simple | Slightly simpler |
| **Recommendation** | OK for side projects | **Best for production** |

---

## OPTION 1: Deploy with Cloudflare Pages (EASIEST - Recommended)

### Step 1: Prepare Your GitHub Repository

If you don't have your code on GitHub yet:

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: portfolio site"

# Create a new repository on github.com
# Then add remote and push
git remote add origin https://github.com/YOUR_USERNAME/bkalafat.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. **Go to Cloudflare Dashboard**
   - Visit https://dash.cloudflare.com
   - Sign up for free if needed (or log in)

2. **Create a Pages Project**
   - Click "Workers & Pages" in the sidebar
   - Click "Create application"
   - Select "Pages"
   - Click "Connect to Git"

3. **Authorize GitHub**
   - Click "Connect GitHub"
   - Authorize Cloudflare to access your repos
   - Select your `bkalafat` repository

4. **Configure Build Settings**
   - **Framework**: Select "React" (or leave blank, Cloudflare auto-detects Vite)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: Leave blank (unless your app is in a subfolder)
   - Click "Save and Deploy"

Your app will deploy automatically! 🎉

### Step 3: Get Your Pages.Dev URL

After deployment completes, you'll get a URL like: `bkalafat.pages.dev`

Test it to make sure everything works.

---

## OPTION 2: Connect Your Custom Domain (bkalafat.com)

### Option 2A: Change GoDaddy Nameservers to Cloudflare (Recommended for apex domain)

This gives you the most control and enables advanced Cloudflare features.

#### Step 1: Add Domain to Cloudflare

1. In Cloudflare dashboard, click **"+ Add a site"**
2. Enter your domain: `bkalafat.com`
3. Select **Free Plan**
4. Cloudflare will show you new nameservers (usually `alice.ns.cloudflare.com` and `bob.ns.cloudflare.com`)

#### Step 2: Update GoDaddy Nameservers

1. **Log into GoDaddy** (godaddy.com)
2. Go to **My Products** → **Domains**
3. Click on your `bkalafat.com` domain
4. Click **Manage DNS** or **Manage Domain**
5. Find **Nameservers** section
6. Replace with Cloudflare's nameservers:
   - `alice.ns.cloudflare.com`
   - `bob.ns.cloudflare.com`
7. Save changes

**Note**: DNS propagation takes 5-48 hours but usually completes within 2-6 hours.

#### Step 3: Add Custom Domain to Cloudflare Pages

1. In Cloudflare dashboard, go to **Workers & Pages**
2. Click your Pages project
3. Click **Custom Domains** tab
4. Click **Set up a domain**
5. Enter `bkalafat.com`
6. Click **Continue**
7. Cloudflare will auto-create the CNAME record (since it manages your DNS now)
8. Click **Activate domain**

✅ Your site is now live at `bkalafat.com`!

---

### Option 2B: Use CNAME Record (If You Want to Keep GoDaddy Nameservers)

If you prefer not to change nameservers:

#### Step 1: Create CNAME in GoDaddy

1. Log into GoDaddy
2. Go to **DNS Settings** for `bkalafat.com`
3. Find the **CNAME** section
4. Add a new CNAME record:
   - **Name**: `www` (for www.bkalafat.com) 
   - **Value**: `bkalafat.pages.dev` (your Pages subdomain)
5. Save

For apex domain (`bkalafat.com` without www), you may need to use `A` records instead. Check GoDaddy's documentation or use Cloudflare's nameservers (Option 2A is simpler).

#### Step 2: Add Domain to Cloudflare Pages

1. In Cloudflare, go to your Pages project
2. **Custom Domains** → **Set up a domain**
3. Enter your domain/subdomain
4. Verify the DNS record points to your Pages domain
5. Activate

---

## Setup Verification Checklist

After deployment, verify everything works:

- [ ] Can access `bkalafat.pages.dev` (initial Cloudflare Pages URL)
- [ ] Can access `bkalafat.com` (custom domain)
- [ ] HTTPS/SSL works (green lock in browser)
- [ ] All pages load correctly
- [ ] Links and routing work
- [ ] Run `npm run build` locally and verify no errors

### Quick Test Commands

```bash
# Build locally to catch any issues
npm run build

# Preview the build locally
npm run preview

# Then test your live domain
curl https://bkalafat.com
```

---

## Automatic Deployments

After setup, your site auto-deploys whenever you push to GitHub:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Cloudflare automatically detects the push, rebuilds your site, and deploys it. Check the **Deployments** tab in your Pages project to see build logs.

---

## Environment Variables (if needed)

To add environment variables for your build:

1. In Cloudflare Pages dashboard, go to **Settings** → **Environment variables**
2. Add any required variables (e.g., API keys)
3. Save and redeploy

---

## Troubleshooting

### Domain not resolving?
- Wait 5-48 hours for DNS propagation
- Check DNS status: `nslookup bkalafat.com`
- Verify CNAME record in DNS settings

### Build failing?
- Check **Deployments** tab in Cloudflare for build logs
- Verify `npm run build` works locally
- Ensure all dependencies are in `package.json`

### HTTPS not working?
- Wait for SSL certificate issuance (usually automatic)
- Check Cloudflare **SSL/TLS** settings if needed

### Old content still showing?
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check for stale DNS records

---

## Next Steps

1. ✅ Push your code to GitHub
2. ✅ Create Cloudflare account
3. ✅ Deploy via Cloudflare Pages (2 minutes)
4. ✅ Connect custom domain (5 minutes)
5. ✅ Test and verify

**Total setup time: ~30 minutes (mostly waiting for DNS propagation)**

---

## Helpful Links

- **Cloudflare Pages**: https://pages.cloudflare.com/
- **Cloudflare Custom Domains**: https://developers.cloudflare.com/pages/configuration/custom-domains/
- **GitHub Pages**: https://pages.github.com/
- **GoDaddy DNS Management**: https://www.godaddy.com/help
- **Vite Build Guide**: https://vitejs.dev/guide/build.html

---

## Cost Summary

| Service | Cost |
|---------|------|
| Cloudflare Pages Hosting | **Free** |
| Cloudflare SSL Certificate | **Free** |
| Custom Domain (bkalafat.com) | ~$12-15/year (GoDaddy) |
| **Total Annual Cost** | **~$12-15** |

Cloudflare Pages is the clear winner - best performance, easiest setup, zero hosting costs! 🚀

---

## Pro Tips

1. **Enable Cloudflare Analytics** for free page views and traffic data
2. **Use Cloudflare Workers** for serverless functions if you need a backend
3. **Enable branch previews** to test changes before merging to main
4. **Add a `_redirects` file** for custom URL redirects (more info in Cloudflare docs)
5. **Use Cloudflare Rules** for URL rewriting or security policies

Happy deploying! 🎉
