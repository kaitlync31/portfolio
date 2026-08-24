export default function Intro() {
  return (
    <section className="mx-auto max-w-5xl border-t border-line px-6 py-24">
      <div className="grid gap-10 sm:grid-cols-12">
        <h2 className="sm:col-span-4">
          <span className="font-serif text-3xl italic leading-tight text-ink">
            A few things that make me, me.
          </span>
        </h2>
        <div className="space-y-5 font-sans text-base leading-8 text-stone sm:col-span-7 sm:col-start-6">
          <p>
            I&apos;ve always been drawn to the space between ideas and
            people — what a thing is <em className="text-ink">before</em> it
            exists, and what it takes to make it real. I started in
            journalism and dance: one taught me to find the story, the other
            taught me to put something in a body and put that body on stage.
          </p>
          <p>
            Computer science and cognitive science came later, and they gave
            me a second language for the same question — how people think,
            what they actually need, and how to build something that meets
            them there. Product is where all of it converges.
          </p>
          <p>
            I like understanding how people think, figuring out what should
            exist, and working with others to make it real.
          </p>
        </div>
      </div>
    </section>
  );
}
