---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v8.0/Contracts/Contract"
domain: "Analysis Model"
element_id: 1833158
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Contract

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v8.0/Contracts/Contract

## 📝 Notes

Contract data structure used by Contract methods of WS

## 🔗 Connections (3)

- → Aggregation: [[GetContractsResponse (Class 1833163)]]
- ← Aggregation: [[FinancialParameter (Class 1833157)]]
- → Usage: [[ContractEvent (Class 1833155)]]

## 📊 Appears In (1 diagrams)

- Logical: Contracts/Contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| customerId | string |  |
| productName | string |  |
| productType | string |  |
| initialTransactionType | string |  |
| contractStatus | string |  |
| contractSubStatus | string |  |
| contractSignatureDate | dateTime |  |
| waitingForTermination | boolean |  |
| creditAccountNumber | string |  |
| contractEvents | ContractEvent |  |
