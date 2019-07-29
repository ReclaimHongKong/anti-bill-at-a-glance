import React from 'react';
import {
  EventItem,
  TimelineHeader,
  TimelineContent
} from './index.styles';

const eventItem = ({
  type,
  title,
  content,
  responder,
  demands
}) => {
  // TODO:
  switch (type) {
    case "scarification":
      break;
    case "demands":
      break;
    case "response":
      break;
    case "timeline":
    default:
      return (
        <EventItem>
          <TimelineHeader>{title.toUpperCase()}</TimelineHeader>
          <TimelineContent>{content}</TimelineContent>
        </EventItem>
      )
  }
  return null;
}

export default eventItem;