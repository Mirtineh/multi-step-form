import { FunctionComponent } from "react";
import icon from "../assets/images/icon-thank-you.svg";
interface FinishedProps {}

const Finished: FunctionComponent<FinishedProps> = () => {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-4 py-14">
      <img src={icon} alt="" className="w-14 sm:w-20 h-14 sm:h-20 mb-4" />
      <h1 className="text-marine-blue font-bold text-2xl sm:text-3xl">
        Thank you!
      </h1>
      <p className="text-cool-gray text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform.If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Finished;
