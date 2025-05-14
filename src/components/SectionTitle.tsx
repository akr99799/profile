interface Props {
  title: string;
  titleOrder: string;
}

export default function SectionTitle({ title, titleOrder }: Props) {
  return (
    <h2 className="inline-flex items-center text-textLight font-titleFont text-2xl font-semibold">
      <span className="text-base md:text-lg text-textGreen mr-2">
        {titleOrder}.
      </span>
      {title}
      <span className="hidden md:inline-flex ml-6 md:w-60 lgl:w-72 h-[1px] w-72 bg-gray-700" />
    </h2>
  );
}
