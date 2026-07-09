import { MortgageCalculator } from "./MortgageCalculator";
import { ProfitCalculator } from "./ProfitCalculator";


// import { useState } from "react";
// import { project } from "@/data/project.config";


interface SmartSimulatorProps {
  buyerMode: "living" | "investing";
}

// export function SmartSimulator({
//   buyerMode,
// }: SmartSimulatorProps) {

//   return buyerMode === "living"
//     ? <MortgageCalculator />
//     : <ProfitCalculator />;

// }

import { useState } from "react";
import { project } from "@/data/project.config";

export function SmartSimulator({ buyerMode }: SmartSimulatorProps) {

  // Datos comunes
  const [purchasePrice, setPurchasePrice] = useState(
    project.investment.purchasePrice
  );

  // Hipoteca
  const [savings, setSavings] = useState(
    project.simulator.savings
  );

  const [interest, setInterest] = useState(
    project.simulator.interest
  );

  const [years, setYears] = useState(
    project.simulator.years
  );

  // Inversión
  const [rooms, setRooms] = useState(
    project.investment.rooms.default
  );

  const [roomRent, setRoomRent] = useState(
    project.investment.rent.default
  );

  return buyerMode === "living"
    ? 
    <MortgageCalculator 
        purchasePrice={purchasePrice}
        setPurchasePrice={setPurchasePrice}

        savings={savings}
        setSavings={setSavings}

        interest={interest}
        setInterest={setInterest}

        years={years}
        setYears={setYears}
    />
    : <ProfitCalculator 
        purchasePrice={purchasePrice}
        setPurchasePrice={setPurchasePrice}

        rooms={rooms}
        setRooms={setRooms}

        roomRent={roomRent}
        setRoomRent={setRoomRent}
    />;

}