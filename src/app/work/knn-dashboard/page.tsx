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
  PullQuote,
  CaseStudyCredits,
} from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Kentucky Nonprofit Network Dashboard — Kaitlyn Chen",
  description:
    "Leading a nonprofit dashboard project end-to-end to increase accessibility to Kentucky's nonprofit economic data.",
};

export default function KNNDashboard() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <CaseStudyHeader
          eyebrow="Kentucky Nonprofit Network Dashboard"
          title="Leading a nonprofit dashboard project end-to-end to increase accessibility to Kentucky's nonprofit economic data"
          role="Product Manager, Develop for Good"
          team="4 developers, 1 Technical Manager, 1 Team Mentor, partnering with Kentucky Nonprofit Network (KNN)"
          timeline="Oct 2025 – Feb 2026"
        />

        <CaseStudyHero
          label="KNN Dashboard"
          caption="Interactive dashboard embedded in KNN's WordPress site"
        />

        <TLDR>
          Kentucky Nonprofit Network wanted to turn static economic impact
          reports into an interactive public dashboard to empower
          decision-makers. But halfway through the project, with 8 weeks
          left, the team was behind schedule, morale was low, and it
          wasn&apos;t clear if we&apos;d ship in time. I stepped in from
          engineering into the PM role, restructured how the team worked,
          learned a new technical stack, and stayed hands-on in both code and
          design to get us there.
        </TLDR>

        <CaseStudySection heading="The Problem">
          <p>
            KNN needed a clear, accessible way to explore and communicate the
            economic impact of nonprofit organizations across Kentucky, in
            order to increase transparency, strengthen public understanding,
            and empower decision-makers. Originally, this data was stored in
            static and complex reports that were not easily accessible to the
            public. We aimed to create a dashboard for KNN&apos;s WordPress
            website that allows users to filter by region and explore key
            economic, nonprofit, and subsector metrics through dynamic
            visualizations.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="Taking Over as PM">
          <p>
            About halfway into the project, with 8 weeks left, our original
            PM stepped down due to personal circumstances. I stepped in from
            an engineering role to fill the gap, at a point where the team
            was behind schedule and morale was low, with real uncertainty
            about whether we&apos;d finish in time.
          </p>
          <p>
            My first priority was realigning the team on our product goals
            and resetting how we operated. I took the lead to:
          </p>
          <CaseList
            items={[
              "Split the team into frontend/backend teams so work could run in parallel to increase the speed of development.",
              "Reorganized our weekly syncs and added extra mid-week check-ins specifically to surface and resolve blockers faster, as the team had been losing days to blockers that sat unaddressed until the next scheduled meeting.",
              "Re-anchored the team around why the project mattered. Morale was as much a blocker as schedule was, so I spent time reconnecting the team to the actual impact of the work — a tool that would help a nonprofit sector serving communities across the state — to motivate meeting milestones on time.",
            ]}
          />
          <p>
            At the same time, I had to quickly become fluent in a stack
            I&apos;d never worked with before: custom WordPress plugin
            architecture. I couldn&apos;t credibly make scope and technical
            tradeoff calls, or unblock the team, without understanding the
            constraints of the platform we were building on. AI tools and
            YouTube videos proved incredibly handy here in quickly explaining
            concepts and answering any questions that came up.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="Staying Hands-On">
          <p>
            Because I&apos;d started as an engineer on this project, I made a
            deliberate choice not to fully step back from the code once I
            became PM. I set up the plugin&apos;s base architecture and
            template code early on, so the rest of the team had a consistent
            pattern to build against, and I picked up implementation work
            myself when teammates were blocked or short on time. I also
            stayed closely involved in design during the earlier phases of
            the project, working with the team through the Figma wireframes
            and iterations before development ramped up.
          </p>
          <p>
            This multi-faceted role required more time and context-switching,
            but it meant I could unblock technical and design decisions
            immediately instead of routing them through someone else, which
            mattered a lot with our tight deadline.
          </p>

          <SubHeading>Key tradeoff decisions</SubHeading>
          <CaseList
            items={[
              "Cut print export from MVP scope. KNN specifically wanted a way to export dashboard views for print, but it wasn't feasible in the remaining timeline. Rather than dropping it silently, I made sure we delivered documentation for future implementation so KNN's team — or a future Develop for Good cohort — could pick it up.",
              "Parallelized frontend/backend work over sequential handoffs. Faster, but required tighter coordination and more frequent syncs to keep both sides consistent, which is part of why I added the mid-week blocker meetings.",
              "Prioritized shipping a working, polished MVP over expanding feature scope. With morale and schedule both at risk, I chose to protect quality and completion of the core experience — map, filters, KPIs, dynamic visualizations — over adding anything new.",
            ]}
          />
        </CaseStudySection>

        <CaseStudyImage
          label="KNN Dashboard"
          caption="Interactive map, filters, and dynamic visualizations"
        />

        <CaseStudySection heading="The Solution">
          <p>
            The final product is an interactive dashboard, embedded directly
            into KNN&apos;s WordPress site via a custom plugin, that lets
            users:
          </p>
          <CaseList
            items={[
              "Filter economic and nonprofit data by region using an interactive map (Leaflet.js)",
              "Explore dynamic visualizations of economic, nonprofit, and subsector metrics (Chart.js)",
              "Apply multi-select filters to narrow in on the specific data they care about",
              "Pull from a backend built on custom MySQL tables and a PHP-driven API, with frontend assets conditionally loaded only when the dashboard is present, to keep the rest of KNN's site fast.",
            ]}
          />
          <p>
            The plugin-based approach allows the dashboard to be easily
            embedded, maintained, and extended in the future. The frontend
            was built as independent modules — filters, KPIs, charts, and the
            map — coordinated by a central orchestrator through shared
            browser events, so changing a filter updates every visualization
            consistently.
          </p>
          <p className="font-sans text-sm text-stone-light">
            Tech stack: PHP, JavaScript, HTML, CSS, MySQL, Chart.js,
            Leaflet.js, Figma, GitHub, WordPress
          </p>
        </CaseStudySection>

        <CaseStudySection heading="Outcome">
          <p>
            The dashboard shipped live on KNN&apos;s WordPress site, giving
            the public a way to explore the economic impact of over 21,000
            nonprofit organizations across Kentucky by region for the first
            time. Long-term usage metrics aren&apos;t available yet, but the
            tool fulfilled a multi-year goal for KNN and gives policymakers,
            researchers, and community members direct access to data that
            was previously locked in static reports.
          </p>
          <PullQuote attribution="Laura Whitaker, Associate Director, KNN">
            It&apos;s been a dream of ours for several years to build out our
            More Than Charity data project and make it more interactive for
            folks to delve into data at a local and regional level. A
            project like this was simply not doable within our budget, yet
            we knew this tool could help nonprofit leaders share about the
            economic impact of the nonprofit sector, ultimately benefitting
            the communities they serve. Working with Develop for Good has
            allowed us to bring our vision to life.
          </PullQuote>
        </CaseStudySection>

        <CaseStudyCredits>
          Technical Manager: Crystal Reyes · Developers: Victoria Dynak,
          Zimin Qian, Prince Rajodiya, Marwa Zaryab · Team Mentor: Matthew
          Foley · Client Representative: Laura Whitaker
        </CaseStudyCredits>
      </main>
      <Footer />
    </div>
  );
}
