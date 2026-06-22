---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process"
domain: "Requirements Model"
element_id: 1841425
diagrams: 2
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 BSL - Getting Financial Parameters of Contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process

## 📝 Notes

Call BSL ..financial-parameters/detail?contractCode={ContractActivatedPayload.code}&projection=MINIMAL

What is needed to get:

	
- term


Example:
https://bsl.id00c1.id.infra/bsl/api/v1.0/financial-parameters/detail?contractCode=4300004282&projection=MINIMAL

## 🔗 Connections (2)

- ← Dependency: [[BSL Financial Parameters API]]
- ← Dependency: [[AbdaOrderRequest]]

## 📊 Appears In (2 diagrams)

- Analysis: SCL After Activation Process
- Logical: ABDA request - data mapping
