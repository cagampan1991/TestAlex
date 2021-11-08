import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Dispatch } from "redux";
import ModalComponent from "../components/ModalComponent";
import TableComponent from "../components/TableComponent";
import { editReport, editSocial, getReports } from "../store/creators";
import { Report, ReportSocial, ReportState } from "../types/ReportType";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Controller, useForm } from "react-hook-form";
import { Social } from "../types/SocialType";

export const ReportsList = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [open, setOpen] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [selectedReport, setSelectedReport] = useState({} as ReportSocial);
  const { handleSubmit, reset, control } = useForm();
  const handleClose = () => setOpen(false);
  const onSubmit = (form: any) => {
    selectedReport.name = form.name;
    selectedReport.description = form.description;
    selectedReport.tags = form.tags.replaceAll("\\s+"," ").split(",");
    if (selectedReport.social) {
      selectedReport.social.stars = selectedReport.social ? form.stars : 0;
      selectedReport.social.views = selectedReport.social ? form.views : 0;
    }
    dispatch(editReport(selectedReport as Report));
    dispatch(editSocial(selectedReport.social as Social));
    setOpen(false);
  };
  const reportsSocials: readonly ReportSocial[] = useSelector(
    (state: ReportState) => state.reportsSocials,
    shallowEqual
  );
  if (!initialized) {
    dispatch(getReports());
    setInitialized(true);
  }
  const datasource = reportsSocials.map((reportsSocial) => ({
    id: reportsSocial.id,
    name: reportsSocial.name,
    description: reportsSocial.description ? reportsSocial.description : "",
    tags: reportsSocial.tags ? reportsSocial.tags.join(", ") : "",
    stars:
      reportsSocial.social && reportsSocial.social.stars
        ? reportsSocial.social.stars
        : 0,
    views:
      reportsSocial.social && reportsSocial.social.views
        ? reportsSocial.social.views
        : 0,
    action: (
      <Button
        onClick={() => {
          setSelectedReport(reportsSocial);
          const { name, description, tags, social } = reportsSocial;
          reset({
            name,
            description,
            tags: tags ? tags.join(", ") : "",
            stars: social && social.stars ? social.stars : 0,
            views: social && social.views ? social.views : 0,
          });
          setOpen(true);
        }}
      >
        Edit
      </Button>
    ),
  }));
  const body = (
    <form>
      <div>
        <Controller
          name={"name"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={"Name"} />
          )}
        />
      </div>

      <div>
        <Controller
          name={"description"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              onChange={onChange}
              value={value}
              label={"Description"}
            />
          )}
        />
      </div>

      <div>
        <Controller
          name={"tags"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={"Tags"} />
          )}
        />
      </div>

      <div>
        <Controller
          name={"stars"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={"stars"} />
          )}
        />
      </div>

      <div>
        <Controller
          name={"views"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              id="filled-basic"
              onChange={onChange}
              value={value}
              label={"Views"}
            />
          )}
        />
      </div>
      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
    </form>
  );
  return (
    <>
      <TableComponent datasource={datasource}></TableComponent>
      <ModalComponent
        body={body}
        open={open}
        handleClose={handleClose}
      ></ModalComponent>
    </>
  );
};
