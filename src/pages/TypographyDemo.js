import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import { loremIpsum } from '../constants';

const TypographyDemo = () => {
  return (
    <div>
      <p>
        <Typography variant="h1">Heading H1</Typography>
        <Typography variant="h2">Heading H2</Typography>
        <Typography variant="h3">Heading H3</Typography>
        <Typography variant="h4">Heading H4</Typography>
        <Typography variant="h5">Heading H5</Typography>
        <Typography variant="h6">Heading H6</Typography>
      </p>
      <p>
        <Typography variant="caption">Caption</Typography>
      </p>
      <p>
        <Typography variant="overline">Overline</Typography>
      </p>
      <Divider variant="middle" />
      <p>
        <Typography variant="h4">Lorem ipsum</Typography>
        <Typography variant="subtitle1">Subtitle 1 / Body 1</Typography>
        <Typography variant="body1">{loremIpsum}</Typography>
      </p>
      <p>
        <Typography variant="h4">Lorem ipsum</Typography>
        <Typography variant="subtitle2">Subtitle 2 / Body 2</Typography>
        <Typography variant="body2">{loremIpsum}</Typography>
      </p>

    </div>
  )
}

export default TypographyDemo;