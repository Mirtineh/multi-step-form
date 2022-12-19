import { FunctionComponent } from "react";

interface ContentProps {
  header: string;
  description: string;
  children: React.ReactNode;
}

const Content: FunctionComponent<ContentProps> = ({
  header,
  description,
  children,
}) => {
  return (
    <>
      <h1 className="text-marine-blue font-bold text-2xl sm:text-4xl">
        {header}
      </h1>
      <p className="text-cool-gray mt-3">{description}</p>
      <div className="flex flex-col gap-3 sm:gap-6 mt-5 sm:mt-9">
        {children}
      </div>
    </>
  );
};

export default Content;
