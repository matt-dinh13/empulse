---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract documents management/User Interface Model"
domain: "Analysis Model"
element_id: 1731362
diagrams: 3
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Populate security level select box options

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract documents management/User Interface Model

## 📝 Notes

This function populates security level select box options.

Input:

	
- Document -> Document_Attribute
	
- Document -> Document Type


	
- enumaration SecurityLevelSelectBoxEnum


Output:

	
- Security level select box with populated options


Steps:

	
- System loads select box options based enumeration SecurityLevelSelectBoxEnum and selects option as following:
If  Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].exists = True then system selects select box option, which has code = Document -> Document_Attribute[.Code = 'SECURITY_LEVEL'].Value
else system selects select box option, which has code = Document -> Document_Type.Security_Level.

## 🔗 Connections (4)

- ← Dependency: [[Security level]]
- → Dependency: [[SecurityLevelSelectboxEnum]]
- ← Dependency: [[{MOD}01.114 Set contract document security level]]
- ← Dependency: [[01.116 Set client document security level (UseCase 1880226)]]

## 📊 Appears In (3 diagrams)

- Custom: Set document security level
- Custom: Set document security level
- Use Case: Set document security level
