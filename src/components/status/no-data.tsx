import React from "react";
import Comment from "../icons/Comment";

const NoData = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 text-muted-foreground">
      <Comment size={80} />
      <p className="text-sm">No content</p>
    </div>
  );
};

export { NoData };
