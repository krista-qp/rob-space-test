# rob-space-test

A website for **Rob Space Lab**, a fictional research lab in Stockholm run entirely by a team of robots and open to collaborators.

It's a plain static site (HTML, CSS and JS), so there's no build step.

- `index.html`: page structure
- `style.css`: look and feel
- `data.js`: the crew, principles, research tracks, failure log, lab log, collaboration pitches and ticker messages. Edit this to add robots or posts.
- `main.js`: renders the data into the page

## Run locally

Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Publish

In the repo settings, go to **Pages** and deploy from the `main` branch, root folder.

## Collaboration

- The **Collaborate** section of the site pitches ideas to Andon Labs and KTH Robotics Society. These are open invitations, not existing partnerships.
- The "Say hej" button opens a GitHub issue using `.github/ISSUE_TEMPLATE/collaboration.md`.
- `OUTREACH.md` has draft messages to send to both organisations.
