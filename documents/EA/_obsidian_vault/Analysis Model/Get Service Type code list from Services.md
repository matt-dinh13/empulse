---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model"
domain: "Analysis Model"
element_id: 1833414
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Get Service Type code list from Services

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model

## 📝 Notes

{ADD CSI-2452 /}
This rule describes how to get a list of ServiceTypes info by their codes from the Product Catalogue
Input:

	
- ServiceTypeCode list


Output:

	
- ServiceType list


Steps:

	
- System calls PRC GET method of .../code-lists/service_type/{ServiceTypeCode[]}
	
- System returns result into the output


Example of the call:
https://prc.id00a1.cz.infra/openapi/v1/code-lists/service_type/IPPACK,COP

## 📊 Appears In (1 diagrams)

- Use Case: Loan Service - Add a Service to Contract
