---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only"
domain: "Analysis Model"
element_id: 1881167
diagrams: 1
connections: 11
tags:
  - class
  - analysis-model
---

# 🔷 ContractFullInfo

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only

## 📝 Notes

Data about a contract

## 🔗 Connections (11)

- → Dependency: [[RefinancedContract (Class 1881176)]]
- → Association: [[GroupChoice (Class 1881178)]]
- ← Dependency: [[ContractFullInfoRequest (Class 1881186)]]
- → Dependency: [[ContractPartyRole (Class 1881187)]]
- → Dependency: [[ContractPerson (Class 1881171)]]
- → Dependency: [[BankAccount (Class 1881185)]]
- → Generalization «XSDextension»: [[ContractBase (Class 1881181)]]
- → Dependency: [[ContractService (Class 1881175)]]
- → Dependency: [[ContractDocument (Class 1881189)]]
- → Dependency: [[{MOD}ContractCommodity (Class 1881177)]]
- → Dependency: [[{ADD}ExtendedProperty (Class 1881168)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification v8 (PH only)

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
| {ADD}extendedProperty | {ADD}ExtendedProperty |  |
