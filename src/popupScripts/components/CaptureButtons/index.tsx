import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { downloadAllPages } from '../../messages/downloadAllPages';
import { downloadCurrentPage } from '../../messages/downloadCurrentPage';
import { getTabs } from '../../../common/utils/getTabs';

const CaptureButton = styled.button`
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

  const handleAllPagesCaptureClick: MouseEventHandler = async () => {
    await downloadAllPages();
  };

  return (
    <>
      <CaptureButton onClick={handleCurrentPageCaptureClick}>
        Capture Current Page
      </CaptureButton>
      <CaptureButton onClick={handleAllPagesCaptureClick}>
        Capture All Pages
      </CaptureButton>
    </>
  );
}
