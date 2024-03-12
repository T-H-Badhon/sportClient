/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Datepicker, Label, Modal, TextInput } from "flowbite-react";

type TProps = {
  openModal: boolean;

  setOpenModal: any;
  sellFunc: any;
};

const SellModal = ({ openModal, setOpenModal, sellFunc }: TProps) => {
  const onSubmit = (event: any) => {
    const sellQuantity = parseInt(event.target.sellQuantity.value);
    const buyerName = event.target.buyerName.value;
    const date = event.target.date.value;

    const saleInfo = {
      sellQuantity,
      buyerName,
      date,
    };

    sellFunc(saleInfo);
  };

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <div className="p-4 ">
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid grid-cols-4">
            <div className="mb-2 block col-span-1">
              <Label
                className="text-xl"
                htmlFor="sellQuantity"
                value="Quantity: "
              />
            </div>
            <TextInput id="sellQuantity" type="text" required />
          </div>
          <div className="grid grid-cols-4">
            <div className="mb-2 block col-span-1">
              <Label className="text-xl" htmlFor="buyerName" value="Buyer: " />
            </div>
            <TextInput id="buyerName" type="text" required />
          </div>
          <div className="grid grid-cols-4">
            <div className="mb-2 block col-span-1">
              <Label className="text-xl" htmlFor="date" value="Date: " />
            </div>

            <Datepicker id="date" />
          </div>
          <hr />
          <div className="flex justify-end">
            <Button
              color="failure"
              className="mr-2"
              onClick={() => setOpenModal(false)}
            >
              Discard
            </Button>
            <Button type="submit">Sell</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SellModal;
