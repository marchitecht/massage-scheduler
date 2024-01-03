import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PlansCosm from "./PlansCosm";
import CredentialsCosm from "./CredentialsCosm";

function ModalCosm({ open, onClose, selected, bookingDate, setOpen }) {
  const [step, setStep] = useState(1);
  const [datas, setDatas] = useState({});

  function stepNext(service) {
    setStep((step) => step + 1);
    setDatas((data) => {
      const forData = { ...data, service };

      return forData;
    });
  }
  const obj = {
    1: <PlansCosm stepNext={stepNext} />,
    2: (
      <CredentialsCosm
        setOpen={setOpen}
        service={datas}
        startTime={selected}
        bookingDate={bookingDate}
      />
    ),
  };

  const stepDec = () => {
    setStep((step) => step - 1);
  };
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog onClose={onClose} className="fixed inset-0 z-10 overflow-y-auto">
        <div className="min-h-screen px-8 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-center text-white align-middle transition-all transform dark:bg-indigo-900 shadow-xl rounded-2xl">
              <Dialog.Panel>
                <Dialog.Title>Начало сеанса в {selected}</Dialog.Title>
                <Dialog.Description>
                  {datas?.service?.title
                    ? datas?.service?.title
                    : "Выберите услугу:"}
                </Dialog.Description>
                {obj[step]}
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
export default ModalCosm;
