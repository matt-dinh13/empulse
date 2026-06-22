---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Access Rights"
domain: "Analysis Model"
element_id: 1854294
diagrams: 35
connections: 44
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.180 Perform coupling payments with instalments

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Access Rights

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

## 🔗 Connections (38)

- ← UseCase «include»: [[{ADD}Move installment schedule to a specific version]]
- ← UseCase «include»: [[{MOD}08.060 Change Due Date]]
- ← UseCase «include»: [[{MOD}03.120 Pay off installment schedule]]
- ← UseCase «include»: [[08.262 Process Fees-back service (UseCase 1838986)]]
- ← UseCase «include»: [[01.901 Perform contract sale (UseCase 1839170)]]
- → Realisation: [[REQ#1 KZ specific pairing]]
- → UseCase «include»: [[{MOD}03.080 Add installment]]
- ← Dependency «invokes»: [[05.201 Pair payments to due instalment]]
- ← UseCase «include»: [[{MOD}05.184 Reflect change of balance]]
- → Dependency: [[ALG_Get sorted installment parts by specific date]]
- ← UseCase «include»: [[05.060 Decouple incoming payment manually (UseCase 1854319)]]
- → UseCase «include»: [[03.095 Remove installment (UseCase 1879447)]]
- → UseCase «include»: [[01.474 Calculate CEL debt info (UseCase 1876071)]]
- → Realisation: [[Pairing payment with the contract installment]]
- → Realisation: [[REQ 10_ Debt catalogue updates]]
- → Dependency «invokes»: [[01.477 Process debt catalogue requests job (UseCase 1876062)]]
- → Realisation: [[Requirement1 - Date of payment (un)pairing]]
- → Dependency: [[ALG_Get sorted installment parts]]
- → UseCase «include»: [[{MOD}05.200 Perform decoupling (UseCase 1854303)]]
- → Realisation: [[05.180 Perform coupling payment with instalment]]
- → Realisation: [[REQ#2 Message INSTALPAY124 (closed-end loan)]]
- → Dependency: [[Exclude specific installment parts from pairing]]
- ← UseCase «include»: [[{MOD}04.140 Charge fees]]
- ← UseCase «include»: [[04.110 Process charging requests]]
- ← UseCase «include»: [[{MOD}08.362 Process payment holiday request]]
- ← UseCase «include»: [[{MOD}08.406 Process request for loan restructuring]]
- ← UseCase «include»: [[08.063 Process request for change due date (UseCase 1862206)]]
- ← UseCase «include»: [[{MOD}08.280 Check and process CET request]]
- ← UseCase «include»: [[08.057 Perform Partial early repayment (UseCase 1868459)]]
- ← UseCase «include»: [[{MOD}08.210 Check and process Gift payment]]
- ← UseCase «include»: [[{MOD}08.220 Check and process Grace period]]
- ← UseCase «include»: [[{DEL} 05.500 Create refund automatically]]
- ← UseCase «include»: [[{MOD}08.121 Terminate contract insurance common]]
- ← UseCase «include»: [[08.111 Cancel contract insurance common]]
- ← UseCase «include»: [[{MOD}03.091 Remove installment by external system]]
- ← UseCase «include»: [[{NotImplemented}08.100 Process Full early repayment]]
- ← UseCase «include»: [[03.100 Check and process Early repayment request (UseCase 1879631)]]
- ← Dependency: [[01.486 Calculate debt full info]]

## 📊 Appears In (35 diagrams)

- Custom: Access Rights
- Custom: Debt Catalog (DC) to trigger contract finishing evaluation (IS-639)
- Custom: Debt full info calculations
- Custom: PAYM-1885 (CBL-4285) - VN Pre-transfer 2 - instalment schedule generating, payments pairing, daily pairing job
- Use Case: {DEL}Creating Refunds automatically
- Use Case: Cancellation incoming payment manually
- Use Case: Cancellation of Insurance contract options
- Use Case: Change Due Date processing
- Use Case: Charging request
- Use Case: CHDDR processing
- Use Case: Contract Early Termination processing
- Use Case: Contract finishing after DC recalculation
- Use Case: Contract insurance cancellation
- Use Case: Contract insurance termination
- Use Case: Contract sale
- Use Case: Fee services used by external system (Collection)
- Use Case: Fees-back service evaluation and processing
- Use Case: Full early repayment processing
- Use Case: Gift payment processing
- Use Case: Grace period processing
- Use Case: Installment schedule manipulations
- Use Case: Loan restructuring processing
- Use Case: Manual unpairing incoming payment from contract
- Use Case: OVERVIEW - Installment Schedule
- Use Case: Pair prepayments to due instalments
- Use Case: Pairing installment parts procedure
- Use Case: Pairing installment parts procedure
- Use Case: Pay off instalment schedule
- Use Case: Pay off instalment schedule
- Use Case: Payment holiday processing
- Use Case: PER request processing
- Use Case: Process batch of incoming payment processing requests
- Use Case: Reflection of change of balance
- Use Case: Reflection of change of balance
- Use Case: Termination of Insurance contract options
