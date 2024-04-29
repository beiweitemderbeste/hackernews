import { useState, useEffect } from "react";

import { fetchTop10BestStoryIDs } from "../utils/utils";
import { fetchTop10TopStoryIDs } from "../utils/utils";
import { fetchTop10NewStoryIDs } from "../utils/utils";

import Navigation from "./Navigation";
import StoryList from "./Story/StoryList";

const Newsfeed = () => {
  const [sortingSelection, setSortingSelection] = useState("top");
  const [fetchingFunction, setFetchingFunction] = useState(() =>
    fetchTop10TopStoryIDs()
  );

  useEffect(() => {
    if (sortingSelection === "new") {
      setFetchingFunction(() => fetchTop10NewStoryIDs());
    } else if (sortingSelection === "best") {
      setFetchingFunction(() => fetchTop10BestStoryIDs());
    } else {
      setFetchingFunction(() => fetchTop10TopStoryIDs());
    }
  }, [sortingSelection]);

  return (
    <>
      <Navigation
        sortingSelection={sortingSelection}
        setSortingSelection={setSortingSelection}
      />
      <StoryList
        fetchingFunction={fetchingFunction}
      />
    </>
  );
};

export default Newsfeed;
