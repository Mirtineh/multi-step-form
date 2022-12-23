import { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  selectPageIndex,
  selectUser,
  setErrors,
  setPageIndex,
} from "../store/plans";
import { UserSchema } from "../validation";

interface NavigationProps {}

const Navigation: FunctionComponent<NavigationProps> = () => {
  const pageIndex = useAppSelector(selectPageIndex);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const handleNext = () => {
    if (pageIndex === 0) {
      if (validate()) dispatch(setPageIndex(pageIndex + 1));
    } else {
      dispatch(setPageIndex(pageIndex + 1));
    }
  };
  const validate = () => {
    const results = UserSchema.safeParse(user);
    if (!results.success) {
      dispatch(setErrors(results.error.flatten()));
      return false;
    }
    dispatch(setErrors(undefined));
    return true;
  };
  return (
    <div className="flex justify-between w-full px-4 py-4 bg-white">
      <button
        className={
          "text-cool-gray hover:text-marine-blue " +
          (pageIndex === 0 ? "invisible" : "")
        }
        onClick={() => dispatch(setPageIndex(pageIndex - 1))}
      >
        Go Back
      </button>
      <button
        className="bg-marine-blue text-white py-2 sm:py-3 px-4 sm:px-5 rounded-md hover:bg-purplish-blue hover:cursor-pointer"
        onClick={handleNext}
      >
        {pageIndex === 3 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default Navigation;
