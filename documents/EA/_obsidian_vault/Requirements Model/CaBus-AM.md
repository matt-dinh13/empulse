---
type: Actor
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6545 (CLM-2086) New maintenance function for Change client on contract"
domain: "Requirements Model"
element_id: 1880895
diagrams: 53
connections: 58
tags:
  - actor
  - requirements-model
---

# 👤 CaBus-AM

> **Type**: Actor
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6545 (CLM-2086) New maintenance function for Change client on contract

## 📝 Notes

Revolving loan account management

## 🔗 Connections (56)

- ← Usage: [[Creation of contract cancellation request - automatic cancel]]
- ← Usage: [[Creation of contract cancellation request - manual cancel]]
- ← UseCase: [[01.739 Process Account Balance Change EOM notification]]
- ← UseCase: [[12.604 Show transaction history (UseCase 1878585)]]
- ← UseCase: [[12.608 Show Unconfirmed transactions (UseCase 1878579)]]
- ← UseCase: [[12.611 Show interests (UseCase 1878577)]]
- ← UseCase: [[12.605 Cancel transaction]]
- ← Association: [[{MOD}12.601 Show account detail]]
- ← UseCase: [[12.606 Create new fee (UseCase 1878568)]]
- ← UseCase: [[12.602 Show balance detail (UseCase 1878567)]]
- ← UseCase: [[11.081 Prolong insurance contracts]]
- ← Association: [[01.479 Show supposed debt for REL contract (UseCase 1876083)]]
- → UseCase: [[05.273 Process DDS requests message]]
- → UseCase: [[12.622 Transfer installment plan back request (UseCase 1575219)]]
- → UseCase: [[13.060 Create change credit limit request manually (UseCase 1877196)]]
- → UseCase: [[{MOD}13.114 Process transaction cancellation request]]
- → UseCase: [[01.770 Process account transaction notification (UseCase 1875616)]]
- → Association: [[{MOD}13.416 Process Card Balance Transfer request]]
- → UseCase: [[{MOD}13.072 Create Credit limit change request for REL account]]
- → UseCase: [[01.171 Create REL contract termination request (UseCase 1852809)]]
- → UseCase: [[External Reference (Boundary 1855322)]]
- → UseCase: [[12.624 Cancel installment plan (UseCase 1575227)]]
- → UseCase: [[12.620 Show installment plan for REL (UseCase 1575225)]]
- → UseCase: [[12.630 Create request for CASH transaction without card]]
- → UseCase: [[{MOD}13.110 Process account transaction for Transaction Supplement]]
- → UseCase: [[12.632 Create request for POS transaction without card]]
- → Association: [[{ADD}13.418 Process Card Balance Transfer response]]
- → UseCase: [[01.172 Cancel REL contract termination request manually (UseCase 1852812)]]
- → UseCase: [[11.773 Process account EOM billing finished notification (UseCase 1875631)]]
- → UseCase: [[13.118 Authorize transactions in Transaction Supplement (UseCase 1881427)]]
- → UseCase: [[External Reference (Boundary 1855323)]]
- → UseCase: [[05.183 Process batch of incoming payment processing requests]]
- → UseCase: [[13.300 Process AM EventInfo notification]]
- → UseCase: [[{MOD}01.290 Activate contract]]
- → UseCase: [[12.628 Print installment plan overview for REL]]
- → UseCase: [[12.626 Cancel installment plan in cooling-off period (UseCase 1575228)]]
- → UseCase: [[13.052 Process account notification for credit limit change (UseCase 1877198)]]
- → UseCase: [[01.476 Process contract debt change request (UseCase 1876074)]]
- → UseCase: [[01.320 Cancel approved contract manually (UseCase 1850514)]]
- → Association: [[01.350 Create business event on external request (UseCase 1834340)]]
- → UseCase: [[12.613 Show account detail in AM]]
- → UseCase: [[05.297 Process results of incoming payment pairing (Boundary 1880924)]]
- → UseCase: [[05.700 Process TransactionMessageDto]]
- → UseCase: [[01.481 Get debt statistics (UseCase 1876081)]]
- → UseCase: [[{MOD}01.187 Sign contract]]
- → UseCase: [[01.740 Process notification about credit account closure (UseCase 1839633)]]
- → UseCase: [[08.295 Process Account Closure notifications]]
- → UseCase: [[{MOD}05.350 Process disbursement confirmation message]]
- → UseCase: [[05.295 Pair incoming payments from file (Boundary 1880939)]]
- → UseCase: [[{MOD}01.210 Show contract detail]]
- → UseCase: [[08.294 Process Account response on Contract Service notifications]]
- → UseCase: [[{MOD}01.186 Prepare documentation]]
- → UseCase: [[{DEL}12.615 Cancel initial transaction]]
- → UseCase: [[01.410 Pay-off contract manually (UseCase 1878655)]]
- → UseCase: [[{MOD}05.701 Process DisbursementMessage]]
- ← Association: [[{ADD}13.128 Process transaction confirmation response]]

## 📊 Appears In (53 diagrams)

- Custom: CBL-6545 (CLM-2086) New maintenance function for Change client on contract
- Custom: CLM-3826 - New SAI - Contract cancellation
- Logical: OnlineDebt
- Logical: OnlineDebtWS
- Use Case: Account detail
- Use Case: Activate Insurance contract
- Use Case: Activation of contract on a repayment
- Use Case: Actors
- Use Case: Adding switch for ContractServiceChangeSE
- Use Case: Cancel contract after sign
- Use Case: Cancel contract automatically
- Use Case: Cancel contract on external request
- Use Case: Card Balance Transfer request processing - Use Case Model
- Use Case: Cardless transaction request - Use case model
- Use Case: Change credit limit manually
- Use Case: Change LoanService status on defined Account Closure notifications
- Use Case: Contract debt tracking
- Use Case: Contract detail
- Use Case: Contract signing
- Use Case: ContractServiceActivatedNotification message variant
- Use Case: ContractServiceTerminatedNotification message variant
- Use Case: Create business event on external request
- Use Case: Credit Limit Change via messaging - Use Case model
- Use Case: CSI-2226 Terminate LoanService on Account Closure notification
- Use Case: CSI-2292 Change of Insurance Operation Status behaviour - 2
- Use Case: CSI-2307 Processing AM responses on Service changes
- Use Case: CSI-2669 Cancel LoanService on Account Closure notification
- Use Case: CSI-2848 KZ - LOP support in BSL update
- Use Case: DDS requests from external systems
- Use Case: Debt calculator
- Use Case: Installment plan for REL management
- Use Case: Insurance based on AccountBalanceChange EOM event
- Use Case: Insurance based on EOM message
- Use Case: Insurance prolongation
- Use Case: Pay-off contract manually
- Use Case: Pay-off REL contract
- Use Case: Prepare documentation to sign
- Use Case: Process DisbursementMessage
- Use Case: Process TransactionMessageDto 
- Use Case: Processing a notification about credit account closure
- Use Case: Processing Account Closure notifications
- Use Case: Processing Account responses on Service changes
- Use Case: Processing disbursement confirmation message
- Use Case: Processing of first transaction notification
- Use Case: REL contract termination request
- Use Case: REL Creating Refunds on request
- Use Case: Service - Contract Service management via UI
- Use Case: Service - switch on/off
- Use Case: Transaction Supplement - Account notification processing - Use case model
- Use Case: Transaction Supplement authorization method
- Use Case: Transaction Supplement authorization/confirmation - Use case model
- Use Case: Transaction Supplement refunding - Use case model
- Use Case: Write-off REL contract
