import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

type ModalComponentProps = {
  body: any;
  open: boolean;
  handleClose: () => void;
};

class ModalComponent extends React.Component<ModalComponentProps> {
  render() {
    const { body, open, handleClose } = this.props;
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>{body}</Box>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
