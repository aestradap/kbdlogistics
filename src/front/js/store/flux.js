const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      localStorageCheck: false,
      quote: {
        name: "",
        email:"",
        address:"",
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
        destinyState:"",
        destinyCountry:"",
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
      setAmount: (amount) => {
        const store = getStore();
        setStore({
          quote: {
            ...store.quote,
            amount: amount
          }
        });
      },
      setQuote: (myKey, value) => {
        const store = getStore();
        setStore({
          quote: {
            ...store.quote,
            [myKey]: value
          }
        });
      },
      updateQuoteFromLocalStorage: () => {
        const { setQuote } = getActions();

        if (localStorage.getItem("name")) {
          setQuote("name", localStorage.getItem("name"));
        }
        if (localStorage.getItem("email")) {
          setQuote("email", localStorage.getItem("email"));
        }
        if (localStorage.getItem("address")) {
          setQuote("address", localStorage.getItem("address"));
        }
        if (localStorage.getItem("phone")) {
          setQuote("phone", localStorage.getItem("phone"));
        }
        if (localStorage.getItem("originNumber")) {
          setQuote("originNumber", localStorage.getItem("originNumber"));
        }
        if (localStorage.getItem("originStreet")) {
          setQuote("originStreet", localStorage.getItem("originStreet"));
        }
        if (localStorage.getItem("originZip")) {
          setQuote("originZip", localStorage.getItem("originZip"));
        }
        if (localStorage.getItem("originCity")) {
          setQuote("originCity", localStorage.getItem("originCity"));
        }
        if (localStorage.getItem("originState")) {
          setQuote("originState", localStorage.getItem("originState"));
        }
        if (localStorage.getItem("originCountry")) {
          setQuote("originCountry", localStorage.getItem("originCountry"));
        }
        if (localStorage.getItem("destinyNumber")) {
          setQuote("destinyNumber", localStorage.getItem("destinyNumber"));
        }
        if (localStorage.getItem("destinyStreet")) {
          setQuote("destinyStreet", localStorage.getItem("destinyStreet"));
        }
        if (localStorage.getItem("destinyZip")) {
          setQuote("destinyZip", localStorage.getItem("destinyZip"));
        }
        if (localStorage.getItem("destinyCity")) {
          setQuote("destinyCity", localStorage.getItem("destinyCity"));
        }
        if (localStorage.getItem("destinyState")) {
          setQuote("destinyState", localStorage.getItem("destinyState"));
        }
        if (localStorage.getItem("destinyCountry")) {
          setQuote("destinyCountry", localStorage.getItem("destinyCountry"));
        }

        setStore({ localStorageCheck: true });
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
