import { IconCloud } from "./Component/IconCloud";

const Banner_logo = () => {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div className="flex flex-wrap-reverse container">
      <div className="md:w-1/2 w-full">
        <h1 className="text-white">hi</h1>
      </div>
      <div className="md:w-1/2 w-full">
        <div className="relative flex size-full items-center justify-center overflow-hidden">
          <IconCloud images={images} />
        </div>
      </div>
    </div>
  );
};

export default Banner_logo;
