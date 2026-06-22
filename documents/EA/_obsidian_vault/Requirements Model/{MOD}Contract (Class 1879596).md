---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10294 (CLM-3808) Standalone Insurance as Installment"
domain: "Requirements Model"
element_id: 1879596
diagrams: 65
connections: 71
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}Contract

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10294 (CLM-3808) Standalone Insurance as Installment

## 📝 Notes

Contract is one of the core and most important entities in BSL and whole HoSel suite. At the moment it combines a representation of a contract between a customer and local Home Credit company, a representation of a loan account for CEL and SAI product types and a representation of an application that precedes contract (basically a contract with status before Signed is in fact an application). Code of a contract (also called contract number) is one of the key suite-wide identifier that many entities in several systems depend on. Contract holds a combination of information mostly from the application phase and the contract registration phase. The entity is historized on every change except for registration status change and contract status or sub-status change because these changes are persisted in standalone entities.

## 🔗 Connections (69)

- ← Association: [[ContractSecuritization]]
- ← Dependency: [[UnblockAccountRequest]]
- ← Dependency: [[GetBlockingReasonsRequest]]
- ← Dependency: [[BlockAccountRequest]]
- ← Dependency: [[Extended Property Value]]
- ← Association: [[Communication Record]]
- ← Association: [[Party (Class 1736183)]]
- ← Association: [[Outgoing Payment]]
- ← Association: [[Contract Sale (Class 1851448)]]
- ← Dependency: [[Insurance Contract (Class 1852795)]]
- ← Usage: [[Credit Limit Change Offer (Class 1861979)]]
- ← Usage: [[Refund disbursement method change request]]
- ← Dependency: [[Refund Item]]
- ← Association: [[Loan Service Request (Class 1868549)]]
- ← Association: [[DDM (Class 1869699)]]
- ← Association: [[Incoming Payment]]
- ← Association: [[{ADD}Debt Full Info Publishing Queue]]
- ← Dependency: [[Refund Item (Class 1877690)]]
- ← Association: [[Offer Financial Parameter]]
- ← Aggregation: [[Business Event]]
- ← Aggregation: [[Registration Status Transition]]
- ← Aggregation: [[Application Filling Queue]]
- → Dependency: [[Contract Status Type (Class 1880196)]]
- → Association: [[{MOD}Temporary Application]]
- → Association: [[Contract Package Item]]
- → Association: [[{MOD}Product]]
- → Dependency: [[Registration Status]]
- ← Aggregation: [[Contract Party Role]]
- ← Aggregation: [[Registration Status Transition (Boundary 1879612)]]
- ← Aggregation: [[Account Transaction]]
- ← Aggregation: [[Penalty Over Limit]]
- ← Aggregation «time»: [[Installment (Class 1857187)]]
- → Association: [[Debt Statistics]]
- → Dependency: [[Contract Negotiation Process Type]]
- ← Aggregation: [[External Identifier]]
- → Dependency: [[Additional Information Type]]
- ← Aggregation: [[Contract Accrued Income]]
- ← Aggregation: [[Debt Catalogue]]
- → Dependency: [[ConditionsAccepted]]
- ← Aggregation: [[Contract Service (Class 1868570)]]
- → Dependency: [[Extended Property Group]]
- ← Aggregation: [[Extended Information]]
- → Dependency: [[Sales Area]]
- → Association: [[{MOD}Client Snapshot]]
- ← Aggregation: [[Security Question]]
- ← Aggregation: [[Contract Commodity (Class 1879600)]]
- → Dependency: [[Internal Code Type]]
- ← Aggregation: [[Contract Supplement (Class 1862126)]]
- → Dependency: [[Contract SubStatus]]
- → Dependency: [[Internal Code Type]]
- ← Aggregation: [[Contract Document (Class 1879592)]]
- ← Aggregation: [[Scoring (Class 1879590)]]
- ← Aggregation: [[Contract to Payment Channel]]
- ← Association: [[Contract SubStatus Transitions]]
- ← Aggregation: [[Contract Ownership]]
- ← Aggregation: [[Contract Bank Account]]
- ← Aggregation: [[Contract structured parameter]]
- ← Association: [[Contract Status Transition (Class 1879574)]]
- ← Aggregation: [[Contract to DDM]]
- → Association: [[Agreement (Class 1879570)]]
- ← Aggregation: [[Client Possession]]
- ← Aggregation: [[Contract Status Transition Request (Class 1879566)]]
- ← Aggregation: [[{MOD}Refinanced Contract]]
- ← Aggregation: [[User Statistics]]
- ← Aggregation: [[Financial Parameters (Class 1879562)]]
- ← Aggregation: [[{ADD}Contract to Applicant]]
- → Aggregation: [[Deal (Class 1879557)]]
- → Association: [[Ticket (Boundary 1879613)]]
- ← Dependency: [[External Reference (Boundary 1881015)]]

## 📊 Appears In (65 diagrams)

- Custom: CLM-3817 - New SAI - Contract signing
- Custom: LOR-11123 BRVN-425 - API Update "Process type" filed for MW CD
- Logical: Account transaction - Logical data model
- Logical: Application Filling Queue
- Logical: Business event - Logical data model
- Logical: Card Balance Transfer Supplement - Logical Domain Model
- Logical: Client management
- Logical: Collection tool operation domains
- Logical: Common - Extended Properties
- Logical: Communication
- Logical: Contract
- Logical: Contract - Applicant
- Logical: Contract - Commodity
- Logical: Contract - DDM
- Logical: Contract - Document
- Logical: Contract - Financial parameters
- Logical: Contract - Party roles
- Logical: Contract - Services
- Logical: Contract - Status
- Logical: Contract accrued income domain model
- Logical: Contract Commodity
- Logical: Contract debt tracking
- Logical: Contract financial partnership - Logical data model
- Logical: Contract Management
- Logical: Contract ownership
- Logical: Contract registration
- Logical: Contract sale - Domain model
- Logical: Contract securitization - LDM
- Logical: Contract Service
- Logical: Contract structured parameter
- Logical: Contract Supplement - Logical Data Model
- Logical: Contract Supplements
- Logical: Contract tracking
- Logical: ContractSystemEvent schema
- Logical: ContractSystemEvent schema
- Logical: COS - LDM changes
- Logical: COS - LDM changes
- Logical: Credit limit change offer
- Logical: CSI-1881 Update of the Contract Service domain
- Logical: Direct Debit Statements
- Logical: Early repayment request
- Logical: Extended Information - Core
- Logical: Fees and Penalties in context
- Logical: Incoming payments
- Logical: Installment Schedule
- Logical: Insurance Commodity domain
- Logical: Insurance Contract
- Logical: Loan consolidation - Logical Data Model
- Logical: Loan restructuring request domain
- Logical: Loan Service Request domain
- Logical: Logical Data Model
- Logical: Offer Financial Parameters
- Logical: Offer Service
- Logical: Outgoing Payment Orders
- Logical: Outgoing Payments
- Logical: Party
- Logical: Payment Channels
- Logical: Penalty Over Limit
- Logical: Refunds domain model
- Logical: Request for pay-off (REL)
- Logical: Salesroom
- Logical: Scoring
- Logical: Temporary Application - Financial Parameters
- Logical: Temporary Application - overview
- Logical: Transaction Supplement domain - Logical data model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contract Type | Product Type |  |
| Credit Account Number | string |  |
| Payment Status | Contract Payment Status | ALLOWED |
| Additional Information | Additional Information Type |  |
| Contract Code | string |  |
| Sales Comment | Additional Information Type |  |
| Conditions Accepted | Conditions Accepted | N |
| Last Change Date | datetime |  |
| Prepared to Sign Date | datetime |  |
| Sent to Evaluation Date | datetime |  |
| Sent to Identification Date | datetime |  |
| Internal code | Additional Information Type |  |
| Internal code2 | Additional Information Type |  |
| Loan Purpose | Additional Information Type |  |
| Preferred Payment Day | integer |  |
| RegistrationStatus | Registration Status | NRR |
| Sales Agent Phone Number | Phone Number |  |
| Signed on back office | boolean |  |
| Status | Contract Status Type |  |
| Substatus | Contract SubStatus |  |
| X-sell Offer Code | Additional Information Type |  |
| IBAN | string |  |
| Sales Area Code | Additional Information Type |  |
| Created Externally | boolean | false |
| Created remotely | boolean |  |
| Consolidating | boolean |  |
| Mystery shopping | boolean | false |
| Salesroom Code | string |  |
| X-sell Offer Requested | boolean |  |
| Signed on Salesroom Code | string |  |
| {ADD}Archiving Progress | boolean |  |
| Hidden status | boolean | false |
| {ADD}Has Installments | boolean |  |
| Contract processing type | string |  |
| Signed Date | datetime |  |
