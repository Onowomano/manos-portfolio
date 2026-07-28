import { useParams, Link } from "react-router-dom";
import { CornerUpLeftLine } from "@mingcute/react";
import { getNoteBySlug, formatNoteDate } from "../notes/notes";
import { mdxComponents } from "../notes/mdxComponents";

export default function NoteDetailPage() {
  const { slug } = useParams();
  const note = getNoteBySlug(slug);

  if (!note) {
    return (
      <main className="mx-auto flex w-full max-w-[560px] flex-col gap-[24px] px-4 md:px-6 pt-46 pb-24 md:py-24">
        <p className="text-body-lg text-text-tertiary">Note not found.</p>
        <Link to="/notes" className="link-underline text-link-md text-text-primary">
          Back to notes
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-[560px] flex-col gap-[28px] px-4 md:px-6 pt-46 pb-24 md:py-24">
      <Link
        to="/notes"
        className="link-underline flex w-fit items-center gap-[4px] text-link-sm text-text-tertiary"
      >
        <CornerUpLeftLine className="size-[14px]" />
        Back
      </Link>

      <div className="flex flex-col gap-[20px]">
        <header className="flex flex-col gap-[6px] text-body-lg">
          <p className="font-medium text-text-primary">{note.title}</p>
          <p className="text-text-tertiary">{formatNoteDate(note.date)}</p>
        </header>

        <div className="note-content flex flex-col gap-[20px]">
          <note.Body components={mdxComponents} />
        </div>
      </div>
    </main>
  );
}
