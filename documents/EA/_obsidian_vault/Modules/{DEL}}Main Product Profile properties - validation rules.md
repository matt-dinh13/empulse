---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Profile/User Interface"
domain: "Modules"
element_id: 1860363
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {DEL}}Main Product Profile properties - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Profile/User Interface

## 📝 Notes

Code:

	
- Mandatory (MSG_5053, use also for next missing fields in the rule)
	
- When creating of new profile allow only characters from set "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-" (space is not allowed)


	
- Number of characters must be in interval <4, 20>
	
- Unique  (MSG_NON_UNIQUE_PROFILE_CODE)


Name:

	
- Mandatory


	
- Free text, max. 30 chars (MSG_FIELD_TYPE, use also for next invalid values in the rule)


Active:

	
- Mandatory


Product Type

	
- Mandatory
	
- Only values from Product Type entity are allowed


Initial Transaction Type

	
- Mandatory
	
- Only values from Product Transaction Type entity are allowed
	
- Option NDF (Not defined) is allowed only for productType = REL and SAI. Additionally for productType = SAI it is the only option displayed.


Is Debit:

	
- Mandatory
	
- Value TRUE can be used only in combination with ProductType = REL and InitialTransactionType = NDF


Accounting Method:

	
- Mandatory


	
- Only values from Accounting Method entity are allowed


Contract Negotiation Process:

	
- Mandatory


	
- Only values from Contract Negotiation Process Type entity are allowed


Preferred First Due Date Algorithm:

	
- Mandatory for ProductType = CEL and SAI.


	
- Only values from First Due Date Algorithm Type entity are allowed.


First Day of Billing period Algorithm Type:

	
- Mandatory for ProductType = REL


	
- Only values from First Day of Billing period Algorithm Type entity are allowed.


{DEL PCG-2668}
Product Purpose

	
- Mandatory
	
- Only values from Product Purpose Type entity are allowed.

{/DEL}

Installment Schedule Method default:

	
- Mandatory for ProductType = CEL


	
- Only values from Installment Schedule Method Type entity are allowed.


Installment Schedule Method alternative:

	
- Optional


	
- Only values from Installment Schedule Method Type entity are allowed.
	
- Alternative must be different to default.


Day Count Method

	
- Mandatory for ProductType = CEL
	
- Only values from Day Count Method Type entity are allowed
	
- Check rule Day Count Method - validation rules with parameters (Day Count Method, Installment Schedule Method default)


	
- Check rule Day Count Method - validation rules with parameters (Day Count Method, Installment Schedule Method alternative)


	
- I.e. both Installment Schedule Method default/alternative has to be compatible with the same Day Count Method.


Business Category

	
- Optional
	
- Only values from Business Category entity are allowed.


Max Duration:

	
- Optional
	
- Integer; 0 < MaxDuration <=999


Max Validity of prepared documents

	
- Mandatory
	
- Integer; 0 < MaxValidityOfPreparedDocuments <=999


Max Documents Preparation Period 

	
- Optional
	
- Integer; 0 < MaxDocumentsPreparationPeriod <=999


Application Form Configuration:

	
- Mandatory


	
- Only values from Application Form Configuration entity are allowed.


Documentation Configuration:

	
- Mandatory


	
- Max. number of assigned configurations = 1


	
- Only values from Documentation Configuration entity are allowed.

## 🔗 Connections (3)

- ← Dependency: [[{DEL}02.013 Clone Product Profile]]
- ← Dependency: [[{DEL}02.015 Set main Product Profile properties]]
- ← Dependency: [[Product Profile (Class 1879121)]]

## 📊 Appears In (2 diagrams)

- Custom: Set main Product Profile properties
- Use Case: Manage Product Profile
