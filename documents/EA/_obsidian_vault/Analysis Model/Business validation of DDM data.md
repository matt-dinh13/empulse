---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM processing via REST API/Validation Rules"
domain: "Analysis Model"
element_id: 1758521
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Business validation of DDM data

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM processing via REST API/Validation Rules

## 📝 Notes

Each attribute is validated separately as follows:

	
- bankAccountData.accountHolderName (DDM_Draft.Bank_Account_Holder_Name)
   - maximum length of the value must be 255 characters [TOO_LONG] / [BANK_ACCOUNT_HOLDER_NAME_TOO_LONG]
.
	
- bankAccountData.accountNumber  (DDM_Draft.Bank_Account_Number)
   - length of the value must be between 4 and 35 digits (inclusive) [INVALID_FORMAT] / [BANK_ACCOUNT_NUMBER_IN_INVALID_FORMAT]
.
	
- contractCode (DDM_Draft.Contract_Code or Contract_to_DDM[.DDM_ID=ddmCode]->Contract.Contract_Code)
   - contract with corresponding code must be in status In Pre-process, In Process, Approved, Signed or Active (i.e. Contract.Status in ('P', 'R', 'S', 'N', 'A')) [CONTRACT_IN_NOT_ALLOWED_STATUS] / [CONTRACT_IN_INVALID_STATUS]

      Note: The validation above is performed by calling the respective REST API provided by the COMA module (i.e. POST https://coma.{environment}/rest/v2/contracts-validation/) with following input parameters:
         - contracts = contractCode
         - validationCriteria.contractStatuses = ['IN_PRE_PROCESS', 'IN_PROCESS', 'APPROVED', 'SIGNED', 'ACTIVE']
      In case any error is received within the applicable response, then the respective validation message is returned.
.
	
- ecsProviderCode (DDM_Draft.ECS_Provider)
   - in case the value of ddmType (DDM_Draft.DDM_Type) is not equal to 'STANDARD' (i.e. ddmType is not null AND ddmType != 'STANDARD'), then the value must not be null (i.e. ecsProviderCode is not null) [MANDATORY_FOR_ONLINE_DDM] / [MISSING_ECS_PROVIDER_CODE]
.
	
- regularPaymentData.regularPaymentTypeCode (DDM_Draft.Regular_Payment_Type)
   - in case the global parameter MandatoryRegularPaymentCode = TRUE AND the contract (identified by the contractCode) is based on a REL product type (i.e. Contract.Contract_Type = 'REL'), then the value must not be null (i.e. regularPaymentData.regularPaymentTypeCode is not null) [REGULAR_PAYMENT_CODE_MISSING] / [MISSING_REGULAR_PAYMENT_TYPE_CODE]
.


	
- regularPaymentData.regularPaymentAmount.amount (DDM_Draft.Regular_Payment_Amount)
   - in case the value of regularPaymentData.regularPaymentTypeCode = 'FIXED', then the value must not be null (i.e. regularPaymentData.regularPaymentAmount.amount is not null) [MANDATORY_FOR_FIXED_REGULAR_PAYMENT] / [MISSING_REGULAR_PAYMENT_AMOUNT]
.


	
- validTo (DDM_Draft.Valid_To)
   - value must not be a date in the past (i.e. validTo >= sysdate) [DATE_IN_THE_PAST] / [VALID_TO_NOT_IN_THE_FUTURE]
   - value must not be equal to the current date (i.e. validTo != sysdate) [CURRENT_DATE] / [VALID_TO_NOT_IN_THE_FUTURE]
   - value must be greater than the validFrom (DDM_Draft.Valid_From) date (i.e. validTo > validFrom) if it is not null [VALID_FROM_GREATER_OR_EQUAL_TO_VALID_TO] / [VALID_TO_NOT_GREATER_THAN_VALID_FROM]


Notes:
   - Applicable validation error code returned when the corresponding validation fails is stated in the brackets (first mentioned code is applicable for create/update DDM; the other one for validate DDM data).
   - Any of these validations (except those, that the value must not be null) is applied only when the respective attribute is not null

## 🔗 Connections (3)

- ← Dependency: [[14.434 PUT DDMOrDraft (Update direct debit mandate or direct debit mandate draft) (UseCase 1817867)]]
- ← Dependency: [[14.435 POST ValidateDDM (Validate direct debit mandate data) (UseCase 1817864)]]
- ← Dependency: [[14.432 POST DDM (Create and validate direct debit mandate) (UseCase 1817863)]]

## 📊 Appears In (1 diagrams)

- Custom: DDM processing via REST API - Validation Rules
