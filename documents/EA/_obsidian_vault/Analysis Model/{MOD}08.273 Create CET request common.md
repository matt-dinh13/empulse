---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Contract Early Termination/Access Rights"
domain: "Analysis Model"
element_id: 1862244
diagrams: 5
connections: 6
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.273 Create CET request common

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Contract Early Termination/Access Rights

## 📝 Notes

The use case serves as common functionality for creation CET request which is initiated either from an user interface (CET Early repayment preview screen) or via the exposed REST service.
Technical use case

## 🔗 Connections (6)

- → Dependency: [[{ADD}Evaluate CET Insurance cancellation period]]
- → Dependency: [[Deactivate contract early termination requests]]
- ← UseCase «include»: [[08.271 Create CET repayment request (UseCase 1862246)]]
- ← UseCase «include»: [[01.784 Create ContractCETRequest service]]
- → Realisation: [[{ADD}08.273 Create CET request common]]
- → UseCase «include»: [[{MOD}03.070 Calculate early repayment amount]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: CBL-10543 (CSI-170) Cancel Insurance possibility when loan contract is Early terminated
- Custom: CBL-6984 (CLM-2206) Implement HO_SERVICE_REQUEST_DATA for PER service
- Use Case: Contract Early Termination request creation
- Use Case: CSI-1119 Use DMS in UC 08.356 Generate service request document
