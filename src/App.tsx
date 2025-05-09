import { Contact, Flights, Home, Reservations } from "@/pages";
import {
  Confirmation,
  Fares,
  FlightsReservation,
  Passengers,
  Payment,
  Seats,
  Services,
} from "@/pages/Reservations";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="flights" element={<Flights />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="reservations/flights" element={<FlightsReservation />} />
          <Route path="reservations/flights/:id/fares" element={<Fares />} />
          <Route
            path="reservations/flights/:id/passengers"
            element={<Passengers />}
          />
          <Route path="reservations/flights/:id/seats" element={<Seats />} />
          <Route
            path="reservations/flights/:id/services"
            element={<Services />}
          />
          <Route
            path="reservations/flights/:id/payment"
            element={<Payment />}
          />
          <Route
            path="reservations/flights/:id/confirmation"
            element={<Confirmation />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
