import { useState } from "react";
import { getActionTypeFromText, ActionType } from "@core/utils/keywordActions";

export const useButtonAction = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleAction = (btnText: string) => {
    const actionType = getActionTypeFromText(btnText);

    if (actionType === "schedule") {
      window.location.href = "/schedule-appointment";
      return;
    }

    setOpenModal(true);
  };

  const closeModal = () => setOpenModal(false);

  return {
    openModal,
    handleAction,
    closeModal,
  };
};