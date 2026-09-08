import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CaseStudyHeader,
  TLDR,
  CaseStudySection,
  CaseStudyImage,
  CaseStudyVideo,
  CaseList,
  SubHeading,
  PullQuote,
  CaseStudyCredits,
} from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Kentucky Nonprofit Network Dashboard — Kaitlyn Chen",
  description:
    "Leading a nonprofit dashboard project end-to-end to make Kentucky's nonprofit economic data more accessible.",
};

export default function KNNDashboard() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <CaseStudyHeader
          eyebrow="Kentucky Nonprofit Network Dashboard"
          title="Leading a nonprofit dashboard project end-to-end to make Kentucky's nonprofit economic data more accessible"
          role="Product Manager + Engineer, Develop for Good"
          team="4 developers, 1 Technical Manager, 1 Team Mentor, partnering with Kentucky Nonprofit Network (KNN)"
          timeline="Oct 2025 – Feb 2026"
        />

        <div className="pt-10">
          <CaseStudyVideo
            src="/work/knn-dashboard-demo.mp4"
            poster="/work/knn-dashboard-demo-poster.jpg"
            caption="Interactive dashboard embedded in KNN's WordPress site"
            aspect="aspect-[1200/706]"
          />
        </div>

        <TLDR>
          KNN had years of nonprofit economic data locked in static reports.
          I helped turn that data into an interactive product, shaping the
          story the dashboard would tell, designing user flows, restructuring
          a struggling team, and staying hands-on in the code to ship the
          MVP on time.
        </TLDR>

        <CaseStudySection heading="The Problem">
          <p>
            Kentucky Nonprofit Network wanted to make its nonprofit economic
            impact data more accessible to the public and more useful to
            advocates and policymakers.
          </p>
          <p>
            The underlying data showed the scale of Kentucky&apos;s
            nonprofit sector across employment, revenue, geography, and
            subsectors, but it lived primarily in static reports that were
            difficult to explore.
          </p>
          <p>
            Our challenge wasn&apos;t simply to visualize the data. We
            needed to decide what story the dashboard should tell and how
            to make that story accessible to a broad audience.
          </p>
          <p>
            Working with KNN&apos;s goals of advocating for the nonprofit
            sector and informing policymakers, we centered the experience
            around a key message:
          </p>
          <PullQuote>
            Nonprofits are not just charitable organizations: they are
            major employers and economic drivers.
          </PullQuote>
          <p>That shaped what we chose to emphasize:</p>
          <CaseList
            items={[
              "Jobs and revenue as prominent KPIs",
              "Revenue sources and nonprofit subsectors",
              "Geographic differences across Kentucky",
              "Interactive exploration rather than requiring users to interpret static reports",
            ]}
          />
        </CaseStudySection>

        <CaseStudySection heading="Designing the Experience">
          <SubHeading>Turning data into a story</SubHeading>
          <p>
            I worked with the team to determine which data points were most
            important to surface and how they should be represented.
          </p>
          <p>
            We used large KPI numbers for the most important statistics,
            charts for deeper exploration, and an interactive map to make
            the geographic dimension of the data immediately accessible.
          </p>
          <p>
            KNN initially preferred using pie charts wherever possible, so
            we incorporated those where they communicated the data
            effectively while also using stacked bar charts for comparisons
            that benefited from showing composition across categories.
          </p>

          <SubHeading>Designing within KNN&apos;s brand</SubHeading>
          <p>
            We also had to work within KNN&apos;s existing visual identity,
            which uses five bright colors rather than a single dominant
            accent color. This created challenges around hierarchy and
            readability, so I experimented with gradients, shading, and
            variations in color intensity to establish clearer visual
            relationships without departing from the existing brand.
          </p>
        </CaseStudySection>

        <CaseStudyImage
          label="KNN Dashboard"
          src="/work/knn-dashboard-figma.png"
          alt="Figma design iterations of the KNN dashboard, showing early wireframes and the more refined Bluegrass Region Economic Impact layout"
          caption="Dashboard design iterations in Figma"
          aspect="aspect-[1234/1389]"
        />

        <CaseStudySection>
          <SubHeading>Resolving an ambiguous filtering experience</SubHeading>
          <p>
            One of the most important design decisions came from the
            geographic filters.
          </p>
          <p>
            The initial design proposed two separate dropdowns: one for
            counties and one for Local Workforce Areas (LWAs). While
            walking through the user flow, I realized this could be
            confusing because LWAs consist of multiple counties. If a user
            selected an LWA and a county independently, it wasn&apos;t
            obvious which selection should take precedence.
          </p>
          <p>
            I raised the issue with the team and client and explored
            several alternatives, including removing one filter entirely
            and creating a hierarchical system.
          </p>
          <p>We ultimately chose a hierarchical filter:</p>
          <PullQuote>
            Selecting an LWA automatically selects its corresponding
            counties, while users can still deselect individual counties.
          </PullQuote>
          <p>
            This preserved the flexibility of county-level exploration
            while giving users a clearer mental model of how the geographic
            hierarchy worked.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="Taking Over as PM">
          <p>
            About halfway through the project, with 8 weeks remaining, our
            original PM stepped down due to personal circumstances. I
            stepped in from an engineering role at a point when the team
            was behind schedule, morale was low, and there was real
            uncertainty about whether we&apos;d ship.
          </p>
          <p>
            My first priority was to change how the team worked, rather
            than simply asking everyone to work faster.
          </p>

          <SubHeading>Restructuring the team</SubHeading>
          <p>
            I split the engineering team into frontend and backend tracks
            so work could happen in parallel rather than through sequential
            handoffs.
          </p>
          <p>
            I also reorganized our weekly syncs and added mid-week
            check-ins specifically focused on blockers. Previously,
            blockers could sit unresolved until the next scheduled meeting,
            costing us valuable development time.
          </p>

          <SubHeading>Protecting the scope</SubHeading>
          <p>
            With eight weeks left, we couldn&apos;t build everything
            originally envisioned.
          </p>
          <p>
            I prioritized the core experience: map, filters, KPIs, and
            dynamic visualizations. I cut the print/export functionality
            from the MVP.
          </p>
          <p>
            Rather than abandoning it entirely, I worked through a
            technical approach for the future implementation and
            documented it for KNN and future teams.
          </p>
          <p>
            This let us protect the quality and completeness of the core
            product while still preserving a path toward the client&apos;s
            longer-term vision.
          </p>

          <SubHeading>Staying hands-on</SubHeading>
          <p>
            I also chose not to completely step away from engineering after
            becoming PM.
          </p>
          <p>
            Because I understood the codebase and technical constraints, I
            could make product and scope decisions with a better
            understanding of what was actually feasible. I set up the
            plugin&apos;s initial architecture and template code, continued
            contributing implementation work, and stepped in when teammates
            were blocked or short on time.
          </p>
          <p>
            At the same time, I stayed involved in the earlier design
            process, working through Figma iterations and translating the
            design into the eventual implementation.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="Engineering the Dashboard">
          <p>
            The final dashboard was delivered as a custom WordPress plugin
            rather than a collection of standalone web files.
          </p>
          <p>
            I developed the architecture using PHP, JavaScript, CSS, MySQL,
            Leaflet.js, and Chart.js.
          </p>
          <p>The frontend was organized into independent modules for:</p>
          <CaseList
            items={[
              "Interactive map",
              "Filters",
              "KPIs",
              "Charts",
              "Subsector visualizations",
            ]}
          />
          <p>
            A central dashboard orchestrator coordinated these modules
            through shared data and browser events. When a user changed a
            filter, the relevant event propagated to the map and
            visualizations so the entire dashboard stayed synchronized.
          </p>
          <p>
            I also handled the less-visible work required to get the
            product from local development to a real WordPress environment,
            including:
          </p>
          <CaseList
            items={[
              "Asset loading and paths",
              "WordPress/PHP compatibility",
              "JavaScript loading order",
              "Caching and minification issues",
              "Data normalization",
              "Responsive styling",
              "Production debugging",
              "Plugin packaging and handoff",
            ]}
          />
          <p>
            The final plugin was packaged for deployment and the codebase
            was made available through GitHub.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="Outcome">
          <p>
            The dashboard launched live on KNN&apos;s WordPress site, giving
            the public an interactive way to explore the economic impact of
            21,000+ nonprofit organizations across Kentucky by region.
          </p>
          <p className="font-serif text-2xl italic text-clay">
            1,100+ visits since launch
          </p>
          <p>
            More importantly, the project turned a multi-year vision for
            KNN&apos;s More Than Charity initiative into a working public
            product that gives policymakers, researchers, nonprofit
            leaders, and community members a more accessible way to engage
            with the data.
          </p>
          <PullQuote attribution="Laura Whitaker, Associate Director, KNN">
            It&apos;s been a dream of ours for several years to build out
            our More Than Charity data project and make it more interactive
            for folks to delve into data at a local and regional level.
          </PullQuote>
        </CaseStudySection>

        <CaseStudyCredits>
          Thank you to the team, Crystal, Victoria, Zimin, Prince, Marwa,
          and Matthew for their hard work and dedication to the project.
          And a huge thank you to our client representative, Laura, for
          remaining so understanding and communicative through the many
          team and project changes.
        </CaseStudyCredits>
      </main>
      <Footer />
    </div>
  );
}
