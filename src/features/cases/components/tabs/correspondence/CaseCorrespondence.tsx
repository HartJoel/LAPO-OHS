import { Send } from "lucide-react";
import { useState } from "react";
import type { Case } from "../../../types"; // adjust path

const LAPO_GREEN = "#22C55E";

interface Props {
  caseData: Case;
  isClosed: boolean;
  onSendMessage?: (message: string) => void;
}

export default function CaseCorrespondence({
  caseData,
  isClosed,
  onSendMessage,
}: Props) {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;

    setSending(true);

    try {
      await onSendMessage?.(message);

      setMessage("");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <div className="text-sm font-semibold text-gray-900 mb-4">
        Correspondence

        {caseData.isAnonymous && (
          <span className="text-xs font-normal text-gray-400 ml-1">
            (anonymity preserved — reporter identity not stored)
          </span>
        )}
      </div>

      <div className="space-y-3 mb-4 max-h-80 overflow-y-auto">
        {caseData.messages.length === 0 ? (
          <div className="text-center py-6 text-gray-400 text-sm">
            No messages yet. Send the first message to the reporter.
          </div>
        ) : (
          caseData.messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-4 rounded-xl text-sm ${
                msg.from === "handler"
                  ? "ml-4 border"
                  : "bg-gray-50 border border-gray-100"
              }`}
              style={
                msg.from === "handler"
                  ? {
                      backgroundColor: "#EDFBF3",
                      borderColor: "#BBF7D0",
                    }
                  : {}
              }
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-xs font-semibold"
                  style={{
                    color:
                      msg.from === "handler"
                        ? LAPO_GREEN
                        : "#4F46E5",
                  }}
                >
                  {msg.senderName}{" "}
                  {msg.from === "handler"
                    ? "(Case Handler)"
                    : caseData.isAnonymous
                    ? "(Anonymous Reporter)"
                    : "(Reporter)"}
                </span>

                <span className="text-[10px] text-gray-400">
                  {new Date(msg.timestamp).toLocaleString("en-NG", {
                    day: "numeric",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {msg.content}
              </p>
            </div>
          ))
        )}
      </div>

      {!isClosed && (
        <div className="flex gap-2">
          <textarea
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`Send a message to the ${
              caseData.isAnonymous
                ? "anonymous reporter"
                : "reporter"
            }...`}
            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 resize-none focus:outline-none focus:border-green-500"
          />

          <button
            onClick={handleSend}
            disabled={!message.trim() || sending}
            className="self-end p-3 rounded-lg text-white disabled:opacity-50"
            style={{ backgroundColor: LAPO_GREEN }}
          >
            <Send size={16} />
          </button>
        </div>
      )}
    </div>
  );
}