---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract package tracking/User Interface Model"
domain: "Analysis Model"
element_id: 1666670
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Rules for entering Contract Package search criteria

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract package tracking/User Interface Model

## 📝 Notes

{ADD HSPERF-334 /}
This rule describes validation of search criteria used on the Search for contract package form
Search criteria:

	
- Contract package code
	
- Contract number
	
- Salesroom name
	
- Salesroom Code
	
- Package status [list of values]
	
- Package location [list of values]
	
- Show contract packages created by me
	
- Date created from
	
- Date created to


Notice: Available Contract packages can be restricted by user's available Salesroom or Sales Area Salesrooms  - see {MOD}Access control to Contract Packages by Salesroom and Sales area access right rule

Validations for minimal mandatory items:
Contract package code or Contract number can be entered independently (one of the mentioned criteria entered is enough)

Salesroom Code or Salesroom name have to be entered either with Package status = 'A' or Date created from and Date created to at least
Salesroom Code or Salesroom name entered with Package status = 'C' has to be also entered with Date created from and Date created to at least. 

Package status = 'C' has to be entered with Date created from and Date created to at least

Package location has to be entered either with Package status = 'A' or Date created from and Date created to at least
Package location entered with Package status = 'C' has to be also entered with Date created from and Date created to at least

Show contract packages created by me = TRUE has to be entered either with Package status = 'A' or Date created from and Date created to at least

If no criteria is entered, then Date created from and Date created to have to be entered at least (can be pre-filled automatically - see description below)

If Date created from/Date created to have to be entered by above mentioned rules, both can be pre-filled automatically and validated by following rules:
- If none of the values (Date created from/Date created to) is entered then RestrictCreated = true else RestrictCreated = false.
- Values Date created from/Date created to are checked and adjusted according to the rule Validation and Adjustment of Interval in Days with parameters: Date created from, Date created to, MaxDays = value from Global Parameters, RestrictIfNonLimit = RestrictCreated

If any validation fails, system informs the user about the issue as follow: MSG_CON_PKG_SEARCH; e.g. Insufficient search criteria. Please add more information about searched contract package.

## 🔗 Connections (2)

- ← Dependency: [[Search for contract package]]
- ← Dependency: [[01.220 Search for contract package (UseCase 1759984)]]

## 📊 Appears In (1 diagrams)

- Custom: Search for contract package
