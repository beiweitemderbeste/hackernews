import { useState, useEffect } from "react";

import { fetchSingleStory } from "../../utils/utils";

import StoryHeader from "./StoryHeader";
import StoryBody from "./StoryBody";
import StoryFooter from "./StoryFooter";
import StoryModal from "./StoryModal";

const Story = ({ storyID }) => {
  const [storyObject, setStoryObject] = useState(null);
  const [showStoryModal, setShowStoryModal] = useState(false);

  useEffect(() => {
    fetchSingleStory(storyID, setStoryObject);
  }, [storyID]);

  return (
    <>
      <li
        onClick={() => setShowStoryModal(true)}
        className="border-b border-gray-700 p-4"
      >
        {storyObject ? (
          <>
            <StoryHeader storyObject={storyObject} />
            <StoryBody storyObject={storyObject} />
            <StoryFooter storyObject={storyObject} />
          </>
        ) : (
          <p className="text-gray-400">Loading...</p>
        )}
      </li>
      <StoryModal
        showStoryModal={showStoryModal}
        setShowStoryModal={setShowStoryModal}
        storyObject={storyObject}
      />
    </>
  );
};

export default Story;
