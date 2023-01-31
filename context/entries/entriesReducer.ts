import { Entry } from '@/interfaces';
import { EntriesState } from '.';

type EntriesActionType =
  | { type: '[Entry] - Add entry'; payload: Entry }
  | { type: '[Entry] - Update entry'; payload: Entry }
  | { type: '[Entry] - Delete entry'; payload: Entry }
  | { type: '[Entry] - Refresh entries'; payload: Entry[] };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case '[Entry] - Add entry':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case '[Entry] - Update entry':
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }

          return entry;
        }),
      };
    case '[Entry] - Delete entry':
      return {
        ...state,
        entries: state.entries.filter(({ _id }) => _id !== action.payload._id),
      };
    case '[Entry] - Refresh entries':
      return {
        ...state,
        entries: [...action.payload],
      };
    default:
      return state;
  }
};
