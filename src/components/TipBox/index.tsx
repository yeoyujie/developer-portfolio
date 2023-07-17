import "./component.css";

interface TipBoxProps {
  message: string;
  onClose: () => void;
}

export default function TipBox({ message, onClose }: TipBoxProps) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="tip-box">
          <p>{message}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

