let initialState = {
  friends: [
    { id: 1, name: "Andrew" },
    { id: 2, name: "Boris" },
    { id: 3, name: "Lizy" },
  ],
};

const friendsReducer = (state = initialState, action) => {
  return state;
};

export default friendsReducer;
