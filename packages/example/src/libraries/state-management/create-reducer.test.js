import { createReducer } from "./create-reducer";

describe("reducer helpers", () => {
  describe("createReducer", () => {
    const initialState1 = {
      field1: "field1",
      field2: ""
    };

    const initialState2 = {
      field1: undefined,
      field3: undefined,
      field4: null,
      field5: "field5"
    };

    const reducer1 = (state = initialState1, action) => {
      switch (action.type) {
        case "UPDATE_FIELD1": {
          return {
            ...state,
            field1: action.value
          };
        }
        default:
          return state;
      }
    };
    const reducer2 = (state = initialState2, action) => {
      switch (action.type) {
        case "UPDATE_FIELD1": {
          return {
            ...state,
            field1: action.value
          };
        }
        case "UPDATE_FIELD5": {
          return {
            ...state,
            field5: action.value
          };
        }
        default:
          return state;
      }
    };

    const config = {
      reducer1,
      reducer2
    };

    it("multi-reducer - initialize", () => {
      const resultReducer = createReducer(config);

      const result = resultReducer(undefined, "@@INITIAL");

      expect(result).toEqual({
        reducer1: initialState1,
        reducer2: initialState2
      });
    });

    it("multi-reducer - update reducer2.field5", () => {
      const resultReducer = createReducer(config);

      const result = resultReducer(undefined, "@@INITIAL");
      const result2 = resultReducer(result, {
        type: "UPDATE_FIELD5",
        value: "UPDATED5"
      });

      expect(result2).toEqual({
        reducer1: initialState1,
        reducer2: {
          ...initialState2,
          field5: "UPDATED5"
        }
      });
    });

    it("multi-reducer - update all field1", () => {
      const resultReducer = createReducer(config);

      const result = resultReducer(undefined, "@@INITIAL");
      const result2 = resultReducer(result, {
        type: "UPDATE_FIELD1",
        value: "UPDATED1"
      });

      expect(result2).toEqual({
        reducer1: {
          ...initialState1,
          field1: "UPDATED1"
        },
        reducer2: {
          ...initialState2,
          field1: "UPDATED1"
        }
      });
    });
  });
});
