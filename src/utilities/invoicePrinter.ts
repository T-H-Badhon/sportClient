import jsPDFInvoiceTemplate, { OutputType } from "jspdf-invoice-template";

export const invoicePrinter = (data) => {
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
      ],
      table: Array.from(Array(1), (item, index) => [
        index + 1,
        data.productId,
        data.sellQuantity,
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
