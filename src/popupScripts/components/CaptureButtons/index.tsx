import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { downloadCurrentPage } from '../../messages/downloadCurrentPage';
import { getTabs } from '../../utils/getTabs';

const CurrentPageCaptureButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CaptureButtonsProps {}

export function CaptureButtons({}: CaptureButtonsProps) {
  const handleCurrentPageCaptureClick: MouseEventHandler = async () => {
    const tabs = await getTabs();
    if (tabs[0].id == null) {
      return;
    }

    await downloadCurrentPage(tabs[0].id);
  };

  return (
    <CurrentPageCaptureButton onClick={handleCurrentPageCaptureClick}>
      Capture Current Page
    </CurrentPageCaptureButton>
  );
}
