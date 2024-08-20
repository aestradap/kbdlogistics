const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      localStorageCheck: false,
      quote: {
        name: "",
        email: "",
        address: "",
        phone: "",
        service: "Ground",
        movement: "Door-to-Door",
        origin: "",
        originAddress: "",
        originZip: "",
        originCity: "",
        originState: "",
        originCountry: "",
        destiny: "",
        destinyAddress: "",
        destinyZip: "",
        destinyCity: "",
        destinyState: "",
        destinyCountry: "",
        dimensionLong: "",
        dimensionHigh: "",
        dimensionWide: "",
        dimensionWeight: "",
        groundCategory: "LTL",
        groundLtlAmount: 1,
        groundLtlManyCargoes: false,
        manyDifDimeCargo: [{
          long: "",
          high: "",
          wide: "",
          weight: ""
        }],
        groundFullTruckEquipment: "",
        groundFullTruckTrailerSize: "",
        groundDrayageEquipmentSize: "",
        groundDrayageEquipmentType: "",
        airProductKind: "",
        oceanCategory: "LTL",
        oceanComority:'',
        transportationArea:'',
        comments:''

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
      sendQuote: async () => {
        const myQuote = getStore().quote;
        console.log("MyQuote", myQuote);
        const response = await fetch(
          process.env.BACKEND_URL + "api/send-email", {
            method: "POST",
            body: JSON.stringify(myQuote),
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        if (response.status !== 201) {
          return false;
          console.log("TRUE");
        } else {
          return true;
          console.log("FALSE");
        }


      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      setManyDifDimeCargo: (cargoDimensions) => {
        const store = getStore();
        setStore({
          quote: {
            ...store.quote,
            manyDifDimeCargo: cargoDimensions
          }
        });
      },
      setItemManyDifDimeCargo: (position, key, value) => {
        const store = getStore();
        // Copia el arreglo actual de `manyDifDimeCargo`
        const updatedCargoes = [...store.quote.manyDifDimeCargo];
        // Si la posición es válida y existe un objeto en esa posición
        if (updatedCargoes[position]) {
          // Actualiza el valor específico del objeto en la posición dada
          updatedCargoes[position] = {
            ...updatedCargoes[position],
            [key]: value
          };
          // Actualiza el store con el nuevo arreglo
          setStore({
            quote: {
              ...store.quote,
              manyDifDimeCargo: updatedCargoes
            }
          });
        }
      },
      setAmount: (amount) => {
        const store = getStore();
        setStore({
          quote: {
            ...store.quote,
            groundLtlAmount: amount
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
        if (localStorage.getItem("originAddress")) {
          setQuote("originAddress", localStorage.getItem("originAddress"));
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
        if (localStorage.getItem("destinyAddress")) {
          setQuote("destinyAddress", localStorage.getItem("destinyAddress"));
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
        if (localStorage.getItem("movement")) {
          setQuote("movement", localStorage.getItem("movement"));
        }
        if (localStorage.getItem("service")) {
          setQuote("service", localStorage.getItem("service"));
        }
        if (localStorage.getItem("oceanCategory")) {
          setQuote("oceanCategory", localStorage.getItem("oceanCategory"));
        }

        setStore({ localStorageCheck: true });
      },
      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "api/hello");
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
