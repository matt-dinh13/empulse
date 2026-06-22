---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/UseCase Model"
domain: "Analysis Model"
element_id: 1817919
diagrams: 3
connections: 7
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Generate DDM code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/UseCase Model

## 📝 Notes

This object describes the steps, how system generates the (identification) code of a direct debit mandate.

Steps:

	
- If the parameter (parameters.properties) useNewDDMCodeSequence = TRUE, then system generates the DDM code in a YYDDDSSSSSSS format (12 digits) according to the following logic:
   - YY		2 digits		Calculated as (actual year - 1980) //Example: For the year 2022, the calculation is executed as (2022 - 1980) = 42
   - DDD		3 digits		Day of the year (for the current date) //Example: For February 1st, such value is 032
   - SSSSSSS		7 digits		Sequence (for the given year) starting from 0000001
	
- If the parameter (parameters.properties) useNewDDMCodeSequence = FALSE, then system generates the DDM code in a CCCCCCCCCCSS format (12 digits) according to the following logic:
   - CCCCCCCCCC	10 digits	Contract code (i.e. DDM->Contract.Contract_Code)
   - SS		  2 digits		Sequence (for the given contract code) starting from 01
	
- Algorithm ends.

## 🔗 Connections (7)

- ← Dependency: [[01.420 Create DDM on the contract]]
- ← Dependency: [[14.433 POST Draft (Create direct debit mandate draft) (UseCase 1817866)]]
- ← Dependency: [[14.432 POST DDM (Create and validate direct debit mandate) (UseCase 1817863)]]
- ← Dependency: [[01.421 Create application DDM (UseCase 1818674)]]
- ← Dependency: [[Application Processing]]
- ← Dependency: [[{MOD}14.421 Create DDM via WS]]
- ← Dependency: [[{MOD}14.422 Update DDM via WS]]

## 📊 Appears In (3 diagrams)

- Use Case: Create/Update/Receive DDM
- Use Case: DDM via WS
- Use Case: Fill in application
