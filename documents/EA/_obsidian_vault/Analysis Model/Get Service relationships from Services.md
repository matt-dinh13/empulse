---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model"
domain: "Analysis Model"
element_id: 1833428
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Get Service relationships from Services

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model

## 📝 Notes

{ADD CSI-2452 /}
This rule describes how to get a list of Service relations info by Service codes from the Product Catalogue
Input:

	
- ServiceCodes list


Output:

	
- ServiceRelations list


Steps:

	
- System calls PRC GET method .../service-relations/{ServiceCodes[]}
	
- System returns result into the output


Call example:
https://prc.id00a1.cz.infra/openapi/v1/service-relations/VEU_IPPACK,COP1

## 📊 Appears In (1 diagrams)

- Use Case: Loan Service - Add a Service to Contract
