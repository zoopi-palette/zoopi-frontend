import { Hospital } from '@web/stores/data/types';
import React, { ReactNode, useCallback, useState } from 'react';
import { HospitalItem } from '../HospitalItem';

export type HospitalListProps = {
  children?: ReactNode;
  hospitals: Hospital[];
  height?: string;
};

export const HospitalList = ({
  children,
  hospitals,
  height = '200px',
}: HospitalListProps) => {
  const [selectedHospital, setSelectedHospital] = useState<Hospital>({
    id: 0,
    name: '',
    address: '',
  });

  const handleSelectedHospital = useCallback((hospital: Hospital) => {
    setSelectedHospital(hospital);
  }, []);

  return (
    <ul
      css={{
        width: '100%',
        height: height,
        overflowY: 'scroll',

        '::-webkit-scrollbar': {
          width: 8,
        },

        '::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(196, 202, 212, 0.5)',
          borderRadius: 5,
        },
      }}
    >
      {hospitals.map((hospital) => (
        <HospitalItem
          key={hospital.id}
          id={hospital.id}
          name={hospital.name}
          address={hospital.address}
          isSelected={selectedHospital.id === hospital.id}
          handleSelectedHospital={handleSelectedHospital}
        />
      ))}
      {children}
    </ul>
  );
};
