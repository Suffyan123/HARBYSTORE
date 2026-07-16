import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Button from "./Button";
import { BsExclamationTriangleFill } from "react-icons/bs";

export default function LoginPromptModal({ open, onClose, redirectTo }) {
  const navigate = useNavigate();

  const handleOk = () => {
    onClose();
    navigate(`/login${redirectTo ? `?redirect=${encodeURIComponent(redirectTo)}` : ""}`);
  };

  return (
    <Modal open={open} onClose={onClose} title="Alert">
      <div className="flex items-start gap-3 mb-6">
        <BsExclamationTriangleFill className="text-yellow-500 mt-1 shrink-0" size={20} />
        <p className="text-gray-800">Please login your account for editing a product</p>
      </div>
      <div className="flex justify-end gap-3">
        <Button variant="white" className="border border-gray-300" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="green" onClick={handleOk}>
          OK
        </Button>
      </div>
    </Modal>
  );
}