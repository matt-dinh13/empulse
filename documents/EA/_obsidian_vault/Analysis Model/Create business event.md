---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Business events/Business rules"
domain: "Analysis Model"
element_id: 1834357
diagrams: 9
connections: 25
tags:
  - requirement
  - analysis-model
---

# 📋 Create business event

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Business events/Business rules

## 📝 Notes

Input:

	
- Contract


	
- BusinessEventType
	
- ModificationBy
	
- TimeOfModification
	
- salesroom - optional
	
- list of attributes, i.e. pair
- BusinessEventAttributeType
- Value      ...string


Algorithm:
1. System creates a BusinessEvent with the following parameters:

	
- Contract = passed Contract
	
- Type = passed BusinessEventType


	
- TimeOfModification = TimeOfModification
	
- Originator = ModificationBy
	
- Salesroom = passes Salesroom


	
- IsInternaluser =
- '0' when the related user has neither role "SA" or "RA", or the role of the user cannot be detected.
- '1' when the related user has application role "SA"
- '2' when the related user has application role "RA"
- '3' when the related user has both application roles,  "SA" and "RA"


2. System creates a BusinessEventAttribute for each passed attribute:

	
- Event = created BusinessEvent


	
- Type = passed BusinessEventAttributeType
	
- Value = passed Value 


Note: following behaviour for setting of IsInternalUser
 for ARRANGE_APPLICATION the value is set always 0
for BSL (UI) the value is set based on logged user (ORIGINATOR)
for API the value is set based on technical user (not originator)

## 🔗 Connections (25)

- ← Dependency: [[{MOD}08.060 Change Due Date]]
- ← Dependency: [[01.265 Receive contract package (UseCase 1759980)]]
- ← Dependency: [[{ADD}13.418 Process Card Balance Transfer response]]
- ← Dependency: [[01.168 Refuse offers externally]]
- ← Dependency: [[01.167 Accept offer externally (UseCase 1827726)]]
- ← Dependency: [[01.350 Create business event on external request (UseCase 1834340)]]
- ← Dependency: [[08.262 Process Fees-back service (UseCase 1838986)]]
- ← Dependency: [[{MOD}08.280 Check and process CET request]]
- ← Dependency: [[{MOD}08.252 Process cooling-off period]]
- ← Dependency: [[{MOD}08.210 Check and process Gift payment]]
- ← Dependency: [[{MOD}08.220 Check and process Grace period]]
- ← Dependency: [[{MOD}05.310 Process disbursement confirmations]]
- ← Dependency: [[{MOD}05.350 Process disbursement confirmation message]]
- ← Dependency: [[Check DPD limit for insurance prolongation]]
- ← Dependency: [[Create notifications for Insurance prolongation (Requirement 1876174)]]
- ← Dependency: [[{MOD}01.187 Sign contract]]
- ← Dependency: [[01.552 Set business event on WO contact (UseCase 1878681)]]
- ← Dependency: [[{MOD}01.098 Update and evaluate application v9]]
- ← Dependency: [[01.311 Update offer to application and evaluate (UseCase 1879293)]]
- ← Dependency: [[01.313 Evaluate application (UseCase 1879292)]]
- ← Dependency: [[{MOD}01.310 Update application v9]]
- ← Dependency: [[01.095 Create and evaluate application]]
- ← Dependency: [[{NotImplemented}08.100 Process Full early repayment]]
- ← Dependency: [[03.100 Check and process Early repayment request (UseCase 1879631)]]
- ← Dependency: [[11.081 Prolong insurance contracts]]

## 📊 Appears In (9 diagrams)

- Custom: Business events - Business rules
- Custom: CBL-8020 (CLM-2520) Enrollment of Insurance prolongation switch on into Contract Business Events
- Use Case: Card Balance Transfer request processing - Use Case Model
- Use Case: Create business event on external request
- Use Case: Full early repayment processing
- Use Case: Gift payment processing
- Use Case: Insurance based on AccountBalanceChange EOM event
- Use Case: Insurance prolongation
- Use Case: Setting an Business Event on WO contract
