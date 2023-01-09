import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      Header
      <br />
      <Link href="/todo">todo</Link>
    </div>
  );
};

export default Header;
