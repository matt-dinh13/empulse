---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1538364
diagrams: 2
connections: 18
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Application validation rule-ID

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

- clientName1 - Length <= 100, Text containing [a-zA-Z\-\.' ]+
	
- clientName2 - Text containing [a-zA-Z\-\.' ]+
	
- clientName3 - Length30, Text containing [a-zA-Z\-\.' ]+
	
- clientName4 - Length30, Text containing [a-zA-Z\-\.' ]+
	
- clientBirthDate - Cannot be in future, Date
	
- clientBirthPlace.value - Length50, Extended text character set
	
- clientBirthPlace.code - must be value of districtCode
	
- contact– each record is validated according to ContactType validation rule - ID
	
- address– each ClientAddress is validated according to Address validation rule - ID
	
- salesAgentPhoneNumber - General phone number
	
- document– each record is validated according to KTP validation rule
	
- comment - Length256, Extended text character set
	
- employment– each record is validated according to EmploymentType validation rule - ID
	
- occupationIncomeAmount - Non-negative number up to 99 999 999
	
- otherDebtsAmount - Non-negative number up to 99 999 999
	
- mainSourceOfIncome- must be value of Source Of Income.Code
	
- bankAccountOwnership - if financeBankName is not null, value must be TRUE
	
- relatedPerson– each record is validated according to PersonType validation rule - ID and Unique related person
	
- repaymentPaymentChannel–validated according to PaymentChannelType validation rule - ID
	
- commodity– each record is validated according to Commodity validation rule - ID


	
- numberOfCreditCards - 0-99

## 🔗 Connections (18)

- → Dependency: [[Cannot be in future (Requirement 1789747)]]
- → Generalization: [[Application validation rule (Requirement 1773433)]]
- → Dependency: [[Length _= 30]]
- → Dependency: [[Non-negative number up to 99 999 999]]
- → Dependency: [[Length _= 100]]
- → Dependency: [[ContactType validation rule - ID]]
- → Dependency: [[General phone number]]
- → Dependency: [[0-99]]
- → Dependency: [[Length 50]]
- → Dependency: [[Extended text character set]]
- → Dependency: [[Length 256]]
- → Dependency: [[Address validation rule - ID]]
- → Dependency: [[Text containing [a-zA-Z_-_.' ]+]]
- → Dependency: [[PaymentChannelType validation rule - ID]]
- → Dependency: [[KTP validation rule]]
- → Dependency: [[Date (Requirement 1789783)]]
- → Dependency: [[Commodity validation rule - ID]]
- → Dependency: [[PersonType validation rule - ID]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Custom: Validation Rules - ID
