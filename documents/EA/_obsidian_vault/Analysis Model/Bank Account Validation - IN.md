---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/IN"
domain: "Analysis Model"
element_id: 883085
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Bank Account Validation - IN

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/IN

## 📝 Notes

Mandatory fields:

	
- relation to bank (code) or bank name (text)
	
- relation to bank branch (code) or bank branch name (text)

Mandatory fields for refunds:

	
- all fields are mandatory


Selecting Bank, State, District, Bank Branch and MICR:

	
- User fills in MICR and moves cursor out of this field.
	
- System searches record in Bank branch list (bank branch.MICR = MICR). 
	
- If:
a) exactly one bank branch is found then values bank, state (region), district, bank branch are pre-filled with corresponding values from the list and disabled.
b) more than one bank branch is found, system displays modal window with list of all found bank branches (for each bank branch system will show "<Bank.name> / <state> / <BankBranch.Name> / IFSC: <BankBranch.Code>" . User will then select required bank branch and system will then pre-fill and disable fields as in a)
	
- If not found then message is displayed "MICR not found - enter particular bank address fields" and user has to fill all values manually as now. 
	
- If user selects bank branch and moves cursor out of this field, system searches for corresponding record in Bank branch list and copies BankBranch.MICR into text field MICR.

## 🔗 Connections (2)

- ← Dependency: [[Bank account (Simple) - IN]]
- ← Dependency: [[Create_Update bank acount - IN]]

## 📊 Appears In (2 diagrams)

- Custom: Bank accont (Simple) - IN
- Custom: Create/Update bank acount - IN
