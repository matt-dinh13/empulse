---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Account management/Account detail/Validation rule"
domain: "Analysis Model"
element_id: 1286075
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Email format

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/Validation rule

## 📝 Notes

{ADD CLM-1008 /}
E-mail address.
Validation: Text; length from 6 up to 50 chars
E-mail address contains two parts divided by @ char: <user_part>@<domain_part>
At least one char before and one char past "@" has to be entered.
<user_part>

	
- special chars, diacritic marks and spaces cannot be used:()<>@&,;:"[]\
	
- double dot cannot be used (e.g. john..charles@smith.com)


<domain_part> IP address like

	
- it has to contain four integers less than 256 separated by dots (e.g. john.smith@[74.125.87.99])
	
- IPv4 format is only allowed


<domain_part> text string like

	
- special chars, diacritic marks and spaces cannot be used:()<>@&,;:"[]\
	
- at least two parts divided by dot has to be used; last part (top-level domain) has to contain two Latin chars at least and 10 chars maximally
	
- it cannot begin even end with dot or dash


	
- double dash or dot cannot be used (e.g. john@smith..com; john@sm--ith.com)


If wrong format is entered, MSG_5030 will be displayed.

## 🔗 Connections (1)

- ← Dependency: [[Email validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rule
