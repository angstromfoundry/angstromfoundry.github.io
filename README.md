# Ångström Foundry

Current website: https://angstromfoundry.github.io/

This repository contains the current Academic Pages website and its required theme/build dependencies. Historical versions and design previews belong in the private angstromfoundry/angstromfoundry-website repository.

## Editing

- Homepage: `_pages/about.md`
- Research descriptions and order: `_data/research.yml`
- Team: `_pages/team.md`; member profiles in `_members/`
- Research outputs: `_pages/publications.md`
- News: `_pages/news.md`; dated news posts in `_posts/`
- Contact: `_pages/contact.md`
- Navigation: `_data/navigation.yml`
- Sidebar: `_config.yml`
- Custom styles: `assets/css/foundry.css`

Commit changes to main to build and publish with GitHub Actions. The /products/ route redirects to /publications/ for existing links. Patents, Book Chapters, and logo concepts are not published.

## Build and attribution

Requires Ruby 3.3 and Bundler. Run `bundle install`, then `bundle exec jekyll build`. The deployment workflow builds on GitHub. See UPSTREAM.md and LICENSE for Academic Pages attribution; the Manrope font license accompanies its font file.
