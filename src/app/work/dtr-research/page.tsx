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
  title: "DTR Research — Kaitlyn Chen",
  description:
    "Understanding the cognitive and emotional barriers that prevent experts from pursuing disruptive innovations.",
};

export default function DTRResearch() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <CaseStudyHeader
          eyebrow="DTR Research"
          title="Understanding the cognitive and emotional barriers that prevent experts from pursuing disruptive innovations, and designing AI-powered tools to help overcome them"
          role="Student Researcher, Design, Technology, and Research (DTR) Lab @ Northwestern University"
          team="Me & research partner, plus the DTR community"
          timeline="Jan 2026 – present"
        />

        <CaseStudyHero
          label="DTR Research"
          caption="Affinity mapping and system prototypes"
        />

        <TLDR>
          In DTR, every aspect of a student&apos;s research project — problem
          framing, research direction, system design, experiments, and
          report-writing — is completely self-directed. I started this
          project alone, treating it as a cognitive problem. My research
          partner and I later found the barrier wasn&apos;t just cognitive,
          but deeply emotional. We built and tested three gamified,
          LLM-powered systems and are working on a paper proposing an
          &ldquo;emotion-first&rdquo; framework for AI-assisted innovation
          tools.
        </TLDR>

        <CaseStudySection heading="The Problem">
          <p>
            Experts that work in a field for an extended amount of time gain
            a deep understanding of the field and how to solve problems
            within it. As they gain more expertise, the values, norms, and
            existing approaches established within the field govern how they
            solve these problems. Although this is useful for some problems,
            others — the ones that require an approach significantly
            deviating from standard field approaches — remain perpetually
            unsolved. Solving them requires experts to innovate disruptively
            within their field. But it&apos;s difficult to disrupt a
            worldview and professional identity that has been defined by the
            values of that same field.
          </p>
          <p>
            Existing approaches to supporting innovation have largely focused
            on the cognitive dimension of this challenge: providing experts
            with new frameworks, prompts, or structured exercises designed to
            help them generate ideas outside their established mental
            models. Brainstorming methods, design thinking workshops, and
            ideation tools assume that if experts are simply given the right
            cognitive scaffolding, they&apos;ll be able to break from
            convention.
          </p>
          <p>
            These approaches largely overlook a more fundamental barrier:
            disruptive innovation often requires experts to temporarily set
            aside a professional identity built over years of interaction
            with their field — and that identity shift is emotionally, not
            just cognitively, difficult. Stepping into unconventional ideas
            can surface fear of failure and loneliness. Recent work in
            gamification and playful systems suggests that a low-stakes space
            to try on new identities and take risks — without the emotional
            weight those actions would carry in real-world contexts — could
            help initiate that shift.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="How the Direction Evolved">
          <SubHeading>Quarter 1 (solo)</SubHeading>
          <p>
            I framed the problem cognitively. My working hypothesis was that
            experts are constrained by field norms they&apos;ve internalized
            so deeply they don&apos;t recognize them as assumptions. I
            designed and built an early version of a chatbot that would
            surface the norms underlying an expert&apos;s approach to a
            problem and challenge them with &ldquo;what if&rdquo; inversions,
            one at a time.
          </p>

          <SubHeading>Quarter 2 (with my research partner)</SubHeading>
          <p>
            Once my partner joined, we started running real interviews and
            usability tests with CS education professors, and the picture
            became more complicated. The cognitive challenging worked
            (professors described genuinely new ideas surfacing), but we
            noticed a consistent pattern: experts would engage with a
            disruptive idea, then quickly retreat to something closer to
            their existing approach. Through interviews, we traced this to
            something the cognitive framing wasn&apos;t addressing at all:
            fear of failure (engaging seriously might expose gaps in their
            own expertise) and fear of loneliness (feeling like the only
            person in their field who&apos;d consider this). Emotional
            stakes, not lack of ideas, were what ultimately made experts
            abandon disruptive directions.
          </p>
          <p>
            This was the pivot point for the whole project: we reframed our
            approach around the idea that emotional support has to precede
            cognitive intervention, not run alongside it as an afterthought.
            A tool that only challenges norms cognitively will get initial
            engagement, but won&apos;t get experts to actually stick with an
            idea long enough to find its value.
          </p>
        </CaseStudySection>

        <CaseStudyImage
          label="DTR — three subsystems"
          caption="Chatbot, role-distancing world, and debate game prototypes"
        />

        <CaseStudySection heading="The Solution">
          <p>
            Based on that reframe, we designed and built three subsystems,
            each targeting the emotional/identity barrier a different way,
            and tested each with real users:
          </p>
          <CaseList
            items={[
              <>
                <span className="text-ink">
                  Emotional Acknowledgment Chatbot:
                </span>{" "}
                surfaces the norms behind a user&apos;s current approach
                and offers &ldquo;what if&rdquo; inversions. When a user
                resists an idea, the system doesn&apos;t argue or move past
                it — it validates the resistance and asks what it&apos;s
                protecting, reframing dismissal as a signal worth examining
                rather than an obstacle to route around.
              </>,
              <>
                <span className="text-ink">
                  Role-Distancing Narrative Tool:
                </span>{" "}
                places the user in a fictional outer-space &ldquo;world&rdquo;
                where one of their field&apos;s norms has been inverted,
                framed as a place to visit rather than a proposal about their
                own work. By letting users explore the idea without it
                threatening their identity, this format got users to
                seriously consider ideas they&apos;d otherwise dismiss
                immediately.
              </>,
              <>
                <span className="text-ink">
                  Competitive Two-Player Debate Game:
                </span>{" "}
                two users (or a user and the AI) generate unconventional
                ideas anonymously; one is randomly assigned as a user&apos;s
                position to defend, detaching the idea from its original
                author before the debate starts. This format kept users
                invested in an idea&apos;s substance even when they
                hadn&apos;t chosen it themselves.
              </>,
            ]}
          />
          <p>
            Each subsystem was intentionally built at a different fidelity
            depending on what it needed to test — a low-fidelity chatbot for
            rapid iteration on emotional-acknowledgment language, a visual
            web interface for the role-distancing tool (since the sense of
            &ldquo;visiting&rdquo; a fictional world depended on it feeling
            explorable, not just conversational), and a chatbot-mediated
            format for the debate game to preserve organic back-and-forth
            between two real players.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="Research Process">
          <p>
            I conducted 15+ user interviews and usability tests across the
            three subsystems, primarily with CS education professors, using
            a consistent testing structure: roughly 40–45 minutes of live
            interaction with a subsystem, followed by a Q&amp;A session. We
            evaluated each session against three outcomes we defined
            ourselves:
          </p>
          <CaseList
            items={[
              <>
                <span className="text-ink">Novelty:</span> The expert reaches
                an idea or approach that neither themselves nor anyone else
                in their field has thought about before.
              </>,
              <>
                <span className="text-ink">Articulation of novelty:</span>{" "}
                The expert is able to articulate why the new idea or approach
                solves the problem in a way that existing approaches do not.
              </>,
              <>
                <span className="text-ink">Continuation / agency:</span> The
                expert continues to dwell on the problem and new solution
                space after the testing session, and ultimately takes action
                to effect change.
              </>,
            ]}
          />
          <p>
            This structure allowed us to compare subsystems directly — for
            instance, the role-distancing format got a professor to seriously
            sit with an idea he&apos;d normally dismiss as &ldquo;too
            idealistic,&rdquo; while the debate format was the only one where
            continued engagement carried past the session itself.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="Outcome (In Progress)">
          <p>
            By June, we&apos;d co-authored a first draft of a paper proposing
            an emotion-first framework for AI-assisted innovation: emotional
            acknowledgment surfaces resistance, role-distancing gives experts
            a safe space to sit with an alternative, and competition creates
            structured investment in defending an idea&apos;s substance.
            These were three complementary mechanisms we created for the same
            underlying goal of temporarily decoupling experts from their
            professional identity long enough to seriously consider
            disruption. Combining the three subsystems into a single
            cohesive experience is the direction I&apos;m continuing to
            pursue as the project moves forward — I hope to eventually
            publish the paper to a large HCI conference.
          </p>
        </CaseStudySection>

        <CaseStudyCredits>
          Research Partner: Ilya Solovjov · Advisor: Haoqi Zhang
        </CaseStudyCredits>
      </main>
      <Footer />
    </div>
  );
}
