---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2204 - OBS interface - Incoming payments"
domain: "Modules"
element_id: 1223697
diagrams: 5
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Generating RefundPaymentRequest 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2204 - OBS interface - Incoming payments

## 📝 Notes

Input:

	
- record in REFUNDPAY222


Algorithm:
System creates a message containing a RefundPaymentRequest object with the following parameters:

	
- contractCode = according to the rule Get HoSel contract code, passed is REFUNDPAY222.IdCredit


	
- refundDataExchangeId =if REFUNDPAY222.IdRefundCancelled is not null, then REFUNDPAY222.IdRefundCancelled; otherwise REFUNDPAY222.Id_refund


	
- amountOfRefund = REFUNDPAY222.AmountRefund


	
- amountOfFee = REFUNDPAY222.AmountFee


	
- typeOfRecepient = REFUNDPAY222.TypeRefund - transformation is described in particular values of REFUNDPAY222RefundType
	
- typeOfOperation = if REFUNDPAY222.IdRefundCancelled is not null, then CREATE; otherwise CANCEL
	
- messageID = REFUNDPAY222.Id


	
- refundSource = "OBS"

## 🔗 Connections (5)

- ← Dependency: [[REFUNDPAY222]]
- → Dependency: [[REQ#4 Message REFUNDPAY222 (closed-end loans)]]
- → Dependency: [[REQ#7 Translate contract codes to contract DB ID for migrated contracts]]
- → Dependency: [[Get HoSel contract code]]
- → Association: [[REQ#2 Update of REFUNDPAY222]]

## 📊 Appears In (5 diagrams)

- Custom: BRR-2204 - OBS interface - Incoming payments
- Custom: BRR-2350 - OBS interface - Operations on contract (REL)
- Custom: BRR-2996 - ChR - OBS interface - Updates in communication regarding payments
- Custom: Refunds - Business rules
- Logical: Refunds - Communication Model
