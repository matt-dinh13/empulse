---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process"
domain: "Requirements Model"
element_id: 1841419
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 PRC - Getting Product data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process

## 📝 Notes

Getting product data based on from PRC API (https://prc.id00c1.id.infra/openapi/v1/products/SC_220_A3%3A15?deps=PROFILE)
Input date:

	
- ContractActivatedPayload.product.code
	
- ContractActivatedPayload.product.version
	
- set deps=PROFILE


What is needed to get:

	
- productProfile.code


Evaluate productProfile.code = PP_SCL
Alternative -> evaluate productProfile."accountingMethod = SCL (Secured Cash Loan)

## 🔗 Connections (1)

- ← Dependency: [[PRC API]]

## 📊 Appears In (1 diagrams)

- Analysis: SCL After Activation Process
