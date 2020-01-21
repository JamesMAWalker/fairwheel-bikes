const INITIAL_STATE = {
  sections: [
    {
      title: "wheels",
      imageUrl: "https://bit.ly/2RdbctG",
      id: 1,
      linkUrl: "shop/wheels"
    },
    {
      title: "drivetrain//brakes",
      imageUrl: "https://bit.ly/2rb94dc",
      id: 2,
      linkUrl: "shop/drivetrainbrakes"
    },
    {
      title: "cockpit//saddles",
      imageUrl: "https://bit.ly/2LqfR9O",
      id: 3,
      linkUrl: "shop/cockpitsaddles"
    },
    {
      title: "frames//forks",
      imageUrl: "https://bit.ly/2DT5DKU",
      size: "large",
      id: 4,
      linkUrl: "shop/framesforks"
    },
    {
      title: "accessories",
      imageUrl: "https://bit.ly/388ybxM",
      size: "large",
      id: 5,
      linkUrl: "shop/accessories"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;