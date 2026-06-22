---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1885 (CBL-4285) - Pairing time for payment made before due date - instalment schedule generating, payments pairing, daily pairing job"
domain: "Requirements Model"
element_id: 1359139
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ1.2 New SUMOFPREPAYMENT in debt catalogue and New business rule for its calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1885 (CBL-4285) - Pairing time for payment made before due date - instalment schedule generating, payments pairing, daily pairing job

## 📝 Notes

- add debtCatalogue.SUMOFPREPAYMENT as sum of all active and fully paid instalments with instalment part type Prepayment (PP) on the contract
	
- no existing business rule has to be changed with adding the prepayment value in debt catalogue

## 🔗 Connections (1)

- → Association: [[REQ1.2.1 align the existing business rules on debt catalogue]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1885 (CBL-4285) - VN Pre-transfer 2 - instalment schedule generating, payments pairing, daily pairing job
