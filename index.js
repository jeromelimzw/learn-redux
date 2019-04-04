const redux = require("redux");
const createStore = redux.createStore;
const initialState = { counter: 0, todolist: [] };

//Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return { ...state, counter: state.counter + 1 };
    case "ADD_COUNTER":
      return { ...state, counter: state.counter + action.value };
    case "ADD_TODO":
      return { ...state, todolist: [...state.todolist, action.todo] };
  }

  return state;
};

// Store
const store = createStore(rootReducer);

//Subscription
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

//Action dispatcher
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 20 });
store.dispatch({ type: "ADD_TODO", todo: "new todo" });
store.dispatch({ type: "ADD_TODO", todo: "second todo" });
store.dispatch({ type: "ADD_COUNTER", value: 5 });
console.log("[FINAL]:", store.getState().counter);
