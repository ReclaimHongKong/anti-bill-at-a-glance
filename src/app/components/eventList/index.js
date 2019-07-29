import React from 'react';
import { EventList, Day, Side, Content, Month } from './index.styles';
import EventItem from '../eventItem';

const eventList = ({
  month,
  events
}) => {
  return (
    <React.Fragment>
    {Object.keys(events).map((date, index) => (
      <EventList key={`eventlist-${index}`}>
        <Side>
          <Day>{date}</Day>
        </Side>
        <Content>
          {events[date].map((event, index) => {
            console.log(event)
            return (<EventItem {...event} key={`item-${index}`} />)
          })}
        </Content>
      </EventList>
    ))}
    </React.Fragment>
  )
}

export default eventList;