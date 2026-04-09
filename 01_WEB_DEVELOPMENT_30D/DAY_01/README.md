
# 🚀 Day 01: Git & GitHub Foundation

## 🎯 Today's Goal
Master the basics of version control using Git and GitHub. Before writing any web code, learning how to track, save, and collaborate on projects is the non-negotiable first step of the 30-Day Coding Challenge.

---

## 📝 Progression Tracker
*Check these off as you complete your Day 1 tasks:*

- [ ] Install Git on my machine.
- [ ] Create a GitHub account.
- [ ] Create a local repository named `my-30-day-journey`.
- [ ] Make at least 3 commits to the repository.
- [ ] Push the repository live to GitHub.
- [ ] Answer the Day 1 Quiz in a separate `DAY1-NOTES.md` file.

---

## 📚 Git Command Cheatsheet

### 1. Setup & Initialization
Set up your Git identity and start tracking a new project.

```bash
# Globally Set Your User Name
git config --global user.name "Your Name"

# Globally Set Your Email
git config --global user.email "you@example.com"

# Initialize a new Git repository in the current folder
git init 

```

### 2. Track & Save Changes

The core workflow of saving your progress.

```bash
# Show modified and unstaged files
git status

# Stage all current changes
git add .

# Save the staged changes with a descriptive message
git commit -m "Describe what you changed"

```

### 3. Branching Made Easy

Branches let you safely experiment without breaking your main code.

```bash
# Create a new branch
git branch feature-x

# Switch to the new branch (You can also use 'git switch feature-x')
git checkout feature-x

# Merge changes from feature-x into your current branch
git merge feature-x

```

### 4. Connect to Remote Repo

How to get your local code onto GitHub.

```bash
# Link your local repo to a remote GitHub URL
git remote add origin <repo-url>

# Push code to the 'main' branch for the first time
git push -u origin main

# Pull the latest changes from the remote repository
git pull origin main

```

### 5. Revert or Reset Changes

Oops! How to undo mistakes.

```bash
# Revert a modified file back to its last committed state
git restore <file>

# Unstage a file (remove it from the staging area but keep your edits)
git reset HEAD <file>

# Safely undo a specific commit by creating a new opposite commit
git revert <commit-id>

```

---

## 🧠 Day 1 Quiz (Answer in `DAY1-NOTES.md`)

1. What is the difference between `git add` and `git commit`?
2. What is the exact purpose of running `git push origin main`?
3. Why do developers use branching?

> **🔥 Daily Reminder:** Proof of work every single day. If you can't show it, it didn't happen!

```

```