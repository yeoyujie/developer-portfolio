import { CountryStatus } from "@/types";

interface CountryStatusesProps {
  countryStatuses: CountryStatus[];
}

const CountryStatuses: React.FC<CountryStatusesProps> = ({
  countryStatuses,
}) => {
  return (
    <div>
      {countryStatuses.map((countryStatus, index) => (
        <div key={index}>
          <img src={countryStatus.flag} alt={countryStatus.name} />
          <span>{countryStatus.name}</span>
          <span>{countryStatus.status}</span>
        </div>
      ))}
    </div>
  );
};

export default CountryStatuses;
