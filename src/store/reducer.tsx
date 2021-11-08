import { Report, ReportSocial } from "../types/ReportType";
import * as reportActions from "./actions";
import { StoreActions, StoreStates } from "../types/StoreType";
import { Social } from "../types/SocialType";

const initialState: StoreStates = {
  reports: [],
  socials: [],
  reportsSocials: [],
};

const reducer = (
  state: StoreStates = initialState,
  action: StoreActions
): StoreStates => {
  switch (action.type) {
    case reportActions.GET_REPORTS: {
      const reports: Report[] = action.reports ? action.reports : state.reports;
      const socials: Social[] = action.socials ? action.socials : state.socials;
      let reportsSocials: ReportSocial[] = [];
      reports.forEach((report) => {
        const social = socials.find((social) => social.id === report.id);
        reportsSocials.push({
          ...report,
          social,
        });
      });
      return {
        ...state,
        reports: reports,
        socials: socials,
        reportsSocials: reportsSocials ? reportsSocials : state.reportsSocials,
      };
    }
    case reportActions.EDIT_REPORT: {
      const reports: Report[] = state.reports.map((report) =>
        action.report && report.id === action.report.id ? action.report : report
      );
      const socials: Social[] = state.socials;
      let reportsSocials: ReportSocial[] = [];
      reports.forEach((report) => {
        const social = socials.find((social) => social.id === report.id);
        reportsSocials.push({
          ...report,
          social,
        });
      });
      return {
        ...state,
        reports: reports,
        socials: socials,
        reportsSocials: reportsSocials ? reportsSocials : state.reportsSocials,
      };
    }
    case reportActions.EDIT_SOCIAL: {
      const reports: Report[] = state.reports;
      const socials: Social[] = state.socials.map((social) =>
        action.social && social.id === action.social.id ? action.social : social
      );
      let reportsSocials: ReportSocial[] = [];
      reports.forEach((report) => {
        const social = socials.find((social) => social.id === report.id);
        reportsSocials.push({
          ...report,
          social,
        });
      });
      return {
        ...state,
        reports: reports,
        socials: socials,
        reportsSocials: reportsSocials ? reportsSocials : state.reportsSocials,
      };
    }
  }
  return state;
};

export default reducer;
