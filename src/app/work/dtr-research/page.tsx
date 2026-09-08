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
  PullQuote,
  CaseStudyCredits,
} from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "DTR Research — Kaitlyn Chen",
  description:
    "How can AI help experts challenge deeply held assumptions and pursue ideas that disrupt their field?",
};

export default function DTRResearch() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <CaseStudyHeader
          eyebrow="DTR Research"
          title="How can AI help experts challenge deeply held assumptions and pursue ideas that disrupt their field?"
          role="Student Researcher, Design, Technology, and Research (DTR) Lab @ Northwestern University"
          team="Me + one research partner, with support from the DTR community"
          timeline="Jan 2026 – present"
        />

        <CaseStudyHero
          label="DTR Research"
          src="/work/dtr-workflow.png"
          alt="Revised LLM workflow diagram mapping the emotional acknowledgment chatbot's decision tree, from problem framing through field norms, legitimacy criteria, and new solution generation"
          caption="Mappings of user flows and system designs"
          aspect="aspect-[2252/1192]"
        />

        <TLDR>
          In DTR, students independently own their research projects, from
          problem framing and research direction to system design,
          experimentation, and writing. I started this project alone,
          treating innovation as a cognitive problem: experts become so
          familiar with their field&apos;s norms and
          assumptions that they struggle to see beyond them.
        </TLDR>

        <CaseStudySection>
          <p>
            I built an LLM-powered workflow to help experts surface and
            challenge those assumptions. But after my research partner
            joined and we began testing with real experts, we found
            something unexpected: the problem wasn&apos;t just generating
            disruptive ideas. It was being willing to stay with them.
          </p>
          <p>
            Experts could engage with unconventional ideas, but often
            retreated toward familiar approaches because of fear of
            failure, loneliness, and threats to professional identity.
            That finding shifted the direction of the project from helping
            experts <em className="text-ink">generate</em> novel ideas to
            helping them feel safe enough to seriously explore them.
          </p>
          <p>
            We designed and tested three AI-powered systems exploring
            different ways to overcome that barrier: emotional
            acknowledgment, role-distancing, and competition.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="The Problem">
          <p>
            Experts develop deep mental models of how their field works:
            its values, norms, assumptions, and accepted approaches. These
            mental models make them effective at solving problems within
            the field, but can also make radically different approaches
            difficult to see or take seriously.
          </p>
          <p>
            Existing approaches to innovation largely treat this as a
            cognitive problem: give experts new frameworks, prompts, or
            ideation techniques, and
            they should be able to break from convention.
          </p>
          <p>I started with the same assumption.</p>
          <p>
            But disruptive innovation requires more than generating a
            novel idea. It can require temporarily stepping outside a
            professional identity built over years. What happens when the
            barrier isn&apos;t a lack of ideas, but the emotional
            difficulty of taking those ideas seriously?
          </p>
          <p>That became the question driving the second phase of my research:</p>
          <PullQuote>
            How can AI create the conditions that help experts stay with a
            disruptive idea long enough to discover whether it has value?
          </PullQuote>
        </CaseStudySection>

        <CaseStudySection heading="How the Direction Evolved">
          <SubHeading>Quarter 1 — Cognitive barriers</SubHeading>
          <p>
            I initially hypothesized that experts struggle to innovate
            because they don&apos;t recognize the norms constraining their
            thinking.
          </p>
          <p>I designed an LLM workflow that guided users through:</p>
          <p className="text-ink">
            Problem → Existing approaches → Field norms → Legitimacy
            criteria → Challenge norms → Generate alternatives
          </p>
          <p>
            Rather than simply asking an LLM for ideas, the system helped
            users identify the assumptions behind their field&apos;s
            existing approaches and explore what might happen if those
            assumptions were challenged.
          </p>
          <p>
            I ran a preliminary self-study on a persistent CS education
            problem: increasing students&apos; use of AI to complete
            programming assignments.
          </p>
          <p>In roughly the same one-hour period:</p>
          <CaseTable
            columns={["Condition", "Approaches", "Norms", "Legitimacy Criteria", "Solutions"]}
            rows={[
              ["Without AI", "3", "2", "1", "2"],
              ["With structured LLM workflow", "5", "5", "6", "5"],
            ]}
          />
          <p>
            The LLM-supported process produced greater breadth and depth of
            exploration. It also surfaced perspectives I hadn&apos;t
            considered myself, such as equitable access as a criterion for
            evaluating potential solutions.
          </p>
          <p>
            The result gave me preliminary evidence that structured AI
            could expand the space of ideas. But I hadn&apos;t yet tested
            whether experts would actually pursue those ideas.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="The Pivot">
          <p>
            Once my research partner joined in Quarter 2, we began
            conducting interviews and usability tests with CS education
            professors.
          </p>
          <p>
            The cognitive intervention seemed to work: professors described
            genuinely new ideas surfacing during the sessions.
          </p>
          <p>But we noticed a consistent pattern:</p>
          <PullQuote>
            Experts would engage with a disruptive idea, then retreat
            toward something closer to their existing approach.
          </PullQuote>
          <p>
            Through interviews and observation, we identified emotional
            and identity-related barriers that our original framing
            didn&apos;t address:
          </p>
          <CaseList
            items={[
              <>
                <span className="text-ink">Identity:</span> Challenging a
                field&apos;s assumptions can feel like challenging part of
                one&apos;s professional identity.
              </>,
              <>
                <span className="text-ink">Fear of loneliness:</span> A
                genuinely disruptive idea can feel isolating when no one
                else in the field seems to share it.
              </>,
              <>
                <span className="text-ink">Fear of failure:</span> Taking
                an unconventional idea seriously creates the possibility
                of being visibly wrong or exposing gaps in one&apos;s own
                expertise.
              </>,
            ]}
          />
          <p>This became the turning point of the project.</p>
          <p className="text-ink">
            The problem wasn&apos;t just generating disruptive ideas. It
            was being willing to stay with them.
          </p>
          <p>
            We reframed our approach around an emotion-first question: how
            might AI help experts temporarily separate an idea from
            their professional identity, making it safer to explore?
          </p>
        </CaseStudySection>

        <CaseStudySection heading="Three Design Experiments">
          <p>
            We built three prototypes, each testing a different mechanism
            for reducing emotional or identity-related resistance.
          </p>

          <SubHeading>01 — Emotional Acknowledgment</SubHeading>
          <p>
            <span className="text-ink">Hypothesis:</span> Recognizing
            emotional resistance could help experts feel safer challenging
            their worldview.
          </p>
          <p>
            The chatbot still surfaced field norms and offered &ldquo;what
            if&rdquo; inversions. But when users resisted an idea, the
            system didn&apos;t simply push forward. It acknowledged the
            resistance and asked what might be behind it.
          </p>
          <p>
            <span className="text-ink">Finding:</span> Cognitive
            challenging could surface new ideas, but emotional
            acknowledgment alone wasn&apos;t enough to consistently make
            users pursue genuinely disruptive directions.
          </p>

          <SubHeading>02 — Out There</SubHeading>
        </CaseStudySection>

        <CaseStudyImage
          label="Role-Distancing Prototype"
          src="/work/dtr-role-distancing.png"
          alt="The Out There role-distancing prototype: a screen titled 'Choose a universe to enter' showing five planet cards, each describing a field norm inverted into an alternative universe"
          caption="Out There: the role-distancing prototype"
          aspect="aspect-[2294/1584]"
        />

        <CaseStudySection>
          <p>
            <span className="text-ink">Hypothesis:</span> If an
            unconventional idea felt like something to explore rather than
            something the expert personally believed, they might be more
            willing to take it seriously.
          </p>
          <p>
            <em className="text-ink">Out There</em> placed users in a
            fictional outer-space world where each planet represented an
            inversion of one of their field&apos;s norms.
          </p>
          <p>
            The fictional framing created distance between the user and
            the idea.
          </p>
          <p>
            <span className="text-ink">Finding:</span> Role-distancing
            helped users stick with ideas they would normally dismiss. One
            professor felt less concerned about whether an idea would work
            because it belonged to a fictional world rather than being a
            direct proposal about his own work.
          </p>
          <p>
            But identity and professional authority remained barriers to
            actually adopting the ideas.
          </p>

          <SubHeading>03 — Competitive Debate</SubHeading>
          <p>
            <span className="text-ink">Hypothesis:</span> Defending an
            idea, even one you didn&apos;t choose, could motivate experts
            to engage with its substance rather than immediately reject
            it.
          </p>
          <p>
            Our third prototype turned innovation into a two-player
            debate. Participants generated unconventional ideas and were
            then randomly assigned a position to defend, meaning they
            might have to argue for an idea they hadn&apos;t originally
            proposed.
          </p>
          <p>
            <span className="text-ink">Finding:</span> Competition made
            the interaction more engaging and encouraged participants to
            keep thinking about the idea. Because participants had to
            construct the arguments themselves, the format also preserved
            human agency rather than having the LLM do the innovative
            thinking for them.
          </p>
          <p>
            The debate successfully supported novelty and articulation of
            novelty, although we found less evidence of continued action
            after the session.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="How We Tested">
          <p>
            We conducted 15+ user interviews and usability tests across
            the three prototypes, primarily with CS education professors.
          </p>
          <p>
            Each session consisted of roughly 40–45 minutes of interaction
            followed by 15 minutes of Q&amp;A.
          </p>
          <p>We evaluated each prototype against three outcomes:</p>
          <CaseList
            items={[
              <>
                <span className="text-ink">Novelty:</span> Did the expert
                reach an idea or approach that neither they nor others in
                their field had previously considered?
              </>,
              <>
                <span className="text-ink">Articulation of Novelty:</span>{" "}
                Could they explain why the new idea solved the problem
                differently or better than existing approaches?
              </>,
              <>
                <span className="text-ink">Continuation &amp; Agency:</span>{" "}
                Did they continue thinking about the problem or solution
                after the session and take action toward change?
              </>,
            ]}
          />
          <p>
            These criteria helped us distinguish between generating an
            interesting idea and actually engaging with it deeply enough
            to matter.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="What We Learned">
          <p>
            Our biggest outcome wasn&apos;t a single successful prototype.
            It was a change in how we understood the problem.
          </p>
          <p>We began by treating innovation as a cognitive challenge:</p>
          <p className="text-ink">
            Surface assumptions → Challenge norms → Generate novel ideas
          </p>
          <p>
            Our testing suggested that this is only part of the problem.
            Experts can understand an unconventional idea and even
            recognize its potential value while still resisting it because
            of identity, fear, and uncertainty.
          </p>
          <p>
            This led us toward an emotion-first framework for AI-assisted
            innovation:
          </p>
          <p className="text-ink">Acknowledge → Distance → Invest</p>
          <div className="space-y-4">
            <div>
              <p className="font-serif text-lg italic text-ink">
                Acknowledge resistance
              </p>
              <p>
                Help experts recognize and articulate the emotional
                response to challenging their worldview.
              </p>
            </div>
            <div>
              <p className="font-serif text-lg italic text-ink">
                Create distance
              </p>
              <p>
                Give experts a low-stakes context where an unconventional
                idea doesn&apos;t immediately feel like a judgment of
                their own expertise or identity.
              </p>
            </div>
            <div>
              <p className="font-serif text-lg italic text-ink">
                Encourage investment
              </p>
              <p>
                Give experts a reason to stay with an idea, defend it, and
                explore its implications long enough to determine whether
                it has value.
              </p>
            </div>
          </div>
          <p>The broader design principle we&apos;re exploring is:</p>
          <PullQuote>
            AI may be most useful not when it generates the innovation for
            experts, but when it creates the conditions that help experts
            generate, explore, and defend their own ideas.
          </PullQuote>
        </CaseStudySection>

        <CaseStudySection heading="Outcome &amp; What's Next">
          <p>
            By June, we&apos;d co-authored a first draft of a paper
            proposing an emotion-first framework for AI-assisted
            innovation tools.
          </p>
          <p>
            I&apos;m continuing the project by exploring how the three
            mechanisms could be combined into a single cohesive experience
            and by planning larger-scale testing of the resulting system.
          </p>
          <p>
            Our goal is to further validate the framework and eventually
            submit the work to a major HCI conference.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="Reflections">
          <SubHeading>
            Research means being willing to change the question.
          </SubHeading>
          <p>
            I entered DTR believing the problem was primarily cognitive.
            Real users showed me that this was only part of the story. The
            most valuable finding came from paying attention to moments
            that didn&apos;t fit my original hypothesis.
          </p>

          <SubHeading>Define success before you test.</SubHeading>
          <p>
            Early on, I focused heavily on whether the system could
            generate novel ideas. Over time, I learned to distinguish
            between generating an idea, recognizing its value, and
            actually continuing to pursue it.
          </p>

          <SubHeading>
            Real users reveal problems you can&apos;t anticipate yourself.
          </SubHeading>
          <p>
            Self-testing helped me iterate quickly, but working with real
            experts revealed emotional barriers I hadn&apos;t considered.
            Watching hesitation, body language, and off-script reactions
            became just as important as what participants explicitly told
            us.
          </p>
        </CaseStudySection>

        <CaseStudyCredits>
          Thank you to my research partner, Ilya Solovjov, for constantly
          challenging my assumptions and bringing a fresh perspective to
          the project, and to our advisor, Haoqi Zhang, for creating a
          space where exploration, creativity, and self-confrontation are
          encouraged. I&apos;m endlessly grateful to them and to the rest
          of the DTR community for making this research possible.
        </CaseStudyCredits>
      </main>
      <Footer />
    </div>
  );
}
