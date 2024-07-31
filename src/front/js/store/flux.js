const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      quote: {
        name: "",
        phone: "",
        service: "ground",
        movement: "Door-to-Door",
        origin: "",
        originNumber: "",
        originStreet: "",
        originZip: "",
        originCity: "",
        originState: "",
        originCountry: "",
        destiny: "",
        destinyNumber: "",
        destinyStreet: "",
        destinyZip: "",
        destinyCity: "",
        dimensionLong: "",
        dimensionHigh: "",
        dimensionWide: "",
        dimensionWeight: "",
        equipmentType: "",
        equipmentSize: "",
        equipment: "",
        trailerSize: "",
        amount: "1",
        ltlManyDifDimeCargo: []
      },
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white"
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white"
        }
      ]
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      setLtlManyDifDimeCargo: (cargoDimensions) => {
        const store = getStore();
        setStore({
          quote: {
            ...store.quote,
            ltlManyDifDimeCargo: cargoDimensions
          }
        });
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      }
    }
  };
};

export default getState;
