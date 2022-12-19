import { FunctionComponent } from "react";
import Content from "./Content";
import Input from "./Input";

interface PersonalInfoProps {}

const PersonalInfo: FunctionComponent<PersonalInfoProps> = () => {
  return (
    <>
      <Content
        header="Personal Info"
        description="Please Provide your name, email address, and phone number."
      >
        <Input label="Name" placeholder="e.g.Stephen King" />
        <Input label="Email Address" placeholder="e.g.stephenking@lorem.com" />
        <Input label="Phone Number" placeholder="e.g.+1 234 567 890" />
      </Content>
    </>
  );
};

export default PersonalInfo;
