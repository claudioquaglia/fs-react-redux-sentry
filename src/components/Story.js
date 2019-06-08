import React from 'react';
import { ButtonInline } from './Button';
import { doArchiveStory } from '../actions/archive';
import { connect } from 'react-redux';
import './Story.css';

const Story = ({ story, columns, onArchive }) => {
  const {
    title,
    url,
    author,
    num_comments,
    points,
    objectID,
  } = story;

  // NOTE: I like Microsoft, just being cheeky
  const verboten = 'Microsoft'
  if (title && title.indexOf(verboten) > -1) {
    throw Error(`You may not read news about ${verboten}`);
  }
  
  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>
        {author}
      </span>
      <span style={{ width: columns.comments.width }}>
        {num_comments}
      </span>
      <span style={{ width: columns.points.width }}>
        {points}
      </span>
      <span style={{ width: columns.archive.width }}>
        <ButtonInline onClick={() => onArchive(objectID)}>
          Archive
        </ButtonInline>
      </span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id)),
});

export default connect(
  null,
  mapDispatchToProps
)(Story);
