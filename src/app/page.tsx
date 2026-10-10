import HeroFlower from "@/components/animations/hero-flower";
import Clock from "@/components/clock";
import ColorSwatches from "@/components/color-swatches";
import NavRail, { EntryList } from "@/components/nav-rail";
import ThemeToggle from "@/components/theme-toggle";
import { TabsProvider } from "@/components/tabs-context";

export default function Home() {
  return (
    <TabsProvider>
      <div className="wrap">
        <div className="grid">
          <div className="main">
            <div className="hero-wrap">
              <div className="hero">
                <h1>
                  <span>jefferson</span>
                  <span>umanzor</span>
                </h1>
              </div>
              <div className="meta">
                <a href="https://github.com/jumanzoru" target="_blank" rel="noopener noreferrer">
                  github
                </a>
                <a href="https://linkedin.com/in/jumanzoru" target="_blank" rel="noopener noreferrer">
                  linkedin
                </a>
                <a href="mailto:jumanzorurrutia@ucsd.edu">email</a>
              </div>
              <div className="visual-col">
                <div className="art-visual" aria-label="Animated ASCII visual">
                  <HeroFlower />
                </div>
                <div className="cap">'find some time to do something'</div>
              </div>
            </div>

            <div className="sec">
              <span className="n">0</span>
              <h2>about</h2>
            </div>
            <p className="about">
              I&apos;m a Computer Science major at UC San Diego focused on software engineering
              and machine learning. Currently, I&apos;m a Software Engineer Intern at the San
              Diego Supercomputer Center, where I get to build on top of some of the fastest
              academic computing infrastructure in the country.
            </p>
            <p className="about">
              I also minor in Mathematics, focused on probability and statistics, and Cognitive
              Science, focused on machine learning and HCI. I care about the full loop: model
              behavior, human decisions, and the systems that connect them.
            </p>

            <EntryList />
          </div>

          <aside className="rail">
            <NavRail />
            <Clock />
            <div className="rail-footer">
              <ColorSwatches />
              <div className="socials">
              <a
                className="social-icon"
                href="https://github.com/jumanzoru"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15 1 1.7 2.6 1.2 3.23.92.1-.72.4-1.2.7-1.47-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.1-2.95 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.07-1.15 3.07-1.15.61 1.53.23 2.67.12 2.95.72.78 1.14 1.78 1.14 3.01 0 4.3-2.62 5.24-5.12 5.51.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
                </svg>
              </a>
              <a
                className="social-icon"
                href="https://linkedin.com/in/jumanzoru"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M20.45 20.45h-3.55v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.66H9.37V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.36 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.14 20.45H3.58V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </a>
              <a
                className="social-icon"
                href="mailto:jumanzorurrutia@ucsd.edu"
                aria-label="Email"
                title="Email"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 5.5h18v13H3zM3.5 6l8.5 7 8.5-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </a>
                <ThemeToggle />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </TabsProvider>
  );
}
