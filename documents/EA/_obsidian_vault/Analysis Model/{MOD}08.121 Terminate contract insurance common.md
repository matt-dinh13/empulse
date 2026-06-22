---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Insurance finishing/Access Rights"
domain: "Analysis Model"
element_id: 1878988
diagrams: 15
connections: 17
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.121 Terminate contract insurance common

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Insurance finishing/Access Rights

## 📝 Notes

This technical use case presents core functionality for contract insurance termination

## 🔗 Connections (13)

- → Dependency: [[PremiumTerminated calculation for SAPPI]]
- → Dependency: [[{ADD}Terminate Contract service for CEL contract]]
- → Dependency: [[Get the latest Loan Service Request with Service Operation Status]]
- → Dependency: [[Recalculate Presented Interest rates on financial parameters change]]
- → UseCase «include»: [[{ADD}03.032 Perform insurance termination for SAI contract]]
- → UseCase «include»: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]
- → UseCase «include»: [[{MOD}05.200 Perform decoupling (UseCase 1854303)]]
- → Realisation: [[{ADD}08.121 Terminate contract insurance common]]
- → Dependency: [[{ADD}Calculate SAI terminated installment parts amount]]
- → Dependency: [[Create Loan Service Request with Service Operation Status]]
- → UseCase «include»: [[{MOD}11.120 Terminate insurance contract]]
- ← UseCase «include»: [[08.454 Terminate contract insurance service (UseCase 1878981)]]
- ← UseCase «include»: [[11.121 Terminate insurance contract manually (UseCase 1878971)]]

## 📊 Appears In (15 diagrams)

- Custom: Access Rights
- Custom: CBL-12505 (CSI-1179) Service bundling support for cancellation and termination
- Custom: CBL-16453 (CSI-2123) Change the calculation of refunding fee when customer ET
- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan
- Custom: CBL-24763 (CSI-3333) [SAPPI] Adding new calculation for the premium amount when insurance is terminated
- Custom: CBL-25867 (CSI-3602) Removal of fee after contract service termination
- Use Case: Adding switch for ContractServiceChangeSE
- Use Case: CLM-5981 Termination of the SAI with installments
- Use Case: Contract insurance termination
- Use Case: CSI-2226 Terminate LoanService on Account Closure notification
- Use Case: CSI-2307 Processing AM responses on Service changes
- Use Case: CSI-2974 Terminate Service on Contract
- Use Case: CSI-2974 Terminate Service on Contract
- Use Case: Processing Account Closure notifications
- Use Case: Termination of Insurance contract options
