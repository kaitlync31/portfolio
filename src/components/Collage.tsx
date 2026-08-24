import PlaceholderImage from "./PlaceholderImage";

export default function Collage() {
  return (
    <section id="collage" className="mx-auto max-w-5xl px-6 pb-28">
      <div className="grid grid-cols-6 gap-4 sm:grid-cols-12">
        <PlaceholderImage
          label="WSJ Challenges"
          caption="Guided reading, live in the WSJ app"
          className="col-span-6 aspect-[4/3] sm:col-span-7 sm:aspect-auto sm:row-span-2"
        />
        <PlaceholderImage
          label="Dance"
          caption="Mid-performance, spring showcase"
          className="col-span-6 aspect-[3/4] sm:col-span-5 sm:aspect-auto sm:row-span-3 sm:translate-y-8"
        />
        <PlaceholderImage
          label="DTR Research"
          caption="Affinity mapping, week three"
          className="col-span-3 aspect-square sm:col-span-3"
        />
        <PlaceholderImage
          label="KNN Dashboard"
          caption="Internal tool, v2"
          className="col-span-3 aspect-square sm:col-span-4"
        />
        <PlaceholderImage
          label="Writing"
          caption="Draft, three revisions deep"
          className="col-span-6 aspect-[5/3] sm:col-span-5 sm:-translate-y-6"
        />
        <PlaceholderImage
          label="Figma"
          caption="Flow exploration, Coverd"
          className="col-span-6 aspect-[5/3] sm:col-span-7"
        />
      </div>
    </section>
  );
}
