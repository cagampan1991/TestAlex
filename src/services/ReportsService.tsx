import { Report } from "../types/ReportType";

const apiBaseUrl = process.env.REACT_APP_API_BASEURL;
const ReportsService = {
  getReports: () =>
    fetch(apiBaseUrl + "/reports")
      .then((reports) => reports.json())
      .then(
        (data: Report[]) => {
          return data;
        },
        (error) => {
          return error;
        }
      ),
};

export default ReportsService;
