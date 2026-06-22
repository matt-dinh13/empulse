---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/VN/PAYM-5190 BRVN-154 Overpayment process for REL"
domain: "Requirements Model"
element_id: 1875814
diagrams: 4
connections: 9
tags:
  - interface
  - requirements-model
---

# 🔶 {MOD}IncomingPaymentEndpoint

> **Type**: Interface
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/VN/PAYM-5190 BRVN-154 Overpayment process for REL

## 📝 Notes

Documentation example: https://inp.vn00a1.cz.infra/incomingpayments/swagger-ui/index.html

https://inp.id00a1.cz.infra/incomingpayments/swagger-ui.html#!/incoming-payment-rest-endpoint-v-1/getActivePaymentsByContractUsingGET

## 🔗 Connections (9)

- → Realisation: [[{ADD}searchPayments]]
- → Usage: [[05.362 Recouple misposted payment on external request]]
- → Usage: [[getActivePayments]]
- → Dependency: [[{ADD}SearchPaymentsResponse]]
- → Dependency: [[RecoupleMispostedPaymentRequest]]
- → Dependency: [[{ADD}SearchPaymentsRequestDTO]]
- → Dependency: [[RecoupleMispostedPaymentResponse]]
- → Dependency: [[GetActivePaymentsResponse]]
- → Dependency: [[getActivePaymentsRequest]]

## 📊 Appears In (4 diagrams)

- Custom: PAYM-5190 BRVN-154 Overpayment process for REL
- Logical: IncomingPaymentEndpoint - GetActivePayments
- Logical: IncomingPaymentEndpoint - SearchPayments
- Logical: IncominPaymentEndpoint - RecouleMispostedPayment
