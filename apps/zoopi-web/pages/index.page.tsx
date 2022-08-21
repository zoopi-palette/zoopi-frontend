import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { AnimalChip } from '@web/components/AnimalChip';
import { Icon } from '@web/components/Icon';

const HomePage = () => {
  const theme = useTheme();
  const [isAnimalChipSelected, setIsAnimalChipSelected] = useState(false);

  return (
    <div>
      <div
        css={{
          color: theme.colors.main,
        }}
      >
        Home
      </div>
      <Icon name="circle" />
      <AnimalChip
        isSelected={isAnimalChipSelected}
        animalName="코코"
        animalType="dog"
        bloodType={['DEA1-', 'DEA1.1']}
        avatar="/images/ex-dog-animalchip.png"
        onClick={() => setIsAnimalChipSelected(!isAnimalChipSelected)}
      />
    </div>
  );
};

export default HomePage;
