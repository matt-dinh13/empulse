---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM processing via REST API/Validation Rules"
domain: "Analysis Model"
element_id: 1758518
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Basic validation of DDM data

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM processing via REST API/Validation Rules

## 📝 Notes

Each attribute is validated separately as follows:

	
- bankAccountData.accountType
   - must be a known value of Account Type enumeration [MSG_ENUM_ERROR_WITH_PARAMS]
	
- bankAccountData.bankBranchSyncCode
   - must be a known value of Bank Branch.Synchronization_Code [MSG_ENUM_ERROR_WITH_PARAMS]
	
- contractCode
   - contract with corresponding  code (Contract.Contract_Code) must exist [INVALID_CONTRACT_CODE]
	
- ddmFrequency
   - must be a known value of DDM Frequency Type.Code [MSG_ENUM_ERROR_WITH_PARAMS]
	
- ddmType
   - must be a known value of DDM Type.Code [MSG_ENUM_ERROR_WITH_PARAMS]
	
- documentData.uuid
   - value is unique (within the request) [MSG_UNIQUE_OBJECT_IN_COLLECTION]
   - document with corresponding  UUID (Document.UUID) must exist [MSG_DOCUMENT_DOESNT_EXIST]
	
- ecsProviderCode
   - must be a known value of ECS Provider.Code [MSG_ENUM_ERROR_WITH_PARAMS]
	
- extendedProperties.key
   - value is unique (within the request) [EXTENDED_PROPERTY_DUPLICATED]
   - must be a known value of PAYM_Extended_Property_Item[.Extended_Property_Group_Code in ('DDM', 'DDM_DRAFT')].Code [EXTENDED_PROPERTY_DOES_NOT_EXIST] //Particular Extended_Property_Group_Code used during this validation is determined by the entity being actually updated.
	
- jfsPartner.code
   - value is unique (within the request) [MSG_UNIQUE_OBJECT_IN_COLLECTION]
   - must be a known value of Lender.Code [MSG_ENUM_ERROR_WITH_PARAMS]
	
- limit.amount
   - value must be greater than 0 [MSG_FIELD_SHOULD_BE_POSITIVE]
   - maximum length of the value must be 17 digits [MSG_FINANCIAL_VALUE_TOO_HIGH]
	
- limit.currency
   - must be a known value of Currency.Code [MSG_ENUM_ERROR_WITH_PARAMS]
	
- regularPaymentData.regularPaymentAmount.amount
   - value must be greater than 0 [MSG_FIELD_SHOULD_BE_POSITIVE]
   - maximum length of the value must be 17 digits [MSG_FINANCIAL_VALUE_TOO_HIGH]
	
- regularPaymentData.regularPaymentAmount.currency
   - must be a known value of Currency.Code [MSG_ENUM_ERROR_WITH_PARAMS]
	
- regularPaymentData.regularPaymentTypeCode
   - must be a known value of Regular Payment Type.Code [MSG_ENUM_ERROR_WITH_PARAMS]
	
- status
   - must be a known value of DDM Status Type enumeration [MSG_ENUM_ERROR_WITH_PARAMS]


Notes:
   - Applicable validation error code returned when the corresponding validation fails is stated in the brackets.
   - Any of these validations is applied only when the respective attribute is not null.

## 🔗 Connections (3)

- ← Dependency: [[14.434 PUT DDMOrDraft (Update direct debit mandate or direct debit mandate draft) (UseCase 1817867)]]
- ← Dependency: [[14.433 POST Draft (Create direct debit mandate draft) (UseCase 1817866)]]
- ← Dependency: [[14.432 POST DDM (Create and validate direct debit mandate) (UseCase 1817863)]]

## 📊 Appears In (1 diagrams)

- Custom: DDM processing via REST API - Validation Rules
