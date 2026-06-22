---
type: Change
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment"
domain: "Requirements Model"
element_id: 1391708
diagrams: 1
connections: 3
tags:
  - change
  - requirements-model
---

# 📄 ODS - add the contract to PER processing

> **Type**: Change · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment

## 📝 Notes

Paid amount

	
- System calculates Paid Amount as difference between sum of active Incoming Payments paired to the Contract and sum of active Installment Parts with Installment.Due Date =< ERDD and having all Installment.Type {ADD PAYM-1887 CBL-4285}excluding installments with part type Prepayment{/ADD PAYM-1887 CBL-4285}

## 🔗 Connections (3)

- → Dependency: [[08.055 Check Partial early repayment service]]
- ← Dependency: [[REQ 2.3 PER processing - TO CHECK WITH CLM]]
- → Dependency: [[08.057 Perform Partial early repayment (UseCase 1868459)]]

## 📊 Appears In (1 diagrams)

- Use Case: PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment
