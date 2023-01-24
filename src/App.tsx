import { useDispatch, useSelector } from "react-redux";

import type { RootStateType } from "./stores/rootReducer";
import type { UserStateType } from "./stores/user/reducer";
import { clearUser, fetchUserRequest } from "./stores/user/action";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { pending, error, user } = useSelector<RootStateType, UserStateType>(
    ({ userStore }) => userStore
  );

  const onFetchUser = () => {
    dispatch(fetchUserRequest("1"));
  };

  const onClearUser = () => {
    dispatch(clearUser());
  };

  if (error) {
    return <div>Something error</div>;
  }

  return (
    <div className="App">
      {pending ? "Fetching ..." : user?.name ?? "Empty"}
      <div>
        <button onClick={onFetchUser}>fetch</button>
        <button onClick={onClearUser}>clear</button>
      </div>
    </div>
  );
};

export default App;
