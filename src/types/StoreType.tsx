import { ReportAction, ReportState } from "./ReportType";
import { SocialAction, SocialState } from "./SocialType";

export interface StoreStates extends ReportState, SocialState {}
export interface StoreActions extends ReportAction, SocialAction {
  type: string;
}
export type DispatchType = (args: StoreActions) => StoreActions;
