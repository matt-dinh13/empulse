---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2996 - ChR - OBS interface - Updates in communication regarding payments"
domain: "Modules"
element_id: 821270
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 REQ#2 Update message REQUESTPAYMENT135 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2996 - ChR - OBS interface - Updates in communication regarding payments

## 📝 Notes

New attributes in REQUESTPAYMENT135:

	
- IdCredit
	
- TypeInform
	
- Source


Deleted attributes from REQUESTPAYMENT135:

	
- EvidSrv
	
- IdPaymentCancelled


Related changes in the business rule "Processing ArtificialIncomingPaymentRequest".

Changes in ArtificialIncomingPaymentRequest:

	
- new type ArtificialIncomingPaymentSourceSystem
	
- new attribute sourceSystem and typeOfOperation
	
- deleted attributes cancelledPaymentDataExchangeId

## 🔗 Connections (1)

- ← Dependency: [[Processing ArtificialIncomingPaymentRequest]]

## 📊 Appears In (1 diagrams)

- Custom: BRR-2996 - ChR - OBS interface - Updates in communication regarding payments
