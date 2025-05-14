export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont tracking-wide text-textGreen text-lg font-semibold">
        03. What&apos;s Next?
      </p>
      <h1 className="text-4xl font-titleFont font-bold tracking-wide">
        Get In Touch
      </h1>
      <a
        href="mailto:akr.99799@gmail.com"
        className="px-6 py-4 border rounded-lg mt-6 border-textGreen bg-transparent hover:bg-[#113344] duration-300 text-textGreen text-sm tracking-wide"
      >
        Say Hello
      </a>
    </section>
  );
}
