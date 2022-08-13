import { useTheme } from '@emotion/react';

const SignupPage = () => {
  const theme = useTheme();

  return (
    <div>
      <div
        css={{
          color: theme.colors.main,
        }}
      >
        회원가입 페이지 입니다.
      </div>
    </div>
  );
};

export default SignupPage;
