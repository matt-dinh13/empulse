---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM processing via REST API/Validation Rules"
domain: "Analysis Model"
element_id: 1758522
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Validation of DDM draft for mandatory data

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM processing via REST API/Validation Rules

## 📝 Notes

Each attribute of the DDM_Draft object is validated separately as follows:

	
- Value of any of the following attributes must not be null:
   - Bank_Account_Holder_Name  [MISSING_BANK_ACCOUNT_HOLDER_NAME]
   - Bank_Account_Number  [MISSING_BANK_ACCOUNT_NUMBER]
   - Bank_Account_Type  [MISSING_BANK_ACCOUNT_TYPE]
   - Bank_Branch_Sync_Code  [MISSING_BANK_BRANCH_SYNC_CODE]
   - DDM_Type  [MISSING_DDM_TYPE]
   - Limit_Amount  [MISSING_LIMIT_AMOUNT]
.
	
- Contract_Code
   - value must not be null (i.e. DDM_Draft.Contract_Code is not null) OR Contract_to_DDM record with corresponding DDM code and non-empty contract reference must exist (i.e. Contract_to_DDM[.DDM_ID=DDM_Draft.Code and .Contract_ID not null] exists)  [MISSING_CONTRACT_CODE]


Notes:
   - Applicable validation error code returned when the corresponding validation fails is stated in the brackets.

## 🔗 Connections (1)

- ← Dependency: [[14.435 POST ValidateDDM (Validate direct debit mandate data) (UseCase 1817864)]]

## 📊 Appears In (1 diagrams)

- Custom: DDM processing via REST API - Validation Rules
