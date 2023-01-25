import {Routes, Route} from 'react-router-dom';
import Main from './Main';
import Bookings from './Bookings';
import Confirmation from './Confirmation';
import Login from './Login';
import OnlineOrder from './OnlineOrder';

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
            <Route path="/login" element={<Login />} />

            <Route path="/orderOnline" element={<OnlineOrder />} />
        </Routes>
    );
}