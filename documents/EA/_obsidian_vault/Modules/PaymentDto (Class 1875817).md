---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided REST API/IncomingPaymentEndpoint"
domain: "Modules"
element_id: 1875817
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 PaymentDto

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided REST API/IncomingPaymentEndpoint

## 🔗 Connections (3)

- ← Dependency: [[{ADD}SearchPaymentsResponse]]
- → Dependency: [[MoneyDto (Class 1875815)]]
- ← Dependency: [[GetActivePaymentsResponse]]

## 📊 Appears In (2 diagrams)

- Logical: IncomingPaymentEndpoint - GetActivePayments
- Logical: IncomingPaymentEndpoint - SearchPayments

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | string |  |
| cancellationDate | string |  |
| dataExchangeID | string |  |
| depositeDate | string |  |
| chargingDate | string |  |
| pairedContractNumber | string |  |
| pairingStatus | string |  |
| payerPersonalNumber | string |  |
| paymentType | string |  |
| providedContractNumber | string |  |
| sourceSystem | string |  |
| status | string |  |
| transactionDate | string |  |
| transactionNumber | string |  |
| paymentChannel | string |  |
