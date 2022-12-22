import { FunctionComponent } from "react";
import Content from "./Content";
import Input from "./Input";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  modifyEmail,
  modifyName,
  modifyPhone,
  selectUser,
} from "../store/plans";

interface PersonalInfoProps {}

const PersonalInfo: FunctionComponent<PersonalInfoProps> = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  return (
    <>
      <Content
        header="Personal Info"
        description="Please Provide your name, email address, and phone number."
      >
        <Input
          label="Name"
          type="name"
          placeholder="e.g.Stephen King"
          value={user.name}
          onChange={(name) => dispatch(modifyName(name))}
        />
        <Input
          type="email"
          label="Email Address"
          placeholder="e.g.stephenking@lorem.com"
          value={user.email}
          onChange={(email) => dispatch(modifyEmail(email))}
        />
        <Input
          type="phone"
          label="Phone Number"
          placeholder="e.g.+1 234 567 890"
          value={user.phone}
          onChange={(phone) => dispatch(modifyPhone(phone))}
        />
      </Content>
    </>
  );
};

export default PersonalInfo;
