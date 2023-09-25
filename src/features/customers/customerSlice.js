// --------------INITIAL STATE-------------

const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

// --------------REDUCERS-------------------

const customerReducer = (state = initialStateCustomer, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
};

// ---------------ACTION CREATORS-----------------------

export const createCustomer = (fullName, nationalId) => {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
};

export const updateName = (fullName) => {
  return { type: "account/updateName", payLoad: fullName };
};

export default customerReducer;
