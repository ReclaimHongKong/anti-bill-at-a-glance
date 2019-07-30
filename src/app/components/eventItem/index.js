import React from 'react';
import {
  EventItem,
  TimelineHeader,
  TimelineContent,
  ScarificationHeader,
  ScarificationContent,
  DemandHeader,
  DemandList,
  DemandItem,
  ResponseContent
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
      return (
        <EventItem>
          <ScarificationHeader>{title.toUpperCase()}</ScarificationHeader>
          <ScarificationContent>{content}</ScarificationContent>
        </EventItem>
      )
    case "demands":
      return (
        <EventItem>
          <DemandHeader>{title.toUpperCase()}</DemandHeader>
          <DemandList>
            {demands.map((demand, index) => {
              return (<DemandItem>{demand}</DemandItem>)
          })}
          </DemandList>
        </EventItem>
      )
    case "response":
      //TODO: generate icon
      return (
        <EventItem>
          <ResponseContent>{content}</ResponseContent>
        </EventItem>
      )
    case "timeline":
      return (
        <EventItem>
          {title && <TimelineHeader>{title.toUpperCase()}</TimelineHeader> }
          <TimelineContent>{content}</TimelineContent>
        </EventItem>
      )
    default:
      return null;
  }
}

export default eventItem;
