---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Contract Early Termination/Access Rights"
domain: "Analysis Model"
element_id: 1862243
diagrams: 3
connections: 6
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.272 Get CET data preview

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Contract Early Termination/Access Rights

## 📝 Notes

The use case serves as common functionality for getting CET request parameters which is initiated either from an user interface (Contract detail - Service tab / CET Early repayment preview screen) or the exposed REST service.
Technical use case

## 🔗 Connections (6)

- → UseCase «include»: [[{MOD}03.070 Calculate early repayment amount]]
- → Dependency: [[{MOD}Check CET request availability]]
- ← UseCase «include»: [[01.783 Get ContractCETRequest preview]]
- → Dependency: [[{ADD}Evaluate CET Insurance cancellation period]]
- → Realisation: [[{ADD}08.272 Get CET data preview]]
- ← UseCase «include»: [[08.270 Show CET repayment preview (UseCase 1862238)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Custom: CBL-10543 (CSI-170) Cancel Insurance possibility when loan contract is Early terminated
- Use Case: Contract Early Termination request creation
