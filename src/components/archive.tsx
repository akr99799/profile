import ArchiveCard from "./archive-card";

export default function Archive() {
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">Other works</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
          <ArchiveCard
            title="Task Tracker"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. "
            techStack={["React", "Js"]}
            githubLink=""
            deployedLink=""
          />
          <ArchiveCard
            title="Website"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. "
            techStack={["React", "Js"]}
            githubLink=""
            deployedLink=""
          />
          <ArchiveCard
            title="To-do app"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem."
            techStack={["React", "Js"]}
            githubLink=""
            deployedLink=""
          />
          <ArchiveCard
            title="Gussing game"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. "
            techStack={["React", "Js"]}
            githubLink=""
            deployedLink=""
          />
        </div>
      </div>
    </div>
  );
}
