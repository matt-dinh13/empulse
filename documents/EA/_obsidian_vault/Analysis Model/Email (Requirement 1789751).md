---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Client search/Validation rules/KZ/Client search form - KZ"
domain: "Analysis Model"
element_id: 1789751
diagrams: 4
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Email

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Client search/Validation rules/KZ/Client search form - KZ

## 📝 Notes

E-mail address.

Validation: Text; length to 50 chars
E-mail address contains two parts divided by @ char: <user_part>@<domain_part>
At least one char before and one char past "@" has to be entered.
<user_part>

	
- special chars, diacritic marks and spaces cannot be used:()<>@&,;:"[]\


<domain_part> IP address like

	
- it has to contain four integers less than 256 separated by dots (e.g. john.smith@[74.125.87.99])
	
- IPv4 format is only allowed


<domain_part> text string like

	
- special chars, diacritic marks and spaces cannot be used:()<>@&,;:"[]\
	
- at least two parts divided by dot has to be used; last part (top-level domain) has to contain two Latin chars at least
	
- it cannot begin even end with dot or dash


	
- double dash or dot cannot be used (e.g. john@smith..com; john@sm--ith.com)


	
- only RFC 5335 diacritic marks allowed

.
If the user adds wrong data MSG_WRONG_PATTERN appears.

## 🔗 Connections (4)

- ← Dependency: [[Email (Action 1141158)]]
- ← Dependency: [[Email (Action 1473358)]]
- ← Dependency: [[Contact validation rule-VN]]
- ← Dependency: [[Email format]]

## 📊 Appears In (4 diagrams)

- Custom: Client search form - KZ
- Custom: Contact to client
- Custom: General rule tasks
- Custom: Validation rules-VN
