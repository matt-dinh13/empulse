---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2996 - ChR - OBS interface - Updates in communication regarding payments"
domain: "Modules"
element_id: 821264
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 REQ#4 Add paymentSource to the INSTALPAY 124 messages

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2996 - ChR - OBS interface - Updates in communication regarding payments

## 📝 Notes

Changes in INSTALPAY124:

	
- TypeInform - change of data type
	
- new attribute PaymentSource


Changes in PairedPaymentRequest:

	
- new attribute paymentSourceSystem


Related changes in the business rule Processing PairedPaymentRequest.

+ correction RecalculationReasonTypeDto.EF --> ER

Note: Table INSTALPAY126 has not been yet. It will be done within BRR-2353.

## 🔗 Connections (1)

- ← Dependency: [[Processing PairedPaymentInfoDto]]

## 📊 Appears In (1 diagrams)

- Custom: BRR-2996 - ChR - OBS interface - Updates in communication regarding payments
