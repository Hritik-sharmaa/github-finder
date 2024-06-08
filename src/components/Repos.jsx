import React from "react";

const Repos = ({ repos }) => {
  return (
    <>
      {repos.map((repo, index) => (
        <div key={index} className="p-3 leading-8">
          <a
            href={repo.html_url}
            target="_blank"
            className="text-blue-500 break-words font-semibold hover:underline">
            {repo.full_name}
          </a>
          <div className="flex gap-x-5">
          <h1 className="text-sm font-semibold">{repo.language}</h1>
          <h1 className="text-sm font-semibold">Fork: {repo.forks}</h1>
            <h1 className="text-sm font-semibold">Star: {repo.stargazers_count}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default Repos;
