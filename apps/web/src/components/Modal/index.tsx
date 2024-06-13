import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { PropsWithChildren } from 'react';

type ModalProps = {
  isOpen: boolean
  onClose: () => void;
  title?: JSX.Element | string;
}

export default function Modal({ children, isOpen, title, onClose, ...rest }: PropsWithChildren<ModalProps>) {
  return (
    <Transition appear show={isOpen}>
      <Dialog open={isOpen} onClose={onClose}>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-gray/40" aria-hidden="true" />
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4 fixed inset-0 w-screen z-50 backdrop-blur-sm">
          <Dialog.Panel className="flex h-full w-[459px] flex-col border border-[#8A919E33] bg-white sm:h-auto sm:max-w-xl rounded-3xl" {...rest}>
            <div className="flex p-4">
              {!!onClose && (
                <button type="button" className="ml-auto text-xl text-[#0A0B0D]" onClick={onClose}>
                  <XMarkIcon width={24} height={24} />
                </button>
              )}
            </div>

            <div className="flex flex-1 flex-col place-content-center place-items-center gap-2 mx-8 mb-16 max-w-prose">
              {Boolean(title) && (
                <Dialog.Title as="h2" className="text-center font-mono text-3xl text-illoblack">
                  {title}
                </Dialog.Title>
              )}
              {children}
            </div>
            </Dialog.Panel>
          </div>
      </Dialog>
    </Transition>
  )
}