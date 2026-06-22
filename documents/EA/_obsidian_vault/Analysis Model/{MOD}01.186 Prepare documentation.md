---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Access Rights"
domain: "Analysis Model"
element_id: 1878513
diagrams: 18
connections: 39
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.186 Prepare documentation

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Access Rights

## 📝 Notes

This technical use case describes preparing of credit documentation for print. The following is done in the scope of this UC:

	
- Validation of existence of repayment, reward and disbursement channels


	
- for consolidating contract - validation of total consolidation amount and disbursement amount against the consolidation service settings
	
- creating of documents needed for credit documentation (if they do not exist)


	
- for CEL application - generating installment schedule
	
- for REL application - creation a revolving account in the card management (CaBus)
	
- calculation of parameters for assigned services
	
- setting DDM validity
	
- commodity validations
	
- creating insurance contracts (if any)
	
- creating credit documentation printouts (PDFs) by help of the Print Server


	
- storing of document printouts to the Document Archive (Cabinet)
	
- getting application financial partnership - Joint Financing Scheme (JFS) - if enabled

## 🔗 Connections (37)

- ← Dependency: [[FinancialPartnershipService_v2 (Interface 1623665)]]
- ← Dependency: [[FinancialPartnershipService_v3 (Interface 1624720)]]
- ← UseCase: [[Print Server (Actor 1880896)]]
- → Dependency: [[Determinate DDM valid to for contract]]
- → Dependency: [[Generate content of agreement]]
- → Dependency: [[Determinate DDM valid from for contract]]
- → Dependency: [[Validate application payment channel]]
- → Dependency: [[{DEL}Billing day determination]]
- → Dependency: [[Recalculate Annuity in OFP]]
- → Dependency: [[Find internal refinanced contracts and get their consolidation amounts]]
- → Dependency: [[Calculation of Presented IR for Product Offer]]
- → Dependency: [[Validate application DDM]]
- → Dependency: [[Update contract financial partnership algorithm]]
- → Dependency: [[Update contract financial partnership algorithm]]
- → Dependency: [[Calculation of financial parameters for consolidation]]
- → Realisation: [[{ADD}01.186 Prepare documentation]]
- → Dependency: [[Validate IMEI internally]]
- → Dependency: [[Validate application commodity]]
- → Dependency: [[Disbursement amount validation rule]]
- → Dependency: [[Select application commodities for IMEI validation]]
- → Dependency: [[Get application payment channel]]
- → Dependency: [[Get contract documentation documents]]
- → Dependency: [[{MOD}Calculation of Loan Service parameters]]
- → Dependency: [[Create insurance contracts for insurance services]]
- → Dependency: [[Select user based on SSO token]]
- ← UseCase «include»: [[01.182 Prepare documentation manually]]
- → Dependency: [[{MOD}Evaluate First Installment Due Date]]
- → Dependency: [[Update application DDM]]
- → UseCase «include»: [[03.010 Generate installment schedule (UseCase 1879445)]]
- → Dependency: [[Set contract default JFS partnership algorithm]]
- → Dependency: [[Total Payment Per Credit]]
- → Dependency: [[Consolidation amount validation rule]]
- → Dependency: [[Get all application DDM]]
- → Dependency: [[DDM attributes validation]]
- ← UseCase «include»: [[01.096 Prepare documentation externally (UseCase 1879294)]]
- ← UseCase: [[CaBus-AM]]
- ← UseCase: [[CaBus-CMS]]

## 📊 Appears In (18 diagrams)

- Custom: Access Rights
- Custom: CSI-608 Adding InsuranceProgram identifier into InsuranceContract
- Custom: LOR-10227 Income Collection for TS Sourcing
- Custom: LOR-8680 RELIP cleanup - prepare and sign UCs (API+UI)
- Custom: LOR-8869 Removing of getBillingDayFromAM from Prepare documentation flow
- Custom: LOR-9002 Generate Installment schedule via IS module
- Custom: LOR-9003 Store generated Installment schedule in IS module
- Custom: LOR-9186 Upload contractual documentation via DMS
- Custom: LOR-9342 - Validate direct debit mandates via DDM REST API
- Custom: LOR-9461 Prepare agreement: Recalculate fee
- Custom: LOR-9532 Expiration of Virtual Limit Contracts - Solution as required by Regulation
- Logical: FinancialPartnershipService_v2
- Logical: FinancialPartnershipService_v3
- Use Case: Create and Sign Insurance contract
- Use Case: Financial partnership
- Use Case: Insurance Contract Management
- Use Case: OVERVIEW - Installment Schedule
- Use Case: Prepare documentation to sign
