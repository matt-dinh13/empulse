---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Use Case"
domain: "Modules"
element_id: 1281329
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Product Offer Limits Validity - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Use Case

## 📝 Notes

Validation of interval of Product Offer Limits validity when update is required.

Input: 
- RequiredValidFrom, RequiredValidTo

Order of checks must be respected.
 

	
- If (RequiredValidFrom is not NULL) and RequiredValidFrom is not a valid date then return error code = WRONG_VALID_FROM
	
- If RequiredValidTo is not a valid date or NULL then return error code = WRONG_VALID_TO


	
- If RequiredValidFrom is not NULL and RequiredValidTo < RequiredValidFrom then return error code =  WRONG_VALID_TO
	
- If RequiredValidTo is not NULL and RequiredValidTo < RequiredValidFrom then return error code =  WRONG_VALID_TO
	
- If RequiredValidTo is not NULL and RequiredValidTo < TODAY then return error code =  WRONG_VALID_TO

## 🔗 Connections (1)

- ← Dependency: [[02.904 Set validity of product offer limits (UseCase 1380762)]]

## 📊 Appears In (1 diagrams)

- Use Case: Management of Product Offer Limits
