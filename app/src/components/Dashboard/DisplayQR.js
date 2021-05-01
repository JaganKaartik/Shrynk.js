import React, { useState, createRef } from 'react';
import QRCode from 'react-qr-code';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import { useScreenshot, createFileName } from 'use-react-screenshot';

const DisplayQR = (props) => {
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: 'image/jpeg',
    quality: 1.0,
  });
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  const download = (
    image,
    { name = `${props.url[1]}`, extension = 'jpg' } = {}
  ) => {
    const a = document.createElement('a');
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <>
      <button
        onClick={open}
        className="bg-gradient-to-r from-gray-600 to-gray-800 text-gray-300 font-bold py-2 px-4 h-10"
      >
        Show QR
      </button>

      <ModalTransition>
        {isOpen && (
          <Modal
            actions={[
              { text: 'Close', onClick: close },
              { text: 'Download QR', onClick: downloadScreenshot },
            ]}
            onClose={close}
            heading="QR Code"
            width="small"
          >
            <div ref={ref} className="flex justify-center p-3">
              <QRCode value={props.url[0]} level="H" />
            </div>
          </Modal>
        )}
      </ModalTransition>
    </>
  );
};

export default DisplayQR;
