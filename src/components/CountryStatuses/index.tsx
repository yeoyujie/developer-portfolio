import Image from "next/image";
import { CountryStatus } from "@/types";
import { Check, X } from "react-feather";

import "./component.css";

interface CountryStatusesProps {
  countryStatuses: CountryStatus[];
}

const CountryStatuses: React.FC<CountryStatusesProps> = ({
  countryStatuses,
}) => {
  return (
    <div className="scoreboard">
      <div className="header-row">
        <span>Flag</span>
        <span>Country</span>
        <span>Status</span>
      </div>
      {countryStatuses.map((countryStatus, index) => (
        <div key={index} className="country-row">
          <span>
            <Image
              src={countryStatus.flag}
              alt={countryStatus.name}
              width={150}
              height={100}
            />
          </span>
          <span>{countryStatus.name}</span>
          <span>
            {countryStatus.status === "correct" ? (
              <Check style={{ color: "green" }} size={32} />
            ) : (
              <X style={{ color: "red" }} size={32} />
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountryStatuses;
