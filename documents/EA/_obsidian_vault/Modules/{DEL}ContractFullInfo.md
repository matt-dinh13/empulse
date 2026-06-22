---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/JMS messages"
domain: "Modules"
element_id: 1750197
diagrams: 1
connections: 9
tags:
  - class
  - modules
---

# 🔷 {DEL}ContractFullInfo

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/JMS messages

## 📝 Notes

{DEL CLM-5293/}

## 🔗 Connections (9)

- ← Dependency: [[{DEL]ContractFullInfoRequest]]
- → Dependency: [[ContractDocument (Class 1750210)]]
- → Dependency: [[ContractPerson]]
- → Generalization «XSDextension»: [[ContractBase]]
- → Dependency: [[ContractService (Class 1750195)]]
- → Dependency: [[BankAccount (Class 1750192)]]
- → Association: [[GroupChoice]]
- → Dependency: [[ContractCommodity (Class 1750190)]]
- → Dependency: [[RefinancedContract]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}Contract full info notification - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| person | ContractPerson |  |
| commodity | External Reference |  |
| contractService | ContractService |  |
| clientBankAccount | BankAccount |  |
| contractDocument | ContractDocument |  |
| signedOnBackOffice | boolean |  |
| loanPurposeCode | string |  |
| refinancedContracts | RefinancedContract |  |
