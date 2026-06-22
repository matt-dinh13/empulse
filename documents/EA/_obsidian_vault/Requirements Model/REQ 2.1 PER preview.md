---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment"
domain: "Requirements Model"
element_id: 1391713
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 REQ 2.1 PER preview

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment

## 📝 Notes

Check PER request availability:

	
- Moratorium Installment Amount = (sum of (INSTALLMENT_PART.AMOUNT – INSTALMENT_PART.AMOUNT_PAID where INSTALLMENT.DUE_DATE < ER Due Date and INSTALLMENT.ACTIVE = true) - (sum of INSTALLMENT_PART.AMOUNT_PAID where INSTALLMENT_PART.TYPE = PP and INSTALLMENT.FLAG = True)

## 🔗 Connections (3)

- → Dependency: [[08.050 Show Partial ER preview]]
- → Dependency: [[Change PER result]]
- ← Association: [[REQ2_ PER alignment (Requirement 1391712)]]

## 📊 Appears In (1 diagrams)

- Use Case: PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment
