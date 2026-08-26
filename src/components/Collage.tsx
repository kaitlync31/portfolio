import PlaceholderImage from "./PlaceholderImage";

function Tile({
  label,
  caption,
  className,
  src,
  alt,
}: {
  label: string;
  caption: string;
  className: string;
  src?: string;
  alt?: string;
}) {
  if (src) {
    return (
      <figure className={`relative ${className}`}>
        <div className="h-full w-full overflow-hidden border border-line">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt ?? caption}
            className="h-full w-full object-cover"
          />
        </div>
      </figure>
    );
  }
  return (
    <PlaceholderImage label={label} caption={caption} className={className} />
  );
}

export default function Collage() {
  return (
    <section id="collage" className="mx-auto max-w-5xl px-6 pb-28">
      <div className="grid grid-cols-6 gap-4 sm:grid-cols-12">
        <Tile
          label="WSJ Challenges"
          caption="Guided reading, live in the WSJ app"
          src="/collage/wsj.png"
          className="col-span-6 aspect-[4/3] sm:col-span-7 sm:aspect-auto sm:row-span-2"
        />
        <Tile
          label="Dance"
          caption="Mid-performance, spring showcase"
          src="/collage/dance.jpg"
          className="col-span-6 aspect-[3/4] sm:col-span-5 sm:aspect-auto sm:row-span-3 sm:translate-y-8"
        />
        <Tile
          label="DTR Research"
          caption="Whiteboarding the obstacles to disruptive innovation"
          src="/collage/dtr.jpg"
          className="col-span-3 aspect-square sm:col-span-3"
        />
        <Tile
          label="KNN Dashboard"
          caption="Mapping economic impact by region"
          src="/collage/knn.jpg"
          className="col-span-3 aspect-square sm:col-span-4"
        />
        <Tile
          label="Writing"
          caption="A journal entry, handwritten"
          src="/collage/writing.jpg"
          className="col-span-6 aspect-[5/3] sm:col-span-5 sm:-translate-y-6"
        />
        <Tile
          label="Figma"
          caption="Flow exploration, Coverd"
          className="col-span-6 aspect-[5/3] sm:col-span-7"
        />
      </div>
    </section>
  );
}
