import React, { useState } from 'react';
import Button from '@atlaskit/button/standard-button';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';

export default function InfoModal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return (
    <>
      <Button appearance="primary" onClick={open}>
        Open modal
      </Button>

      <ModalTransition>
        {isOpen && (
          <Modal
            actions={[
              { text: 'Try it now', onClick: close },
              { text: 'Learn more' },
            ]}
            onClose={close}
            heading="Analytics Info"
          >
            Your url {props.data.xName} has {props.data.y} total views.
          </Modal>
        )}
      </ModalTransition>
    </>
  );
}
