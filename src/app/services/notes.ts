import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  // GET all notes
  getNotes() {
    return this.http.get<any>(`${this.apiUrl}/notes`);
  }

  // POST new note
  addNote(note: string) {
    return this.http.post(
      `${this.apiUrl}/notes?note=${note}`,
      {}
    );
  }
}