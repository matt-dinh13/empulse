---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773134
diagrams: 2
connections: 18
tags:
  - requirement
  - analysis-model
---

# 📋 Application validation rule-VN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

Each attribute is validated separately as follows:

	
- clientName1 - Alphabetical string, VN chars, Length <= 30
	
- clientName2 - Alphabetical string, VN chars
	
- clientName3 - Length30, Alphabetical string. VN chars
	
- clientBirthDate - Date after 1.1.1900 and not in future, Date format
	
- clientChildrenCount - Number format, Length2
	
- contact– each record is validated according to Contact validation rule-VN
	
- address– each record is validated according to Address validation rule-VN
	
- comment - Length256, Text
	
- employment– each record is validated according to Employment validation rule-VN
	
- occupationIncomeAmount - Length9, Optional for unemployed , Number format
	
- byWorkIncomeAmount - Length9, Number format
	
- otherDebtsAmount- Length9 , Number format
	
- relatedPerson – count of related persons>=2, each record is validated according to Person validation rule-VN
	
- disbursementPaymentChannel– validated according to PaymentChannel validation rule-VN
	
- repaymentPaymentChannel– validated according to PaymentChannel validation rule-VN
	
- commodity– each record is validated according to Commodity validation rule-VN and Unique IMEI

## 🔗 Connections (18)

- → Dependency: [[Total number of related persons]]
- → Generalization: [[Application validation rule (Requirement 1773433)]]
- → Dependency: [[Number format]]
- → Dependency: [[VN chars]]
- → Dependency: [[Length 9]]
- → Dependency: [[Length _= 30]]
- → Dependency: [[Date after 1.1.1900 and not in future]]
- → Dependency: [[Date format (Requirement 1635663)]]
- → Dependency: [[Length 2]]
- → Dependency: [[Text]]
- → Dependency: [[Alphabetical string]]
- → Dependency: [[Address validation rule-VN]]
- → Dependency: [[Length 256]]
- → Dependency: [[Contact validation rule-VN]]
- → Dependency: [[Person validation rule-VN]]
- → Dependency: [[Commodity validation rule-VN]]
- → Dependency: [[Employment validation rule-VN]]
- → Dependency: [[PaymentChannel validation rule-VN]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Custom: Validation rules-VN
