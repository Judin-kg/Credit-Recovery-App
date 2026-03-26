// import React, { useState } from "react";
// import Sidebar from "./Sidebar";

// const Layout = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div>
//       <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

//       {/* Main Content */}
//       <div className={`main-content ${isOpen ? "shifted" : "full"}`}>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Layout;



import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* ✅ PASS PROPS HERE */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className={`main-content ${isOpen ? "shifted" : "full"}`}>
        {children}
      </div>
    </>
  );
};

export default Layout;