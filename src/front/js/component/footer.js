import React from "react";

export const Footer = () => {
  return (
    <footer className="footer py-3 text-center bg-dark">
      <div className="row m-0">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
          <a className="float-end" href="#">
            <i
              className="bi bi-arrow-up-circle"
              style={{ fontSize: "2rem", color: "#00A651" }}
            ></i>
          </a>
        </div>
      </div>

      <div className="row m-0">
        <p style={{ color: "#ffffff" }}>
          &copy; 2024 K&BD LOGISTICS INC. &middot;
          <a style={{ color: "#00A651" }} href="#">
            Privacy
          </a>
          &middot;
          <a style={{ color: "#00A651" }} href="#">
            Terms
          </a>
        </p>
      </div>
    </footer>
  );
};

// export const Footer = () => (
//
//   <footer className="footer text-center mt-auto bg-dark fixed-bottom">
//     <div className="row m-0">
//       <div className="col" />
//       <div className="col-6">
//         <a className="navbar-brand" href="#">
//           <img src={artboartLogo} alt="Logo"
//                className="d-inline-block align-text-top" />
//         </a>
//       </div>
//       <div className="col">
//         <p className="float-end p-4">
//           <a style={{ color: "#00A651" }} href="#">
//             Back to top
//           </a>
//         </p>
//       </div>
//     </div>
//     <div className="row m-0">
//       <p style={{ color: "#ffffff" }}>&copy; 2024 K&BD LOGISTICS INC. &middot; <a style={{ color: "#00A651" }}
//                                                                                   href="#">Privacy</a>
//         &middot;
//         <a style={{ color: "#00A651" }} href="#">
//           Terms
//         </a>
//       </p>
//     </div>
//   </footer>
// );



