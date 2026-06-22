---
type: Actor
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10709 (CLM-4010) Switch codelistWS, boundaryWS and countryWS to REST in BSL"
domain: "Requirements Model"
element_id: 1880869
diagrams: 53
connections: 61
tags:
  - actor
  - requirements-model
---

# 👤 Time

> **Type**: Actor
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10709 (CLM-4010) Switch codelistWS, boundaryWS and countryWS to REST in BSL

## 🔗 Connections (61)

- ← UseCase: [[{MOD}14.481 Repayment channel change to OTHER job]]
- ← Association: [[01.682 Anonymize archived temporary applications (UseCase 1750290)]]
- ← UseCase: [[{MOD}01.130 Process application sent for manual identification]]
- ← Association: [[{MOD}01.681 Invalidate offers]]
- → UseCase: [[{MOD}07.060 Process communication list file]]
- → Association: [[02.825 Delete temporary Product Offer Requests (UseCase 1820905)]]
- → UseCase: [[{MOD}01.955 Generate Contract notification message on external request]]
- → UseCase: [[01.710 Process contracts to finishing (Boundary 1880922)]]
- → UseCase: [[08.005 Apply service on contract (UseCase 1872539)]]
- → UseCase: [[{MOD}01.720 Reactivate finished contracts]]
- → UseCase: [[{MOD}01.700 Choose contracts suitable to finishing]]
- → UseCase: [[01.331 Cancel signed contract with invalid commodity (UseCase 1850492)]]
- → UseCase: [[08.409 Evaluate Checking Terms of Loan Service]]
- → Association: [[09.901 Process SNM synchronization (UseCase 1848130)]]
- → UseCase: [[05.260 Process DD confirmations import (UseCase 1863211)]]
- → UseCase: [[05.201 Pair payments to due instalment]]
- → UseCase: [[{MOD}05.160 Generate DD statement file]]
- → UseCase: [[01.445 Cancel undisbursed contract (UseCase 1850500)]]
- → Association: [[{MOD}01.475 Update overdue debt in job]]
- → Association: [[{MOD}01.089 Invalidate cross-sell limits]]
- → Association: [[11.130 Terminate finished insurance contracts (UseCase 1878975)]]
- → UseCase: [[{MOD}01.480 Payment Channel Change Check Job]]
- → UseCase: [[01.485 Publish debt full info job]]
- → UseCase: [[11.081 Prolong insurance contracts]]
- → UseCase: [[05.250 Process DD statements import (UseCase 1863189)]]
- → UseCase: [[01.393 Run Scanned files data processing batch]]
- → Association: [[08.285 Select contracts for CET evaluation (UseCase 1862249)]]
- → Association: [[08.041 Process FER automatically]]
- → Association: [[05.262 DDS process]]
- → UseCase: [[03.042 Process IS printouts generating in bulk]]
- → UseCase: [[{MOD}08.252 Process cooling-off period]]
- → UseCase: [[{MOD}01.274 Activate disbursed contracts]]
- → UseCase: [[{DEL}01.482 Update debt statistics]]
- → Association: [[{ADD}03.011 Generate daily transaction messages for BOOK NG (UseCase 1879442)]]
- → UseCase: [[08.230 Process Gift payment automatically (UseCase 1869006)]]
- → UseCase: [[01.580 Import DDM confirmation result (UseCase 1876234)]]
- → UseCase: [[05.270 Process DDS requests file (UseCase 1863188)]]
- → Association: [[{ADD}99.995 Synchronize enumaration tables]]
- → UseCase: [[{ADD}15.110 Process Contract Status Revert on external request (Boundary 1880938)]]
- → UseCase: [[01.862 Process securitization of contracts]]
- → UseCase: [[{ADD}01.562 Process contract write-off from file]]
- → UseCase: [[08.240 Process Grace period automatically (UseCase 1869019)]]
- → Association: [[08.613 Request bonus service (UseCase 1876351)]]
- → UseCase: [[01.500 Pay-off contracts from file (UseCase 1878664)]]
- → UseCase: [[01.472 Push debt catalogue to external system (UseCase 1876064)]]
- → UseCase: [[01.683 Archive dynamic links (UseCase 1453353)]]
- → Association: [[{MOD}01.540 Export DDM for confirmation]]
- → UseCase: [[08.920 Evaluate collection tool service request]]
- → UseCase: [[{ADD}01.564 Process contract write-off from external system]]
- → Association: [[01.670 Cancel contract automatically (UseCase 1850513)]]
- → UseCase: [[08.925 Cancel expired loan service requests]]
- → Association: [[05.130 Generate DD statements (UseCase 1863204)]]
- → Association: [[01.680 Delete temporary applications (UseCase 1750287)]]
- → UseCase: [[08.040 Select contracts for FER evaluation (UseCase 1879639)]]
- → UseCase: [[01.685 Hide contracts (UseCase 1750289)]]
- → UseCase: [[01.860 Process contract securitization file]]
- → UseCase: [[13.361 Cancel contract supplement automatically]]
- → UseCase: [[{MOD}05.298 Check incoming payment file for finish]]
- → Association: [[08.612 Process bonus services (UseCase 1876353)]]
- → UseCase: [[08.602 Select CEL Rewards contracts (UseCase 1850691)]]
- → Association: [[08.590 Activate Insurance Program version automatically (UseCase 1517633)]]

## 📊 Appears In (53 diagrams)

- Custom: CBL-10709 (CLM-4010) Switch codelistWS, boundaryWS and countryWS to REST in BSL
- Custom: CBL-12580 (CLM-4409) - BSL - Process Kafka notification ContractFinished
- Custom: CBL-7307 (CLM-2276) Blocking disbursement on signed contracts before finishing
- Custom: CLM-3818 - Contract registration, activation and reactivation
- Custom: CLM-3822 - New SAI - COP processing
- Use Case: Activate Insurance contract
- Use Case: Activation of contract on a repayment
- Use Case: Actors
- Use Case: Automatic import DD statements and confirmations
- Use Case: Automatic jobs
- Use Case: Cancel contract after sign
- Use Case: Cancel contract automatically
- Use Case: Cancel contract supplement automatically
- Use Case: Cancellation of expired loan service requests
- Use Case: Cancellation of Insurance contract options
- Use Case: CEL Rewards 
- Use Case: Checking Terms of Loan Service
- Use Case: Client identification
- Use Case: Collection tool requests evaluation
- Use Case: Contract debt tracking
- Use Case: Contract Early Termination processing
- Use Case: Contract reactivation
- Use Case: Contract securitization
- Use Case: Cooling-off period processing
- Use Case: Daily ISIR generating for BOOK NG
- Use Case: Data prepared notification - UC model
- Use Case: DDM confirmation
- Use Case: DDS requests from external systems
- Use Case: DDS requests via rabbit MQ
- Use Case: Direct Debit statements
- Use Case: Evaluation of services on system events (Java)
- Use Case: Financial partnership
- Use Case: Full early repayment processing
- Use Case: Generating IS printouts
- Use Case: Generating IS printouts
- Use Case: Gift payment processing
- Use Case: Grace period processing
- Use Case: Import list of communication
- Use Case: Insurance Contract Management
- Use Case: Insurance prolongation
- Use Case: Interest Back
- Use Case: Invalidate cross-sell limit
- Use Case: Invalidate offers
- Use Case: Manage Insurance Program
- Use Case: Pair prepayments to due instalments
- Use Case: Payment Channel Change Check Job
- Use Case: Pay-off contracts from file
- Use Case: Product Calculator for External system - Internal
- Use Case: Sending Contract notification on request
- Use Case: Synchronization of SNM data
- Use Case: Termination of Insurance contract options
- Use Case: Use Case model
- Use Case: Use case Model
