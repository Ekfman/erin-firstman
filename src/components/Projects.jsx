import "./projects.css";
import journalImg from "./assets/e-journal_imgs/calendarView.png";

export function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects_container">
        <div className="projects_card">
            <h2>Twitter Clone</h2>
            <p>
              A social media app modeled after X (Twitter), with a personal
              touch.
            </p>
          <button>Soon To Be</button>
        </div>
        <div className="projects_card">
            <h2>Confidant</h2>
            <p>
              An electronic journal where users create
              journal entries and easily find past ones via a calendar.
            </p>
          <button>View Demo</button>
          </div>
        <div className="projects_card">
            <h2>Sticky Situations</h2>
            <p>
              An e-commerce site where users can
              purchase stickers (additional admin capability).
            </p>
          <button>View Demo</button>
        </div>
        <div className="projects_card">
            <h2>The Auction Attic</h2>
            <p>
              A secondhand marketplace for registered users to view items for
              sale and post their own listings.
            </p>
          <button>View Site</button>
        </div>
      </div>
    </div>
  );
}
