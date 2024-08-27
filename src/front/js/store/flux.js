const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      step: 1,
      localStorageCheck: false,
      sending: false,
      finalQuote: [],
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
        oceanComority: "",
        transportationArea: "",
        comments: ""

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

      sendQuote: async () => {
        const finalQuote = getStore().finalQuote;
        console.log("Final-Quote: ", finalQuote);

        const response = await fetch(
          process.env.BACKEND_URL + "api/send-email", {
            method: "POST",
            body: JSON.stringify({ finalQuote }),
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        if (response.status !== 201) {
          console.log("Failed to send email.");
          return false;
        } else {
          console.log("Email send successfully.");
          return true;
        }
      },

      buildFinalQuote: () => {
        const myQuote = getStore().quote;

        getActions().updateFinalQuote("1", "1");
        getActions().updateFinalQuote("Name", myQuote.name);
        getActions().updateFinalQuote("Email", myQuote.email);
        getActions().updateFinalQuote("Address", myQuote.address);
        getActions().updateFinalQuote("Phone", myQuote.phone);

        getActions().updateFinalQuote("2", "2");
        getActions().updateFinalQuote("Origin", `${myQuote.originAddress}, ${myQuote.originZip}, ${myQuote.originCity}, ${myQuote.originState}, ${myQuote.originCountry}`);
        getActions().updateFinalQuote("Destiny", `${myQuote.destinyAddress}, ${myQuote.destinyZip}, ${myQuote.destinyCity}, ${myQuote.destinyState}, ${myQuote.destinyCountry}`);
        getActions().updateFinalQuote("Service", myQuote.service);
        getActions().updateFinalQuote("Movement", myQuote.movement);

        getActions().updateFinalQuote("3", "3");
        if (myQuote.service === "Ground")
          getActions().updateFinalQuote("Category", myQuote.groundCategory);
        if (myQuote.service === "Ocean")
          getActions().updateFinalQuote("Category", myQuote.oceanCategory);

        if (myQuote.service === "Ground" && myQuote.groundCategory === "LTL") {
          getActions().updateFinalQuote("manyDifDimeCargo", myQuote.manyDifDimeCargo);
        } else if (myQuote.service === "Ground" && myQuote.groundCategory === "Full truck") {
          getActions().updateFinalQuote("Equipment", myQuote.groundFullTruckEquipment);
          getActions().updateFinalQuote("Trailer size", myQuote.groundFullTruckTrailerSize);
        } else if (myQuote.service === "Ground" && myQuote.groundCategory === "Drayage") {
          getActions().updateFinalQuote("Equipment", myQuote.groundFullTruckEquipment);
          getActions().updateFinalQuote("Trailer size", myQuote.groundFullTruckTrailerSize);
        }

        if (myQuote.service === "Ocean" && myQuote.oceanCategory === "LTL") {
          getActions().updateFinalQuote("Commodity", myQuote.groundFullTruckEquipment);
          getActions().updateFinalQuote("manyDifDimeCargo", myQuote.manyDifDimeCargo);
        } else if (myQuote.service === "Ocean" && myQuote.oceanCategory === "Full Container") {
          getActions().updateFinalQuote("Transportation Area", myQuote.transportationArea);
        }

        if (myQuote.service === "Air") {
          getActions().updateFinalQuote("Product", myQuote.airProductKind);
          getActions().updateFinalQuote("manyDifDimeCargo", myQuote.manyDifDimeCargo);
        }

        if (myQuote.comments != "") {
          getActions().updateFinalQuote("4", "4");
          getActions().updateFinalQuote("Comments", myQuote.comments);
        }
      },

      updateFinalQuote: (key, value) => {
        const store = getStore();
        const quoteToSend = [...store.finalQuote];
        console.log("Adding to finalQuote:", { [key]: value });
        quoteToSend.push({ [key]: value });
        console.log("Updated finalQuote:", quoteToSend);
        setStore({ finalQuote: quoteToSend });
      },

      cleanFinalQuote: () => {
        setStore({ finalQuote: [] });
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

        if (localStorage.getItem("step")) {
          setStore({ step: localStorage.getItem("step") });
        }
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
        if (localStorage.getItem("groundDrayageEquipmentSize")) {
          setQuote("groundDrayageEquipmentSize",
            localStorage.getItem("groundDrayageEquipmentSize"));
        }
        if (localStorage.getItem("groundDrayageEquipmentType")) {
          setQuote("groundDrayageEquipmentType",
            localStorage.getItem("groundDrayageEquipmentType"));
        }

        setStore({ localStorageCheck: true });
      },
      setStep: (value) => {
        console.log("Step", value);
        setStore({ step: value });
        localStorage.setItem("step", value);
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
