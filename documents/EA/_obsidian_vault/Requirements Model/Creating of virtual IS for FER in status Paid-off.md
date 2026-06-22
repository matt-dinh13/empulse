---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-7 (CBL-29) Consolidation (Top up) for cash loans"
domain: "Requirements Model"
element_id: 1807830
diagrams: 5
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Creating of virtual IS for FER in status Paid-off

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-7 (CBL-29) Consolidation (Top up) for cash loans

## 📝 Notes

Input:
- contract in status Paid-off (L) 


	
- All installments (Active and Inactive) and their installment parts (INSTALLMENT_PART) of installment schedule of contract are copied into virtual IS (VIS).
	
- The Paid-off operation is recalled in VIS according to the rule {MOD CBL-29 IS: } Recalling of terminated Installment schedule with recalculation reason 'PO'(Pay-off)

## 🔗 Connections (4)

- → Dependency: [[Recalling of terminated Installment schedule]]
- ← Dependency: [[08.066 Calculate Full Early repayment preview (UseCase 1879648)]]
- ← Dependency: [[03.052 Create Full Early repayment request (UseCase 1879643)]]
- ← Dependency: [[03.100 Check and process Early repayment request (UseCase 1879631)]]

## 📊 Appears In (5 diagrams)

- Custom: IS-7 (CBL-29) Consolidation (Top up) for cash loans
- Use Case: Full early repayment - printouts
- Use Case: Full early repayment processing
- Use Case: Full early repayment request - externally
- Use Case: Full early repayment request - via GUI
