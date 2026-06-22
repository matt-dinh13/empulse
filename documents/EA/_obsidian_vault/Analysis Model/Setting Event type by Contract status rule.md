---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Auxiliary functions/Sending Contract notification on request/Use case model"
domain: "Analysis Model"
element_id: 1856400
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Setting Event type by Contract status rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Auxiliary functions/Sending Contract notification on request/Use case model

## 📝 Notes

Setting of the systemEvent value in the ContractFullInfoRequest message (Contract Status -> Contract System Event Type):

	
- N -> ContractSignSE
	
- A -> ContractActivationSE
	
- T -> ContractCancellationSE
	
- L -> ContractPaidOffSE
	
- K -> ContractFinishingAutomaticallySE
	
- H -> ContractWrittenOffSE
	
- Q -> ContractIsSoldSE

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.955 Generate Contract notification message on external request]]

## 📊 Appears In (1 diagrams)

- Use Case: Sending Contract notification on request
