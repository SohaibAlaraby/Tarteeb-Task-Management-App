export interface userTasksIntf {
  id:string,
  title:string,
  date:Date,
  priority:string,
  description:string,
}

export const initialTasks: userTasksIntf[] = [
  {
    id: crypto.randomUUID(),
    title: 'Review Project Architecture',
    date: new Date('2026-06-26T09:00:00'),
    priority: 'Extreme',
    description: 'Analyze the current React state management setup and refactor components to eliminate unnecessary re-renders.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Refactor Sidebar Navigation',
    date: new Date('2026-06-26T14:30:00'),
    priority: 'Moderate',
    description: 'Migrate the static sidebar buttons to use React Router NavLink for real-time URL path binding.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Implement German Vocabulary Quiz',
    date: new Date('2026-06-27T11:00:00'),
    priority: 'Low',
    description: 'Build a small vanilla JavaScript interactive flashcard module to practice 50 high-frequency German verbs.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Fix Category CRUD Bugs',
    date: new Date('2026-06-28T10:00:00'),
    priority: 'Extreme',
    description: 'Update the category item appending handler to perform immutable shallow copying and prevent double-render duplicates.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Gym - Leg Day Session',
    date: new Date('2026-06-29T18:00:00'),
    priority: 'Moderate',
    description: 'Focus on high-intensity squat variations and progression tracking for calisthenics pull-up/dip volume.'
  }
];
