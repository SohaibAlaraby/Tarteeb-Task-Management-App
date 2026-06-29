export interface userTasksIntf {
  id:string,
  title:string,
  createdAt:Date,
  dueDate:Date,
  priority:string,
  status:string,
  description:string,
}

export const initialTasks: userTasksIntf[] = [
  {
    id: crypto.randomUUID(),
    title: 'Review Project Architecture',
    createdAt: new Date('2026-06-25T10:00:00'),
    dueDate: new Date('2026-06-26T09:00:00'),
    priority: 'Extreme',
    status: 'Not Started',
    description: 'Analyze the current React state management setup and refactor components to eliminate unnecessary re-renders.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Refactor Sidebar Navigation',
    createdAt: new Date('2026-06-25T11:15:00'),
    dueDate: new Date('2026-06-26T14:30:00'),
    priority: 'Moderate',
    status:'Completed',
    description: 'Migrate the static sidebar buttons to use React Router NavLink for real-time URL path binding.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Implement German Vocabulary Quiz',
    createdAt: new Date('2026-06-26T08:00:00'),
    dueDate: new Date('2026-06-27T11:00:00'),
    priority: 'Low',
    status: 'In Progress',
    description: 'Build a small vanilla JavaScript interactive flashcard module to practice 50 high-frequency German verbs.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Fix Category CRUD Bugs',
    createdAt: new Date('2026-06-27T09:00:00'),
    dueDate: new Date('2026-06-28T10:00:00'),
    priority: 'Extreme',
    status: 'Not Started',
    description: 'Update the category item appending handler to perform immutable shallow copying and prevent double-render duplicates.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Gym - Leg Day Session',
    createdAt: new Date('2026-06-27T12:00:00'),
    dueDate: new Date('2026-06-29T18:00:00'),
    priority: 'Moderate',
    status: 'Completed',
    description: 'Focus on high-intensity squat variations and progression tracking for calisthenics pull-up/dip volume.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Design Task Filter Component',
    createdAt: new Date('2026-06-27T14:00:00'),
    dueDate: new Date('2026-06-28T15:00:00'),
    priority: 'Moderate',
    status: 'In Progress',
    description: 'Create a UI filter bar to let users toggle tasks dynamically by priority, due date, and completion status.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Practice 30-Min Chess Tactics',
    createdAt: new Date('2026-06-27T14:30:00'),
    dueDate: new Date('2026-06-27T20:00:00'),
    priority: 'Low',
    status: 'Not Started',
    description: 'Solve tactical puzzles on Chess.com to improve pattern recognition, logical positioning, and mental endurance.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Set Up LocalStorage Persistence',
    createdAt: new Date('2026-06-27T15:15:00'),
    dueDate: new Date('2026-06-29T11:30:00'),
    priority: 'Extreme',
    status: 'In Progress',
    description: 'Implement a custom React hook to sync the local state with browser LocalStorage, preventing data loss on reload.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Read Article on WAI-ARIA Best Practices',
    createdAt: new Date('2026-06-27T15:45:00'),
    dueDate: new Date('2026-06-30T10:00:00'),
    priority: 'Low',
    status: 'Completed',
    description: 'Study accessible modal design patterns and proper aria-attribute assignments to improve screen-reader navigation.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Optimize Tailwind Production Build',
    createdAt: new Date('2026-06-27T16:00:00'),
    dueDate: new Date('2026-06-30T16:00:00'),
    priority: 'Moderate',
    status: 'In Progress',
    description: 'Audit the final Vite build bundle sizes and clean up unused CSS properties or redundant style declarations.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Setup Project Repository',
    createdAt: new Date('2026-06-01T09:00:00'),
    dueDate: new Date('2026-06-02T17:00:00'),
    priority: 'Low',
    status: 'Completed',
    description: 'Initialize Git repository, configure .gitignore, and set up Vite with React and TypeScript templates.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Configure Tailwind CSS',
    createdAt: new Date('2026-06-03T10:00:00'),
    dueDate: new Date('2026-06-04T12:00:00'),
    priority: 'Moderate',
    status: 'Completed',
    description: 'Install Tailwind CSS, configure tailwind.config.js, setup custom theme colors, and import baseline directives.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Design Sidebar Navigation Component',
    createdAt: new Date('2026-06-06T11:00:00'),
    dueDate: new Date('2026-06-09T18:00:00'),
    priority: 'Extreme',
    status: 'Completed',
    description: 'Build a responsive Sidebar navigation with collapsible state management and hover animations for links.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Create Task Mock Data Structure',
    createdAt: new Date('2026-06-11T14:00:00'),
    dueDate: new Date('2026-06-12T16:00:00'),
    priority: 'Low',
    status: 'Completed',
    description: 'Define TypeScript interfaces for tasks and seed initial arrays with mock data representing various priority levels.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Implement Task Status Widget',
    createdAt: new Date('2026-06-15T13:00:00'),
    dueDate: new Date('2026-06-18T15:00:00'),
    priority: 'Extreme',
    status: 'Completed',
    description: 'Develop SVG-based circular progress bars to dynamically calculate and display percentages for completed and pending tasks.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Setup GitHub Actions CI Workflow',
    createdAt: new Date('2026-06-20T10:00:00'),
    dueDate: new Date('2026-06-22T20:00:00'),
    priority: 'Moderate',
    status: 'Completed',
    description: 'Create a YAML workflow script to run automated linters and TypeScript compilation checks on every main branch push.'
  },
  {
    id: crypto.randomUUID(),
    title: 'Deploy Initial Build to Vercel',
    createdAt: new Date('2026-06-24T09:30:00'),
    dueDate: new Date('2026-06-25T11:00:00'),
    priority: 'Moderate',
    status: 'Completed',
    description: 'Link GitHub repository to Vercel, setup production environment variables, and verify live server routing functionality.'
  }
];
