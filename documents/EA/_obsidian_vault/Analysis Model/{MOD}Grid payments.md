---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/User Interface Model"
domain: "Analysis Model"
element_id: 1857000
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}Grid payments

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/User Interface Model

## 📝 Notes

This grid will display information about incoming payments and not canceled refunds (Refund_Item.Status <> CANCELED) related to contract.

Every item will have 2 lines in the table. First line is header and second line is body.
Header (item specific)
 

	
- For incoming payments:
- 'Payment' {DEL PAYM-1180 CBL-711}link to 05.050 Show incoming payment detail.{/ DEL}
{ADD PAYM-1354 CBL-711}
--- if separated module INC PAY is deployed (based on system property) it opens incoming payment detail in INC_PAY system via URL and the following parameters
------ incomingPaymentDataExchangeID = IncomingPayment.dataExchangeID
------ incomingPaymentSourceSystem = IncomingPayment.sourceSystem
Otherwise, it invokes 05.050 Show incoming payment detail.
{/ ADD}
- grid.Decouple



	
- For to refund item (Refund_Item.Status =NEW, TO_REFUND or RETURNED):
- INS_PaymentToRefund - link to 05.512 Show contract refund items



	
- For refunded item (Refund_Item.Status =REFUNDED or DELIVERED):

        (IF recipient == ANOTHER_CONTRACT) 
             INS_PaymentRefundedAnotherContract - link to 05.512 Show contract refund items
        (IF recipient == BANK_INCOME)  
             INS_PaymentRefundedBankIncome - link to 05.512 Show contract refund items
        (OTHERWISE)  
             INS_PaymentRefunded - link to 05.512 Show contract refund items

Body

	
- grid.Payment_Date
	
- grid.Amount
	
- grid.Splitted_amount
	
- grid.Payment_type/channel


Note: Refund_Item with status DELIVERED will have strikethrough font.

When row in payments grid is selected, paired installment parts in installments grid are colored. Grid is showed only for actual version of installment schedule.

Default order: Payment date and ID asc, Installment part priority (INSTALLMENT_PRIORITY, note: for installment part type fee or penalty is priority defined in link with TARIFF_ITEM_TYPE) asc.
Paging: No.
Scrolling: No.

Note: Refund_Item with status DELIVERED will have strikethrough font.

When row in payments grid is selected, paired installment parts in installments grid are colored. Grid is showed only for actual version of installment schedule.

Default order: Payment date and ID asc, Installment part priority (INSTALLMENT_PRIORITY, note: for installment part type fee or penalty is priority defined in link with TARIFF_ITEM_TYPE) asc.
Paging: No.
Scrolling: No.

## 🔗 Connections (1)

- → Realisation: [[REQ#2 Update of IS grid payments]]

## 📊 Appears In (1 diagrams)

- Custom: Back Office panel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Payment date | Date |  |
| Amount | Financial amount |  |
| Payment type/channel | Text |  |
| Splitted amount | Financial amount |  |
| Decouple | Button |  |
