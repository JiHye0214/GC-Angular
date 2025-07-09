import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Task {
  id?: string;
  title: string;
  content: string;
  list: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private firestore: AngularFirestore) {}

  getAllTasks(): Observable<Task[]> {
    return this.firestore.collection<Task>('tasks', ref => ref.orderBy('title')).valueChanges({ idField: 'id' });
  }

  addTask(task: Task) {
    return this.firestore.collection('tasks').add(task);
  }

  updateTask(task: Task) {
    return this.firestore.collection('tasks').doc(task.id).update(task);
  }

  deleteTask(id: string) {
    return this.firestore.collection('tasks').doc(id).delete();
  }
}
