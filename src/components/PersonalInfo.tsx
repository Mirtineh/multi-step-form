import { FunctionComponent } from "react";
import Input from "./Input";

interface PersonalInfoProps {}

const PersonalInfo: FunctionComponent<PersonalInfoProps> = () => {
  return (
    <>
      <h1 className="text-marine-blue font-bold text-2xl">Personal Info</h1>
      <p className="text-cool-gray">
        Please Provide your name, email address, and phone number
      </p>
      <div className="flex flex-col gap-3">
        <Input label="Name" placeholder="e.g.Stephen King" />
        <Input label="Email Address" placeholder="e.g.stephenking@lorem.com" />
        <Input label="Phone Number" placeholder="e.g.+1 234 567 890" />
      </div>
    </>
  );
};

export default PersonalInfo;
