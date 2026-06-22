---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Access Rights"
domain: "Analysis Model"
element_id: 1879779
diagrams: 11
connections: 9
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}11.010 Create insurance contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Access Rights

## 📝 Notes

This technical use case for creation of Insurance Contract object in the system.

## 🔗 Connections (9)

- ← Dependency: [[Create insurance contracts for insurance services]]
- ← Dependency: [[11.780 Process Insurance cancellation or termination event]]
- → Dependency: [[Get INSR Insurance Program data (Requirement 1876179)]]
- → Dependency: [[Get Commodity data by commodityId (Requirement 1833419)]]
- → Realisation: [[11.010 Create insurance contract (Requirement 1795653)]]
- → Dependency: [[{DEL}Max eligible commodity date activation]]
- → Dependency: [[Check INSR Insurance Program eligibility (Requirement 1876184)]]
- → Dependency: [[Generate Insurance Contract Code]]
- ← UseCase «include»: [[{MOD}08.346 Add Insurance service on Contract common]]

## 📊 Appears In (11 diagrams)

- Custom: Access Rights
- Custom: CBL-9398 (CLM-2890) Automatic insurance prolongation optimisation
- Custom: CSI-548 INSR - integrate BSL to module API
- Custom: CSI-608 Adding InsuranceProgram identifier into InsuranceContract
- Use Case: Adding Insurance Service on CEL contract
- Use Case: Adding Insurance Service on REL contract
- Use Case: Adding Insurance Service on REL contract method
- Use Case: Create and Sign Insurance contract
- Use Case: Insurance Contract Management
- Use Case: Insurance on REL Contract management
- Use Case: Replacement of standard insurance upon its cancelation or termination
