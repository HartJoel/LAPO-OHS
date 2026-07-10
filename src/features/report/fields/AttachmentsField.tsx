import { Paperclip, X } from "lucide-react";
import type { RefObject } from "react";

interface AttachmentsFieldProps {
  fileInputRef: RefObject<HTMLInputElement | null>;
  attachments: string[];
  onFilesSelected: (files: FileList | null) => void;
  onRemove: (fileName: string) => void;
}

function AttachmentsField({
  fileInputRef,
  attachments,
  onFilesSelected,
  onRemove,
}: AttachmentsFieldProps) {
  return (
    <div className="mb-[18px]">
      <label className="mb-[5px] block text-[13px] font-semibold text-stone-900">
        Attachments{" "}
        <span className="text-[11px] font-normal text-stone-500">
          photos, documents — optional, max 5MB each
        </span>
      </label>

      <div
        onClick={() => fileInputRef.current?.click()}
        className="cursor-pointer rounded-[9px] border-[1.5px] border-dashed border-[#F9C896] bg-[#F8F4EE] p-[18px] text-center transition-colors hover:border-[#EC8020]"
      >
        <div className="text-[13px] text-stone-600">
          <Paperclip className="mr-1 inline" size={14} />
          <span className="font-semibold text-[#EC8020]">
            Click to upload
          </span>{" "}
          or drag and drop
        </div>

        <div className="mt-1 text-[11px] text-stone-500">
          JPG, PNG, PDF · max 5MB · up to 3 files
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".jpg,.jpeg,.png,.pdf"
        className="hidden"
        onChange={(e) => onFilesSelected(e.target.files)}
      />

      {attachments.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-[6px]">
          {attachments.map((file) => (
            <span
              key={file}
              className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-[11px] text-green-800"
            >
              <Paperclip size={10} />
              {file}
              <button
                type="button"
                onClick={() => onRemove(file)}
                className="cursor-pointer"
              >
                <X size={10} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default AttachmentsField;