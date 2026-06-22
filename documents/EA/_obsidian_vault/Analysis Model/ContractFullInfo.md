---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification"
domain: "Analysis Model"
element_id: 1880117
diagrams: 1
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 ContractFullInfo

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification

## 📝 Notes

Data about a contract

## 🔗 Connections (10)

- → Dependency: [[BankAccount (Class 1880128)]]
- → Dependency: [[RefinancedContract (Class 1880119)]]
- → Dependency: [[ContractService (Class 1880121)]]
- → Dependency: [[ContractCommodity (Class 1880130)]]
- → Dependency: [[ContractDocument (Class 1880114)]]
- → Generalization «XSDextension»: [[ContractBase (Class 1880113)]]
- → Dependency: [[ContractPartyRole (Class 1880110)]]
- → Association: [[GroupChoice (Class 1880108)]]
- ← Dependency: [[ContractFullInfoRequest (Class 1880107)]]
- → Dependency: [[ContractPerson (Class 1880106)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| person | ContractPerson |  |
| commodity | {MOD}ContractCommodity |  |
| contractService | ContractService |  |
| clientBankAccount | BankAccount |  |
| contractDocument | ContractDocument |  |
| signedOnBackOffice | boolean |  |
| loanPurposeCode | string |  |
| refinancedContracts | RefinancedContract |  |
| partyRole | ContractPartyRole |  |
