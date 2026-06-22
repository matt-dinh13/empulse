---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/createDDM"
domain: "Analysis Model"
element_id: 1639370
diagrams: 1
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 CreateDDMRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/createDDM

## 📝 Notes

{ADD CBL-1140 PAY /}

## 🔗 Connections (7)

- → Dependency: [[ContractDDMBaseDto]]
- → Dependency: [[ContractDDMBaseDto]]
- → Dependency: [[DdmJfsPartnerDto]]
- → Dependency: [[ContractStatusType (Enumeration 1833282)]]
- → Dependency: [[DDMBankAccountTypeDto]]
- → Dependency: [[DDMLimitDataDto]]
- ← Dependency: [[DirectDebitService (Interface 1699813)]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitService.createDDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| validFrom | date |  |
| validTo | date |  |
| {MOD}contract | ContractDDMBaseDto |  |
| {ADD}JFSPartners | DdmJfsPartnerDto |  |
| {ADD}limitData | DDMLimitDataDto |  |
| {ADD}bankAccount | DDMBankAccountTypeDto |  |
| {ADD}externalDDProvider | string |  |
| {ADD}ddmType | string |  |
| {DEL}eMandate | boolean |  |
| {DEL}limit | MoneyDto |  |
| {DEL}accountType | AccountTypeDto |  |
| {DEL}accountHolderName | string |  |
| {DEL}accountNumber | string |  |
| {DEL}bankBranchCode | string |  |
