import { useTheme } from '@emotion/react';

const FindPasswordPage = () => {
  const theme = useTheme();

  return (
    <div>
      <div
        css={{
          color: theme.colors.main,
        }}
      >
        비밀번호 찾기 페이지 입니다.
      </div>
    </div>
  );
};

export default FindPasswordPage;
