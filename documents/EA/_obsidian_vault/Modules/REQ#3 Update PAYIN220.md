---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2996 - ChR - OBS interface - Updates in communication regarding payments"
domain: "Modules"
element_id: 821268
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 REQ#3 Update PAYIN220

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2996 - ChR - OBS interface - Updates in communication regarding payments

## 📝 Notes

Changes in PAYIN220:

	
- new attributes TypeInform and Source
	
- deleted attributes IdPaymentCancelled, IdAccoper156 and IdTransac155


Changes in IncomingPaymentRequest

	
- new type IncomingPaymentSourceSystemDto
	
- new type IncomingPaymentTypeOperationDto
	
- new attributes sourceSystem and typeOfOperation
	
- deleted attributes cancelledPaymentDataExchangeId and transactionNumber


Related changes in the business rule "Generating Generating IncomingPaymentRequest".

## 🔗 Connections (1)

- ← Dependency: [[Generating IncomingPaymentRequest]]

## 📊 Appears In (1 diagrams)

- Custom: BRR-2996 - ChR - OBS interface - Updates in communication regarding payments
