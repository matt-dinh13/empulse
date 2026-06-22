---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentsWS/CancelPayment"
domain: "Analysis Model"
element_id: 1170732
diagrams: 3
connections: 10
tags:
  - interface
  - analysis-model
---

# 🔶 PaymentsWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentsWS/CancelPayment

## 📝 Notes

Web service used for automatic import of payments from an external system into BSL:

	
- incoming payments
	
- DDM confirmation result
	
- DD statements
	
- DD confirmations


and for creating and canceling payments online by external applications.

## 🔗 Connections (10)

- → Usage: [[CreatePaymentRequest]]
- → Usage: [[CancelPaymentResponse (Class 1048312)]]
- → Usage: [[CancelPaymentRequest (Class 1048311)]]
- → Usage: [[CreatePaymentResponse]]
- → Dependency «use»: [[hsIncomingDirectDebitMandateFile]]
- → Dependency «trace»: [[05.251 Automatic Import DD statements (UseCase 1863205)]]
- → Dependency «trace»: [[05.261 Automatic Import DD confirmations (UseCase 1863190)]]
- → Dependency «use»: [[hsDirectDebitStatementsFile]]
- → Dependency «use»: [[hsDirectDebitStatementsFile (Class 1327363)]]
- → Dependency «trace»: [[01.585 Automatic import DDM confirmation result (UseCase 1876221)]]

## 📊 Appears In (3 diagrams)

- Logical: CancelPayment
- Logical: PaymentsWS
- Logical: PaymentsWS.CreatePayment
