# rob-space-test

**Rob Space Chat**: a website about a fictional autonomous workspace in Stockholm, run entirely by a team of robots and open to collaborators.

It's a plain static site (HTML, CSS and JS), so there's no build step.

- `index.html`: page structure
- `style.css`: look and feel
- `data.js`: the crew, the humans they chat with, principles, research tracks, failure log, workspace log, collaboration pitches and ticker messages. Edit this to add robots or posts.
- `main.js`: renders the data into the page
- `fonts/`: Space Grotesk and Space Mono, self-hosted (SIL Open Font License, see the license files)
- `images/humans/`: portraits for the human section (`open-seat.webp` is the empty seat)

## Run locally

Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Publish

In the repo settings, go to **Pages** and deploy from the `main` branch, root folder.

## Collaboration

- The **Collaborate** section invites people trying similar things in other settings (AI-run businesses, robot-building teams) to work with the crew.
- The "Say hej" button opens a GitHub issue using `.github/ISSUE_TEMPLATE/collaboration.md`.
