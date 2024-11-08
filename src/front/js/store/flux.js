const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      lng: "en",
      error: false,
      message: null,
      step: 1,
      localStorageCheck: false,
      sending: false,
      sendingResult: "review",
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
        amount: 1,
        manyCargoes: false,
        manyDifDimeCargo: [{
          long: "",
          high: "",
          wide: "",
          weight: ""
        }],
        groundFullTruckEquipment: "Flatbed / Stepdeck",
        groundFullTruckTrailerSize: "20'" ,
        groundDrayageEquipmentSize: "20 feet",
        groundDrayageEquipmentType: "Standard",
        airProductKind: "",
        oceanCategory: "LCL",
        containerSize: "",
        oceanComority: "",
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

        if (response.status !== 200) {
          console.log("Failed to send email.");
          return false;
        } else {
          console.log("Email send successfully.");
          return true;
        }
      },

      sendContact: async (data) => {

        const response = await fetch(
          process.env.BACKEND_URL + "api/send-contact-email", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        if (response.status !== 200) {
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
        getActions().updateFinalQuote("Origin", myQuote.originAddress);
        getActions().updateFinalQuote("Destiny", myQuote.destinyAddress);
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
          getActions().updateFinalQuote("Equipment", myQuote.groundDrayageEquipmentSize);
          getActions().updateFinalQuote("Equipment size", myQuote.groundDrayageEquipmentType);
        }

        if (myQuote.service === "Ocean" && myQuote.oceanCategory === "LCL") {
          getActions().updateFinalQuote("Commodity", myQuote.oceanComority);
          getActions().updateFinalQuote("manyDifDimeCargo", myQuote.manyDifDimeCargo);
        } else if (myQuote.service === "Ocean" && myQuote.oceanCategory === "Full Container") {
          getActions().updateFinalQuote("Container size", myQuote.containerSize);
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
      restoreQuote: () => {
        setStore({
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
            amount: 1,
            manyCargoes: false,
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
            oceanCategory: "LCL",
            containerSize: "",
            oceanComority: "",
            comments: ""

          }
        });
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

      updateStore: (myKey, value) => {
        setStore({ [myKey]: value });
      },

      updateQuoteFromLocalStorage: () => {
        const { setQuote } = getActions();

        if (localStorage.getItem("lng")) {
          const selectedLng = localStorage.getItem("lng");
          setStore({ lng: selectedLng });
        }

        if (localStorage.getItem("step")) {
          const stepNumber = localStorage.getItem("step");
          setStore({ step: parseInt(stepNumber) });
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
        if (localStorage.getItem("destinyAddress")) {
          setQuote("destinyAddress", localStorage.getItem("destinyAddress"));
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
        if (localStorage.getItem("airProductKind")) {
          setQuote("airProductKind", localStorage.getItem("airProductKind"));
        }
        if (localStorage.getItem("groundDrayageEquipmentSize")) {
          setQuote("groundDrayageEquipmentSize",
            localStorage.getItem("groundDrayageEquipmentSize"));
        }
        if (localStorage.getItem("groundDrayageEquipmentType")) {
          setQuote("groundDrayageEquipmentType",
            localStorage.getItem("groundDrayageEquipmentType"));
        }
        if (localStorage.getItem("manyDifDimeCargo")) {
          const dimensionsString = localStorage.getItem("manyDifDimeCargo");
          const dimensionsObject = JSON.parse(dimensionsString);
          setQuote("manyDifDimeCargo", dimensionsObject);
        }
        if (localStorage.getItem("comments")) {
          setQuote("comments",
            localStorage.getItem("comments"));
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

      setLng: (lngValue) => {
        setStore({ lng: lngValue });
        localStorage.setItem("lng", lngValue);
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
