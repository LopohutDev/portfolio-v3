"use client";

import React from "react";

type Params = {
  params: {
    id: string;
  };
};

const page = ({ params }: Params) => {
  console.log(params);
  return <div>TEST</div>;
};

export default page;
