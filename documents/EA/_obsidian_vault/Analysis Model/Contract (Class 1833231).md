---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contracts/v10.0/Contract"
domain: "Analysis Model"
element_id: 1833231
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Contract

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contracts/v10.0/Contract

## 📝 Notes

Contract data structure used by Contract methods of WS

## 🔗 Connections (4)

- → Usage: [[ContractEvent (Class 1833234)]]
- → Aggregation: [[GetContractsResponse]]
- ← Aggregation: [[FinancialParameter]]
- → Usage: [[{ADD}ExtendedProperty (Class 1833226)]]

## 📊 Appears In (2 diagrams)

- Logical: Contract
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
| productCode | string |  |
| productVersion | int |  |
| {ADD}extendedProperties | ExtendedProperty |  |
