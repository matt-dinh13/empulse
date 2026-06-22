---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Refunds/Business Rules"
domain: "Modules"
element_id: 1877191
diagrams: 2
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Calculate refund fee 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Refunds/Business Rules

## 📝 Notes

{ADD PAYM-5188} 

Input parameters:
- refundFeeAmount (fee amount from tariff item)
- incomingPayment

Output parameters:
- originalPaymentAmount
- overpaymentAmount
- processingFeeAmount
- refundAmount

OriginalPaymentAmount = whole amount of incoming payment

OverpaymentAmount = incoming payment amount which is paired to overpayment

ProcessingFeeAmount calculation: 
- If refundFeeAmount <= overpaymentAmount, than processingFeeAmount = refundFeeAmount
- If refundFeeAmount > overpaymentAmount, than processingFeeAmount = overpaymentAmount

RefundAmount calculation:
- if overpaymentAmount > 0, than refundAmount  = overpaymentAmount - processingFeeAmount
- else refundAmount  = originalPaymentAmount - processingFeeAmount

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Creating Refunds manually
