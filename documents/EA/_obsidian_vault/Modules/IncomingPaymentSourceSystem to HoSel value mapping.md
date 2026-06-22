---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/CBL/CBL-1696 - New SystemCode LP - AccountTransactionWS "
domain: "Modules"
element_id: 1224424
diagrams: 3
connections: 5
tags:
  - requirement
  - modules
---

# 📋 IncomingPaymentSourceSystem to HoSel value mapping

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/CBL/CBL-1696 - New SystemCode LP - AccountTransactionWS 

## 📝 Notes

This business rule describes mapping IncomingPaymentSourceSystem values to HoSel values.

Mapping IncomingPaymentSourceSystem <--> HoSel value:

	
- CABUS <--> CARD
	
- else mapping 1:1

## 🔗 Connections (4)

- ← Dependency: [[Processing ArtificialIncomingPaymentRequest]]
- ← Dependency: [[Generating IncomingPaymentRequest]]
- ← Dependency: [[Processing PaidInstalmentMessageDto]]
- ← Dependency: [[Processing PairedPaymentInfoDto]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-1696 - New SystemCode LP - AccountTransactionWS 
- Custom: COMMON for CBSA - Business rules
- Custom: Incoming payments - Business rules
