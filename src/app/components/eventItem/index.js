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
      //TODO:
      return (
        <EventItem></EventItem>
      )
    case "demands":
      return (
        <EventItem></EventItem>
      )
    case "response":
      return (
        <EventItem></EventItem>
      )
    case "timeline":
    default:
      return (
        <EventItem>
          <TimelineHeader>{title.toUpperCase()}</TimelineHeader>
          <TimelineContent>{content}</TimelineContent>
        </EventItem>
      )
  }
}

export default eventItem;
