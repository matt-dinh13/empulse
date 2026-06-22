---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Access Rights"
domain: "Analysis Model"
element_id: 1878510
diagrams: 17
connections: 30
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.187 Sign contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Access Rights

## 📝 Notes

This technical use case describes steps performed for contract to be signed

	
- set contract as well as all related insurance contracts (if any) to status Signed.
	
- for consolidating contract - check that the consolidation amount for each to-be-consolidated contract has not changed
	
- fix contract financial parameters
	
- for CEL and SAI contract - fix the installment schedule
	
- for REL contract 
- activate the revolving account in the account management as well as sends initial transactions if any
- confirm card in the card management 
- activate loyalty account in loyalty management if a loyalty service is arranged


	
- generate disbursement payment by payment channel setting (to the retailer, the client, or the chosen partner bank) if the salesroom where the contract is originated is allowed for this event
	
- generate payment to the insurance company if the insurance service is allowed for this event
	
- set the contract debt tracking
	
- set the contract owner

## 🔗 Connections (29)

- ← UseCase «include»: [[01.180 Sign contract manually (UseCase 1878503)]]
- → Dependency: [[01.006 Delete file from document archive (UseCase 1851468)]]
- → Realisation: [[01.187 Sign contract]]
- → Dependency: [[{MOD}Sign contract finalization]]
- → Dependency: [[Validate IMEI internally]]
- → Dependency: [[Get contract documentation documents]]
- → Dependency: [[{MOD}Update data in contract related structures]]
- → Dependency: [[Document attribute validation for sign]]
- → Dependency: [[Validate card account status]]
- → Dependency: [[Validate application payment channel]]
- → Realisation: [[Requirement #2 Modification transaction authorization_confirmation calling for REL contracts]]
- → Realisation: [[REQ#1 - Adding subvention into ActivateAccount call]]
- → Dependency: [[Initial transaction creation rule]]
- → Dependency: [[Get application payment channel]]
- → Dependency: [[DDM attributes validation]]
- → Dependency: [[Select user based on SSO token]]
- → Dependency: [[Create business event]]
- → Realisation: [[Requirement #3 - Call LAP in Sign contract externally]]
- → Dependency: [[Paperless salesroom]]
- → Dependency «invokes»: [[01.184 Process ContractSignTransactionsSE event (UseCase 1878522)]]
- → Dependency: [[Select application commodities for IMEI validation]]
- → Dependency: [[Generate content of agreement]]
- → Dependency: [[{ADD}Determine whether RELIP or Financing Scheme is used]]
- → Dependency: [[Validate application DDM]]
- → Dependency: [[Find internal refinanced contracts and get their consolidation amounts]]
- ← UseCase «include»: [[{MOD}01.099 Sign contract externally]]
- ← UseCase: [[CaBus-AM]]
- ← UseCase: [[Loyalty program]]
- ← UseCase: [[CaBus-CMS]]

## 📊 Appears In (17 diagrams)

- Custom: Access Rights
- Custom: CBL-16722 (CLM-4661) - BSL - start to send Kafka ContractEvent on contract changes
- Custom: CBL-2621 (CLM-1276) Financing schemes IV - Subventions for REL
- Custom: CBL-6340 (CLM-3148) Support two subvention rates in Financial Parameters and skip commodity validation with flag
- Custom: CBL-7202 (CLM-2614) Subvention scheme for ICD/IPD transaction
- Custom: CBL-9299 (CLM-2895) Entrustment Lending support in CLM
- Custom: CBL-9350 (CLM-2872) Salary project extension - employee flag update and usage
- Custom: CBL-9811 (CLM-3001)[COVID19] Loan consolidation for ID
- Custom: CLM-3817 - New SAI - Contract signing
- Custom: CLM-6205 Condition accepted for related SAI contract
- Custom: CLM-819 (CBL-860) Unification reimbursement from credit cards
- Custom: LOR-11238 (BRPH-2104)  New Zeebe workflow for selfie esign updated signature logic
- Custom: LOR-9342 - Validate direct debit mandates via DDM REST API
- Custom: REQ #1 - Migrate full person update to PIF REST
- Use Case: Client update
- Use Case: Contract signing
- Use Case: Insurance Contract Management
