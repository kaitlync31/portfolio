import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CaseStudyHeader,
  CaseStudyHero,
  TLDR,
  CaseStudySection,
  CaseStudyImage,
  CaseList,
  SubHeading,
  CaseStudyCredits,
} from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "WSJ Challenges — Kaitlyn Chen",
  description:
    "Designing a gamified, habit-building experience to help subscribers discover more of the Wall Street Journal.",
};

export default function WSJChallenges() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <CaseStudyHeader
          eyebrow="WSJ Challenges"
          title="Designing a gamified, habit-building experience to help subscribers discover more of the Wall Street Journal"
          role="Product Design Intern, Dow Jones"
          team="Me & one co-intern, partnering with WSJ Product, Design, Mobile Engineering, Newsroom, and B2C Data Analytics"
          timeline="June 2026 – Aug 2026"
        />

        <CaseStudyHero
          label="WSJ Challenges"
          caption="Product walkthrough — full MVP flow in Figma"
        />

        <TLDR>
          WSJ subscribers have access to a broad range of premium content and
          features, yet many don&apos;t discover or engage with the full
          breadth of what their subscription offers. I led product discovery
          and drove delivery of Challenges, a 3-day guided experience that
          helps subscribers discover WSJ content and features while building
          habits through daily themed checklist activities.
        </TLDR>

        <CaseStudySection heading="The Problem">
          <p>
            A WSJ subscription gives readers access to far more than just
            news articles on their home feed: it includes interactive market
            data, puzzles, live updates, newsletters, and coverage ranging
            from global affairs to personal wellness. Yet, the data showed
            that many subscribers weren&apos;t engaging with that breadth of
            value.
          </p>
          <p>
            Through analyzing WSJ&apos;s engagement data, we found a
            consistent pattern: subscribers who engaged more broadly and more
            frequently across the WSJ ecosystem tended to have stronger
            retention. New subscribers, in particular, showed a notable
            drop-off in engagement after their first week.
          </p>
          <p>This surfaced two related user problems:</p>
          <CaseList
            items={[
              "New subscribers enter with the motivation to build a daily professional habit, but can be easily overwhelmed by the volume and density of content, preventing the formation of a consistent routine.",
              "Existing subscribers often settle into narrow routines, utilizing only a fraction of the WSJ ecosystem and missing features and sections that could deepen their engagement, leading to long-term churn risk.",
            ]}
          />
          <p>
            We therefore reframed the opportunity from a content problem to a
            discovery and habit-formation problem: how might we help
            subscribers build a routine while helping them discover more of
            the value already included in their subscription?
          </p>
        </CaseStudySection>

        <CaseStudySection heading="Strategic Framing">
          <p>
            Before designing the experience, I analyzed other products that
            had successfully turned content or learning into a recurring
            habit:
          </p>
          <CaseList
            items={[
              "LinkedIn's lightweight puzzles create motivation through streaks and social sharing, while retaining the professional feel of the platform.",
              "NYT's Games (Wordle, Connections) — short, repeatable formats turn intellectual content into a daily ritual.",
              "Duolingo's gamified features and streak mechanics reinforce continued engagement and make learning progress visible.",
            ]}
          />
          <p>
            The challenge was translating this underlying habit loop into
            something that fit WSJ&apos;s brand, as a premium, professional,
            and deeply trusted news source. Specifically, I was tasked with
            balancing the cognitive stimulus of streaks and gamification with
            the seriousness of the WSJ&apos;s journalism and expertise. Thus,
            the primary goal of the experience was to amplify the content and
            features that the WSJ had already invested in, and the newsroom
            became a key stakeholder in ensuring the Challenges experience
            aligned to the WSJ&apos;s distinct brand and voice.
          </p>
          <p className="text-ink">
            Main business objectives: increase daily engagement and
            long-term retention.
          </p>

          <SubHeading>Who we built for</SubHeading>
          <p>
            Analyzing the WSJ&apos;s subscriber segments and behaviors, I
            chose to target three segments with our Challenges experience:
          </p>
          <CaseList
            items={[
              <>
                <span className="text-ink">
                  Next Gen (Under 30 &amp; Students):
                </span>{" "}
                Ambitious, tech-forward, but intimidated by dense financial
                information. Highly responsive to gamification. → Targeted
                Tracks: Markets 101, World Cup Coverage
              </>,
              <>
                <span className="text-ink">
                  Pre-Suites (Early to Mid Career Professionals):
                </span>{" "}
                Career-driven, status-conscious, seeking a professional edge
                and credentials → Navigating the AI Boardroom, Read Like a
                CEO, Election Debrief
              </>,
              <>
                <span className="text-ink">
                  Explorers (Educated Millennials):
                </span>{" "}
                High churn risk. Socially motivated, value work-life balance
                and well-rounded intellectual culture. → The Global Reader,
                The Weekend Detox
              </>,
            ]}
          />
          <p>
            I deprioritized the Current Core (40% of subscribers, already
            loyal) and C-Suite (15%, time-poor and already locked into
            routines), as they were less likely to benefit from a
            habit-formation intervention. We reasoned that targeting the Next
            Gen, Pre-Suites, and Explorers early on would eventually convert
            them into part of the Current Core or C-Suite.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="The Solution">
          <p>
            Challenges are 3-day curated learning tracks, each centered on a
            specific theme, topic, or reporter. Once a challenge is
            activated, users return to the app every day to complete a set of
            3–4 checklist activities, which point them to various features,
            content, and habits in the app (e.g. add a stock to your
            watchlist).
          </p>
          <p>
            For the MVP, I scoped the flagship track called &ldquo;Get to
            Know WSJ&rdquo;: an onboarding-style, guided discovery of
            sections and features that were recently pushed out or are
            consistently underutilized.
          </p>

          <SubHeading>How it works</SubHeading>
          <CaseList
            items={[
              <>
                <span className="text-ink">Entry point:</span> The Challenges
                section is discoverable from the More tab, next to Puzzles,
                building on that familiar entry point that subscribers
                already have established.
              </>,
              <>
                <span className="text-ink">Challenge selection:</span> Each
                Challenge includes a short description and a &ldquo;Start
                Challenge&rdquo; CTA that activates the track.
              </>,
              <>
                <span className="text-ink">Persistent floating icon:</span>{" "}
                Once active, a small icon follows the user across the app and
                expands into a bottom sheet, ensuring the challenge is easily
                accessible without disturbing the main navigation.
              </>,
              <>
                <span className="text-ink">Daily checklist:</span> 3–4 tasks
                per day, checked off individually. Tasks intentionally
                describe an action rather than deep-linking directly to it
                (e.g., &ldquo;browse the Sections menu and read a story from
                an unfamiliar section&rdquo;) to encourage users to practice
                navigating through the app themselves in order to build a
                habit.
              </>,
              <>
                <span className="text-ink">Daily unlock logic:</span>{" "}
                Completing all tasks for a day updates a completion bar at
                the top of the bottom sheet for progress tracking. The
                following days&apos; tasks are locked until 12:00 AM the next
                day. Missing a day doesn&apos;t reset progress — it just
                pauses the challenge (auto-archived after 14 days of
                inactivity) to avoid punishing subscribers with busy or
                irregular schedules.
              </>,
              <>
                <span className="text-ink">Completion:</span> After Day 3 is
                finished, the bottom sheet shows a completion screen and the
                challenge moves into a &ldquo;Completed&rdquo; section for
                the subscriber to look back on.
              </>,
            ]}
          />
        </CaseStudySection>

        <CaseStudyImage
          label="Challenges — MVP flow"
          caption="Entry point, floating icon, daily checklist, and completion states"
        />

        <CaseStudySection heading="My Process">
          <SubHeading>1. Discovery &amp; problem framing</SubHeading>
          <p>
            Our managers gave us great freedom to define any feature we
            wanted, so we invested a lot of time into doing thorough initial
            research to understand how we could align our feature with real
            business objectives and user needs. I collaborated with the data
            team to understand WSJ engagement and churn data, carefully
            analyzed competitor gamification models, and interviewed our own
            team of interns as a proxy Next Gen user group to test early
            ideas.
          </p>

          <SubHeading>2. Creating the PRD</SubHeading>
          <p>
            I authored the full PRD: business objectives, strategic fit,
            target segments, in-scope vs. out-of-scope decisions, and a
            phased delivery plan. Getting scope right was the hardest part of
            this phase; early concepts included a full quiz engine with
            wrong-answer detection, social sharing graphics, and a
            &ldquo;Quarterly Wrapped&rdquo; insights feature. I made the call
            to cut all three from Phase 1 in favor of a shippable MVP,
            explicitly logging them as future roadmap items and communicating
            my rationale to my co-intern and interested stakeholders.
          </p>
          <p>Key tradeoff decisions I drove and documented:</p>
          <CaseList
            items={[
              "Honor system over automated tracking for MVP — automated task-completion tracking would have required deeper engineering investment than our timeline allowed.",
              "No hard resets on missed days — protects subscriber motivation over rigid streak enforcement.",
              "Quizzes moved out of scope — reduced engineering lift and let us validate the core habit-loop before adding assessment mechanics.",
            ]}
          />

          <SubHeading>3. Designing the experience</SubHeading>
          <p>
            I started with a prototype using Claude Code to communicate the
            experience to stakeholders for initial feedback. Once the user
            flow was approved, I designed the full mobile UI/UX in Figma —
            the Challenges entry point, the floating icon/bottom sheet
            pattern, checklist states, and the completion flow — working
            within WSJ&apos;s existing mobile design system and brand
            guidelines to ensure the feature felt native to the app.
          </p>

          <SubHeading>4. Cross-functional alignment</SubHeading>
          <p>
            Shipping this required buy-in and active collaboration across 5
            teams:
          </p>
          <CaseList
            items={[
              "WSJ Design & Platform Design — design system guidance and UI review",
              "WSJ Product — business alignment and roadmap prioritization",
              "WSJ Mobile Engineering — built the Beta feature on a tight timeline",
              "Newsroom — approved and shaped the editorial content and track structure",
              "B2C Data Analytics — helped define success metrics and instrumentation",
            ]}
          />
          <p>
            I presented the PRD and prototype to these stakeholders
            iteratively, incorporating feedback on design elements, editorial
            tone, and technical feasibility. With a tight deadline, we found
            that communication was especially crucial with the engineering
            team to align product vision, resolve any blockers, and ensure a
            working MVP could be shipped in time for our final showcase.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="Outcome">
          <p>
            Challenges shipped into the WSJ Beta app with the &ldquo;Get to
            Know WSJ&rdquo; track fully built. Beyond the shipped MVP, I
            presented success criteria and a future roadmap/expansion
            opportunities to senior leadership and 30+ stakeholders at our
            final intern showcase, including:
          </p>
          <CaseList
            items={[
              "Quizzes — multiple-choice checks at the end of a challenge to reinforce learning",
              "Social sharing — a shareable completion graphic to drive organic visibility",
              "Automated task tracking — replacing the honor system as engineering capacity allows",
              "Newsroom CMS tool — letting editors dynamically build and publish new tracks without engineering support, with potential expansion to MarketWatch and Barron's",
              "Corporate leaderboards — enterprise use cases for business subscribers",
            ]}
          />
          <p>
            We received high interest across consumer teams and even brands
            besides the WSJ, with discussion for potential implementation
            into the real WSJ app.
          </p>
        </CaseStudySection>

        <CaseStudyCredits>
          Thanks to Rommel Rojas &amp; Juan Velasquez for mentorship
          throughout, and to the WSJ Design, Product, Engineering, Newsroom,
          and Analytics teams who made this possible.
        </CaseStudyCredits>
      </main>
      <Footer />
    </div>
  );
}
