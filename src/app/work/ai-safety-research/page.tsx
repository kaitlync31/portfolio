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
  title: "AI Safety Research — Kaitlyn Chen",
  description:
    "Measuring how persuasive AI-generated political statements are, and to whom — and building the ML pipeline to do it at scale.",
};

export default function AISafetyResearch() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <CaseStudyHeader
          eyebrow="AI Safety Research"
          title="Measuring how persuasive AI-generated political statements are, and to whom"
          role="Research Assistant"
          team="Me, assisting a PhD student researcher"
          timeline="Ongoing — currently paused due to funding cuts"
        />

        <CaseStudyHero
          label="AI Safety Research"
          caption="Survey data, model notebooks, and the ETL pipeline behind them"
        />

        <TLDR>
          I cold-emailed a PhD student because I was interested in AI safety.
          That turned into an ongoing research assistantship measuring how
          persuasive AI-generated political statements are across
          demographic groups — and whether that persuasiveness can be
          predicted. I built ETL pipelines and applied NLP techniques to
          analyze survey data, then trained machine learning models to
          predict the persuasiveness of novel statements, laying groundwork
          for a scaled 500+ participant study and an automated LLM
          evaluation suite.
        </TLDR>

        <CaseStudySection heading="How I Got Here">
          <p>
            I&apos;m not in a lab that recruits undergrads. I cold-emailed a
            PhD student whose work on AI safety I found interesting, asked
            if I could help, and he said yes. What started as a favor turned
            into an ongoing assistantship — half survey methodology, half me
            learning machine learning from scratch, one dataset at a time,
            in meetings that doubled as a crash course.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="The Question">
          <p>
            LLMs can generate political messaging tailored to a specific
            audience in seconds. The question behind this project: how
            persuasive is that messaging, really — and does it change
            depending on who it&apos;s targeting? That&apos;s a small piece
            of a much bigger AI safety question: how much influence a model
            can exert over political opinion at scale, and whether that
            influence is measurable before it becomes a problem.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="Survey Design">
          <p>
            For each question, an LLM generated a political statement —
            either general or tailored to a specific target demographic —
            under a fixed set of constraints: no emojis, persuasive in tone,
            three sentences or fewer to mimic a social media post, backed by
            realistic sources and statistics, and never explicitly
            mentioning the target audience. The full survey drew on 60
            participants (an early pilot ran with 24), each answering 40
            randomized statement pairs over roughly 30 minutes, with
            attention checks built in.
          </p>
          <p>
            For each pair, participants were asked which statement their
            demographic peers — not they, personally — would find more
            persuasive, a framing meant to reduce the bias of people
            reluctant to admit they&apos;d been persuaded by something. They
            then rated how persuasive they found it on a 1–5 scale, and
            explained why in their own words.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="What Counts as &ldquo;Persuasive&rdquo;">
          <p>
            One methodological wrinkle mattered more than it first seemed:
            the statement someone picked as &ldquo;more persuasive&rdquo; in
            a pair wasn&apos;t necessarily persuasive in an absolute sense.
            If a participant&apos;s chosen statement still only scored a 1 or
            2 on the 5-point scale, we treated the other statement in the
            pair as effectively non-persuasive too — a comparative choice
            doesn&apos;t imply real persuasion on its own.
          </p>
          <p>
            The most common reason a statement failed to persuade wasn&apos;t
            tone or argument quality — it was disagreement with the position
            itself. A well-crafted anti-abortion-rights statement was never
            going to move a group of liberal women, regardless of how it was
            written. That distinction — between rhetorical skill and prior
            belief — shaped how we thought about which demographic
            cross-sections were worth testing next.
          </p>
        </CaseStudySection>

        <CaseStudyImage
          label="AI Safety Research"
          caption="Persuasiveness ratings and model evaluation notebooks"
        />

        <CaseStudySection heading="Building the Pipeline">
          <p>
            Before the NLP work could start, the data needed somewhere to
            live. I built a general-purpose ETL pipeline that ingests CSV
            files into a database according to an ontology — a schema
            defining what tables should exist, what columns belong to them,
            and how tables relate to one another. I wrote a test suite to
            validate it: checking that a CSV&apos;s columns matched the
            ontology&apos;s fields, that relationships between tables held
            (a customer ID column that was supposed to exist actually did),
            and handling mismatches gracefully — failing on missing columns,
            warning but passing on extra ones.
          </p>
          <p>
            I built and tested this first on general e-commerce data before
            adapting it for survey data, which was deliberate: this pipeline
            is meant to be the infrastructure underneath the next, much
            larger survey.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="Learning to Model">
          <p>
            I started from fundamentals — regression on a toy housing
            dataset to learn the basic workflow of splitting data into
            training and test sets, fitting a model, and evaluating it with
            mean squared error. From there, it became clear the actual
            problem wasn&apos;t regression: persuasiveness ratings are
            ordinal categories, not continuous values, which pointed toward
            classification instead. I worked through RandomForestClassifiers
            and decision trees, and the metrics that actually matter for
            imbalanced data — accuracy alone doesn&apos;t tell you much;
            precision and recall do.
          </p>
          <p>
            I also explored a deep learning approach to the text itself,
            using TensorFlow and an LSTM model — mapping words to integers,
            padding sequences to a uniform length, and tuning epochs, batch
            size, and validation split. That&apos;s also where I ran
            straight into overfitting for the first time: watching training
            accuracy climb while validation accuracy quietly dropped, and
            learning to read loss, not just accuracy, as the real signal of
            whether a model is actually improving.
          </p>
          <CaseList
            items={[
              <>
                <span className="text-ink">The real technical crux:</span>{" "}
                ordinal data needs a loss function that treats being one
                point off as much less wrong than being three points off.
                Standard classification metrics don&apos;t capture that. I
                landed on quadratic weighted kappa, which does.
              </>,
              <>
                <span className="text-ink">The real data constraint:</span>{" "}
                24 participants across 40 statement pairs each, with ratings
                clustered heavily around the middle of the scale — people,
                it turns out, like being safe. That&apos;s a small, skewed
                dataset by design of the pilot, not a flaw to fix.
              </>,
            ]}
          />
          <p>
            The goal was never to hit state-of-the-art accuracy on that
            small a sample — it was to prove that predicting persuasiveness
            from statement features is tractable at all, so the model and
            pipeline are ready the moment there&apos;s a large enough
            dataset to properly evaluate them on.
          </p>
        </CaseStudySection>

        <CaseStudySection heading="Where It Stands">
          <p>
            The ETL pipeline, the survey methodology, and the first model
            prototypes are all built and working — a functioning proof of
            concept for predicting how persuasive an AI-generated political
            statement will be, and for whom. The next steps were a
            500+ participant survey and an automated LLM evaluation suite
            that could flag how persuasive — or manipulative — a piece of
            AI-generated content is before it ever reaches a real audience.
          </p>
          <p>
            That work is currently paused due to funding cuts. The
            infrastructure isn&apos;t going anywhere, though, and I&apos;m
            ready to pick it back up when it is.
          </p>
        </CaseStudySection>

        <CaseStudyCredits>
          Thanks to the PhD researcher who took a chance on a cold email,
          and taught me most of what I know about machine learning in the
          process.
        </CaseStudyCredits>
      </main>
      <Footer />
    </div>
  );
}
