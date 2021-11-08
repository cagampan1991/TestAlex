import { Report } from "../types/ReportType";
import { EDIT_REPORT, EDIT_SOCIAL, GET_REPORTS } from "../store/actions";
import ReportsService from "../services/ReportsService";
import SocialService from "../services/SocialService";
import { DispatchType, StoreActions } from "../types/StoreType";
import { Social } from "../types/SocialType";

export function editReport(report: Report) {
  const action: StoreActions = {
    type: EDIT_REPORT,
    report,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function editSocial(social: Social) {
  const action: StoreActions = {
    type: EDIT_SOCIAL,
    social,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function getReports() {
  return async (dispatch: DispatchType) => {
    const [reports, socials] = await Promise.all([
      ReportsService.getReports(),
      SocialService.getSocials(),
    ]);

    const action: StoreActions = {
      type: GET_REPORTS,
      reports: reports ? reports : [],
      socials: socials ? socials : [],
    };
    dispatch(action);
  };
}
