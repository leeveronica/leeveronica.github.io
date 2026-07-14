# Working in this repo

- `source` = the actual Gatsby project (default branch). `main` = deploy output that GitHub Pages serves; historically overwritten by `npm run deploy` (`gh-pages -d public`), but the redirect/service-worker fix lives there as hand-written files now.
- Both `main` and `source` have GitHub branch protection requiring a PR + 1 approval, enforced even for admins (`enforce_admins: true`). Never push directly to either branch — always create a feature branch, open a PR with `gh pr create`, and let the user review/merge it. Don't try to self-merge with `--admin`; it will be rejected, and even if it weren't, the user should approve before it lands.
