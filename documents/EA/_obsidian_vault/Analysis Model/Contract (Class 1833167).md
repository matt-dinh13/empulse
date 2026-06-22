---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v7.0/Contracts/Contract"
domain: "Analysis Model"
element_id: 1833167
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Contract

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v7.0/Contracts/Contract

## 📝 Notes

Contract data structure used by Contract methods of WS

## 🔗 Connections (3)

- ← Aggregation: [[FinancialParameter (Class 1833168)]]
- → Usage: [[ContractEvent (Class 1833173)]]
- → Aggregation: [[GetContractsResponse (Class 1833166)]]

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
