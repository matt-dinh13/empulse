---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-393 (CBL-1855) Full early repayment services changes"
domain: "Requirements Model"
element_id: 1290868
diagrams: 1
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 Update FER request processing

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-393 (CBL-1855) Full early repayment services changes

## 📝 Notes

If ERRequest.RecalculationReason = 'EG' (ER including GIFT), calculate ER amount with recalculation reason 'EG'. If ERRequest.RecalculationReason = 'EM' (ER in moratorium), calculate ER amount with recalculation reason 'EM'.

If recalculation reason is 'EG', system will call {MOD}08.210 Check and process Gift payment (with new parameters giftPaymentDueDate = ER due date and enforceGPGranting = true) between checking of sufficient funds for FER and FER processing itself. Therefore gift payment will be granted before FER processing and client only has to pay the rest of the loan.

If recalculation reason is 'EG', system will not cancel/deactivate or copy extraordinary installment with recalculation reason 'GP' during the execution of 03.110 Perform early repayment installment schedule. We have already created the special gift installment coupled with the gift payment and we don't want it to be canceled during FER processing.

## 🔗 Connections (4)

- → Generalization: [[Add support for FER service with included GIFT payments]]
- → Generalization: [[Add possibility to process FER during moratorium with different calculation]]
- ← Realisation: [[{MOD} 03.110 Perform early repayment installment schedule]]
- ← Realisation: [[03.100 Check and process Early repayment request (UseCase 1879631)]]

## 📊 Appears In (1 diagrams)

- Custom: IS-393 (CBL-1855) Full early repayment services changes
