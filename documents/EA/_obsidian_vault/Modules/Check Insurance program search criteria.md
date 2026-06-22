---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Business Rules"
domain: "Modules"
element_id: 1596805
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Check Insurance program search criteria

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Business Rules

## 📝 Notes

Insurance Program code:

	
- User must enter whole match code. System compares lower cased strings. (Service.Code)

Name:

	
- System compares lower cased strings (substring). (InsuranceProgram.Name)

Salesroom:

	
- System compares entered string. (InsuranceProgram.Salesroom)

Version status:

	
- If this date is specified then the search finds insurance programs where InsuranceProgram.Version Status = entered.Version status

Version validity from:

	
- If this date is specified then search finds insurance programs where InsuranceProgram.Valid From >= entered.Valid From

Version validity to:

	
- If this date is specified then search finds insurance programs where InsuranceProgram.Valid To <= entered.Valid To

Subject type:

	
- if the value is specified, the search finds insurance programs where InsuranceProgram.Subject Type = entered.Subject type


For search by substring is used the rule:

	
- User can use % to help with string search, with no limitations related to the character count. Character % is acting exactly like in sql syntax.
	
- Other option to look up substrings is to only write that substring without any special characters.

## 🔗 Connections (1)

- ← Dependency: [[08.570 Search for Insurance Program (UseCase 1597091)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Insurance Program management - Use Case Model
