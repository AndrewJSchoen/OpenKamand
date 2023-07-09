import { Chip, Stack, Modal, Typography } from "@mui/material";
import { IPInput } from "./IPInput";
import { useAtom, useAtomValue } from "jotai";
import { connectionAtom, ipAtom } from "../state";
import WifiOffRoundedIcon from "@mui/icons-material/WifiOffRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #444",
  padding: "1rem",
  borderRadius: "1rem",
  boxShadow: 24,
  p: 4,
  color: "white",
  userSelect: "none",
  WebkitUserSelect: "none",
  outline: "none",
};

export const Settings = ({ open, onClose }) => {
  const connected = useAtomValue(connectionAtom);
  const [ip, setIp] = useAtom(ipAtom);

  return (
    <Modal open={open} onClose={onClose}>
      <Stack direction="column" gap={1} style={style}>
        <Stack direction="row" justifyContent="space-between" alignItems='center'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Connection IP
          </Typography>
          <Chip
            size="small"
            icon={connected ? <WifiRoundedIcon /> : <WifiOffRoundedIcon />}
            color={connected ? "success" : "warning"}
            label={connected ? "Connected" : "Not Connected"}
            sx={{ marginRight: "1rem" }}
          />
        </Stack>
        <IPInput value={ip} onChange={(e)=>setIp(e.target.value)}/>
      </Stack>
    </Modal>
  );
};
