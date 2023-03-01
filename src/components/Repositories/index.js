import { repositories } from "../../util/data";
import { FolderMinusIcon,FolderOpenIcon } from "@heroicons/react/24/solid";
export const Repositories = () => {
  return (
    <section id="Repositories">
      <div className="container px-5 py-10 mx-auto text-center">
        <FolderMinusIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Repositories
        </h1>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 grid grid-cols-3 gap-3">
          {repositories.map((repository) => (
             <a href={repository.link}>
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded ">
            <div className="flex mb-3">

            <FolderOpenIcon className="text-green-700 w-6 h-6 flex-shrink-0 mr-4" />
                <h5 class="title-font font-medium text-white ">
                  {repository.name}
                </h5>
              </div>
              <p class="mb-3 font-normal text-justify text-gray-500 bg-opacity-40 ">
                {repository.description}
              </p>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                {repository.language}
              </p>

              </div>
              </a>
           
          ))}
        </div>
      </div>
    </section>
  );
};
