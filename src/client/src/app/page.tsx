"use client";

import React from "react";
import io from "socket.io-client";

const socket = io("http://localhost:1234");

export default function Home() {
  return (
    <div>
      <iframe src="http://localhost:1234" className="w-screen h-screen" />
    </div>
  );
}
