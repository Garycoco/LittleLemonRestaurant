import {Routes, Route} from 'react-router-dom';
import Main from './Main';
import Bookings from './Bookings';
import Confirmation from './Confirmation';

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element= {
            <Main />
            } />

            <Route path="/booking" element= {
            <Bookings />
            } />

            <Route path="/confirmation" element= {
                <Confirmation />
            } />
        </Routes>
    );
}