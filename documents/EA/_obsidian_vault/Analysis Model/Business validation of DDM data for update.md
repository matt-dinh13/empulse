---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM processing via REST API/Validation Rules"
domain: "Analysis Model"
element_id: 1758520
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Business validation of DDM data for update

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM processing via REST API/Validation Rules

## 📝 Notes

Each attribute is validated separately as follows:

	
- Value of any of the following attributes must not be null: [MSG_REQUIRED]
   - bankAccount.accountHolderName
   - bankAccount.accountNumber
   - bankAccount.accountType
   - bankAccount.bankBranchSyncCode
   - contractCode
   - ddmFrequency //To avoid possible deleting of the value set automatically by the system during the creation of DDM
   - ddmType
   - limit.amount
   - limit.currency
   - status
   - validFrom //To avoid possible deleting of the value set automatically by the system during the creation of DDM
   - validTo //To avoid possible deleting of the value set automatically by the system during the creation of DDM
.
	
- contractCode
   - value must be equal to the code of a contract, which is already associated with the processed direct debit mandate (i.e. contractCode = DDM[.Code=ddmCode]->Contract.Contract_Code) [CONTRACT_CODE_CHANGE_NOT_ALLOWED] //To avoid changing the contract reference set during the creation of DDM
.
	
- validFrom 
   - value must not be a date in the past (i.e. validFrom >= sysdate) in case the current start of validity of the processed direct debit mandate is a date in the future (i.e. DDM[.Code=ddmCode].Valid_From > sysdate); otherwise value must be equal to or greater than the current start of validity of the processed direct debit mandate (i.e. validFrom >= DDM[.Code=ddmCode].Valid_From) [DATE_CANNOT_BE_CHANGED_TO_THE_PAST]


Notes:
   - Applicable validation error code returned when the corresponding validation fails is stated in the brackets.

## 🔗 Connections (1)

- ← Dependency: [[14.434 PUT DDMOrDraft (Update direct debit mandate or direct debit mandate draft) (UseCase 1817867)]]

## 📊 Appears In (1 diagrams)

- Custom: DDM processing via REST API - Validation Rules
