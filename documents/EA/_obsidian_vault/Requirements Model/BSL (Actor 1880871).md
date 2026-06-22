---
type: Actor
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10709 (CLM-4010) Switch codelistWS, boundaryWS and countryWS to REST in BSL"
domain: "Requirements Model"
element_id: 1880871
diagrams: 16
connections: 28
tags:
  - actor
  - requirements-model
---

# 👤 BSL

> **Type**: Actor
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10709 (CLM-4010) Switch codelistWS, boundaryWS and countryWS to REST in BSL

## 🔗 Connections (28)

- ← UseCase: [[{MOD}14.423 Cancel DDM via WS]]
- ← UseCase: [[{MOD}14.421 Create DDM via WS]]
- ← UseCase: [[14.661 Change repayment channel via WS (UseCase 1862015)]]
- ← UseCase: [[{MOD}14.422 Update DDM via WS]]
- → Association: [[{ADD}99.994 Synchronize enumaration tables]]
- → UseCase: [[{ADD}14.424 Change DDM status via WS (UseCase 1862014)]]
- → UseCase: [[05.601 Process settlements of payment on POS file]]
- → Association: [[Process ContractActivated]]
- → Association: [[Process ContractWrittenOff]]
- → UseCase: [[05.700 Process TransactionMessageDto]]
- → Association: [[{ADD}14.426 Update DDM Document]]
- → UseCase: [[{ADD}14.425 Calculate DDM limit via WS (UseCase 1862012)]]
- → UseCase: [[{MOD}05.701 Process DisbursementMessage]]
- → UseCase: [[01.582 - Resume DDM on request (UseCase 1331738)]]
- → UseCase: [[OSB Get communication history]]
- → UseCase: [[01.581 - Suspend DDM on request (UseCase 1331735)]]
- → UseCase: [[External Reference (Boundary 1855322)]]
- → UseCase: [[{ADD}01.588 - Get DDM Data Exchange ID (UseCase 1862017)]]
- → Association: [[{MOD}Process CommunicationRecordChangedSE]]
- → Association: [[Process ContractCancelled]]
- → Association: [[Process ContractPaidOff]]
- → Association: [[Send Kafka Message]]
- → Association: [[Process ContractSigned]]
- → Association: [[Process ContractFinished]]
- → UseCase: [[05.600 Import settlements of payment on POS file (Boundary 1880917)]]
- → UseCase: [[01.583 - Get DDM by CUID]]
- → Sequence: [[External system (Actor 1880866)]]
- ← Sequence: [[External system (Actor 1880866)]]

## 📊 Appears In (16 diagrams)

- Custom: CBL-10709 (CLM-4010) Switch codelistWS, boundaryWS and countryWS to REST in BSL
- Custom: CLM-6037 - BSL - Contract cancellation update
- Logical: CRM - communication - OSB
- Sequence: Import of Product OfferLimits - communication scheme
- Use Case: Actors
- Use Case: Cancel contract after sign
- Use Case: Cancel contract automatically
- Use Case: Cancel contract manually
- Use Case: Cancel contract on external request
- Use Case: DDM via WS
- Use Case: Messages processing
- Use Case: Process DisbursementMessage
- Use Case: Process TransactionMessageDto 
- Use Case: Send Kafka Message
- Use Case: Suspend and resume DDM
- Use Case: Use case Model
