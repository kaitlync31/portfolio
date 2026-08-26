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
  CaseTable,
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
          breadth of their subscription. I led product discovery and drove
          delivery of Challenges, a 3-day guided experience that helps
          subscribers discover WSJ content and features while building
          habits through daily themed checklist activities.
        </TLDR>

        <CaseStudySection heading="The Problem">
          <p>
            A WSJ subscription gives readers access to far more than news
            articles on their home feed: it includes interactive market
            data, puzzles, exclusive authors, live updates, newsletters, and
            coverage ranging from global affairs to personal wellness. Yet
            our data showed that many subscribers weren&apos;t engaging with
            the full breadth of that value.
          </p>
          <p>
            Through analyzing WSJ&apos;s engagement data, we found that
            subscribers who engaged more broadly and more frequently across
            the WSJ ecosystem tended to have stronger retention. New
            subscribers, in particular, were especially likely to
            experience a significant drop-off in engagement after their
            first week.
          </p>
          <p>This surfaced two related user problems:</p>
          <CaseList
            items={[
              "New subscribers enter with the motivation to build a daily professional habit, but can easily feel overwhelmed by the volume and density of content, making it difficult to establish a consistent routine.",
              "Existing subscribers often settle into narrow routines, using only a fraction of the WSJ ecosystem and missing features and sections that could deepen their engagement, increasing long-term churn risk.",
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
            Before designing the experience, I analyzed products that had
            successfully turned content or learning into recurring habits:
          </p>
          <CaseList
            items={[
              <>
                <span className="text-ink">LinkedIn&apos;s</span>{" "}
                lightweight puzzles create motivation through streaks and
                social sharing while maintaining the platform&apos;s
                professional feel.
              </>,
              <>
                <span className="text-ink">NYT&apos;s Games</span> (Wordle,
                Connections) use short, repeatable formats to turn
                intellectual content into a sticky daily ritual.
              </>,
              <>
                <span className="text-ink">Duolingo&apos;s</span> gamified
                features and streak mechanics motivate continued engagement
                and make learning progress visible.
              </>,
            ]}
          />
          <p>
            The challenge was translating these habit-building mechanics
            into an experience that fit WSJ&apos;s brand as a premium,
            professional, and deeply trusted news source. I needed to
            balance the motivational pull of streaks and gamification with
            the seriousness of WSJ&apos;s journalism and expertise.
          </p>
          <p>
            Rather than creating more content, the goal was to amplify the
            content and features WSJ had already invested in. This made the
            Newsroom a key stakeholder in ensuring the Challenges experience
            aligned with WSJ&apos;s editorial standards and brand voice.
          </p>
          <SubHeading>Who we built for</SubHeading>
          <p>
            Analyzing WSJ&apos;s subscriber segments and behaviors, I chose
            to target three segments with our Challenges experience:
          </p>
          <CaseTable
            columns={["Segment", "Description", "Targeted Challenges"]}
            rows={[
              [
                <span className="text-ink">
                  Next Gen
                  <br />
                  <span className="text-stone-light">
                    Under 30 &amp; Students
                  </span>
                </span>,
                "Ambitious and tech-forward, but often intimidated by dense financial information. Highly responsive to gamification.",
                "Markets 101, World Cup Coverage",
              ],
              [
                <span className="text-ink">
                  Pre-Suites
                  <br />
                  <span className="text-stone-light">
                    Early to Mid Career Professionals
                  </span>
                </span>,
                "Career-driven and status-conscious, seeking a professional edge and credentials.",
                "Navigating the AI Boardroom, Read Like a CEO, Election Debrief",
              ],
              [
                <span className="text-ink">
                  Explorers
                  <br />
                  <span className="text-stone-light">
                    Educated Millennials
                  </span>
                </span>,
                "Higher churn risk; socially motivated and interested in work-life balance and well-rounded intellectual culture.",
                "The Global Reader, The Weekend Detox",
              ],
            ]}
          />
          <p>
            I deprioritized the Current Core (40% of subscribers, already
            loyal) and C-Suite (time-poor and already locked into routines),
            as they were less likely to benefit from a habit-formation
            intervention. I reasoned that targeting Next Gen, Pre-Suites,
            and Explorers early on would eventually convert them into part
            of the Current Core or C-Suite.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="The Solution">
          <p>
            Challenges are 3-day curated learning tracks, each centered on a
            specific theme, topic, or reporter. Once a challenge is
            activated, users return to the app each day to complete 3–4
            checklist activities that introduce them to different features,
            content, and habits within the app (e.g., adding a stock to
            their watchlist).
          </p>
          <p>
            For the MVP, I scoped the flagship track, &ldquo;Get to Know
            WSJ,&rdquo; an onboarding-style guided discovery experience
            focused on sections and features that had recently launched or
            were consistently underutilized.
          </p>

          <SubHeading>How it works</SubHeading>
          <CaseList
            items={[
              <>
                <span className="text-ink">Entry point:</span> The
                Challenges section is discoverable from the More tab, next
                to Puzzles, building on an entry point subscribers already
                know.
              </>,
              <>
                <span className="text-ink">Challenge selection:</span> Each
                Challenge includes a short description and a &ldquo;Start
                Challenge&rdquo; CTA that activates the track.
              </>,
              <>
                <span className="text-ink">Persistent floating icon:</span>{" "}
                Once active, a small icon follows the user across the app
                and expands into a bottom sheet, keeping the challenge
                accessible without disrupting the main navigation.
              </>,
              <>
                <span className="text-ink">Daily checklist:</span> Users
                complete 3–4 tasks per day, checking them off individually.
                Tasks intentionally describe an action rather than
                deep-linking directly to a destination (e.g., &ldquo;browse
                the Sections menu and read a story from an unfamiliar
                section&rdquo;). This encourages users to navigate the app
                themselves, building muscle memory to develop lasting
                habits.
              </>,
              <>
                <span className="text-ink">Daily unlock logic:</span>{" "}
                Completing all tasks for a day updates a completion bar at
                the top of the bottom sheet to show progress, and the
                following day&apos;s tasks unlock at 12:00 AM. Missing a day
                doesn&apos;t reset progress, but simply pauses the challenge
                to avoid punishing subscribers with busy or irregular
                schedules.
              </>,
              <>
                <span className="text-ink">Completion:</span> After Day 3,
                the bottom sheet shows a completion screen and the challenge
                moves into a &ldquo;Completed&rdquo; section for the
                subscriber to revisit.
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
            We were given a blank slate to define any new feature from the
            ground up, so we invested heavily in initial research to
            understand how we could align our concept with real business
            objectives and user needs. I collaborated with the data team to
            understand WSJ engagement and churn data, analyzed competitor
            gamification models, and interviewed fellow interns as a proxy
            for our Next Gen user group to test early ideas.
          </p>

          <SubHeading>2. Creating the PRD</SubHeading>
          <p>
            I authored the full PRD, covering business objectives,
            strategic fit, target segments, in-scope and out-of-scope
            decisions, and a phased implementation plan.
          </p>
          <p>
            Getting the scope right was the hardest part of this phase.
            Early concepts included a full quiz engine with wrong-answer
            detection, social sharing graphics, and a &ldquo;Quarterly
            Wrapped&rdquo; insights feature. I made the call to cut all
            three from Phase 1 in favor of a shippable MVP, documenting them
            as future roadmap items and communicating the rationale to my
            co-intern and relevant stakeholders.
          </p>
          <p>Key tradeoff decisions I drove and documented:</p>
          <CaseList
            items={[
              <>
                <span className="text-ink">
                  Honor system over automated tracking for MVP:
                </span>{" "}
                automated task-completion tracking would have required more
                engineering investment than our timeline allowed.
              </>,
              <>
                <span className="text-ink">No hard resets on missed days:</span>{" "}
                prioritized subscriber motivation over rigid streak
                enforcement.
              </>,
              <>
                <span className="text-ink">Quizzes moved out of scope:</span>{" "}
                reduced engineering lift and allowed us to validate the core
                habit loop before adding assessment mechanics.
              </>,
            ]}
          />

          <SubHeading>3. Designing the experience</SubHeading>
          <p>
            I started with a prototype built using Claude Code to
            communicate the experience to stakeholders and gather initial
            feedback. Once the user flow was approved, I designed the full
            mobile UI/UX in Figma — the Challenges entry point, floating
            icon/bottom sheet pattern, checklist states, and completion flow
            — working within WSJ&apos;s existing mobile design system and
            brand guidelines to ensure the feature felt native to the app.
          </p>

          <SubHeading>4. Cross-functional alignment</SubHeading>
          <p>
            Shipping the feature required buy-in and active collaboration
            across five teams:
          </p>
          <CaseList
            items={[
              <>
                <span className="text-ink">
                  WSJ Design &amp; Platform Design:
                </span>{" "}
                design system guidance and UI review
              </>,
              <>
                <span className="text-ink">WSJ Product:</span> business
                alignment and roadmap prioritization
              </>,
              <>
                <span className="text-ink">WSJ Mobile Engineering:</span>{" "}
                building the Beta feature on a tight timeline (2 weeks)
              </>,
              <>
                <span className="text-ink">Newsroom:</span> approving the
                structure and content of challenges to align with newsroom
                strategy
              </>,
              <>
                <span className="text-ink">B2C Data Analytics:</span>{" "}
                analyzing user engagement patterns to inform challenge track
                themes and helping implement Beta success metrics
              </>,
            ]}
          />
          <p>
            I presented the PRD and prototype to stakeholders iteratively,
            incorporating feedback on design, editorial tone, and technical
            feasibility. With a tight deadline, I found that clear
            communication was especially important with the engineering
            team to align on the product vision, resolve blockers, and
            ensure we could ship a working MVP in time for our final
            showcase.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="Outcome">
          <p>
            Challenges shipped into the WSJ Beta app with the &ldquo;Get to
            Know WSJ&rdquo; track fully built. Beyond the shipped MVP, I
            presented success criteria and future roadmap opportunities to
            senior leadership and 30+ stakeholders at our final intern
            showcase, including:
          </p>
          <CaseList
            items={[
              <>
                <span className="text-ink">Social sharing:</span> a
                shareable completion graphic to drive organic visibility
              </>,
              <>
                <span className="text-ink">Automated task tracking:</span>{" "}
                replacing the honor system as engineering capacity allows
              </>,
              <>
                <span className="text-ink">Newsroom CMS tool:</span>{" "}
                enabling editors to dynamically build and publish new tracks
                without engineering support
              </>,
              <>
                <span className="text-ink">Corporate leaderboards:</span>{" "}
                enterprise use cases for business subscribers to boost
                motivation and learning
              </>,
            ]}
          />
          <p>
            We received high interest from the consumer teams including
            brands beyond WSJ (MarketWatch and Barron&apos;s), with
            discussions around potentially implementing Challenges in the
            real WSJ app.
          </p>
        </CaseStudySection>

        <CaseStudyCredits>
          Thanks to Rommel Rojas &amp; Juan Velasquez for their mentorship
          throughout, and to the WSJ Design, Product, Engineering, Newsroom,
          and Analytics teams who made this possible.
        </CaseStudyCredits>
      </main>
      <Footer />
    </div>
  );
}
