---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1738018
diagrams: 2
connections: 17
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Application validation rule-PH

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

Each attribute is validated separately as follows:

	
- clientName1- Name character set, Length <= 30
	
- clientName2- Name character set
	
- clientName3-Name character set, Max length 30
	
- clientName4- Name character set, Max length 30


	
- nickname -Nickname character set, Max length 30


	
- clientBirthDate - Person age, Cannot be in future
	
- clientBirthPlace.Code - must be value of District - PH
	
- clientDependentPersonsCount - Number of dependents
	
- contact– each record is validated according to Contact validation rule-PH
	
- address– each record is validated according to ClientAddress validation rule - PH
	
- comment - Filipino alphabet, ASCII 32 to ASCII 126, Max length 255
	
- employment– each record is validated according to Employment validation rule-PH
	
- occupationIncomeAmount - Financial amount >= 0
	
- byWorkIncomeAmount - Financial amount >= 0
	
- otherDebtsAmount - Financial amount >= 0
	
- relatedPerson – Total number of related persons, each record is validated according to Person validation rule-PH,
	
- disbursementPaymentChannel– validated according to PaymentChannel validation rule-PH
	
- repaymentPaymentChannel– validated according to PaymentChannel validation rule-PH
	
- clientHonorAfter -Max length 30


	
- commodity– each record is validated according to Commodity validation rule-PH
	
- XsellOfferCode - Alphanumeric character set, Max length 30

## 🔗 Connections (17)

- → Dependency: [[Person age]]
- → Dependency: [[Alphanumeric character set]]
- → Dependency: [[Length _= 30]]
- → Dependency: [[Nickname character set]]
- → Dependency: [[PaymentChannel validation rule-PH]]
- → Dependency: [[Commodity validation rule-PH]]
- → Dependency: [[Contact validation rule-PH]]
- → Dependency: [[Person validation rule-PH]]
- → Dependency: [[Employment validation rule-PH]]
- → Dependency: [[Financial amount _= 0]]
- → Generalization: [[Application validation rule (Requirement 1773433)]]
- → Dependency: [[Number of dependents]]
- → Dependency: [[Cannot be in future]]
- → Dependency: [[ClientAddress validation rule - PH]]
- → Dependency: [[Total number of related persons]]
- → Dependency: [[Length 255]]
- → Dependency: [[Name character set]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Custom: Validation rules - PH
