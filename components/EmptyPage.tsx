export function EmptyPage({ title }: { title: string }) {
  return (
    <section className="flex min-h-screen flex-col justify-end bg-paper px-[4vw] pb-[8vh] pt-[18vh]">
      <h1 className="display text-[clamp(56px,16vw,240px)]">{title}</h1>
    </section>
  );
}
