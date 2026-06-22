---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8891 (CLM-2860) Sales Agents contract search limitation"
domain: "Requirements Model"
element_id: 1584130
diagrams: 3
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Sales agent search criteria restriction

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8891 (CLM-2860) Sales Agents contract search limitation

## 📝 Notes

This rule presents obtaining basic search criteria based on values entered by user on SA search panel, Salesroom selection and various system setting.

Steps: 

	
- System sets SearchCriteria by values form the form.Sales agent search panel
	
- At least one of the following rules of SearchCriteria must be met:
- Rule1: Contract number, Date of birth are filled
- Rule2: Contract number, Document type, Document ID number are filled
- Rule3: Document type, Document ID number, Date of birth are filled
- Rule4: Contract number, Date of birth, Document type, Document ID number are not filled
	
- {DEL }If a Salesroom is not selected and SAContractSearchCurrentUser (Global Parameter) = 1, -- search for contracts processed by user without Salesroom limitation
- system adds the currently logged user as CurrentUser into SearchCriteria{/DEL}
	
- If a Salesroom is selected and SAContractSearchCurrentUser (Global Parameter) in  (0, 1)  -- search for contracts processed on chosen Salesroom
- system adds the currently chosen Salesroom Code as CurrentSalesroom into SearchCriteria{/DEL}
	
- {ADD }If a Salesroom is selected and form.All contracts created by me = 1 then system adds the currently logged user as CurrentUser into SearchCriteria  -- search for contracts processed by user without Salesroom limitation
	
- If a Salesroom is selected and form.All contracts created by me = 0 then system adds the currently chosen Salesroom Code as CurrentSalesroom into SearchCriteria -- search for contracts processed on chosen Salesroom{/ADD}
	
- For any other case, system displays error message MSG_0434/MSG_INSUFFICIENT_SEARCH_CRITERIA and process ends.
	
- System returns SearchCriteria to the calling process

## 🔗 Connections (2)

- ← Dependency: [[Sales agent search criteria restriction (Action 1584135)]]
- ← Dependency: [[{ADD}Contract search filter - Sales agent search rule]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-8891 (CLM-2860) Sales Agents contract search limitation
- Custom: Validation rules
- Use Case: Contract search
