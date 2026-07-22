import { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import type { CaseStatus } from "../../../types";

const LAPO_GREEN = "#009D4C";
const LAPO_ORANGE = "#EC8020";

export interface CaseHandlerMessage {
  id: string;
  from: "handler" | "reporter";
  sender: string;
  role?: string;
  content: string;
  timestamp: string;
}

interface Props {
  messages: CaseHandlerMessage[];
  status: CaseStatus;
  loading?: boolean;
  onSendMessage?: (message: string) => void;
}

export default function CaseHandlerMessagesCard({
  messages,
  status,
  loading = false,
  onSendMessage,
}: Props) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSendMessage?.(message.trim());
    setMessage("");
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <MessageSquare
          size={16}
          style={{ color: LAPO_ORANGE }}
        />

        <h2 className="text-sm font-semibold text-gray-900">
          Messages from Case Handler
        </h2>
      </div>

      {/* Messages */}
      <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
        {messages.length === 0 ? (
          <div className="py-8 text-center text-sm text-gray-400">
            No messages from your case handler yet.
          </div>
        ) : (
          messages.map((msg) => {
            const isHandler = msg.from === "handler";

            return (
              <div
                key={msg.id}
                className={`rounded-xl p-4 ${
                  isHandler
                    ? "bg-[#F0FBF5]"
                    : "bg-orange-50 border border-orange-100"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-xs font-semibold"
                    style={{
                      color: isHandler
                        ? LAPO_GREEN
                        : LAPO_ORANGE,
                    }}
                  >
                    {msg.sender}
                    {msg.role && ` (${msg.role})`}
                  </span>

                  <span className="text-xs text-gray-400">
                    {new Date(msg.timestamp).toLocaleString(
                      "en-NG",
                      {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </span>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {msg.content}
                </p>
              </div>
            );
          })
        )}
      </div>

      {/* Reply */}
      {status !== "Closed" && (
        <div className="mt-5 flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && handleSend()
            }
            placeholder="Reply to your case handler..."
            className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
          />

          <button
            onClick={handleSend}
            disabled={!message.trim() || loading}
            className="rounded-lg p-2 text-white transition disabled:opacity-50"
            style={{
              backgroundColor: LAPO_ORANGE,
            }}
          >
            <Send size={16} />
          </button>
        </div>
      )}

      {status === "Closed" && (
        <div className="mt-4 text-center text-xs text-gray-400">
          This case has been closed. Messaging is disabled.
        </div>
      )}
    </div>
  );
}