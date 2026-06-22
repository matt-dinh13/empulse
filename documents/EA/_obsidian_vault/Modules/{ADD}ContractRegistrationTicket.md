---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/Registration management/contracts/checkAll"
domain: "Modules"
element_id: 1856410
diagrams: 6
connections: 8
tags:
  - class
  - modules
---

# 🔷 {ADD}ContractRegistrationTicket

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/Registration management/contracts/checkAll

## 📝 Notes

Contract registration ticket

## 🔗 Connections (8)

- ← Dependency: [[{ADD}ContractRegistrationDocument]]
- → Dependency: [[{ADD}ContractRegistrationUser]]
- → Dependency: [[{ADD}ContractRegistrationUser]]
- → Dependency: [[{ADD}ContractRegistrationTicketDefinitionEntity]]
- → Dependency: [[{ADD}ContractRegistrationTicketDefinitionEntity]]
- → Dependency: [[{ADD}ContractRegistrationTicketDefinitionEntity]]
- → Dependency: [[{ADD}ContractRegistrationTicketDefinitionEntity]]
- → Dependency: [[{ADD}ContractRegistrationTicketDefinitionEntity]]

## 📊 Appears In (6 diagrams)

- Logical: checkAll
- Logical: checkDocument
- Logical: getRegistration
- Logical: getRegistrationDocuments
- Logical: uncheckAll
- Logical: uncheckDocument

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| description | string |  |
| category | ContractRegistrationTicketDefinitionEntity |  |
| type | ContractRegistrationTicketDefinitionEntity |  |
| department | ContractRegistrationTicketDefinitionEntity |  |
| status | ContractRegistrationTicketDefinitionEntity |  |
| priority | ContractRegistrationTicketDefinitionEntity |  |
| createdBy | ContractRegistrationUser |  |
| assignedTo | ContractRegistationUser |  |
| creationDate | string |  |
