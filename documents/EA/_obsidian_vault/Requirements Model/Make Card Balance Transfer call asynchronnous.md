---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-22574 (CSI-2938) Convert CARD BALANCE to installment plan"
domain: "Requirements Model"
element_id: 1815398
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Make Card Balance Transfer call asynchronnous

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-22574 (CSI-2938) Convert CARD BALANCE to installment plan

## 📝 Notes

Expected scope:

	
- new RMQ exchange for passing request for the Card Balance Transfer to IP
	
- separation the current UC13.416 Process Card Balance Transfer request to two parts - one for sending requests, second one for response evaluations (probably EventInfo will be used as response)

## 🔗 Connections (1)

- → Generalization: [[Business Requirement]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-22574 (CSI-2938) Convert CARD BALANCE to installment plan
