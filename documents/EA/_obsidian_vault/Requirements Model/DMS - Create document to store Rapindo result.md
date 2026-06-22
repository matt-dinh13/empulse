---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process"
domain: "Requirements Model"
element_id: 1747813
diagrams: 2
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 DMS - Create document to store Rapindo result

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process

## 📝 Notes

1. call DMS POST documents method for document creation
Parameters:
typeCode = "RAPINDO_RESULT",
creationMoment = "CA",
attributes":

	
- code = "CLAIM_NUMBER", value = RapindoResultResponse.number


	
- code = "CLAIM_VALIDITY_START", value = RapindoResultResponse.effectiveAt
	
- code = "CLAIM_VALIDITY_END", value = RapindoResultResponse.expiryAt
	
- code = "CLAIM_STATUS", value = RapindoResultResponse.status


2. take returned document.uuid and ContractActivatedPayload.code and call COMA for adding Document to Contract, e.g. https://coma.id00c1.id.infra/rest/v12/contracts/4300001217/documents/71bdea83-42fc-43ea-997d-44b5b3a3b38b

## 🔗 Connections (4)

- ← Dependency: [[COMA contracts API]]
- ← Dependency: [[DMS Document API]]
- → Dependency: [[RAPINDO_RESULT]]
- → Dependency: [[RapindoResultResponse]]

## 📊 Appears In (2 diagrams)

- Analysis: SCL After Activation Process
- Logical: RAPINDO request mapping
