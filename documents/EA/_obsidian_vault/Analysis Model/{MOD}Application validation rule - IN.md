---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1819506
diagrams: 2
connections: 24
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Application validation rule - IN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

Each attribute is validated separately as follows:

	
- clientName1 - Text character set without space, Length <= 30
	
- clientName2 - Text character set without space
	
- clientName3 - Text character set
	
- clientName4 - Text character set without space
	
- clientName5 - Text character set without space
	
- clientName6 - Text character set
	
- mothersName - Text character set, Length30
	
- clientBirthDate - Person Age, Date format
	
- preferredLanguage
	
- clientDependentPersonsCount - Number of dependents
	
- contact– each record is validated according to Contact validation rule-IN
	
- address– each ClientAddress.address record is validated according to Address validation rule-IN
	
- document– each record is validated according to Document validation rule-IN
	
- comment - Character set (with space), Length256
	
- employment– each record is validated according to Employment validation rule-IN
	
- occupationIncomeAmount -Equal or greater then zero, Total Household Income, Additional Net Income, BigInteger
	
- byWorkIncomeAmount - Total Household Income, Additional Net Income
	
- householdIncomeAmount - Greater than zero, Total Household Income
	
- preferredPaymentDay - Salary day


	
- relatedPerson– each record is validated according to Person validation rule - IN, If at least one record is on input, at least one related person must have Person_Relation_Type.Family = 'true'.


	
- disbursementPaymentChannel– validated according to PaymentChannel validation rule-IN
	
- repaymentPaymentChannel– validated according to PaymentChannel validation rule-IN
	
- loanPurpose
	
- clientGender
	
- commodity– each record is validated according to {ADD}Commodity validation rule-IN
	
- code - Code validation rule - IN
	
- extendedInformation - each record is validated according to  Extended information validation rule-IN
	
- relationships

## 🔗 Connections (24)

- → Dependency: [[Employment validation rule-IN]]
- → Dependency: [[Text character set (Requirement 1789775)]]
- → Dependency: [[Salary day (Requirement 1772605)]]
- → Dependency: [[Additional Net Income (Requirement 1772602)]]
- → Dependency: [[Text character set without space]]
- → Dependency: [[Person validation rule - IN]]
- → Dependency: [[Code validation rule - IN]]
- → Dependency: [[Length _= 30]]
- → Dependency: [[Total Household Income]]
- → Dependency: [[Document validation rule-IN]]
- → Dependency: [[Character set (with space)]]
- → Generalization: [[Application validation rule (Requirement 1773433)]]
- → Dependency: [[Contact validation rule-IN]]
- → Dependency: [[Must be in the future]]
- → Dependency: [[Commodity validation rule-IN]]
- → Dependency: [[Equal or greater then zero]]
- → Dependency: [[Date format]]
- → Dependency: [[Person Age]]
- → Dependency: [[Number of dependets]]
- → Dependency: [[{MOD}Address validation rule-IN]]
- → Dependency: [[Greater than zero]]
- → Dependency: [[Length 256]]
- → Dependency: [[PaymentChannel validation rule-IN]]
- → Dependency: [[Extended information validation rule-IN]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Custom: Validation rules - IN
