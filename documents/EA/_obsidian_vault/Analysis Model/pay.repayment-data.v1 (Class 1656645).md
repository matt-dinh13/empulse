---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/PAYM messages/v1.0/pay.repayment-data.v1"
domain: "Analysis Model"
element_id: 1656645
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 pay.repayment-data.v1

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/PAYM messages/v1.0/pay.repayment-data.v1

## 🔗 Connections (3)

- → Dependency: [[TransactionDate]]
- → Dependency: [[PairedContractNumber]]
- → Dependency: [[ProvidedContractNumber]]

## 📊 Appears In (1 diagrams)

- Logical: pay.repayment-data.v1

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sourceSystem | string |  |
| dataExchangeId | int |  |
| amount | MoneyDto |  |
| IncomingPaymentChannel | Incoming Payment Channel |  |
| status | string |  |
| pairingStatus | string |  |
| transactionDate | long |  |
| providedContractNumber | string |  |
| pairedContractNumber | string |  |
