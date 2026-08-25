import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CaseStudyHeader,
  CaseStudyHero,
  TLDR,
  CaseStudySection,
  CaseList,
  SubHeading,
  CaseStudyCredits,
} from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Coverd — Kaitlyn Chen",
  description:
    "Investigating whether Gen Z would trust a gamified personal finance app enough to bet on it.",
};

export default function Coverd() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <CaseStudyHeader
          eyebrow="Coverd"
          title="Investigating whether Gen Z would trust a gamified personal finance app enough to bet on it"
          role="Student Product Consultant"
          team="9 student consultants, partnering with Coverd's two co-founders"
          timeline="8 weeks"
        />

        <CaseStudyHero
          label="Coverd"
          caption="Spend tracking meets games you can bet on"
        />

        <TLDR>
          Coverd is an early-stage app that gamifies personal finance —
          weekly spend tracking layered with games you can bet money on to
          potentially pay off your purchases. As a student product
          consultant, I ran 21 user interviews, helped synthesize findings
          from 100+ across a 9-person team, and reported weekly to Coverd&apos;s
          co-founders on what was working, what wasn&apos;t, and why.
        </TLDR>

        <CaseStudySection heading="What I Did">
          <p>
            Coverd was founded less than six months before I joined, and was
            preparing for a campus launch that fall. My job was to build deep
            expertise in the app&apos;s features and the company&apos;s goals
            around usability, engagement, and retention — then turn that into
            findings the founders could actually act on.
          </p>
          <CaseList
            items={[
              "Conducted 21 user interviews with college students, identifying perceptions of gamified finance, key UX friction points, engagement motivators, and the most marketable features for Gen Z adoption.",
              "Collaborated with a team of 9 other student consultants to synthesize findings from 100+ interviews into UXR reports with clear ideas and recommendations, from new games to mockups with refined user flows.",
              "Presented weekly reports to Coverd's two co-founders, backing insights with direct user examples and iterating solutions based on feedback.",
              "Helped prioritize features and improvements on the product roadmap, and gathered user feedback on newly implemented features to evaluate their effectiveness and inform next iterations.",
            ]}
          />
          <p>
            <a
              href="https://docs.google.com/document/d/1bb6M7J9Vbf6Mc05p4sfQ5Gl-Xvn0cUG4eG7KxNaFJQE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-clay hover:decoration-clay"
            >
              View an example feedback report ↗
            </a>
          </p>
        </CaseStudySection>

        <CaseStudySection heading="Key Takeaways">
          <SubHeading>Framing matters</SubHeading>
          <p>
            Users&apos; perceptions shifted significantly depending on how
            the app was introduced. Framing it as a personal finance app
            created expectations of budgeting tools and financial education,
            which clashed with the gambling elements and led to skepticism.
            Framing it as a gambling app with financial benefits felt more
            aligned with users&apos; expectations and generated greater
            interest.
          </p>

          <SubHeading>Stigma is a major barrier</SubHeading>
          <p>
            Gambling carries a strong stigma, especially among non-gamblers,
            who are highly skeptical of apps involving financial risk and
            &ldquo;free&rdquo; money. Many assume they&apos;ll lose quickly
            or be scammed. For an app like this, it&apos;s crucial that
            payout odds and mechanics are communicated with complete clarity
            to new users.
          </p>

          <SubHeading>Credibility is crucial for adoption</SubHeading>
          <p>
            Because the app involves linking credit cards and risking money,
            users need strong assurances that it isn&apos;t a scam. Building
            trust requires clear and purposeful messaging, visible security
            measures, and social proof — real users winning and sharing
            their experiences.
          </p>

          <SubHeading>Social features are a top priority</SubHeading>
          <p>
            Friendly competition — leaderboards, group play — strongly
            appeals to college students and significantly boosts engagement.
            Social play also accelerates organic growth and campus
            visibility, especially when combined with cash-based referral
            incentives.
          </p>

          <SubHeading>Saving money is highly motivating</SubHeading>
          <p>
            College students, often managing limited income or starting to
            earn independently, are highly conscious of their spending.
            Many users were surprised by their own spending habits once the
            app showed them, and valued insight into weekly trends and
            categories. Engagement with games was highest when tied to
            costly or impulsive purchases users wanted to offset or recover
            from.
          </p>

          <SubHeading>Startup culture</SubHeading>
          <p>
            Working with an early-stage version of the app was both exciting
            and challenging. Major bugs and user hesitancies sometimes led to
            skepticism about its readiness for a campus launch, but I loved
            the fast-paced iteration cycle and the constant push to think
            out-of-the-box. Collaborating directly with the founders gave me
            a strong sense of ownership in the product&apos;s success, and
            seeing my own ideas implemented in the app was genuinely
            rewarding.
          </p>
          <CaseList
            items={[
              "Domain knowledge is crucial — I learned about finance (how credit cards work), gambling (casino layouts, stigma), and risk (payout odds) within a few weeks.",
              "Variety in user personas is critical (non-gamblers vs. experienced gamblers). Users will also give contradictory feedback, but the majority opinion isn't always the best solution.",
              "Edge cases can easily be neglected but pose major risks — one user's lucky $5,000 win broke the backend system, forcing a temporary shutdown.",
              "Differentiation is key. The personal finance app market is crowded, but Coverd's gamification features are genuinely unique — recognizing that was crucial for guiding feature ideation and protecting the app's competitive advantage.",
            ]}
          />
        </CaseStudySection>

        <CaseStudyCredits>
          Thanks to Coverd&apos;s co-founders and the team of 9 student
          consultants I worked alongside.
        </CaseStudyCredits>
      </main>
      <Footer />
    </div>
  );
}
