// src/data/dates.js
export const dates = [
  {
    id: 1,
    day: "Mon",
    date: 25,
    time: [
      { id: "t1", time: "10:00" },
      { id: "t2", time: "11:00" },
      { id: "t3", time: "12:00" },
    ],
  },
  {
    id: 2,
    day: "Tues",
    date: 26,
    time: [
      { id: "t1", time: "08:00" },
      { id: "t2", time: "09:00", active: true },
      { id: "t3", time: "10:00" },
    ],
  },
  {
    id: 3,
    day: "Wed",
    date: 27,
    time: [
      { id: "t1", time: "12:00" },
      { id: "t2", time: "13:00" },
    ],
  },
  {
    id: 4,
    day: "Thurs",
    date: 28,
    time: [
      { id: "t1", time: "10:00" },
      { id: "t2", time: "11:00", active: true },
    ],
  },
  {
    id: 5,
    day: "Fri",
    date: 29,
    time: [
      { id: "t1", time: "14:00" },
      { id: "t2", time: "16:00" },
    ],
  },
  {
    id: 6,
    day: "Sat",
    date: 30,
    time: [
      { id: "t1", time: "12:00", active: true },
      { id: "t2", time: "15:00" },
    ],
  },
  {
    id: 7,
    day: "Sun",
    date: 31,
    time: [
      { id: "t1", time: "09:00", active: true },
      { id: "t2", time: "11:00" },
    ],
    disabled: true,
  },
];


export const appointments = [
  {
    title: 'Dentist',
    time: '09:00–11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: '🦷',
    full: true,
  },
  {
    title: 'Physiotherapy Appointment',
    time: '11:00–12:00',
    doctor: 'Dr. Kevin Djones',
    icon: '🦾',
  },
  {
    title: 'Health checkup complete',
    time: '11:00 AM',
    icon: '🩺',
    day: 'Thursday',
  },
  {
    title: 'Ophthalmologist',
    time: '14:00 PM',
    icon: '👁️',
    day: 'Thursday',
  },
  {
    title: 'Cardiologist',
    time: '12:00 AM',
    icon: '❤️',
    day: 'Saturday',
  },
  {
    title: 'Neurologist',
    time: '16:00 PM',
    icon: '🧠',
    day: 'Saturday',
  },
];

