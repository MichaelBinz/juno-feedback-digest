# Contributing to Juno Feedback Digest

Welcome! This guide walks you through contributing your workshop task to the repo via a pull request. No prior Git experience required — Copilot can help you with any of these steps.

---

## Step-by-Step Git Workflow

### 1. Clone the repo (if you haven't already)

```bash
git clone https://github.com/MichaelBinz/juno-feedback-digest.git
cd juno-feedback-digest
```

### 2. Open in VS Code

```
File → Open Folder → select juno-feedback-digest
```

### 3. Create your own branch

Replace `your-name` with your actual name or handle:

```bash
git checkout -b workshop/your-name
```

### 4. Do your task

Pick a task from the [README](./README.md) and complete it using Copilot Chat. Save any new or edited files inside the repo.

### 5. Stage your changes

```bash
git add .
```

### 6. Commit your changes

```bash
git commit -m "Add [your task] — workshop contribution"
```

For example:
```bash
git commit -m "Add feedback analysis summary — workshop contribution"
```

### 7. Push your branch to GitHub

```bash
git push -u origin workshop/your-name
```

### 8. Open a Pull Request

After pushing, click the link that appears in your terminal — or go to the repo on GitHub and click **"Compare & pull request"**.

Fill in a short title and description, then click **"Create pull request"**.

---

## Tips

- **Stuck on a Git command?** Ask Copilot: *"How do I stage and commit my changes in Git?"*
- **Auth issues?** Use VS Code's built-in credential manager or generate a Personal Access Token at `github.com/settings/tokens`
- **Not sure what to write?** Ask Copilot to explain or draft it for you

---

## Branch Rules

- `main` is protected — changes go through PRs only
- `workshop/*` branches are unprotected — you can merge your own PR

---

## Need Help?

Ask a facilitator, or drop a message in `#help-juno` on Slack.
