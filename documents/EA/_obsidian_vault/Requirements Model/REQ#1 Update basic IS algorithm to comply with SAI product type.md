---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1410 (CBL-3666) Standalone insurance"
domain: "Requirements Model"
element_id: 1375655
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 Update basic IS algorithm to comply with SAI product type

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1410 (CBL-3666) Standalone insurance

## 📝 Notes

Contracts of a new type 'SAI' will have following financial parameters (FP):

	
- Net credit amount = 0
	
- Provided credit amount = 0
	
- Terms = 1
	
- First due date = regularly calculated date
	
- Annuity = 0
	
- Interest rate = 0
	
- FP Item (insurance) > Tariff item type.charging periodicity = IN_INSTALLMENT


We need to make sure that BASIC algorithm can successfully generate an installment schedule for such contract and FP.

Result IS should have following features:

	
- One installment
	
- One installment part of type S with amount 0 and filled fully paid date
	
- One installment part of type F with amount of insurance

## 🔗 Connections (1)

- → Generalization: [[PAYM-1410 (CBL-3666) Standalone insurance (Requirement 1375653)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1410 (CBL-3666) Standalone insurance
