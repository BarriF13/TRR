import ReactDom from 'react-dom';
// import GuestList from './state/GuestList';
//import UserSearch from './state/UserSearch';
import UserSearch from './refs/UserSearch';
import EventComponent from './event/EventComponent';

const App = () => {
  return (
    <div>
      <div>
        <EventComponent/>
        <UserSearch />
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
