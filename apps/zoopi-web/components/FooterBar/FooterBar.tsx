import {useTheme} from "@emotion/react"
import {Icon} from "@web/components/Icon";
import Link from "next/Link"

export const FooterBar = () => {
  const theme = useTheme();

  const linkCss = {
    fontSize: 12,
    color: theme.colors["grey-50"],
    fontWeight: 700,
    marginRight: 24
  }
  
  return (
    <footer css={{
      borderTop:`1px solid ${theme.colors["grey-30"]}`,
      backgroundColor: theme.colors.background,
      height: 168,
      padding: "31px",
      justifyContent: "center",
    }}>
      <div css={{
        flexDirection: "column",
        flexBasis: "70%",
        width: "fit-content",
      }}>
        <div css={{
          flexDirection: "column",
          marginBottom: 44,
          flexWrap: "wrap"
        }}>
          <p css={{
            fontSize: 14,
            color: theme.colors["grey-50"],
            marginBottom: 4
          }}>ZOOPI</p>
          <p css={{
            fontSize: 12,
            color: theme.colors["grey-50"]
          }}>주피는 헌혈 매칭 중개자로서 의료기관이 아니므로 개인 거래정보 및 거래등에 대해 책임을 지지 않습니다.</p>
        </div>
        <ul css={{
          display: "flex",
        }}>
          <li><Link href="/" passHref><a css={linkCss}>헌혈 가이드</a></Link></li>
          <li><Link href="/" passHref><a css={linkCss}>서비스 이용약관</a></Link></li>
          <li><Link href="/" passHref><a css={linkCss}>개인정보 처리방침</a></Link></li>
          <li><Link href="/" passHref><a css={linkCss}>1:1 문의</a></Link></li>
          <li><Link href="/" passHref><a css={linkCss}>광고문의</a></Link></li>
          <li><Link href="/" passHref><a css={linkCss}>공지사항</a></Link></li>
        </ul>
      </div>
      <ul css={{display: "flex",alignItems: "flex-start", width: "fit-content", height: "fit-content"}}>
        <li css={{margin: "0 16px"}}>
          <Link href="/" passHref>
            <a><Icon name="play-store"/></a>
          </Link></li>
        <li>
          <Link href="/" passHref>
            <a><Icon name="apple-store"/></a>
          </Link></li>
      </ul>
    </footer>
  )
}