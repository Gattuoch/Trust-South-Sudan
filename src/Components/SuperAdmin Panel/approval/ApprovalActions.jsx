import { useState } from "react";
import { approveContent, rejectContent } from "../../../api/approval.api";
import ConfirmModal from "../Sidebar/ConfirmModal";

export default function ApprovalActions({ type, item, onUpdate }) {
  const { token } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState("");

  const handleApprove = async () => {
    await approveContent(type, item._id, token);
    onUpdate();
  };

  const handleReject = async () => {
    await rejectContent(type, item._id, rejectReason, token);
    setModalOpen(false);
    onUpdate();
  };

  return (
    <div className="flex gap-2">
      <button onClick={handleApprove} className="px-3 py-1 bg-blue-600 text-white rounded">Approve</button>
      <button onClick={() => setModalOpen(true)} className="px-3 py-1 bg-red-600 text-white rounded">Reject</button>

      <ConfirmModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleReject}
        message={
          <div>
            <p>Reason for rejection:</p>
            <input
              type="text"
              className="border p-2 w-full mt-2"
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
            />
          </div>
        }
      />
    </div>
  );
}
