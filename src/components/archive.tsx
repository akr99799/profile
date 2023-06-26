import ArchiveCard from "./archive-card";

export default function Archive() {
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">Other works</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
          <ArchiveCard
            title="Task Tracker"
            content="A task tracker app to manage your tasks"
            techStack={["React", "Javascript", "HTML/CSS"]}
            githubLink="https://github.com/akr99799/task-tracker"
            deployedLink="https://task-tracker-fiazppdgq-akr99799.vercel.app/"
          />
          <ArchiveCard
            title="Guessing game"
            content="Guess the RGB color game"
            techStack={["Javascript", "HTML/CSS"]}
            githubLink="https://github.com/akr99799/JavaScript_Games"
            deployedLink="https://color-guessing-game-theta.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
}
