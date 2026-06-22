---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model"
domain: "Analysis Model"
element_id: 1833405
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Get Services available on Product

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model

## 📝 Notes

{ADD CSI-2452 /}
This rule describes how to get a list of Services to a Product from the Product Catalogue

Input:

	
- productCode
	
- productVersion (optional) -- if no version is provide, the last active version of the Product is called


Output:

	
- ProductServicesList


Steps:

	
- System calls PRC GET method .../products/{productCode}? with deps=SERVICES
	
- System returns result into the output


Call example:

	
- https://prc.id00a1.cz.infra/openapi/v1/products/ANT_REL?deps=SERVICES

## 📊 Appears In (1 diagrams)

- Use Case: Loan Service - Add a Service to Contract
