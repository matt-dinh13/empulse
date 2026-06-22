---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Installment schedule manipulations"
domain: "Data manipulation support"
element_id: 1377169
diagrams: 1
connections: 1
tags:
  - requirement
  - data-manipulation-support
---

# 📋 {ADD}Create a copy of financial parameters and related structures

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Installment schedule manipulations

## 📝 Notes

{ADD PAYM-551 CBL-691 /}

Input:

	
- contract
	
- MaximalVersion - maximal version of IS for contract


Steps:
1. System finds active financial parameters of the contract as OldFP.
2. System archives OldFP and creates its copy (NewFP) with following updates:
- archived = false
- annuity amount = sum of amounts of installment parts of type 'S' and 'I' from second active standard installment with version = MaximalVersion + 1
- terms = count of active standard installments
- total monthly payment amount = sum of amounts of all installment parts from second active standard installment with version = MaximalVersion + 1
- creation date = current date and time
- created by = current user
- update date = current date and time
- updated by = current user
- expected end date = due date of the active standard installment with highest installment number and version = MaximalVersion + 1
3. System finds all active Contract presented interest rates for financial parameters OldFP, archives them and create their copies with following updates:
- version = 0
- financial parameters = NewFP
- archived = 0
- creation date = current date and time
- created by = current user
- update date = current date and time
- updated by = current user
4. System finds all active Financial parameters items for financial parameters OldFP, archives them and create their copies with following updates:
- id = newly generated id from sequence as FPI_ID[i]
- version = 0
- financial parameters = NewFP
- creation date = current date and time
- created by = current user
- update date = current date and time
- updated by = current user
- data exchange id = newly generated id from sequence
5. For each Financial parameter item system creates copies of all of its FinancialParametersItem2Subvention with following updates:
- id = FPI_ID[i]
- version = 0
- creation date = current date and time
- created by = current user
- update date = current date and time
- updated by = current user
6. For each Financial parameter item system creates copies of all of its FinancialParametersItem2TariffItem with following updates:
- id = FPI_ID[i]
- version = 0
- creation date = current date and time
- created by = current user
- update date = current date and time
- updated by = current user
7. For each Financial parameter item system creates copies of all of its FinParServiceTariffIte with following updates:
- FP tariff item id = FPI_ID[i]
8. System sends CREDIT110 message to OBS if it's present.

## 🔗 Connections (1)

- ← Dependency: [[{ADD}Move installment schedule to a specific version]]

## 📊 Appears In (1 diagrams)

- Use Case: Installment schedule manipulations
