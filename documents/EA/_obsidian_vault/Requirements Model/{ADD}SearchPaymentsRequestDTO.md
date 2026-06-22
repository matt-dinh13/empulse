---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/VN/PAYM-5190 BRVN-154 Overpayment process for REL"
domain: "Requirements Model"
element_id: 1875818
diagrams: 2
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 {ADD}SearchPaymentsRequestDTO

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/VN/PAYM-5190 BRVN-154 Overpayment process for REL

## 📝 Notes

{ADD PAYM-5190/}
For country: VN

## 🔗 Connections (1)

- ← Dependency: [[{MOD}IncomingPaymentEndpoint]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-5190 BRVN-154 Overpayment process for REL
- Logical: IncomingPaymentEndpoint - SearchPayments

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| providedContractNumber | string |  |
| pairedContractNumber | string |  |
| paymentType | string |  |
| paymentChannel | string |  |
| paymentChannelBranch | string |  |
| amountFrom | int |  |
| amountTo | int |  |
| depositDateFrom | date |  |
| depositDateTo | date |  |
| payersName | string |  |
| payersPersonalNumber | string |  |
| payersBankAccountNumber | string |  |
| transactionNumber | string |  |
| dataExchangeId | string |  |
| status | string |  |
| pairingStatus | string |  |
| sourceSystem | string |  |
| page | int | 1 |
| pageSize | int | 50 |
