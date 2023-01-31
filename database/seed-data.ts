interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        'Pending: Eu mollit occaecat consequat laboris deserunt aute.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description:
        'In-progress: Commodo anim ea nostrud reprehenderit minim nulla voluptate commodo.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        'Finished: Cupidatat sunt aliquip Lorem aliquip ea veniam minim sit velit sint non Lorem ut nulla.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};
