---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-22574 (CSI-2938) Convert CARD BALANCE to installment plan"
domain: "Requirements Model"
element_id: 1815402
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-3347 Process Card Balance Transfer request on Contract Supplement update

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-22574 (CSI-2938) Convert CARD BALANCE to installment plan

## 📝 Notes

- a new RMQ exchange for sending requests for Card Balance Transfer
	
- a new RMQ queue for receiving results of CBT processing (AM creates a new RMQ exchange for that)
	
- dividing UC to two parts: one determined for sending requests for CBT, second one for receiving results of CBT processing
	
- assign generated supplement Document to the Contract based on the Supplement setting

## 🔗 Connections (1)

- → Generalization: [[Business Requirement]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-22574 (CSI-2938) Convert CARD BALANCE to installment plan
