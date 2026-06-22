---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation"
domain: "Data manipulation support"
element_id: 1584686
diagrams: 1
connections: 4
tags:
  - requirement
  - data-manipulation-support
---

# 📋 Creation INSTALMENT120 record rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation

## 📝 Notes

There are Installment Parts affected by change (e.g. contract status change) and found in INSTALMENT120TypeInstalment where IINSTALMENT120TypeInstalment.Code = 

	
- InstallmentpartDto.partType   ...if InstallmentpartDto.partType is NOT in (F, FT, P) 
	
- InstallmentpartDto.tariffItemTypeCode   ...if InstallmentpartDto.partType is in (F, FT, P)

are sent to OBS. If no record is found, log an error and finish. 
For example, if a paid-off installment schedule is returned back to active, you send original TERMINATED installment as CANCEL operation a all renewed installments as CREATE operation.

## 🔗 Connections (4)

- ← Dependency: [[Set Canceled contract to Active status]]
- ← Dependency: [[Set Paid-off contract to Active status]]
- ← Dependency: [[Set Canceled contract to Signed when it was Approved only]]
- ← Dependency: [[Set Canceled contract to Signed status]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract status manipulation
