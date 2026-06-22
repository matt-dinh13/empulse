---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model"
domain: "Analysis Model"
element_id: 1878538
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Outgoing Payment File name definition - general

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model

## 📝 Notes

If no special definition exists, outgoing payment file name is defined as:
“OutgoingPayments_YYYY-MM-DD_N.xml”

	
- where YYYY-MM-DD is date of creation and N is sequence number in day


If definition exists, it is continued with a country specific definition:

	
- Vietnam - Outgoing Payment File name definition - VN

## 🔗 Connections (2)

- ← Dependency: [[Generate outgoing payments file]]
- ← Generalization: [[Outgoing Payment File name definition - VN]]

## 📊 Appears In (1 diagrams)

- Use Case: Process outgoing payments
