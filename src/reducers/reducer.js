import { v4 as uuid } from "uuid";

const initialState = {
  users: [
    {
      title: "Physics",
      description: "This note covers of Gravitational force of the earth.",
      id: uuid()
    },
    {
      title: "Mathematics",
      note: "This note was for algebraic epxressions .",
      id: uuid()
    },
  ],
  student: [],
  number: [],
  isLoggedIn: false,
  age: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_NOTE":
  
        return { ...state, users: [...state.users, action.payload] };
  
      case "EDIT_NOTE":
        const users = state.users.map((user) => {
          if (user.id === action.payload.id) return action.payload.newDetails;
          return user;
        });
        return { ...state, users: users };
  
      case "DELETE_NOTE":
      
      const filteredUsers = state.users.filter((user) => {
           if (user.id !== action.payload) return user;
        });
  
        return { ...state, users: filteredUsers };
      default:
        return state;
    }
  };
  
  export default reducer;
  