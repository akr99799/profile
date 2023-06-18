export default function RightSidebar() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4">
      <a href="mailto:akr.99799@gmail.com">
        <p className="text-sm text-textDark rotate-90 tracking-wide w-72 hover:text-textGreen duration-300">
          akr.99799@gmail.com
        </p>
      </a>
      <div className="w-[2px] h-32 bg-textDark" />
    </div>
  );
}
