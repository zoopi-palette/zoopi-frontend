import {Button} from "@web/components/Button"
import {Icon} from "@web/components/Icon";
import {Modal} from "@web/components/Modal";

export type ModalConfirmProps = {
  onClose: () => void;
  confirm?: {
    onConfirmClick: ()=>void,
    confirmMessage?:string,
  },
  cancle?: {
    onCancleClick: ()=>void,
    cancleMessage?:string,
  }
  title: string,
  contents: string,
};

export const ModalConfirm = ({
  onClose,
  confirm,
  cancle,
  title,
  contents,
}: ModalConfirmProps) => {
  return (
    <Modal onClose={onClose}>
      <header css={{display: "flex", alignItems: "baseline"}}>
        <h1 id="dialogTitle" css={{
          flexBasis: "100%",
          flexWrap: "wrap",
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "-0.002em",
          textAlign: "left",
          marginBottom: 18
        }}>
          {title}
        </h1>
        <button onClick={onClose} autoFocus>
          <Icon name={"close"} size={15} />
        </button>
      </header>
      <main css={{
        marginBottom: 16
      }}>
        <p id="dialogDesc" css={{
          whiteSpace: "pre-line",
          fontSize: 16,
          fontWeight: 400,
          lineHeight: "150%",
          letterSpacing: "-0.002em",
          textAlign: "left",}}>{contents}</p>
      </main>
      <div css={{
        position: "relative",
        width: "100%",
        "*": {width: "100%"},
        "*:not(:first-of-type)":{marginLeft: 5}}}>
        {cancle &&
          <div><Button color="gray" appearance="outline" onClick={cancle.onCancleClick}>{cancle.cancleMessage || "취소"}</Button></div>}
        {confirm &&
          <div><Button color="main" onClick={confirm.onConfirmClick}>{confirm.confirmMessage || "확인"}</Button></div>}
      </div>
    </Modal>
  );
};
