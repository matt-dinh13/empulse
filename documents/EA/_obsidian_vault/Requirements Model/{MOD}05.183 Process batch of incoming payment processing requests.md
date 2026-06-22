---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1410 (CBL-3666) Standalone insurance"
domain: "Requirements Model"
element_id: 1875361
diagrams: 5
connections: 3
tags:
  - usecase
  - requirements-model
---

# 🎯 {MOD}05.183 Process batch of incoming payment processing requests

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1410 (CBL-3666) Standalone insurance

## 📝 Notes

This use case describes processing an IncomingPaymentProcessingRequest (a request to create or cancel payment). 

It is a JOB, run on regular base (e.g. each 2 minutes).

At first the system performs several validation. If the validations pass, than according to the type of the operation:

	
- for payment creation the system:
- performs specific validations
- pairs the payment on the contract
- for CEL and SAI performs pairing on installment schedule (and other appropriate operations)
- for REL calls Payment Card System (CaBus) via WS in order to pair the payment on a revolving account


	
- for payment cancellation
- performs specific validations
- unpairs the payment from the installment schedule
- cancels the payment (included creating of counterpart)
- cancels special payments on the related contract (if is needed)
- performs re-pairing unpaired payments on the related contract
- according to the contract status performs either contract reactivation (for status FINISHED) or recalculation of accrued income on the contract

As a result of the processing the system generates a message with a IncomingPaymentResponse object with an appropriate result code.

Note:
Messages with information about pairing or unpairing are generated in particular use cases.

## 📊 Appears In (5 diagrams)

- Custom: PAYM-1410 (CBL-3666) Standalone insurance
- Custom: PAYM-5190 BRVN-154 Overpayment process for REL
- Logical: IncomingPaymentResponseV2
- Use Case: OVERVIEW - Installment Schedule
- Use Case: Process batch of incoming payment processing requests
