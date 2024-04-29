const StoryThumbnail = ({ storyObject }) => {
  return (
      <a href={storyObject.url} target="_blank" rel="noopener noreferrer">
        <img src="https://placehold.co/120x80" width="120" height="80" />
      </a>
  );
};

export default StoryThumbnail;
