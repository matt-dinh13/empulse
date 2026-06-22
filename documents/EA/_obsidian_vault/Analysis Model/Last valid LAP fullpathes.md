---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model/Interface LAP"
domain: "Analysis Model"
element_id: 1820660
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Last valid LAP fullpathes

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model/Interface LAP

## 📝 Notes

The last valid path to the LAP vector is defined as follows:

	
- if ceResult full paths exists (ceResult.workflowCode is filled) then get values from ceResult.
	
- Otherwise if hvResult full paths exists (hvResult.workflowCode is filled) then get values from hvResult.


	
- Otherwise if postResult full paths exists (postResult.workflowCode is filled) then get values from postResult.
	
- Otherwise if preResult full paths exists (preResult.workflowCode is filled) then get values from preResult.
	
- Otherwise if prelim2Result full paths exists (prelim2Result.workflowCode is filled) then get values from prelim2Result.


	
- Otherwise if prelimRegisterResult full paths exists (prelimRegisterResult.workflowCode is filled) then get values from prelimRegisterResult


	
- Otherwise if prelim1Result full paths exists (prelim1Result.workflowCode is filled) then get values from prelim1Result.

## 🔗 Connections (4)

- ← Dependency: [[Search method]]
- ← Dependency: [[Save scoring data]]
- ← Dependency: [[01.450 Receive evaluation result (UseCase 1819978)]]
- ← Dependency: [[Definition of path to LAP Offer vector]]

## 📊 Appears In (1 diagrams)

- Logical: LAP Offer vector - attributes for Optional offer Generation
