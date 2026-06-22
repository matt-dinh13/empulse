---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Profile/Validation Rules"
domain: "Modules"
element_id: 1808987
diagrams: 3
connections: 4
tags:
  - requirement
  - modules
---

# 📋 {MOD}ProductProfileInputDto - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Profile/Validation Rules

## 📝 Notes

POST ProductProfileInputDto 

	
- code 
must be unique in Product Profile.Code [PRODUCT_PROFILE_EXISTS]
Mandatory 
When creating of new profile allow only characters from set "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-" (space is not allowed)
Number of characters must be in interval <4, 20>
[INVALID_CODE]


	
- name
mandatory [REQUIRED]
	
- active
mandatory [REQUIRED]
	
- productType
mandatory [REQUIRED]
	
- initialTransactionType
mandatory [REQUIRED]
	
- accountingMethod
mandatory [REQUIRED]
	
- contractNegotiationProcess
mandatory [REQUIRED]
	
- firstDayOfBillingPeriodAlgorithm
mandatory for productType = REL [REQUIRED]
	
- firstDueDateAlgorithm
mandatory for productType in (CEL, SAI) [REQUIRED]
	
- installmentScheduleMethodDefault
mandatory for productType in (CEL, SAI) [REQUIRED]
for productType = SAI only values IS_ALG_BASIC {ADD PCG-4515}and IS_ALG_AN_PRINC{/ADD} [INVALID_VALUE]
only for productType in (CEL, SAI) [INVALID_VALUE]


	
- dayCountMethod
mandatory for productType in (CEL {ADD PCG-4515}, SAI){/ADD}[REQUIRED]
only for productType in (CEL {ADD PCG-4515}, SAI){/ADD} [INVALID_VALUE]
must exists in Day Count Method Type
must fullfill validations:
-  Day Count Method - validation rules with parameters (dayCountMethod, installmentScheduleMethodDefault)
-  Day Count Method - validation rules with parameters (dayCountMethod, installmentScheduleMethodAlternative)
[INVALID_VALUE]


	
- maxValidityOfPreparedDocuments
mandatory [REQUIRED]
	
- maxDocumentsPreparationPeriod
mandatory [REQUIRED]
	
- applicationFormConfigurations
mandatory [REQUIRED]
only add operation is allowed [INVALID_ASSOCIATION_INPUT]
	
- documentationConfigurations
mandatory [REQUIRED]
only add operation is allowed [INVALID_ASSOCIATION_INPUT]
	
- documentationConfiguration
mandatory [REQUIRED]
must exists in Documentation Configuration.Code [INVALID_DOCUMENTATION_CONFIGURATION]


POST, PUT ProductProfileInputDto 

	
- name
Free text, max. 30 chars


	
- active
	
- productType
must exists in ProductTypeDto
	
- initialTransactionType
mandatory muse exists in InitialTransactionTypeDto
value NDF is only allowed for produtType REL and SAI
[NVALID_INITIAL_TRANSACTION_TYPE_CEL]
if productType SAI only NDF value is allowed [NVALID_INITIAL_TRANSACTION_TYPE_SAI]
	
- isDebit
value true only with if productType = REL and initialTransactionType = NDF
[INVALID_IS_DEBIT]
	
- accountingMethod
must exists in Accounting Method.Code [ACCOUNTING_METHOD_TYPE_NOT_FOUND]


	
- contractNegotiationProcess
	
- firstDayOfBillingPeriodAlgorithm
allowed only for productType = REL [INVALID_VALUE]


	
- firstDueDateAlgorithm
enabled and mandatory for productType in (CEL, SAI) [MANDATORY]
must exists in First Due Date Algorithm Type


	
- installmentScheduleMethodDefault
must exists in Installment Schedule Method Type
mandatory for productType in (CEL, SAI) [REQUIRED]
for productType = SAI only values IS_ALG_BASIC {ADD PCG-4515}and IS_ALG_AN_PRINC{/ADD} [INVALID_VALUE]
only for productType in (CEL, SAI) [INVALID_VALUE]


	
- installmentScheduleMethodAlternative
must exists in Installment Schedule Method Type
must be different from installmetnScheduleMethodDefault
Enabled for ProductType = CEL and InstallmentScheduleMethodDefault = IS_ALG_AN_PRINC
The only available option is IS_ALG_EQ_PRINC


	
- dayCountMethod
only for productType = CEL {ADD PCG-4515}and SAI{/ADD}
must exists in Day Count Method Type
must fullfill validations:
-  Day Count Method - validation rules with parameters (dayCountMethod, installmentScheduleMethodDefault)
-  Day Count Method - validation rules with parameters (dayCountMethod, installmentScheduleMethodAlternative)
[INVALID_VALUE]
	
- businessCategory
must exists in Business Category
	
- maxDuration
only for productType = REL [INVALID_VALUE]
higher then 0
lower or equal to 999 [INVALID_NUMBER]
	
- maxValidityOfPreparedDocuments
higher then 0
lower or equal to  999 [INVALID_NUMBER]
	
- maxDocumentsPreparationPeriod
higher then 0
lower or equal to  999 [INVALID_NUMBER]
	
- applicationFormConfigurations
must exists in Application Form Configuration.Code [INVALID_APP_FORM_CONFIGURATION]
	
- documentationconfigurations
number of assigned configuration = 1 [INVALID_PROFILE_DOC_CONFIGURATIONS_COUNT]
must exists in Documentation Configuration.Code [INVALID_DOCUMENTATION_CONFIGURATION]
	
- documentationConfiguration
must exists in Documentation Configuration.Code [INVALID_DOCUMENTATION_CONFIGURATION]

## 🔗 Connections (4)

- → Dependency: [[Day Count Method - validation rules]]
- ← Dependency: [[POST product-profiles]]
- ← Dependency: [[PUT product-profiles]]
- ← Dependency: [[{ADD}02.160 Import product catalog setting UI]]

## 📊 Appears In (3 diagrams)

- Custom: Validation Rules
- Use Case: Export/Import product setting
- Use Case: Use Case
