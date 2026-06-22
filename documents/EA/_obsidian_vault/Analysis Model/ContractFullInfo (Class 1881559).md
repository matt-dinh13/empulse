---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - IN only"
domain: "Analysis Model"
element_id: 1881559
diagrams: 1
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 ContractFullInfo

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - IN only

## 📝 Notes

Data about a contract

## 🔗 Connections (10)

- ← Dependency: [[ContractFullInfoRequest (Class 1881555)]]
- → Association: [[GroupChoice (Class 1881554)]]
- → Dependency: [[ContractPartyRole (Class 1881549)]]
- → Dependency: [[ContractPerson (Class 1881570)]]
- → Dependency: [[RefinancedContract (Class 1881568)]]
- → Dependency: [[BankAccount (Class 1881566)]]
- → Dependency: [[ContractDocument (Class 1881562)]]
- → Dependency: [[ContractService (Class 1881564)]]
- → Generalization «XSDextension»: [[ContractBase (Class 1881558)]]
- → Dependency: [[ContractCommodity (Class 1881556)]]

## 📊 Appears In (1 diagrams)

- Logical: v8 - IN only

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
