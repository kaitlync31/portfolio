export default function Intro() {
  return (
    <section className="mx-auto max-w-5xl border-t border-line px-6 py-24">
      <div className="grid gap-10 sm:grid-cols-12">
        <h2 className="sm:col-span-4">
          <span className="font-serif text-3xl italic leading-tight text-ink">
            The throughline...
          </span>
        </h2>
        <div className="space-y-5 font-sans text-base leading-8 text-stone sm:col-span-7 sm:col-start-6">
          <p>
            I&apos;ve always identified as a creator. Choreographing dances in
            my living room at seven, laying out pixel-perfect pages for my
            high school newspaper in InDesign, building AI-powered
            experiences for the WSJ this summer — there&apos;s nothing I
            love more than playing with an idea until it comes to life.
          </p>
          <p>
            I used to wonder if I&apos;d grow up to be a writer or a dancer.
            Then I took a computer science class in college and realized
            technology could carry the same creative charge — the same
            ability to move people — if I let it.
          </p>
          <p>
            The thinking I&apos;d built as a dancer and a journalist came
            with me: how do you find out what people actually think and
            need? How do you craft a story, or an experience, that actually
            resonates?
          </p>
        </div>
      </div>
    </section>
  );
}
