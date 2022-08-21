import { useTheme } from '@emotion/react';

const FindIdPage = () => {
  const theme = useTheme();

  return (
    <div>
      <div
        css={{
          color: theme.colors.main,
        }}
      >
        아이디 찾기 페이지 입니다.
      </div>
    </div>
  );
};

export default FindIdPage;
