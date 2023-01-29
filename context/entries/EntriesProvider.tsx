import { FC, ReactNode, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EntriesContext, entriesReducer } from './';
import { Entry } from '@/interfaces';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        'Pending: Eu mollit occaecat consequat laboris deserunt aute.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        'In-progress: Commodo anim ea nostrud reprehenderit minim nulla voluptate commodo.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        'Finished: Cupidatat sunt aliquip Lorem aliquip ea veniam minim sit velit sint non Lorem ut nulla.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: 'pending',
      createdAt: Date.now(),
    };

    dispatch({ type: '[Entry] - Add entry', payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] - Update entry', payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        //  Methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
