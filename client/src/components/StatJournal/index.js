import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

function StatJournal() {
  return (

    <>
      <TextareaAutosize
        rowsMax={4}
        aria-label="maximum height"
        placeholder="Maximum 4 rows"
        defaultValue="2020-01-20
        Today's journal - blah blahhblah"
      />

      <TextareaAutosize
        rowsMax={4}
        aria-label="maximum height"
        placeholder="Maximum 4 rows"
        defaultValue="2020-01-10 
        Today's journal - blah blahhblah"
      />

      <TextareaAutosize
        rowsMax={4}
        aria-label="maximum height"
        placeholder="Maximum 4 rows"
        defaultValue="2020-01-01
        Today's journal - blah blahhblah"
      />
    </>
  );
}

export default StatJournal;