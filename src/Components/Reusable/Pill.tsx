import styled from "styled-components";

type IconType =
  | "Text"
  | "Typescript"
  | "React"
  | "Angular"
  | "Nodejs"
  | "Html"
  | "Css"
  | "C#"
  | "Dotnet"
  | "Java"
  | "Spring"
  | "Python"
  | "Azure"
  | "Aws"
  | "Postgres"
  | "MsSql"
  | "Linkedin"
  | "Github";

export const Pill = ({
  icon,
  text,
  clickable = false,
  link,
}: {
  icon: IconType;
  text?: string;
  clickable?: boolean;
  link?: string;
}) => {
  const handleClick = () => {
    if (clickable && link) window.open(link, "_blank");
  };

  return (
    <StyledPill clickable={clickable} onClick={handleClick}>
      {icon !== "Text" && <img src={ResolveIcon(icon)} alt="" />}
      <h2>{icon === "Text" ? text : icon}</h2>
    </StyledPill>
  );
};

const StyledPill = styled.div(({ clickable }: { clickable: boolean }) => ({
  display: "flex",
  "flex-direction": "row",
  "align-items": "center",
  "justify-content": "space-evenly",
  padding: "0.5em 0",
  "border-radius": "1em",
  "background-color": "#0000af",
  margin: "0 0.5em",
  width: "14em",
  "user-select": "none",
  transition: "width 0.5s ease-in-out",

  "&:hover": {
    width: "15em",
    transition: "width 0.5s ease-in-out",
    cursor: clickable ? "pointer" : "default",
    opacity: clickable ? 0.9 : 1,
  },

  img: {
    width: "3em",
    height: "3em",
  },
}));

export const ResolveIcon = (icon: IconType) => {
  switch (icon) {
    case "Typescript":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg";
    case "React":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
    case "Nodejs":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
    case "Html":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
    case "Css":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
    case "C#":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg";
    case "Dotnet":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-plain.svg";
    case "Angular":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg";
    case "Java":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
    case "Spring":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg";
    case "Python":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
    case "Azure":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg";
    case "Aws":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg";
    case "Postgres":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg";
    case "MsSql":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg";
    case "Linkedin":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg";
    case "Github":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
    default:
      return "";
  }
};
