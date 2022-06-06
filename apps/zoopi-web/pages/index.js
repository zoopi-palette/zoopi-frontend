import { useTheme } from "@emotion/react";
const HomePage = () => {
    const theme = useTheme();
    return (<div css={{
            color: theme.colors.main
        }}>
      Home
    </div>);
};
export default HomePage;
//# sourceMappingURL=index.js.map