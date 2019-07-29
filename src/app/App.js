import React from 'react';
import {
  Application,
  Header,
  Subheader,
  Content,
  Year,
  Month
} from './app.styles';
import EventList from './components/eventList';
import data from './json/history/en-us.json';

function App() {
  console.log(data);
  return (
    <Application className="App">
      <Header>{data.title.toUpperCase()}</Header>
      <Subheader>{data.subtitle.toUpperCase()}</Subheader>
      <Content>
        {Object.keys(data.events).map(year => {
            return (
              <React.Fragment>
                <Year>{year}</Year>
                {Object.keys(data.events[year]).map((month, index) => {
                  return (
                    <React.Fragment>
                      <Month>{month}</Month>
                      <EventList
                        key={`eventlist-${year}-${month}-${index}`}
                        month={month}
                        events={data.events[year][month]}
                      />
                    </React.Fragment>
                  );
                })}
              </React.Fragment>
            )}
        )}
      </Content>
    </Application>
  );
}

export default App;
