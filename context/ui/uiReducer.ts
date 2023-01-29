import { UIState } from '.';

type UIActionType =
  | { type: 'UI - Open Sidebar' }
  | { type: 'UI - Close Sidebar' }
  | { type: 'UI - Is adding entry'; payload: boolean }
  | { type: 'UI - Start dragging' }
  | { type: 'UI - End dragging' };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      };
    case 'UI - Close Sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      };
    case 'UI - Is adding entry':
      return {
        ...state,
        isAddingEntry: action.payload,
      };
    case 'UI - Start dragging':
      return {
        ...state,
        isDragging: true,
      };
    case 'UI - End dragging':
      return {
        ...state,
        isDragging: false,
      };
    default:
      return state;
  }
};
