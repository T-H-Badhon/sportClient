import jsPDFInvoiceTemplate, { OutputType } from "jspdf-invoice-template";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const invoicePrinter = (data: any) => {
  const props = {
    outputType: OutputType.Save,
    returnJsPDFDocObject: true,
    fileName: "Invoice 2021",
    orientationLandscape: false,
    compress: true,

    business: {
      name: "Sports Items",
      address: data.branch,
      phone: "01412457812",
    },
    contact: {
      label: "Invoice issued for:",
      name: data.buyerName,
    },
    invoice: {
      label: data._id,
      num: 19,
      invDate: data.date,
      invGenDate: data.createdAt,
      headerBorder: false,
      tableBodyBorder: false,
      header: [
        {
          title: "#",
          style: {
            width: 10,
          },
        },
        {
          title: "Title",
          style: {
            width: 30,
          },
        },

        { title: "Quantity" },
        { title: "Price" },
        { title: "Total" },
      ],
      table: Array.from(Array(1), (_item, index) => [
        index + 1,
        data.name,
        data.sellQuantity,
        data.price,
        data.sellQuantity * data.price,
      ]),
    },
    footer: {
      text: "The invoice is created on a computer and is valid without the signature and stamp.",
    },
    pageEnable: true,
    pageLabel: "Page ",
  };

  jsPDFInvoiceTemplate(props);
};
