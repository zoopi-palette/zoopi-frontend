import {useTheme} from "@emotion/react";
import {AnimalChip} from "@web/components/AnimalChip";
import {FooterBar} from "@web/components/FooterBar";
import {Icon} from "@web/components/Icon";

const HomePage = () => {
  const theme = useTheme();

  return (
    <div css={{flexDirection: "column", width: "100%"}}>
      <div
        css={{
          color: theme.colors.main,
        }}
      >
        Home
      </div>
      <Icon name={"circle"} />
      <AnimalChip
        isSelected={false}
        name="코코"
        type="dog"
        bloodType={["DEA1-", "DEA1.1"]}
      />
      <FooterBar/>
    </div>
  );
};

export default HomePage;
