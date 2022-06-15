<<<<<<< HEAD
import { useTheme } from '@emotion/react';
import { AnimalChip } from '@web/components/AnimalChip';
import { Icon } from '@web/components/Icon';
=======
import {useTheme} from "@emotion/react"
import { Button } from "@web/components/Button"
import { Icon } from "@web/components/Icon"
>>>>>>> d3782e5722c27419b3f9f6376fe24bdf071bbf08

const HomePage = () => {
  const theme = useTheme();

  return (
    <div>
      <div
        css={{
          color: theme.colors.main,
        }}
      >
        Home
      </div>
<<<<<<< HEAD
      <Icon name={'circle'} />
      <AnimalChip
        isSelected={false}
        name="코코"
        type="dog"
        bloodType={['DEA1-', 'DEA1.1']}
      />
=======
      <Icon name={"circle"} size={100} color={"red"}/>
      <Button>{"test"}</Button>
>>>>>>> d3782e5722c27419b3f9f6376fe24bdf071bbf08
    </div>
  );
};

export default HomePage;
