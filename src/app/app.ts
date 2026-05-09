import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesService } from './services/notes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {

  notes: any[] = [];
  newNote: string = '';

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    this.notesService.getNotes().subscribe(res => {
      this.notes = res.notes;
    });
  }

  addNote() {
    if (!this.newNote) return;

    this.notesService.addNote(this.newNote).subscribe(() => {
      this.newNote = '';
      this.loadNotes();
    });
  }
}