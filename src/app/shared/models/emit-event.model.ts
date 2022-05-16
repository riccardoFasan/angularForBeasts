import { EventName } from '../enums/event-name.enum';

export interface EmitEvent {
  name: EventName;
  value: any;
}
