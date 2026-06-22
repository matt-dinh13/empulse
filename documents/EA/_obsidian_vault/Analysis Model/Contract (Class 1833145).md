---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contracts/v9.0/Contract"
domain: "Analysis Model"
element_id: 1833145
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Contract

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contracts/v9.0/Contract

## 📝 Notes

Contract data structure used by Contract methods of WS

## 🔗 Connections (3)

- ← Aggregation: [[FinancialParameter (Class 1833142)]]
- → Aggregation: [[GetContractsResponse (Class 1833139)]]
- → Usage: [[ContractEvent (Class 1833138)]]

## 📊 Appears In (2 diagrams)

- Logical: Contract
- Logical: Contracts/Contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| customerId | string |  |
| {MOD}productName | string |  |
| productType | string |  |
| initialTransactionType | string |  |
| contractStatus | string |  |
| contractSubStatus | string |  |
| contractSignatureDate | dateTime |  |
| waitingForTermination | boolean |  |
| creditAccountNumber | string |  |
| contractEvents | ContractEvent |  |
| {ADD}productCode | string |  |
| {ADD}productVersion | int |  |
