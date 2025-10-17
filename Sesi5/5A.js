import {Task, DEFAULT_PRIORITY} from './5.js';

const tugas1 = new Task('Belajar JavaScript');
const tugas2 = new Task('Membayar Tagihan', 'high');

console.log(`Prioritas Default: ${DEFAULT_PRIORITY}`);
console.log(`Tugas 1: ${tugas1.title}, Prioritas: ${tugas1.priority}, Selesai : ${tugas1.isCompleted}`);
console.log(`Tugas 2: ${tugas2.title}, Prioritas: ${tugas2.priority}, Selesai: ${tugas2.isCompleted}`);

tugas1.markAsCompleted();