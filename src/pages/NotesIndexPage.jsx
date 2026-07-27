import NoteRow from "../components/NoteRow";
import SectionHeading from "../components/SectionHeading";
import { getAllNotes, formatNoteDate } from "../notes/notes";

export default function NotesIndexPage() {
  const notes = getAllNotes();

  return (
    <main className="mx-auto flex w-full max-w-[560px] flex-col gap-[48px] px-4 md:px-6 py-46 md:py-24">
      <section className="flex flex-col gap-[12px]">
        <SectionHeading>Notes</SectionHeading>
        <div className="flex flex-col gap-[6px]">
          {notes.map((note) => (
            <NoteRow
              key={note.slug}
              title={note.title}
              date={formatNoteDate(note.date, "long")}
              to={`/notes/${note.slug}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
