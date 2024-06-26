import { Flex } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "20px 0" }}>
      <div className="container">
        <Flex justify="space-between">
          <Link to="/">Iphone.M</Link>

          <Flex gap={10}>
            <Link to="/">Home</Link>
            <Link to="/product/create">Add product</Link>
          </Flex>
        </Flex>
      </div>
    </header>
  );
}

export default Header;
