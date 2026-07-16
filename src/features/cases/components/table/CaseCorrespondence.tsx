import { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import type { CaseStatus } from "../../../../types";

const LAPO_GREEN = "#009D4C";
const LAPO_ORANGE = "#EC8020";

export interface CaseMessage {
  id: string;
  from: "handler" | "reporter";
  senderName: string;
  content: string;
  timestamp: string;
}

interface Props {
  messages: CaseMessage[];
  status: CaseStatus;
  onSendMessage?: (message: string) => void;
  loading?: boolean;
}

export default function CaseCorrespondence({
  messages,
  status,
  onSendMessage,
  loading = false,
}: Props) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSendMessage?.(message);

    setMessage("");
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare
          size={16}
          style={{ color: LAPO_ORANGE }}
        />

        <h2 className="text-sm font-semibold text-gray-900">
          Case Correspondence
        </h2>
      </div>

      <div className="flex-1 space-y-3 mb-4 overflow-y-auto max-h-64">
        {messages.length === 0 ? (
          <div className="text-center py-4 text-gray-400 text-sm">
            No messages yet. Your case handler will respond here.
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-3 rounded-xl text-sm ${
                msg.from === "handler"
                  ? "bg-gray-50 border border-gray-100"
                  : "ml-4 border bg-orange-50 border-orange-200"
              }`}
            >
              <div className="flex justify-between items-center mb-1.5">
                <span
                  className="text-xs font-semibold"
                  style={{
                    color:
                      msg.from === "handler"
                        ? LAPO_GREEN
                        : LAPO_ORANGE,
                  }}
                >
                  {msg.senderName}
                </span>

                <span className="text-[10px] text-gray-400">
                  {new Date(msg.timestamp).toLocaleString(
                    "en-NG",
                    {
                      day: "numeric",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {msg.content}
              </p>
            </div>
          ))
        )}
      </div>

      {status !== "Closed" &&
        status !== "Escalated" && (
          <div className="flex gap-2">
            <input
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" && handleSend()
              }
              placeholder="Send a message to your case handler..."
              className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-orange-500"
            />

            <button
              onClick={handleSend}
              disabled={!message.trim() || loading}
              className="p-2 rounded-lg text-white disabled:opacity-50"
              style={{
                backgroundColor: LAPO_ORANGE,
              }}
            >
              <Send size={16} />
            </button>
          </div>
        )}

      {status === "Escalated" && (
        <div className="text-xs text-center text-gray-400 py-2">
          This case is escalated. A senior-level review is in
          progress.
        </div>
      )}
    </div>
  );
}