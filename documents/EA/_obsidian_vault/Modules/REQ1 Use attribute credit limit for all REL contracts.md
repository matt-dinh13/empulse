---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-3421 ChR - Send credit limit in Credit110 to OBS for REL contracts"
domain: "Modules"
element_id: 821353
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 REQ1 Use attribute credit limit for all REL contracts

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-3421 ChR - Send credit limit in Credit110 to OBS for REL contracts

## 📝 Notes

For revolving contracts (contract type = REL) Set attribute CREDIT110.Credit_Amount = ContractFullInforRequest->ContractFullInfo->RevolvingParameter.creditLimit.

Close end loans (contract type = CEL) uses ContractFullInforRequest->ContractFullInfo->CloseEndParameter.providedCreditAmount and no modification is needed.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Processing ContractFullInfoRequest message]]

## 📊 Appears In (1 diagrams)

- Custom: BRR-3421 ChR - Send credit limit in Credit110 to OBS for REL contracts
