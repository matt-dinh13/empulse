---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2204 - OBS interface - Incoming payments"
domain: "Modules"
element_id: 1224189
diagrams: 4
connections: 6
tags:
  - requirement
  - modules
---

# 📋 Generating IncomingPaymentRequest

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2204 - OBS interface - Incoming payments

## 📝 Notes

Input:

	
- record in PAYIN220


Algorithm:

	
- If PAYIN220.paymentType = 'RCT' and PAYIN220.typeInform = 'I', the algorithm ends.


	
- If PAYIN220.paymentType = 'OTH' and PAYIN220.typeInform = 'I', the algorithm logs an error and ends.


Otherwise the system creates a message containing a IncomingPaymentRequest object with the following parameters:

	
- contractCode = according to the rule Get HoSel contract code, passed is PAYIN220.IdCredit


	
- paymentDataExchangeId =PAYIN220.IdPayment
	
- sourceSystem = IncomingPaymentSourceSystem to HoSel value mapping, passed is PAYIN220.source


	
- typeOfOperation = if PAYIN220.typeInform = I (Insert), then CREATE; else CANCEL


	
- paymentType = PAYIN220.PaymentType - transformation is described in particular values of PAYIN220PaymentType
	
- paymentChannel = PAYIN220.PaymentChannel
	
- amount = PAYIN220.AmountPay
	
- depositDate = PAYIN220.DatePay
	
- messageID = PAYIN220.Id

## 🔗 Connections (6)

- ← Dependency: [[PAYIN220]]
- → Dependency: [[Get HoSel contract code]]
- → Dependency: [[REQ#3 Update PAYIN220]]
- → Dependency: [[REQ#2 Message PAYIN220 (closed-end loan and revolving loan)]]
- → Dependency: [[IncomingPaymentSourceSystem to HoSel value mapping]]
- → Dependency: [[REQ#7 Translate contract codes to contract DB ID for migrated contracts]]

## 📊 Appears In (4 diagrams)

- Custom: BRR-2204 - OBS interface - Incoming payments
- Custom: BRR-2996 - ChR - OBS interface - Updates in communication regarding payments
- Custom: Incoming payments - Business rules
- Logical: Processing Incoming Payments - Communication Model
