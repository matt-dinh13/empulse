---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/PH/Personal information/Contact to client"
domain: "Analysis Model"
element_id: 1465191
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 E-mail format

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/PH/Personal information/Contact to client

## 📝 Notes

E-mail address.
Validation: Text; length from 6 up to 50 chars
E-mail address contains two parts divided by @ char: <user_part>@<domain_part>
At least one char before and one char past "@" has to be entered.
<user_part>

	
- special chars, diacritic marks and spaces cannot be used:()<>@,;:"[]\
	
- double dot cannot be used (e.g. john..charles@smith.com)


<domain_part> IP address like

	
- it has to contain four integers less than 256 separated by dots (e.g. john.smith@[74.125.87.99])
	
- IPv4 format is only allowed


<domain_part> text string like

	
- special chars, diacritic marks and spaces cannot be used:()<>@,;:"[]\
	
- at least two parts divided by dot has to be used; last part (top-level domain) has to contain two Latin chars at least and 10 chars maximally
	
- at least 2 characters have to be after "@" and before dot and top level domain
	
- it cannot begin even end with dot or dash


	
- double dash or dot cannot be used (e.g. john@smith..com; john@sm--ith.com)



If wrong format is entered, MSG_5030 will be displayed.

## 🔗 Connections (2)

- ← Dependency: [[E-mail (Action 1465205)]]
- ← Dependency: [[Contact validation rule-PH]]

## 📊 Appears In (3 diagrams)

- Custom: Contact to client
- Custom: Validation rules
- Custom: Validation rules - PH
