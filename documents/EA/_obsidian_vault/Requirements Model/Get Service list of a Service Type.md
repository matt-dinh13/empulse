---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19520 (CSI-2290) Apply feature [Replace service] in Bulk assignment for Payment Service"
domain: "Requirements Model"
element_id: 1833417
diagrams: 2
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Get Service list of a Service Type

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19520 (CSI-2290) Apply feature [Replace service] in Bulk assignment for Payment Service

## 📝 Notes

{ADD CSI-2445 /}
This rule describes how to get a list of Services by Service Type from the Product Services

Input:

	
- serviceType


Output:

	
- ServiceList object || an error



	
- System calls PRC GET .. /services with parameters:
- serviceType=serviceType
- pageNumber=1
- pageSize=1000
- orderDirection=asc
	
- System returns result into the output

## 📊 Appears In (2 diagrams)

- Custom: CBL-19520 (CSI-2290) Apply feature [Replace service] in Bulk assignment for Payment Service
- Use Case: Contract Service replacement (flip)
