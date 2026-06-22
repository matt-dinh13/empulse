---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Access Rights"
domain: "Analysis Model"
element_id: 1879832
diagrams: 15
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.346 Add Insurance service on Contract common

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Access Rights

## 📝 Notes

This technical use case presents core functionality for adding an insurance service on a contract. The function creates an insurance contract and adds the insurance service to the contract. If a request for activation of the insurance is set (Switch insurance on flag), the insurance is activated (i.e. insurance period is set and notification about the insurance start is transmitted into other systems.

## 🔗 Connections (8)

- ← Dependency: [[11.780 Process Insurance cancellation or termination event]]
- → Dependency «invokes»: [[11.030 Sign insurance contract (UseCase 1879778)]]
- → UseCase «include»: [[{MOD}11.010 Create insurance contract]]
- → Dependency: [[Create Loan Service Request with Service Operation Status]]
- ← UseCase «include»: [[08.345 Add Insurance on Contract (UseCase 1879841)]]
- → Realisation: [[08.346 Add Insurance service on Contract common]]
- → UseCase «include»: [[11.147 Activate insurance on contract]]
- ← UseCase «include»: [[{MOD}08.347 Add Insurance service on Contract service]]

## 📊 Appears In (15 diagrams)

- Custom: Access Rights
- Custom: CBL-12505 (CSI-1179) Service bundling support for cancellation and termination
- Custom: CBL-8652 (CLM-2697) Enhancement API ContractDocument
- Custom: CSI-548 INSR - integrate BSL to module API
- Custom: CSI-608 Adding InsuranceProgram identifier into InsuranceContract
- Custom: REQ #5 - Update Contract Insurance Services WS to use UUID instead of DOCUMENT_REF
- Use Case: Adding Insurance Service on CEL contract
- Use Case: Adding Insurance Service on REL contract
- Use Case: Adding Insurance Service on REL contract method
- Use Case: ContractServiceCreatedNotification message variant
- Use Case: Create and Sign Insurance contract
- Use Case: CSI-2292 Change of Insurance Operation Status behaviour
- Use Case: Insurance on REL Contract management
- Use Case: Insurance Service Offers UI - Use Case Model
- Use Case: Replacement of standard insurance upon its cancelation or termination
