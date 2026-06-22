---
type: Actor
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening"
domain: "Requirements Model"
element_id: 1880884
diagrams: 35
connections: 37
tags:
  - actor
  - requirements-model
---

# 👤 System event

> **Type**: Actor
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening

## 🔗 Connections (37)

- ← Association: [[{ADD}05.237 Process outgoing payment for ContractRegistrationOutPaySE]]
- ← UseCase: [[{ADD}08.605 Update CEL reward payment channel automatically (UseCase 1850694)]]
- ← Association: [[{ADD}13.074 Prepare credit limit change documents (UseCase 1877203)]]
- ← Association: [[13.206 Recreate Account Renewal Supplement documents]]
- → UseCase: [[{MOD}01.384 Finalize contract consolidation]]
- → UseCase: [[11.782 Process Insurance activation event]]
- → UseCase: [[{DEL}01.252 Evaluate Contract Service Parameters]]
- → UseCase: [[{DEL}01.712 Finish contract on service execution]]
- → UseCase: [[{DEL}05.237 Process outgoing payments for ContractRegistrationSE (UseCase 1683315)]]
- → Association: [[Process ContractSignSE]]
- → UseCase: [[{MOD}08.352 Process LoanServiceRequestRollbackSE event]]
- → Association: [[{MOD}13.416 Process Card Balance Transfer request]]
- → UseCase: [[{DEL}01.278 Register contract automatically]]
- → Association: [[{MOD}Process CashDisbursementConfirmedSE]]
- → UseCase: [[13.271 Register supplement automatically]]
- → UseCase: [[11.780 Process Insurance cancellation or termination event]]
- → UseCase: [[01.864 Generate notifications about contract securitization]]
- → UseCase: [[13.102 Prepare Transaction Supplement documents]]
- → UseCase: [[{MOD}01.587 Process ApplicationDocumentationPreparedSE for DDM]]
- → Association: [[{ADD}08.004 Check and process services on contract]]
- → Association: [[08.606 Process automatic CEL Reward]]
- → Association: [[08.611 Create request for bonus service processing (UseCase 1876352)]]
- → UseCase: [[05.236 Process outgoing payments for ContractPackageReceivedSE (UseCase 1683314)]]
- → UseCase: [[01.055 Send person photo for face recognition processing (UseCase 1821365)]]
- → Association: [[08.604 Set CEL Reward periods for contract]]
- → Association: [[Send DDM Info]]
- → Association: [[08.607 Cancel CELREW periods]]
- → UseCase: [[{MOD}13.110 Process account transaction for Transaction Supplement]]
- → UseCase: [[08.603 Update CEL reward evaluated period]]
- → UseCase: [[{MOD}05.111 Generate outgoing payment orders automatically]]
- → UseCase: [[{MOD}13.072 Create Credit limit change request for REL account]]
- → Association: [[Process ContractRegisteredSE [CLM]]]
- → UseCase: [[13.202 Prepare Account Renewal Supplement documents]]
- → UseCase: [[{MOD}03.701 Trigger sending SMS to client]]
- → UseCase: [[{DEL}01.713 Finish registered contract on service execution]]
- → UseCase: [[01.380 Prepare Contract for Consolidation]]
- → Association: [[01.711 Accept conditions for SAI contract]]

## 📊 Appears In (35 diagrams)

- Custom: PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening
- Use Case: Activate Insurance on related CL Contract disbursement
- Use Case: Activation of contract on a repayment
- Use Case: Actors
- Use Case: Card Balance Transfer request processing - Use Case Model
- Use Case: CEL Rewards 
- Use Case: CLM-6044 Activate Insurance on related CL Contract disbursement
- Use Case: Contract securitization
- Use Case: Contract supplement registration
- Use Case: ContractServiceCanceledNotification message variant
- Use Case: ContractServiceTerminatedNotification message variant
- Use Case: Credit Limit Change via messaging - Use Case model
- Use Case: CSI-1122 Use DMS in Contract Supplement registration functions
- Use Case: CSI-1740 - Update method for TransactionSupplement creation
- Use Case: CSI-2292 Change of Insurance Operation Status behaviour - 2
- Use Case: DDM Info
- Use Case: Deactivation of mandatory insurance upon standard insurance adding
- Use Case: Determine installment schedule processing
- Use Case: Determine installment schedule processing
- Use Case: Evaluation of services on system events (Java)
- Use Case: Fill in application
- Use Case: Interest Back
- Use Case: Loan consolidation - use case model
- Use Case: Payment holiday rollback
- Use Case: Process internal system events and notifications for DDMs
- Use Case: Process internal system events and notifications for outgoing payments
- Use Case: Process outgoing payments
- Use Case: Processing Contract Signed Event - Use Case Model
- Use Case: REL Account renewal support - Use Case Model
- Use Case: Replacement of standard insurance upon its cancelation or termination
- Use Case: Service - Contract Service management via UI
- Use Case: Service - switch on/off
- Use Case: SMS notification
- Use Case: Transaction Supplement authorization/confirmation - Use case model
- Use Case: Transaction Supplement documents - Use case model 
