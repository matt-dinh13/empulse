---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM processing via REST API/Validation Rules"
domain: "Analysis Model"
element_id: 1758519
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Business validation of DDM data for create

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM processing via REST API/Validation Rules

## 📝 Notes

Each attribute is validated separately as follows:

	
- contractCode  (DDM_Draft.Contract_Code or Contract_to_DDM[.DDM_ID=ddmCode]->Contract.Contract_Code)
   - in case the contract with corresponding code is in status In Pre-process, In Process or Approved (i.e. Contract.Status in ('P', 'R', 'S')), then no other direct debit mandate in status New must exist for such contract (i.e. no Contract->DDM[.Status='NEW'] exists) [DDM_ALREADY_EXISTS] / [VALID_DDM_ALREADY_EXISTS_ON_THE_CONTRACT]
   - no other active direct debit mandate must exist for the contract with corresponding code (evaluated according to the rule Check for no concurrent DDMs) [DDM_ALREADY_EXISTS] / [VALID_DDM_ALREADY_EXISTS_ON_THE_CONTRACT]
.
	
- validFrom  (DDM_Draft.Valid_From)
   - value must not be a date in the past (i.e. validFrom >= sysdate) [DATE_IN_THE_PAST] / [VALID_FROM_IN_THE_PAST]


Notes:
   - Applicable validation error code returned when the corresponding validation fails is stated in the brackets (first mentioned code is applicable for create/update DDM; the other one for validate DDM data).

## 🔗 Connections (3)

- → Dependency: [[Check for no concurrent DDMs]]
- ← Dependency: [[14.435 POST ValidateDDM (Validate direct debit mandate data) (UseCase 1817864)]]
- ← Dependency: [[14.432 POST DDM (Create and validate direct debit mandate) (UseCase 1817863)]]

## 📊 Appears In (1 diagrams)

- Custom: DDM processing via REST API - Validation Rules
