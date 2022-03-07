import ChurrasContext from "./churras-context";
import { useReducer } from "react";

const defaultChurrasState = {
  churrascos: [],
};

const churrasReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      churrascos: [...state.churrascos, action.churrasco],
    };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      guests: state.guests.filter((guest) => guest.id !== action.id),
    };
  }
  if (action.type === "TOOGLE_guest") {
    return {
      ...state,
      guests: state.guests.map((guest) =>
        guest.id === action.id
          ? {
              ...guest,
              isComplete: !guest.isComplete,
            }
          : guest
      ),
    };
  }

  return defaultChurrasState;
};

const OLDhurrasProvider = (props) => {
  const [churrasState, dispatchChurrasAction] = useReducer(
    churrasReducer,
    defaultChurrasState
  );

  const addGuestToChurrasHandler = (churrasco) => {
    dispatchChurrasAction({
      type: "ADD",
      churrasco: churrasco,
    });
  };

  const removeGuestToChurrasHandler = (churrasco) => {
    dispatchChurrasAction({
      type: "REMOVE",
      churras: churrasco,
    });
  };

  const toogleGuestToChurrasHandler = (id) => {
    dispatchChurrasAction({
      type: "TOOGLE",
      id: id,
    });
  };

  const churrasContext = {
    churrascos: churrasState.churrascos,
    addGuest: addGuestToChurrasHandler,
    removeGuest: removeGuestToChurrasHandler,
    toogleGuest: toogleGuestToChurrasHandler,
  };

  return (
    <ChurrasContext.Provider value={churrasContext}>
      {props.children}
    </ChurrasContext.Provider>
  );
};

export default ChurrasProvider;
