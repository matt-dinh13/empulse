---
type: UseCase
stereotype: ""
package: ""
domain: "_Uncategorized"
element_id: 1519192
diagrams: 0
connections: 0
tags:
  - usecase
  - _uncategorized
---

# 🎯 {MOD}05.180 Perform coupling payments with instalments

> **Type**: UseCase
> **Package**: N/A

## 📝 Notes

System executes this use case to pair incoming payments with corresponding installments of a contract by specified algorithm.
The pairing algorithm is used for creation and/or correction pairing records between incoming payments and corresponding installment parts. In this algorithm is solved problem when there are payments which are paired to contract but corresponding pairing records do not exist (i.e. after removing installment part form installment schedule) or payments are not paired correctly to installment parts. 
Incoming payment are paired in ascendant order (from the oldest).
Installment parts of the contracts are sorted by ALG_Get sorted installment parts algorithm. This algorithm contains the pairing priority setting of the installment part types (principals, interest, various fee and penalties types) so is able to amortize installments by needs of the businesses.
There are defined two payment pairing algorithms that can be chosen by Terms and Condition.Keep Pairing Priority flag:

	
- Standard pairing – it re-pairs already paired payment when an installment part is not paired by pairing priority rules, or an installment is removed. Only one "overpayment" installment is created for all payments which are received on repaid contract.
	
- Keep pairing priority – it performs re-pairing only if payments are not paired chronologically, or an installment is removed. Next "overpayment" installment is created for each payment separately.

After that all the system generates a system event IncomingPaymentPairingChangedCELSE.

Notice: Pairing payments to client (respectively, pairing to all client's contracts which have an unpaid installment) is not supported by this use case.
