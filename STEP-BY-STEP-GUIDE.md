# 🛒 Complete Beginner's Guide: Getting Your App Running

I'll walk you through **every single step** - no coding experience needed!

---

## ⏱️ Total Time: ~30 minutes

---

# PART 1: Prerequisites Setup (10 minutes)

## Step 1: Install Node.js

Node.js is software you need to run JavaScript projects.

**For Windows:**
1. Go to https://nodejs.org/
2. Click the big green button that says "Download LTS" (LTS = stable version)
3. Run the downloaded file (double-click it)
4. Click "Next" through all screens, accept the license, click "Install"
5. Click "Finish"

**For Mac:**
1. Go to https://nodejs.org/
2. Click the big green button "Download LTS"
3. Open the downloaded file (it's a .pkg)
4. Click "Continue" through all screens
5. Enter your password when prompted
6. Click "Install"

**Verify it installed:**
1. Open Terminal/Command Prompt
2. Type: `node --version`
3. You should see a version number like `v20.10.0`

---

## Step 2: Install Git

Git is version control software (you need it to download your project).

**For Windows:**
1. Go to https://git-scm.com/download/win
2. Download and run the installer
3. Click "Next" through all screens, keep defaults
4. Click "Finish"

**For Mac:**
1. Go to https://git-scm.com/download/mac
2. Download and install

**Verify it installed:**
1. Open Terminal/Command Prompt
2. Type: `git --version`
3. You should see a version number

---

## Step 3: Create a GitHub Account (if you don't have one)

Your code is already on GitHub under `mgadelrab`. If that's you, skip to Step 4.

If not:
1. Go to https://github.com
2. Click "Sign up"
3. Enter email, create password, username
4. Follow verification steps
5. Done!

---

# PART 2: Get Your Project (5 minutes)

## Step 4: Download Your Project

Think of this as downloading a folder with all your project files.

**For Windows:**
1. Open Command Prompt
   - Press `Windows Key + R`
   - Type `cmd`
   - Press Enter

**For Mac:**
1. Open Terminal
   - Press `Cmd + Space`
   - Type "Terminal"
   - Press Enter

**Now type these commands (one at a time, press Enter after each):**

```bash
cd Desktop
git clone https://github.com/mgadelrab/grocery-price-compare.git
cd grocery-price-compare
```

What this does:
- `cd Desktop` = Go to your Desktop
- `git clone...` = Download your entire project
- `cd grocery-price-compare` = Open your project folder

---

# PART 3: Install Dependencies (10 minutes)

Your project needs libraries/packages to work. We install them now.

## Step 5: Install Frontend Dependencies

Still in Terminal/Command Prompt, type:

```bash
cd frontend
npm install
```

**What's happening:**
- `cd frontend` = Go into the frontend folder
- `npm install` = Downloads ~400 packages (takes 3-5 minutes)
- You'll see lots of lines scrolling - that's normal!
- Wait for it to finish (when you see a new prompt line)

---

## Step 6: Install Backend Dependencies

In a **NEW** Terminal/Command Prompt window (don't close the first one!):

**For Windows:**
1. Press `Windows Key + R`
2. Type `cmd`
3. Press Enter

**For Mac:**
1. Press `Cmd + Space`
2. Type "Terminal"
3. Press Enter

Now type:

```bash
cd Desktop
cd grocery-price-compare
cd worker
npm install
```

Wait for it to finish (~2 minutes).

---

# PART 4: Run Your App (5 minutes)

## Step 7: Start the Frontend

In your **first Terminal** (where you installed frontend):

```bash
npm run dev
```

You should see:
```
> next dev

  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
```

**Keep this terminal open!** Don't close it.

---

## Step 8: Start the Backend

In your **second Terminal** (where you installed worker):

```bash
npm run dev
```

You should see:
```
 ⛅ wrangler 3.26.0
 ✨ Compiled successfully.
 ⭐ Listening on http://0.0.0.0:8787
```

**Keep this terminal open too!**

---

## Step 9: Open Your App

1. Open your web browser (Chrome, Safari, Firefox, Edge)
2. Go to: **http://localhost:3000**

You should see your app! 🎉

---

# TESTING YOUR APP

## Try These Actions:

**Test 1: Add a Product Manually**
1. Type in the text box: `Milk x2`
2. Click the `+` button
3. Type: `Eggs`
4. Click the `+` button again
5. You should see 2 items listed below

**Test 2: Remove a Product**
1. Click the X next to "Eggs"
2. It should disappear

**Test 3: Upload a CSV File**
1. Create a text file on your computer:
   ```
   Milk x2
   Bread x1
   Butter x3
   ```
2. Save it as `shopping.csv`
3. Click "Upload CSV or TXT"
4. Select your file
5. Items should be added to your list

**Test 4: Click Compare Prices**
1. You have products listed
2. Click "Compare Prices" button
3. It will try to fetch prices (will show "N/A" for now since scrapers aren't implemented)

---

# PART 5: Deploy to the Internet (Optional - but recommended)

Right now your app only works on your computer. Let's make it live online!

## Step 10: Deploy Frontend to Vercel (3 minutes)

Vercel is a free hosting service.

1. Go to https://vercel.com
2. Click "Sign Up" 
3. Click "Continue with GitHub"
4. Authorize Vercel to access your GitHub
5. After signing in, click "New Project"
6. Select `grocery-price-compare` from the list
7. In the "Root Directory" dropdown, select `frontend`
8. Scroll down and click "Deploy"

**Wait 1-2 minutes...**

You'll see: "Congratulations! Your project has been successfully deployed"

Your frontend is now live at a URL like: `https://grocery-price-compare.vercel.app`

---

## Step 11: Deploy Backend to Cloudflare (3 minutes)

Cloudflare is another free hosting service for the backend.

1. Go to https://dash.cloudflare.com
2. Click "Sign up" (or sign in if you have an account)
3. Create an account (email, password, accept terms)
4. Go to https://workers.cloudflare.com
5. Click "Create a Worker"
6. Give it a name: `grocery-price-compare-worker`
7. Click "Deploy"

Your backend is now live at: `https://grocery-price-compare-worker.workers.dev`

---

## Step 12: Connect Frontend to Backend (2 minutes)

1. Go back to https://vercel.com/dashboard
2. Find your `grocery-price-compare` project
3. Click on it
4. Click "Settings"
5. Click "Environment Variables" (in left menu)
6. Click "Add New"
7. Fill in:
   - **Name:** `NEXT_PUBLIC_WORKER_URL`
   - **Value:** `https://grocery-price-compare-worker.workers.dev`
8. Click "Save"
9. Go to "Deployments"
10. Find the latest deployment
11. Click the 3-dots menu
12. Click "Redeploy"

Wait 1 minute for it to redeploy.

Now your app is fully online! 🚀

Visit: **https://grocery-price-compare.vercel.app**

---

# PART 6: Next Steps (Optional)

Once you have your app running locally and deployed, the last step is implementing the **scrapers** to get real prices.

But first, let's make sure everything works!

---

# ⚠️ TROUBLESHOOTING

### "npm command not found"
- **Solution:** Node.js didn't install properly
- Go back to Step 1, reinstall Node.js
- Restart your computer
- Try again

### "Port 3000 already in use"
- **Solution:** Something else is using that port
- Close all other terminals
- Try again
- Or use: `npm run dev -- -p 3001`

### "http://localhost:3000 won't load"
- **Solution:** Make sure `npm run dev` is still running in Terminal
- Check Terminal 1 shows "✨ Listening on http://localhost:3000"

### "Backend shows N/A for all prices"
- **This is normal!** The scrapers aren't implemented yet
- This is expected for now

### "Can't upload CSV file"
- Make sure your file is `.csv` or `.txt` format
- One item per line
- Format: `Milk x2` or just `Milk`

---

# ✅ SUCCESS CHECKLIST

- [ ] Node.js installed
- [ ] Git installed
- [ ] Project downloaded from GitHub
- [ ] Frontend dependencies installed
- [ ] Backend dependencies installed
- [ ] Frontend running on http://localhost:3000
- [ ] Backend running on http://localhost:8787
- [ ] Can add products manually
- [ ] Can upload CSV file
- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Cloudflare
- [ ] Connected Vercel → Cloudflare

---

# 📞 QUICK REFERENCE

**If you get stuck:**
1. Check Troubleshooting section above
2. Make sure both Terminal windows are still open
3. Try closing everything and starting from Step 7 again

**Files you'll work with:**
- `frontend/` = Your website code
- `worker/` = Your backend code
- `docs/DEPLOYMENT.md` = Detailed deployment guide
- `SETUP.md` = More technical setup info

---

# 🎉 YOU'RE DONE!

Your app is now:
- ✅ Running locally on your computer
- ✅ Deployed to the internet
- ✅ Ready for real price scraping

Next phase would be implementing the retailer scrapers (Coles, Woolworths, etc.) to make prices work - but that requires more advanced programming.

**Congratulations! You've successfully deployed a full-stack web application!** 🚀